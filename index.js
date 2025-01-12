// const cart = ["pant","shirt", "pajamas", "kurta"]


// const promise  = createCart(cart)
// console.log(promise)

// promise.then(function(orderId){
//     console.log(orderId)
//     return orderId
// })
// .then(function(orderId){
//     return proceedToPayment(orderId)
// })
// .then(function showOrderSummary(paymentInfo){
//     console.log(paymentInfo)
//     return paymentInfo
// })
// .then(function(paymentInfo){
//     console.log("Your Order is placed.", paymentInfo);
// })
// .catch(function(err){
//     console.log(err)
// })



// function createCart (cart) {
//     const pr = new Promise(function(resolve, reject){
//         if(!validateCart(cart)){
//             const err = new Error("Invalid Cart.")
//             reject(err)
//         }
//         const orderId = "123345"
//         if(orderId){
//             setTimeout(function(){
//                 resolve(orderId)
//             },5000)
//         }
//     })
//     return pr
// }

// function validateCart(cart){
//     return true;
// }

// function proceedToPayment(orderId){
//     return new Promise(function(resolve,reject){
//         resolve("Payment Successful.")
//     })
// }


// var chunk = function(arr, size) {
//     var mainArr = []
//     for(i=0;i<arr.length;i=i+size){
//         var subArr = []
//         for(j=i;j<i+size;j++){
//             subArr.push(arr[j])
//         }
//         mainArr.push([...subArr])        
//     }
//     return mainArr
// };

// console.log(chunk([1,2,3,4,5],1))


        const increment = document.getElementById('increment');
        const decrement = document.getElementById('decrement');
        const count = document.querySelector('h2');

    increment.addEventListener('click', () => { count.textContent = parseInt(count.textContent) + 1; });

    decrement.addEventListener('click',()=>{
        count.textContent = parseInt(count.textContent) - 1
    })


        console.log(`${increment} ${decrement} ${count}`); '/'