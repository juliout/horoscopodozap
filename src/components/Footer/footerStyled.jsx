import styled from "styled-components";

export const FooterDiv = styled.footer`
    background-color: black;
    width: 100%;
    height: 60px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    .reservDiv {
        display: flex;
        align-items: center;

        h3 {
            font-size: 15px;
        }

        .cIcon {
            width: 15px;
            height: 15px;
            margin: 0 10px;
        }
    }
    img{
            height: 60%;
        }

`