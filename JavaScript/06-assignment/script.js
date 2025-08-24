document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const toggleBtn = document.getElementById('mode-toggle');

  // Load saved mode or default to light mode
  const savedMode = localStorage.getItem('themeMode');
  if (savedMode) {
    body.classList.add(savedMode);
    toggleBtn.textContent = savedMode === 'dark-mode' ? '🌙' : '☀';
    // if (savedMode === 'dark-mode') {
    //   toggleBtn.textContent = 'Toggle Light Mode';
    // }
  }

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');

    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('themeMode', isDarkMode ? 'dark-mode' : 'light-mode');
    // toggleBtn.textContent = isDarkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode';
    toggleBtn.textContent = isDarkMode ? '🌙' : '☀';
  });
});


// Function Statement
// Function Expression
// Function Declaration
// Anonymous Function
// Named Function Expression
// Difference Between Parameter And Arguments ?

// First Class Functions
// example 1:
// function myFunction(param1) {
//   console.log(param1);
// }
// myFunction(function() {
//   console.log("Hello, World!");
// }); // output: [Function (anonymous)]

// example 2:
// function myFunction(param1) {
//   return param1;
// }
// console.log(myFunction(function(){
//   console.log("Hello, World!");
// })); // output: [Function (anonymous)]

// // example 3:
// function myFunction(param1) {
//   return param1;
// }
// function anotherFunction() {
//   console.log("Hello, World!");
// }
// console.log(myFunction(anotherFunction)); // output: Hello, World!

// Arrow Functions

