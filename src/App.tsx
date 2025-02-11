
import './App.css'
import Button from './Button'
import Controls from './Controls';
// import Greet from './Greet'
// import Types from './Types'
// //import React from 'react'
// import jsondata from "./data.json"
const clickHandlerSend=(e:React.MouseEvent)=>{
 let target= e.target as HTMLButtonElement;


  alert(target.innerText+" Button clicked ")
}
const clickHandlerClick=(e:React.MouseEvent)=>{
  let target= e.target as HTMLButtonElement;


  alert(target.innerText+" Button clicked ")
}
function app() {

  return (
    <>
      {/* <div className='bg-red-500'>
        Welcome to React
      </div>
      <p>Hello</p> */}
      {/* <Greet name="Code" years={10} data={jsondata[0]}>
          <Types/>

        </Greet> */}
      {/* <Greet name="ABC"/>
      <Types/> */}

      {/* <Greet name="ABC"/> */}
      {/* <Button  value="Send" click={clickHandlerSend}/>
      <Button value="Click" click={clickHandlerClick}/> */}
      <Controls/>
    </>
  )
}
function Test() {
  return (
    <>Test Component</>
  )
}

export default app
export { Test }
