// function Greet()
// {
//     return (
//         <>
//         <div>Welcome to Greet</div>
//         </>
//     )
// }
// const Greet=()=>{

//     return (
//         <>
//         <div>Welcome to Greet</div>
//         </>
//     )
// }

// const Greet:React.FC=()=>{

//     return (
//         <>
//         <div>Welcome to Greet</div></>
//     )
// }
// import React from 'react';

// interface Props {
  
// }

// const Component: React.FC<Props> = ({  }) => {
//   return (
//     <></>
//   );
// };

//export default Component;
type ObjectType={
    name:string,
    age:number
}
type GreetProps={
    name:string,
    years?:number,
    data?:ObjectType
}
const Greet=(props:GreetProps)=>{
    return (
        <>
        <div>Welcome to {props.name} {props.years} {props.data?.name}</div></>
    )
}


export default Greet;
