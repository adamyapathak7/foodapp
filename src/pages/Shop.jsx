// import React,{ useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';
// const Shop = () => {
//   const [item,setitem]= useState([]);
//   async function myShop() {
//     let result =await fetch("https://dummyjson.com/carts")
//     let data= await result.json()
//     setitem(data.carts)
// }
// useEffect(()=>{
//   myShop()
// })
// console.log(item)
//   return (
//     <div>
//        <div className='row d-flex gap-2 justify-content-center'>
//         {item.map((ele)=>{
//           return(
//            <div className="card" style={{width: '18rem'}}>
//    <img src={ele.products[0].thumbnail} className="card-img-top" alt="https://cdn.dummyjson.com/product-images/59/thumbnail.jpg" />
//    <div className="card-body">.
//     <h5 className="card-title">{ele.title}</h5>
//     <h5 className="card-title">price:{ele.price}</h5>
//     <Link to="#" className="btn btn-primary">view</Link>
//   </div>
// </div>


//           )
//         })}
//        </div>
//        </div>
 
//   )
// }

// export default Shop
