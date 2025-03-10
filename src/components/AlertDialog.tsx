import {useSelector} from "react-redux";
import {StoreState} from "../model/storing/StoreState";
import {Alert, Dialog, DialogContent, DialogTitle} from "@mui/material";
import React from "react";
import {DialogService} from "../services/DialogService";

export const AlertDialog = () => {
    const alerts = useSelector((state: StoreState) => state.alerts);
    const dialogOpened = alerts?.length > 0;

    return <Dialog color={'primary'} fullWidth={true} maxWidth={'sm'} open={dialogOpened}
                   onClose={DialogService.clearAlerts}>
        <DialogTitle>Alert</DialogTitle>
        {alerts.map((alert, index) => {
            return <DialogContent>
                <Alert severity={alert.type}>{alert.message}</Alert>
            </DialogContent>
        })}
    </Dialog>
}