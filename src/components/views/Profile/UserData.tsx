import {useSelector} from "react-redux";
import {StoreState} from "../../../model/storing/StoreState";
import {Typography} from "@mui/material";
import {useEffect} from "react";
import {UserDataService} from "../../../services/UserDataService";

export const UserData = () => {
    const userData = useSelector((state: StoreState) => state.profileState.userData)

    useEffect(() => {
        UserDataService.getUserData();
    }, []);

    return <div className={'user-data-container'}>
        <h3>Your data</h3>
        <div>
            <Typography>Name: {`${userData.firstname} ${userData.lastname}`}</Typography>
            <Typography>Email: {userData.email}</Typography>
        </div>
    </div>
}