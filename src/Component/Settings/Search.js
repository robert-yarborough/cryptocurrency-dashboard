import React from 'react';
import styled from 'styled-components';
import { backgroundColor2, fontSize2 } from "../Shared/Styles";

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
`
export default function(){
    return <SearchGrid>
        <h2>Search All Coins...</h2>
        <SearchInput />
    </SearchGrid>
}