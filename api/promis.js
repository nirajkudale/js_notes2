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
    
})