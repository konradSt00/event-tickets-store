import {OrdersHistory} from "./OrdersHistory";
import {UserData} from "./UserData";

export const ProfileView = () => {
    return <div className={'profile-view-container'}>
        <UserData/>
        <OrdersHistory/>
    </div>
}