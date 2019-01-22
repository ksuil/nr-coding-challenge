module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('visit', {
        url: {
            type: DataTypes.STRING, 
            allowNull: false,
            unique: true
        },
        hits: {
            type: DataTypes.INTEGER.UNSIGNED,
            defaultValue: 0
        }
    });

    return model;
}