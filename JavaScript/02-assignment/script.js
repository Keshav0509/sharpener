// Question 2:
// function abc() {
//   console.log(a);
// }
// var a = 7;
// abc();


// Question 3:
// function abc() {
//   console.log(a);
// }
// abc();
// var a = 7;


// Question 4:
// function outerfunction() {
//   console.log(a);
//   var c = 10;
//   innerfunction();
//   function innerfunction() {
//     console.log(b);
//     console.log(c);
//   }
// }
// var a = 7;
// var b =3
// outerfunction(); // output:


// Question 5:
// function outerfunction() {
//   console.log(a);
//   var a = 10;
//   innerfunction();
//   function innerfunction() {
//     console.log(a);
//     console.log(window.a);
//     console.log(this.a)
//   }
// }
// var a = 7;
// var b =3
// outerfunction(); // output: 7 7 7 7