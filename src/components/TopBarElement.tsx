interface Tbel{
    icon:any;
    title:string;
    selected:boolean;
    notification:boolean;
    notificationCount?:number;
}

export default function TopBarElement(props:Tbel){
    // return <div style={{paddingRight:"10px", padding:"4px 14px 4px 4px", margin:"4px 4px 4px 4px", 
    //      color: props.selected ? "black":"" ,borderBottom: props.selected ? "2px solid black ":"",
    //      cursor:"pointer", 
    // }}>
    return <div className={`TopBarElement ${props.selected ? 'active':''}`}>
        <div style={{display:"flex", justifyContent:"center"}}>
            {props.icon}
            <span className={`NotifyCount ${props.notification ? 'active':''}`} > {props.notificationCount}</span>
        </div>
        <div style={{fontSize:"14px", textAlign:"center"}}>
            {props.title}
        </div>
    </div>
}