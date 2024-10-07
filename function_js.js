

/// function 


const values={
    username:'omk',
    cost:'500'
}

function showvalues(anyobject) {
    console.log(`my name is ${anyobject.username} and cost is ${anyobject.cost}`);
    
}

// showvalues(values)





/*   function in array               */
// const mynewarray=[100,200,300,400]

// function anyarray(returnarray) {
//                                                                            //[100]
//                                                                            //[200]    output
//                                                                            //[300]
//                                                                            //[400]
    
//     for (let i = 0; i < returnarray.length; i++) {

//         const ok = returnarray[i];
        
//         console.log(Array.of(ok));
//     }
    
   
// }

// anyarray(mynewarray)

                                                 /*   new code    */
const mynewarray=[100,200,300,400]

function anyarray(returnarray) {
             const newarray=[];                                             //[100,200,300,400]    output
    
    for (let i = 0; i < returnarray.length; i++) {

        const ok = returnarray[i];
        newarray.push(Array.of(ok))
       
    }
    console.log(newarray.flat());
    
   
}

anyarray(mynewarray)

