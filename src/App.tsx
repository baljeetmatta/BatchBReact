
import './App.css'
import Greet from './Greet'
import Types from './Types'
//import React from 'react'
import jsondata from "./data.json"
function app() {

  return (
    <>
      {/* <div className='bg-red-500'>
        Welcome to React
      </div>
      <p>Hello</p> */}
      <Greet name="Code" years={10} data={jsondata[0]}/>
      <Greet name="ABC"/>
      <Types/>

      {/* <Greet name="ABC"/> */}

    </>
  )
}
function Test()
{
  return (
    <>Test Component</>
  )
}

export default app
export {Test}
