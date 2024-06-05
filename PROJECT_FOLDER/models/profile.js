'use strict';
const {
  Model
} = require('sequelize');
const employee = require('./employee');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        Profile.belongsTo(models.Employee, {
            foreignKey: 'employee_id',
            as: 'employee'
        });
    }
  }
  Profile.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,   
        type: DataTypes.INTEGER
    },
    employee_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: employee,
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    place_of_birth: {
        type: DataTypes.STRING(255)
    },
    date_of_birth: {
        type: DataTypes.DATEONLY
    },
    gender: {
        type: DataTypes.ENUM(['Laki-Laki', 'Perempuan']),
        defaultValue:'Laki-Laki'
    },
    is_married: {
        type: DataTypes.BOOLEAN,
        defaultValue:false
    },
    prof_pict: {
        type: DataTypes.STRING(255),
        defaultValue:false
    },
    created_by: {
        type: DataTypes.STRING
    },
    updated_by: {
        type: DataTypes.STRING
    },
    created_at: {
        allowNull: false,
        type: DataTypes.DATEONLY
    },
    updated_at: {
        allowNull: false,
        type: DataTypes.DATEONLY
    }
  }, {
    sequelize,
    modelName: 'Profile',
    tableName: 'employee_profile',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  return Profile;
};