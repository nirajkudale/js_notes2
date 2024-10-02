// let score="23"

// // console.log(typeof score);

//  let valueofNumber= Number(score)

// //  console.log(typeof valueofNumber)

// value=1
// //console.log(boolenValue= Boolean(value))



// const name="om kumar"
// const addres="thane"

// // console.log(`my name ${name} and me leving ${addres}`);


//  const myarray= new Array(1,2,3,4,5)

// // myarray.push(7)
// myarray.pop()


// console.log(myarray);


// const newarray= myarray.join()

// console.log(newarray);

// console.log(typeof(newarray));






// const marvel_herose=["thor","ironman","spiderman"]
// const dc_herose=["superman","flash","wanderwoman"]

// // console.log(marvel_herose.concat(dc_herose));

//    ///// spred array/////
// // const all_herose=[...marvel_herose,...dc_herose]
// // console.log(all_herose);




// let one=100
// let two=200
// let three=300
// //       convert variable in array
// console.log(Array.of(one,two,three,dc_herose));














         //                 class and object ////




const mykey=Symbol("mukey");

const values={
   name:"omkumar",
   [mykey]:"mykey1",
   address:"mumbai",
   email:"omkumar@gmail.com",
   phone:1234568789,

   islogin:false,
   loginday:["monday","tusday"]

}



console.log( typeof values[mykey]);

values.email="okkumAr@gpt.com"

Object.freeze(values)   // freeze the upcoming activity

values.email="smkumar@google.com"

 console.log(values);

