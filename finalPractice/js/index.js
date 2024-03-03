const comments = async() => {
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/comments')
        const data = await res.json();
        displayData(data)
    }
    catch(error){
        console.error('Error happened',error);
    }
}

function displayData(data){
    console.log(data);
}