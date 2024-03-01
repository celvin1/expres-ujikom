'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class informasi extends Model {
    static associate(models) {
      // define association here
    }
  }

  informasi.init({
    judul: DataTypes.STRING,
    description: DataTypes.STRING,
    gambar: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Informasi', // Mengubah modelName menjadi 'Informasi'
  });

  return informasi;
};