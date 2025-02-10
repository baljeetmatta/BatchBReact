import jsondata from "./data.json";

const Types=()=>{

    //variable
    let data=10;
    //array
    let arr:string[]=["First","Second","Third"];
    //object
    type ObjectType={
        name:string,age:number
    }
    let obj:ObjectType={
        name:"First",
        age:10
    }
    //array of objects
    let arraObj:ObjectType[]=jsondata;
    
    return (
        <>
        {data}
        {obj.name}

       {
        arr.map((item)=>{
            return <p>{item}</p>
        })
       }
        
        {
            arraObj.map((item)=>{
                return <p>{item.name}</p>
            })
        }
        </>
    )

}
export default Types;