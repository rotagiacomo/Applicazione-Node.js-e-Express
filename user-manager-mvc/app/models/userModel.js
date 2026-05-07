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
  },
  addOne: (id) => {
    for(let i = 0; i<users.length; i++){
      if(users[i].id == parseInt(id)){
        users[i].number = users[i].number+1;
      }
    }
  },
  removeOne: (id) => {
    for(let i=0; i<users.length; i++){
      if(users[i].id == parseInt(id)){
        number = users[i].number;
        if(number > 0){
          users[i].number = number-1;
        }
      }
    }
  },
};
module.exports = User;