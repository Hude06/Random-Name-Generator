#!/usr/bin/env node
const inquirer = require("inquirer")
var BoyNames = ['Josh', 'Jude', 'Jesse', 'Ronnie', 'Trevin', 'Hugo', 'Eli', 'Eric', 'Liam', 'Noah',];
var LastNames = ['Gonzalez', 'Hill', 'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller']
var GirlNames = ['Emma', 'Olivia', 'Charlotte', 'Amelia', 'Ava', 'Sophia', 'Isabella', 'Mia']
inquirer
  .prompt([
    {
      name: "user_name",
      type: "input",
      message: "Do you want a girl name or boy name",
    },
  ])
  .then((answer) => {
    if (answer.user_name.toLowerCase() === 'boy') {
        var Boyname = BoyNames[Math.floor(Math.random() * BoyNames.length)];
        var LastName = LastNames[Math.floor(Math.random() * LastNames.length)];
        let name = Boyname + ' ' + LastName 
        console.log('Your Boy name is, ' + name)

    }
    if (answer.user_name.toLowerCase() === 'girl') {
        var Girlname = GirlNames[Math.floor(Math.random() * GirlNames.length)];
        var LastName = LastNames[Math.floor(Math.random() * LastNames.length)];
        let name = Girlname + ' ' + LastName 
        console.log('Your Girl name is, ' + name)

    }



});