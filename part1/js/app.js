function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(json => console.log(json));
}

function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(user => console.log(user))
}

function loadUsers2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displaydata(data));
}

function displaydata(data){
    console.log(data);
}