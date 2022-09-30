import styled from 'styled-components'

export const ModalDiv = styled.div`
    width: 100%;
    height: 100vh;

    position: fixed;
    display: flex;
    justify-content: center;
    background-color: #00000049;

    .modalMain {
        width: 70%;
        min-width: 500px;
        height: 700px;
        margin-top: 10%;
        background-color: #71265b;

        display: flex;
        justify-content: center;

        #formSendCadastro {
            
            width: 90%;
            max-width: 900px;
            height: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            .formTitle {
                color: #f4e29b;
                font-weight: 700;
                text-align: center;
                margin-top: 5%;
                margin-bottom: 20px;
            }
            .divForm {
                width: 70%;
                min-width: 440px;
                max-width: 500px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            .stwo {
                width: 95%;
                display: flex;
                justify-content: space-between;                
            }
            .pform {
                font-family: 'Poppins', sans-serif;
                width: 100%;
                color: #f4e29b;
                font-size: 0.8rem;
                font-weight: 600;
                line-height: 1.2rem;
                letter-spacing: 0.08rem;

                text-align: center;
            }
            .divtemos {
                display: flex;
                align-items: center;
                margin: 20px 0;

                input {
                    margin-right: 5px;
                }
                label {
                    color: #f4e29b;
                    font-weight: 500;
                }
                
            }
            .prontobtn {
                background-color: #f4e29b;
                width: 90%;
                height: 35px;
                border-radius: 10px;
                font-size: 1rem;
                font-weight: 700;
                color: #71265b;
                letter-spacing: 0.05rem;
            }
        }
    }
`