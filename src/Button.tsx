type ButtonProps={
    value:string,
    click:(e:React.MouseEvent)=>void

}
// const Button=(props:ButtonProps)=>{
//     const clickHandler=()=>{
//         alert("Button clicked");

//     }
//     return (
//         <>
//         <button onClick={clickHandler}>{props.value}</button>
//         </>
//     )
// }
const Button=(props:ButtonProps)=>{
    
    return (
        <>
        <button onClick={props.click}>{props.value}</button>
        </>
    )
}
export default Button;