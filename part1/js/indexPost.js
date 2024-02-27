function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayUserData(data))
}

function displayUserData(data){
    const parent = document.getElementById('display')
    for(const user of data){
         console.log(user)
        const childDiv = document.createElement('div')
        childDiv.classList.add('post')
        childDiv.innerHTML = `
        <h4>User -> ${user.userId}</h4>
        <h5>Post: ${user.title}</h5>
        <p>Post Description -> ${user.body}</p>
        `
        parent.appendChild(childDiv);
    }
}