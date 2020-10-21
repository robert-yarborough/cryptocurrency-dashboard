import React from 'react';
import styled from 'styled-components';
import { backgroundColor2, fontSize2 } from "../Shared/Styles";
import {AppContext} from '../App/AppProvider';
import _ from 'lodash';
import fuzzy from 'fuzzy';


const SearchGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const SearchInput = styled.input`
  background-color: ${backgroundColor2};
  border: 1px solid;
  height: 24px;
  color: #1163c9;
  place-self: center left;
`;

const handleFilter = _.debounce((inputValue, coinList, setFilteredCoins) => {
    // get all coin symbols
    let coinSymbols = Object.keys(coinList);
    // get all the coin names, map symbol to name
    let coinNames = coinSymbols.map((symbol) => coinList[symbol].CoinName);
    let allStringsToSearch = coinSymbols.concat(coinNames);
    let fuzzyResults = fuzzy
        .filter(inputValue, allStringsToSearch, {})
        .map((result) => result.string);
    let filteredCoins = _.pickBy(coinList, (result, symKey) => {
        let coinName = result.coinName;
        return (_.includes(fuzzyResults, symKey) || _.includes(fuzzyResults, coinName));
    });
    setFilteredCoins(filteredCoins);
}, 500);

function filteredCoins(event, setFilteredCoins, coinList){
    let inputValue = event.target.value;
    if(!inputValue){
        setFilteredCoins(null);
        return;
    }
    handleFilter(inputValue, coinList, setFilteredCoins);
}
export default function(){
    return (
        <AppContext.Consumer>
            {({setFilteredCoins, coinList}) => (
                <SearchGrid>
                    <h3>Search All Coins...</h3>
                    <SearchInput onKeyUp={(event) => filteredCoins(event, setFilteredCoins, coinList) }/>
                </SearchGrid>
            )}
        </AppContext.Consumer>
    )
}