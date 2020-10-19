import React from 'react';
import styled, {css} from 'styled-components';
import { AppContext } from '../App/AppProvider';
import {SelectableTile} from '../Shared/Tile';



export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 14px;
`;


export default function(){
    return <AppContext.Consumer>
        {({coinList}) => <CoinGridStyled>
            {Object.keys(coinList).map((coinKey) => {
                return <SelectableTile>{coinKey}</SelectableTile>
            })}
            </CoinGridStyled>
        }
    </AppContext.Consumer>
}