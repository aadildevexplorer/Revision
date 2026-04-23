// import React, { useEffect } from "react";
// import Data from "./Components/Data";
// import Card from "./Components/Card/Card";
// import Other from "./Components/Card/Data/Other";
// import { UserContext } from "./Context/UserContext";
// import UseRef from "./Hooks/UseRef";
// import UseMemo from "./Hooks/UseMemo";
// import useToggle from "./CustomHook/useToggle";
// import Parent from "./Hooks/Parent";

// const App = () => {
//   // const usersData = [
//   //   {
//   //     name: "John Doe",
//   //     email: "user@gmail.com",
//   //     password: 123,
//   //     ID: crypto.randomUUID().slice(1, 20),
//   //   },
//   // ];

//   const users = [
//     {
//       id: 1,
//       name: "Rahul Sharma",
//       age: 25,
//       city: "Delhi",
//     },
//     {
//       id: 2,
//       name: "Amit Verma",
//       age: 30,
//       city: "Mumbai",
//     },
//     {
//       id: 3,
//       name: "Priya Singh",
//       age: 22,
//       city: "Pune",
//     },
//     {
//       id: 4,
//       name: "Neha Gupta",
//       age: 27,
//       city: "Jaipur",
//     },
//   ];

//   // use Effect
//   // useEffect(() => {
//   //   return () => {
//   //     console.log("Compo mount");
//   //   };
//   // }, []);

//   const userName = "John Doe";

//   // custom hook
//   const [value, toggleValue] = useToggle(false);
//   // console.log("value----", value);

     

//   return (
//     <>
//       <button onClick={toggleValue}>Toggle Heading</button>
//       <button onClick={() => toggleValue(false)}>Hide Heading</button>
//       <button onClick={() => toggleValue(true)} className="right">Show Heading</button>
//       {value ? <h1>Custom Hook in ReactJs</h1> : null}

//       {/* <UserContext.Provider value={userName}>
//         <Card users={users} />
//       </UserContext.Provider> */}
// <Parent />
//       {/* <UseRef /> */}
//       {/* <UseMemo /> */}
//       {/* <UseMemo /> */}

//       {/* <Other userName={userName} /> */}
//       {/* <div>
//         <button onClick={() => increaseNumber()}>+</button>
//         <p>{count}</p>
//         <button disabled={count === 0} onClick={() => decreaseNumber()}>
//           -
//         </button>
//       </div> */}

//       {/* <Other userName={userName} /> */}
//       {/* <Card users={users} /> */}
//       {/* <Data usersData={usersData} /> */}

//       <h1></h1>
//     </>
//   );
// };

// export default App;

// // import useForm from "./CustomHook/useForm";
// // import Parent from "./Hooks/Parent";

// // const App = () => {
// //   const { values, handleChange, handleSubmit } = useForm({
// //     email: "",
// //     password: "",
// //   });

// //   return (
// //     <>
// //       <div>
// //         <form onSubmit={handleSubmit}>
// //           <input
// //             type="email"
// //             required
// //             name="email"
// //             value={values.email}
// //             onChange={handleChange}
// //           />
// //           <input
// //             type="password"
// //             required
// //             name="password"
// //             value={values.password}
// //             onChange={handleChange}
// //           />
// //           <button type="submit">Submit</button>
// //           {/* <h1>{values.email}</h1>
// //         <h1>{values.password}</h1> */}
// //         </form>
// //       </div>

// //       <Parent />
// //     </>
// //   );
// // };

// // export default App;

import React from 'react'
import Id from './Hooks/id'

export default function App() {
  return (
    <div>
      <Id />
    </div>
  )
}
