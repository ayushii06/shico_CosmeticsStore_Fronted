// import React from "react";
// import UserContext from "./UserContext";
// import { useState } from "react";

// const UserState = (props) => {
//   //http://localhost:5050/api/shico/user/login
//   const host = "http://localhost:5050"
//   const [data, setData] = useState([])

//   //GET ALL NOTES
//   const getData = async () => {
//     //API CALL
//     const response = await fetch(`${host}/api/shico/user/login`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const json = await response.json()

//     setData(json)
//   }

//  return (
//     <UserContext.Provider value={{data,getData }}>
//       {props.children}
//     </UserContext.Provider>
//   )
// }


// export default UserState;