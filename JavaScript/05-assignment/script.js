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

const person = {
  firstName: 'keshav',
  lastName: 'sarkar',
}
function printPersonFullName(){
  console.log(this.firstName + ' ' + this.lastName);
}
function printPersonAge(age){
  console.log(this.firstName + ' is ' + age +' years old!');
}
printPersonFullName.call(person);
printPersonAge.call(person, 25);
