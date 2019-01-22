const glob = require('glob');
const path = require('path');

const basename = path.basename(__filename);

module.exports = (db) => {
    const models = {};
    const files = glob.sync('**/*.model.js', {
        cwd: `${process.cwd()}/src`
    });

    files.forEach((file) => {
        if (file !== basename) {
            const model = db.import(path.join(__dirname, file));
            models[model.name] = model;
        }
    });

    Object.keys(models).forEach((modelName) => {
        if (models[modelName].associate) {
            models[modelName].associate(models);
        }
    });

    models.sequelize = db;
    return models;
};