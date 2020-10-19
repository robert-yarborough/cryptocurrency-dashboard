import React from 'react';
import {AppContext} from '../App/AppProvider';
import {SelectableTile, DisabledTile, DeletableTile} from "../Shared/Tile";
import CoinHeaderGrid from './CoinHeaderGrid';
import CoinImage from '../Shared/CoinImage';



export default function ({coinKey, topSection}){
    let TileClass = SelectableTile;
    if(topSection){
        TileClass = DeletableTile;
    }
    return <AppContext.Consumer>
        {({coinList}) => {
            let coin = coinList[coinKey];
            const TileClass = SelectableTile;
            return <TileClass>
                <CoinHeaderGrid name={coin.CoinName} symbol={coin.Symbol}/>
                <CoinImage coin={coin} />
            </TileClass>
        }}
    </AppContext.Consumer>
}


