// app/models/userModel.js
let users = [];
const User = {
  findAll: () => users,
  create: (name, email, imgLink, price, number) => {
    const newUser = { id: Date.now(), name, email, imgLink, price, number};
    users.push(newUser);
    return newUser;
  },
  findById: (id) => users.find(u => u.id === parseInt(id)),
  delete: (id) => {
    users = users.filter(u => u.id !== parseInt(id));
  }
};
module.exports = User;