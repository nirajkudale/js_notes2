// console.log(this);


const users={
    
    username:"omk",
    price:200,

   wellcome: function(){
        console.log(`${this.username},and welcome to home`);
        console.log(this);
        
   }
}

// users.wellcome()
// users.username="sm"
// users.wellcome()


                        // arrow function


const addtwo= (no,no1)=>{
        return no+no1;
}

// console.log(addtwo(3,5));
 


                ////    iife



(function (){
    console.log("hello");
    
})();

((name)=>{
    console.log(`${name},hello`);
    
})('omsm')
