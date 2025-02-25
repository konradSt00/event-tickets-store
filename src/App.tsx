import React from 'react';
import './App.css';
import ListView from "./components/views/ListView";
import {Provider} from "react-redux";
import store from "./store/store";
import {ApplicationBar} from "./components/ApplicationBar";
import {ContentWrapper} from "./components/ContentWrapper";
import ViewManager from "./components/views/ViewManager";

function App() {

    return (<Provider store={store}>
            <ApplicationBar/>
            <ContentWrapper>
                <ViewManager/>
            </ContentWrapper>
        </Provider>
    );
}

export default App;
