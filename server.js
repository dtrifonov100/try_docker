const express = require('express');
const app = express();
const {DataTypes, Model } = require('sequelize');
const {sequelize} = require('./database/database');

const PORT = 3000;

const models = async () => {
  class User extends Model {}
  User.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING
      // allowNull defaults to true
    },
    // createdAt: {
    //   defaultValue: Date.now(),
    //   type: DataTypes.timestamp
    // }
  }, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    tableName: 'users',
    modelName: 'User' // We need to choose the model name
  });
  await User.sync({ force: true });
  // SEED
  const userCount = await User.count();
  if (userCount === 0) {
    User.create({
      name: 'petya',
      email: 'test@mail.com'
    })
  }
  console.log();
  app.get('/', async (req, res) => {
    console.log(req.url);
    res.status(200).json({
      success: true,
      a:5
    })
  });
  app.get('/users', async (req, res) => {
    const users = await User.findAll();
    console.log(req.url);
    res.status(200).json({
      success: true,
      users,
    })
  });
  app.post('/users', async (req, res) => {
    const user = await User.create({
      name: 'Dima',
      email: 'test_2@mail.com'
    });
    res.status(200).json({
      success: true,
      user,
    })
  });
}
models();

// the defined model is the class itself
// console.log(User === sequelize.models.User); // true
const start = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
start();
app.listen(PORT, () => console.log(`SERVER NODE JS PORT ${PORT}`))
