import {StoreState} from "../../model/storing/StoreState";
import {useSelector} from "react-redux";
import {FinalizationView} from "./FinalizationView";
import {ProfileView} from "./Profile/ProfileView";
import {ListView} from "./EventsList/ListView";
import {SummaryView} from "../form/finalization/SummaryView";

const ViewManager = () => {
    const currentView = useSelector((state: StoreState) => state.currentView)

    switch (currentView) {
        case "PROFILE_VIEW":
            return <ProfileView/>;
        case "FINALIZATION_VIEW":
            return <FinalizationView/>;
        case "SUMMARY_VIEW":
            return <SummaryView/>
        case "EVENTS_LIST":
        default:
            return <ListView/>
    }
}

export default ViewManager