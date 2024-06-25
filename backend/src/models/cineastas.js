import { DataTypes } from "sequelize";
import sequelize from "../../config/database.js";
import Paises from "./paises.js";

const Cineasta = sequelize.define(
  "Cineasta",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    apellido: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    fecha_nacimiento: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    fecha_fallecimiento: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    bibliografia: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    imagen: {
      type: DataTypes.BLOB,
      allowNull: true,
    },
    nacionalidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Paises,
        key: "id",
      },
    },
    nacionalidad2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Paises,
        key: "id",
      },
    },
  },
  {
    tableName: "Cineastas",
    timestamps: false,
  }
);

export default Cineasta;