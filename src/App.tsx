import React from 'react';
import './App.css';
import ListView from "./components/ListView";
import {Provider} from "react-redux";
import store from "./store/store";
import {ApplicationBar} from "./components/ApplicationBar";
import {ContentWrapper} from "./components/ContentWrapper";

function App() {

    return (<Provider store={store}>
            <ApplicationBar/>
            <ContentWrapper>
                <ListView/>
            </ContentWrapper>
        </Provider>
    );
}

export default App;
