interface SearchBox{
    icon?:any;
}
export default function SearchBox({icon}:SearchBox){
    return <div style={{padding:"4px 4px 4px 4px"}}>
        <input placeholder={"Search"} style={{width:"180px", height:"25px", 
            border:"1.5px solid  grey", borderRadius:"50px", padding:"4px 4px 4px 8px"}}></input>
        {/* how to add icon in this */}
    </div>
}