function ClickMaro(){
    fetch('https://jsonplaceholder.typicode.com/posts')
       .then(res => res.json())
       .then(data => displayData(data))
}

function displayData(data){
    const parentDiv = document.getElementById('posts-container');
    for(const user of data){
        console.log(user);
        const childDiv = document.createElement('div');
        childDiv.classList.add('post');
        childDiv.innerHTML = `
         <p>UserId : ${user.id}</p>
         <p>Title : ${user.title}</p>
         <p>Body : ${user.body}</p>
        `
        parentDiv.appendChild(childDiv);
    }
}