// app/models/userModel.js
let users = [];
const Una = {
  findAll: () => users,
  create: (name, email, imgLink) => {
    const newUser = { id: Date.now(), name, email, imgLink };
    users.push(newUser);
    return newUser;
  },
  findById: (id) => users.find(u => u.id === parseInt(id)),
  delete: (id) => {
    users = users.filter(u => u.id !== parseInt(id));
  }
};
class User {
  name;
  email;
  imgLink;

  User(name, email, imgLink){
    this.name = name;
    this.email = email;
    this.imgLink = imgLink;
  }

  
}
module.exports = User;