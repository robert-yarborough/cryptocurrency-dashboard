import styled from 'styled-components';
import {subtleBoxShadow, lightBlueBackground, greenBoxShadow} from './Styles';


export const Tile = styled.div`
  padding: 10px;
  background-color: ${lightBlueBackground};
  box-shadow: ${subtleBoxShadow}
`;


export const SelectableTile = styled(Tile)`
 &:hover {
    cursor: pointer;
    ${greenBoxShadow}
 }
`;