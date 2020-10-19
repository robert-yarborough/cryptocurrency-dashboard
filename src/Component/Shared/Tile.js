import styled from 'styled-components';
import {subtleBoxShadow, lightBlueBackground, greenBoxShadow, redBoxShadow} from './Styles';


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


export const DeletableTile = styled(SelectableTile)`
  &:hover{
    cursor: pointer;
    box-shadow: ${redBoxShadow};
  }
`;


export const DisabledTile = styled(Tile)`
  pointer-events: none;
  opacity: 0.4;
`;