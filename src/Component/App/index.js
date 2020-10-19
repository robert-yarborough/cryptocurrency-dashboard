import React, { Component } from 'react';
import './App.css';
import { WelcomeMessage } from "../Settings/WelcomeMessage";
import AppLayout from "./AppLayout";
import AppBar from "./AppBar";
import AppProvider from './AppProvider';
import Settings from '../Settings';

class Index extends Component {
    constructor(props){
        super(props);
    }


    render(){
        return (
            <AppLayout>
                <AppProvider>
                    <AppBar />
                    <Settings />
                </AppProvider>
            </AppLayout>
        )
    }
}
export default Index;
