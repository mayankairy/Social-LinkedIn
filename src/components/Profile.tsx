interface IProf{
    // icon:React.Component;
    icon:any;
    title:string;
    selected:boolean;
    notification:boolean;
    notificationCount?:number;
}

export default function Profile({icon,title,selected,notification, notificationCount}:IProf){
    // return <div style={{paddingRight:"10px", padding:"4px 4px 4px 4px", margin:"4px 4px 4px 4px",
    //     color: selected ? "black":"gray" ,borderBottom: selected ? "2px solid black ":"",
    //      cursor:"pointer",
    // }}>
    return <div className={`Profile ${selected ? 'active':''}`}>
        <div style={{display:"flex", justifyContent:"center"}}>
            {icon}
            <span className={`NotifyCount ${notification ? 'active':''}`}> {notificationCount} </span>
        </div>

        <div style={{fontSize:"14px"}}>
            {title} ▾
        </div>
    </div>
}