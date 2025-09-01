// const url = "https://crudcrud.com/api/d042e4469ddb4a40831a7548796acd85/todoData"
const url = "https://crudcrud.com/api/d042e4469ddb4a40831a7548796acd85/todoData"
const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");
const putBtn = document.getElementById("put-btn");
const deleteBtn = document.getElementById("delete-btn");

const editId= "/68b58edfa7497b03e86b2e49";

getBtn.addEventListener("click", getTodos);
postBtn.addEventListener("click", postTodo);
putBtn.addEventListener("click", putTodo);
deleteBtn.addEventListener("click", deleteTodo);
function getTodos() {
  // Write your code here
  axios.get(url)
    .then(result => {
    console.log(result.data);
    })
    .catch(err => console.log(err));
}
function postTodo() {
  // Write your code here
  axios.post(url,
    {
      title: 'Learn Axios',
      completed: false
    }
  )
    .then(result => {
      console.log(result.data)
    })
    .catch(err => {
      console.log(err);
    });
}

function putTodo() {
  // Write your code here
  axios.put(url+editId, {
    title: "Learn Axios",
    completed: true
  })
    .then(result => {
      console.log(result.data)
    })
    .catch(err => {
      console.log(err);
    });
}

function deleteTodo() {
  // Write your code here
  axios.delete(url + "/68b590fea7497b03e86b2e51")
    .then(result => {
      console.log(result.data)
    })
    .catch(err => {
      console.log(err);
    });
}
