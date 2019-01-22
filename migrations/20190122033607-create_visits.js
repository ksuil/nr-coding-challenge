module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('visits', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER.UNSIGNED
    },
    url: {
      type: Sequelize.STRING,
      unique: true
    },
    hits: {
      type: Sequelize.INTEGER.UNSIGNED,
      defaultValue: 0
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  })
};
