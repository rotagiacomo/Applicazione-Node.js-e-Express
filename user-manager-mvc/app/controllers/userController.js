// app/controllers/userController.js
const User = require('../models/userModel');
exports.home = (req, res) => { //request ciò che viene inviato dal form response cio' che viene ritornato dalla chiamata
  res.render('index');
};
exports.listUsers = (req, res) => {
  const users = User.findAll(); //prende dati dal model
  res.render('users', { users }); //li mostra con la view
};
exports.createUser = (req, res) => {
  const { name, email, imgLink } = req.body;
  User.create(name, email, imgLink);
  res.redirect('/users');
};
exports.deleteUser = (req, res) => {
  const { id } = req.params; //parametri url poi da li tolgo id, :id in routes 
  User.delete(id);
  res.redirect('/users');
};