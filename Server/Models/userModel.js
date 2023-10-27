const db = require('../server.js');

const User = {};

User.create = (firstname, lastname, username, email, password, confirmpassword) => {
   
    db.pool.query(
      'INSERT INTO users(firstname, lastname, username, email, password, confirmpassword) VALUES($1, $2, $3, $4, $5, $6)',
      [firstname, lastname, username, email, password, confirmpassword]

    );
  };

module.exports = User;
