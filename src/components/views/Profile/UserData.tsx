import {useSelector} from "react-redux";
import {StoreState} from "../../../model/storing/StoreState";
import {Typography} from "@mui/material";

export const UserData = () => {
    const userData = useSelector((state: StoreState) => state.profileState.userData)

    return <div className={'user-data-container'}>
        <h3>Your data</h3>
        <div>
            <Typography>Name: {`${userData.firstName} ${userData.lastName}`}</Typography>
            <Typography>Email: {userData.email}</Typography>
        </div>
    </div>
}