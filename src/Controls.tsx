import { ChangeEvent } from "react";

const Controls=()=>{

    let textData="";

    const changeHandler=(e:ChangeEvent)=>{

        let target=e.target as HTMLInputElement;
        textData=target.value;


    }
    const clickHandler=(e:React.MouseEvent,id:number)=>{
        alert(textData)
;    }
    return (
        <>
        <input type="text" onChange={changeHandler}/>
        <button onClick={()=>{alert(textData);}}>Print</button>
        <button onClick={(e:React.MouseEvent)=>{ clickHandler(e,1);}}>Print</button>
        </>
    )
}
export default Controls;
