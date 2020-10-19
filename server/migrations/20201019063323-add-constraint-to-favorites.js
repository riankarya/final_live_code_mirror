'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addConstraint("Favorites", {
        fields: ["UserId"],
        type: "foreign key",
        name: "custom_fkey_UserId",
        references: {
          table: "Users",
          field: "id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      }),
      queryInterface.addConstraint("Favorites", {
        fields: ["PlantId"],
        type: "foreign key",
        name: "custom_fkey_PlantId",
        references: {
          table: "Plants",
          field: "id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      })
    ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeConstraint("Favorites", "UserId"),
      queryInterface.removeConstraint("Favorites", "PlantId")
    ])
  }
};
