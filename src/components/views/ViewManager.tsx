import {StoreState} from "../../model/storing/StoreState";
import {View} from "../../store/reducer";
import {connect} from "react-redux";
import ListView from "./ListView";
import {FinalizationView} from "./FinalizationView";

interface ViewManagerProps {
    currentView: View
}

const ViewManagerComponent = (props: ViewManagerProps) => {
    switch(props.currentView) {
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