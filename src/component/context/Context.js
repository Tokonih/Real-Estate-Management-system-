// import { useState, createContext, useEffect } from "react";

// export const Newlookcontext = createContext()

// function NewlookProvider(props) {
//   const[wishlist, setWishlist] = useState([]);
//   const localData = JSON.parse(localStorage.getItem("cartData"))
  
//   useEffect(() => {
//     if(localData) {
//       setWishlist(localData)
//     }
//   },[])

//   return(
//     <Newlookcontext.Provider value={{wishlist, setWishlist}}>
//       {props.children}
//     </Newlookcontext.Provider>
//   )
// }

// export default NewlookProvider