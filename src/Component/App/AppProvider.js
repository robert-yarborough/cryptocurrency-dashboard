import React, { Component } from 'react';
import _ from 'lodash';

// grab reference to cryptocompare library
const cc = require('cryptocompare');
// set the api key
cc.setApiKey('0c14c2224238b989176620e675787584262aa5237efc936b2d8a1708c2fdaf53');

export const AppContext = React.createContext();


const MAX_FAVORITES = 10;

export default class AppProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'dashboard',
            favorites: ['BTC', 'ETH', 'XMR', 'DOGE'],
            ...this.savedSettings(),// spreads result over previous props
            setPage: this.setPage,
            addCoin: this.addCoin,
            removeCoin: this.removeCoin,
            isInFavorites: this.isInFavorites,
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

    addCoin = (key) => {
        let favorites = [...this.state.favorites];
        if(favorites.length < MAX_FAVORITES){
            favorites.push(key);
            this.setState({favorites});
        }
    }


    removeCoin = (key) => {
        let favorites = [...this.state.favorites];
        this.setState({favorites: _.pull(favorites, key)});
    }


    isInFavorites = (key) => _.includes(this.state.favorites, key);

    confirmFavorites = () => {
        this.setState({
            firstVisit: false,
            page: 'dashboard'
        });
        localStorage.setItem('cryptoDash', JSON.stringify({
            favorites: this.state.favorites
        }))
    }

    savedSettings(){
        let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
        if(!cryptoDashData){
            return { page: 'settings', firstVisit: true}
        }
        let {favorites} = cryptoDashData;
        return {favorites};
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