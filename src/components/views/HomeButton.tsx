import {Button} from "@mui/material";
import {redirectToListView} from "../../actions/redirectToListView";

export const HomeButton = () => {
    return <Button variant={'text'} onClick={redirectToListView}>
        Ticket App
    </Button>
}