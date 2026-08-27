import {House, Users, BriefcaseBusiness, MessageCircleMore, Bell, Circle, Grid3x3} from 'lucide-react';
import LinkedIn from './LinkedIn.tsx';
import SearchBox from './SearchBox.tsx';
import TopBarElement from './TopBarElement.tsx';
import Profile from './Profile.tsx';
import Business from './Business.tsx';
export default function Topbar(){
    return (
        <div style={{display:"flex", justifyContent:"space-evenly"}}>
            <div style={{display:"flex", alignItems:"center"}}>
                <LinkedIn />
                <SearchBox iconPresent={true} placeHolderText={"Search"} />
            </div>

            <div style={{display:"flex", justifyContent:"space-evenly" }}>
                <TopBarElement selected={true} icon={<House />} notification={false}  title={"Home"} />
                <TopBarElement selected={false} icon={<Users />} notification={false}  title={"My Network"} />
                <TopBarElement selected={false} icon={<BriefcaseBusiness />} notification={false}  title={"Jobs"} />
                <TopBarElement selected={false} icon={<MessageCircleMore />} notification={true} notificationCount={34} title={"Messaging"} />
                <TopBarElement selected={false} icon={<Bell />} notification={false}  title={"Notifications"} />
                <Profile selected={true} icon={<Circle />} notification={false} notificationCount={34} title={"Me"} />
                <Business selected={false} icon={<Grid3x3 />} notification={false} notificationCount={34} title={"For Business"} />
            </div>
        </div>
        
    )
}