import { Route, Routes } from "react-router-dom";
import Controls from "./Controls";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Navbar from "./components/Navbar";
import MasterLayout from "./components/MasterLayout";

function App()
{
  return (
    <>
    <div>Basic App Code</div>
    <Navbar/>


    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact/:city" element={<Contact/>}/>
      <Route path="/co" element={<Controls/>}/>
      <Route path="/products/" element={<MasterLayout/>}>
        <Route path="cloth" element={<div>Cloth</div>}/>
        <Route path="elect" element={<div>Elect</div>}/>
      </Route>



    </Routes>
    {/* <Routes>
      <Route path="/" element={<div>Home Page</div>}/>
      <Route path="/controls" element={<Controls/>}/>

    </Routes> */}
    
    </>
  )
}
export default App;
// import './App.css'
// import Button from './Button'
// import Controls from './Controls';
// // import Greet from './Greet'
// // import Types from './Types'
// // //import React from 'react'
// // import jsondata from "./data.json"
// const clickHandlerSend=(e:React.MouseEvent)=>{
//  let target= e.target as HTMLButtonElement;


//   alert(target.innerText+" Button clicked ")
// }
// const clickHandlerClick=(e:React.MouseEvent)=>{
//   let target= e.target as HTMLButtonElement;


//   alert(target.innerText+" Button clicked ")
// }
// function app() {

//   return (
//     <>
//       {/* <div className='bg-red-500'>
//         Welcome to React
//       </div>
//       <p>Hello</p> */}
//       {/* <Greet name="Code" years={10} data={jsondata[0]}>
//           <Types/>

//         </Greet> */}
//       {/* <Greet name="ABC"/>
//       <Types/> */}

//       {/* <Greet name="ABC"/> */}
//       {/* <Button  value="Send" click={clickHandlerSend}/>
//       <Button value="Click" click={clickHandlerClick}/> */}
//       <Controls/>
//     </>
//   )
// }
// function Test() {
//   return (
//     <>Test Component</>
//   )
// }

// export default app
// export { Test }
