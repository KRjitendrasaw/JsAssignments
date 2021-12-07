
const completed_tasks = [];
const pending_tasks = [];

async function todo_api(){
    const response = await fetch('`https://jsonplaceholder.typicode.com/todos'); 
    const user = await response.json();
    console.log(user);
    
    for( let i=0; i<user.length; i++){
        if(user[i]['completed']==='true'){
            completed_tasks.push(user[i]);
        }
        else{
            pending_tasks.push(user[i]);
        }

    }
    const a = todo_api();
    console.log(a)
    a.then(data => console.log(data))
    
}