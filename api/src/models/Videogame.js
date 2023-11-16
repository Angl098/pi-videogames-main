const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id:{
      // type:DataTypes.INTEGER,
      type:DataTypes.UUID,
      primaryKey:true,
      defaultValue:DataTypes.UUIDV4,
      // allowNull:false,
      // autoIncrement:true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type:DataTypes.TEXT,
      allowNull: false,
    },
    platform: {
      type: DataTypes.ENUM('PC', 'PlayStation', 'Xbox', 'Nintento', 'Android'),
      allowNull: false,
    },
    image: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    release: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull:false,
    }
  },
  { timestamps: true })
};
