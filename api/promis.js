const promiseone = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async tack");
        resolve()
    },1000)
})

promiseone.then(function(){
    console.log("async");
    
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async2");
        resolve()
    },1000)
}).then(function(){
    console.log("async2");
    
})



const promisefour= new Promise(function(resolve,reject){
    setTimeout(function(){
       resolve({username:"om", email:"om@gmail.com"})
        
    },1000)
})

promisefour.then(function(user){
    console.log(user);
    
})





const promisefive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"sm",password:"1234"})
        }
        else{
            reject('error: somthing wet worg')
        }
    },1000)
})

promisefive.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=> console.log("promise is either"));







const promisesix = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"nm",pass:"890"})
        }else{
            reject('error:somthing worng')
        }
    },1000)
})

async function consumpromisesix() {
    try{
        const response=await promisesix
        console.log(response);
    }catch(error){
        console.log(error);
        
    }
}

consumpromisesix();




// async function getallusers(){
//     try {
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//         const data=await response.json()
//         console.log(data);
        

//     } catch (error) {
//         console.log("e",error);
        
//     }
// }


// getallusers()




fetch('https://jsonplaceholder.typicode.com/users')
.then((users)=>{
    return users.json()
}).then((data)=>{
    console.log(data);
    
}).catch((error)=>console.log(error));
