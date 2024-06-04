'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Employee.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nik: {
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    start_date: {
      allowNull: false,
      type: DataTypes.DATE
    },
    end_date: {
      allowNull: false,
      type: DataTypes.DATE
    },
    created_by: {
      type: DataTypes.STRING
    },
    updated_by: {
      type: DataTypes.STRING
    },
    created_at: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updated_at: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Employee',
    tableName: 'employee',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  return Employee;
};