import {Button} from "@mui/material";
import {redirectToListView} from "../../actions/redirectToListView";

export const HomeButton = () => {
    return <Button className={'home-btn'} variant={'text'} onClick={redirectToListView}>
        Ticket App
    </Button>
}