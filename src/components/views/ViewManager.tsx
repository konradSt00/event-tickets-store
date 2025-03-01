import {StoreState} from "../../model/storing/StoreState";
import {View} from "../../store/reducer";
import {connect} from "react-redux";
import {FinalizationView} from "./FinalizationView";
import {ProfileView} from "./Profile/ProfileView";
import {ListView} from "./EventsList/ListView";

interface ViewManagerProps {
    currentView: View
}

const ViewManagerComponent = (props: ViewManagerProps) => {
    switch(props.currentView) {
        case "PROFILE_VIEW":
            return <ProfileView/>;
        case "FINALIZATION_VIEW":
            return <FinalizationView/>;
        case "EVENTS_LIST":
        default:
            return <ListView/>
    }
}

const mapStateToProps = (state: StoreState): ViewManagerProps => {
    return {currentView: state.currentView}
}

const ViewManager = connect(mapStateToProps)(ViewManagerComponent);

export default ViewManager