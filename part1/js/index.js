function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => loadData(data))
}

function loadData(data){
    const liParent = document.getElementById('ul-list')
    for(const user of data){
        const li = document.createElement('li');
        // console.log(user.name)
        li.innerText = user.name;
        liParent.appendChild(li);
    }
}