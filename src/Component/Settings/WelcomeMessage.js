import React from "react";
import {AppContext} from "../App/AppProvider";

export const WelcomeMessage = ({ firstVisit }) => {
    return (
        <AppContext.Consumer>
            {({firstVisit}) =>
                firstVisit ? <p>Welcome to CryptoDash! Please select your favorite coins to begin.</p>
                           : null
            }
        </AppContext.Consumer>
    )
};
