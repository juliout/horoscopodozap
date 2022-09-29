import styled from "styled-components";

export const BannerDiv = styled.div`
    background-color: green;
    width: 100%;
    min-height: 525px;
`

export const ComoFuncionaDiv = styled.div`
    
    width: 100%;
    min-height: 550px;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    
    .funcionaMain {
        width: 100%;
        max-width: 1100px;
        height: 100%;

        display: flex;
        flex-direction: column;
        padding: 25px 10px;
       

        .funcionaTop {
            h1 {
                width:19rem;
                color: #71265b;
                border-bottom: 5px #71265b solid;
                margin-bottom: 25px;
            }
            p {
                color: #71265b;
                font-weight: 700;
                font-size: 1.2rem;
                margin-bottom: 20px;
            }
        }

        .funcionaBottom {
            
            width: 100%;
            min-height: 400px;
            height: auto;
            
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: center;
            
            margin: 0 auto;
            
            .funcionaCard {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-evenly;
                

                width: 250px;
                height: 350px;
                margin: 0 10px;
                margin-top: 25px;
                
                background-color: #f7f7f7;
                
                .cardN {
                    
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    width: 35px;
                    height: 35px;
                    
                    background-color: #fccfed;
                    border: 10px solid #fccfed;
                    border-radius: 60px;
                    margin: 20px 0 10px 0;

                    color: #71265b;
                    font-weight: 700;
                    font-family: 'Noto Sans', sans-serif;
                }

                .exclam {
                    font-size: 1.2rem;
                    color: #006f90;
                    text-shadow: 1px 0px 3px #006f90;
                }
                p {
                    width: 90%;
                    max-width: 230px;
                    font-size: 0.8rem;
                    font-weight: 600;
                    color: #919191;
                    font-family: 'Poppins', sans-serif;
                }

                img {
                    margin-top: auto;
                    width: 70%;
                    max-width: 200px;
                }
            }

        }
    }
`

export const PerguntasDiv = styled.div`

    display: flex;
    justify-content: center;

    padding: 20px 0 50px 0;

    width: 100%;
    min-height: 410px;
    height: auto;
    
    .perguntasMain {
        width: 100%;
        max-width: 1100px;
        padding: 0 10px;

        h1{
            border-bottom: 5px #71265b solid;
            width: 19rem;
            color: #71265b;
            margin-bottom: 20px;
        }

        .perguntasDiv {
            display: flex;
            align-items: center;

            width: 100%;
            height: 70px;
            margin-top: 5px;
            margin-left: 10px;
            border-bottom: 2px #f3f3f3 solid;

            h3{
                font-size: 1rem;
                color: #858585;
                font-weight: 400;
            }
            
            .arrowIcon {

                width: 30px;
                height: 30px;
                fill: #858585;
                margin: 0 20px 0 auto;
                cursor: pointer;
            }
        }
    }


`
export const IndicarBannerDiv = styled.div`
    
    width: 100%;
    height: 200px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-image: url('./image/indicarbg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    .indicaMain {
        width: 100%;
        max-width: 1100px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        .indicarLeft {
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: center;
        color: white;

        width: 50%;
        min-width: 300px;
        height: 100%;
        padding: 10px;
        
        h1{
            font-size: 1.4rem;
        }

        button{
            width: 50%;
            height: 40px;
            max-width: 250px;
            font-weight: 600;

            display: flex;
            align-items: center;
            justify-content: center;

            margin-top: 10px;
            border-radius: 13px;

            background-color: #ad39b6;
            color: white;
            
            .shareIcon {
                width: 20px;
                height: 20px;
                margin-left: 10px;
                fill: #71265b;
            }
        }

    }

    .indicarRight{ 
        width: 50%;
        min-width: 300px;
        height: 100%;
        
        display: flex;
        justify-content: center;
        align-items: center;


        img{
            width: 100%;
            max-width: 400px;
            height: 70%;
            max-height: 200px;

        }
    }

    }
`
export const RestInfoDiv = styled.div`
    background-color: aqua;
    width: 100%;
    min-height: 220px;
`
