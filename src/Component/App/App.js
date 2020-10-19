import React, { Component } from 'react';
import './App.css';
import AppLayout from "./AppLayout";
import AppBar from "./AppBar";
import AppProvider from './AppProvider';

class App extends Component {
    constructor(props){
        super(props);
    }


    render(){
        return (
            <AppLayout>
                <AppProvider>
                    <AppBar />
                    <p>Welcome to Cryptocompare!</p>
                </AppProvider>
            </AppLayout>
        )
    }
}
export default App;
