import {type LucideIcon,Search} from 'lucide-react'
interface SearchBox{
    iconPresent?:boolean;
    placeHolderText:string;
    // icon:LucideIcon
}
export default function SearchBox({iconPresent,placeHolderText}:SearchBox){
    return <div style={{padding:"4px 4px 4px 4px"}}>
        <input 
        // icon={iconPresent && <Search />}
        placeholder={placeHolderText} 
        style={{width:"180px", height:"25px", 
        border:"1.5px solid  grey", borderRadius:"50px", padding:"4px 4px 4px 8px"}}></input>
        {/* how to add icon in this */}
    </div>
}