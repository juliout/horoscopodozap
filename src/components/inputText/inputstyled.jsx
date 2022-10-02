import styled from 'styled-components'

export const InputDiv = styled.div`
    width: ${props => props.x};
    height: ${props => props.y};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-top: 5px;
    
`
export const Inlabel = styled.label`
    color: ${props=> props.lColor};
    font-size: 0.8rem;
    margin-bottom: 5px;
    
    @media (max-width: 770px)  {
        font-size: 0.6rem;
    }
`

export const Inputin = styled.input`
    width: 100%;
    min-width: 90px;
    min-height: 35px;
    max-height: 40px;
    height: 80%;
    border-radius: 10px;
    padding-left: 10px;
    margin-top: auto;
    
`