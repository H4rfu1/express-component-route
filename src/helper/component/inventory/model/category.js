const {
  sequelize,
  orm: { DataTypes }
} = require('../../../../state')

module.exports = sequelize.define(
  'category',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    freezeTableName: true
  }
)
