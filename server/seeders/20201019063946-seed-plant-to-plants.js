'use strict';
const plants = require('../db.json')
plants.forEach(elem => {
  elem.createdAt = new Date()
  elem.updatedAt = new Date()
})
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Plants', plants, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Plants', null, {})
  }
};
