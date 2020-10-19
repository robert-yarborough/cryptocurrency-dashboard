import React, { Component } from 'react';


// grab reference to cryptocompare library
const cc = require('cryptocompare');
// set the api key
cc.setApiKey('0c14c2224238b989176620e675787584262aa5237efc936b2d8a1708c2fdaf53');

export const AppContext = React.createContext();

export default class AppProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'dashboard',
            ...this.savedSettings(),// spreads result over previous props
            setPage: this.setPage,
            confirmFavorites: this.confirmFavorites
        }
    };


    componentDidMount() {
        this.fetchCoins();
    }


    fetchCoins = async () => {
        let coinList = (await cc.coinList()).Data;
        this.setState({coinList});
        console.log('coinList', coinList);
    }

    confirmFavorites = () => {
        this.setState({
            firstVisit: false,
            page: 'dashboard'
        });
        localStorage.setItem('cryptoDash', JSON.stringify({
            test: 'hello'
        }))
    }

    savedSettings(){
        let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
        if(!cryptoDashData){
            return { page: 'settings', firstVisit: true}
        }
        return {};
    }

    setPage = (page) => {
        this.setState({page})
    }
    render(){
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        )
    }

};