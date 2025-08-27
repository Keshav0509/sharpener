window.addEventListener('DOMContentLoaded', console.log('DOM IS LOADED'));

document.addEventListener('DOMContentLoaded',()=> {
  console.log('DOM IS LOADED'); 
  console.log('by call back function, document.addEventListener')
});

window.addEventListener('DOMContentLoaded', console.log('DOM IS LOADED'));

document.addEventListener('DOMContentLoaded',()=> {
  console.log('DOM IS LOADED'); 
  console.log('by call back function, document.addEventListener')
});

document.body.innerHTML = (
  'hello world'
);