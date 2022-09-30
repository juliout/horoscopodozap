import styled from 'styled-components'

export const InputDiv = styled.div`
    width: ${props => props.x};
    height: ${props => props.y};
   
    
`
export const Inlabel = styled.label`
    color: ${props=> props.lColor};
    font-size: 0.8rem;
`

export const Inputin = styled.input`
    width: ${props => props.x};
    min-width: 130px;
    height: ${props => props.y === '' ? null : props.y };
    border-radius: 10px;
    padding-left: 10px;
    margin-top: 7px;
    margin-bottom: 20px;
`