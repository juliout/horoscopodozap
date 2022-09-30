import styled from "styled-components";

export const BannerDiv = styled.div`
    
    width: 100%;
    height: 570px;
    background-image: url('./image/bannerastro.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    
    @media (max-width: 623px) {
        height: 600px;
    }

    .bannerMain {
        width: 100%;
        height: 100%;
        max-width: 600px;

        margin: 0 auto;

        display: flex;
        flex-direction: column;
        align-items: center;

        h1 {
            color: #ffba27;
            margin: 20px 0 10px 0;
            text-align: center;

        }
        .content {
            display: flex;
            justify-content: center;
            width: 100%;
            height: 420px;
            margin-bottom: 5px;

            .left {
                width: 35%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: center;
                margin-right: 20px;

                img {
                    width: 90%;
                    min-width: 190px;
                    height: 350px;
                }
                .gratis {
                    width: 140px;
                    height: 60px;
                }
            }

            #formCadastro {
                width: 50%;
                height: 100%;
                
                .forT {
                    height: 15%;
                    display: flex;
                    justify-content: space-between;
                }
                .fotB {
                    display: flex;
                    height: 15%;
                    margin-top: 5px;
                }

                .input  {
                    display: flex;
                    flex-direction: column;
                    width: 47%;
                    
                    label {
                        color: #ffba27;
                        margin-bottom: 5px;
                    }
                    input[type=text] {
                        padding-left: 10px;
                        width: 100%;
                        height: 35px;
                        border-radius: 10px;
                        border: 1px black solid
                    }    
                    
                    select {
                        -webkit-appearance: none;
                        -moz-appearance: none;
                        -ms-appearance: none;
                        appearance: none;
                        width: 70%;
                        height: 35px;
                        padding: 0 10px;
                        border-radius: 10px;                        
                    }
                    #genero{
                        background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='purple'><polygon points='0,0 100,0 50,50'/></svg>");
                        background-repeat: no-repeat;
                        background-size: 13px;
                        background-position-x: 82px;
                        background-position-y: 15px;
                        background-color: white;
                    } 
                }

                .receber {
                    width: 100%;
                    height: 68%;
                    padding-top: 5px;
                    span {
                        color: #ffba27;
                        font-size: 0.85rem;
                        font-weight: 700;
                        height: 9%;
                    }
                    .redesSelect {
                        display: flex;
                        justify-content: space-between;
                        width: 90%;
                        height: 38%;
                        padding-top: 5px;                        
                    }
                    .cardRede {
                        
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: space-around;
                        width: 32%;
                        height: 100px;
                        img {
                            width: 70px;
                            height: 70px;
                        }

                        input[type=radio] {
                            width: 17px;
                            height: 17px;
                            box-shadow: inset 0 0 5px #05050571;
                        }
                    }
                    .redeDado{
                        width: 90%;
                        height: 35px;

                        border-radius: 10px;
                        margin-top: 10px;
                        border: 1px black solid;
                        padding-left: 30px;
                    }
                    .termosdiv {
                        width: 90%;
                        
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding-top: 10px;
                        label {
                            margin-left: 5px;
                            font-size: 0.7rem;
                            color: white;
                            span {
                                font-size: 0.7rem;
                            }
                        }
                    }
                    .cadastrarbtn {
                        width: 90%;
                        margin-top: 10px;
                        
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        button {
                            width: 80%;
                            height: 55px;
                            border-radius: 10px;
                            border:1px black solid;
                            font-weight: 900;
                            font-size: 1.3rem;
                            background-color: #ffbb28;
                            
                        }
                    }

                }
            }
        }

        .servico {
            font-size: 0.7rem;
            font-weight: 500;
            font-family: 'Poppins', sans-serif;
            color:white;
            text-align: center;
            margin-top: 15px;
        }
    }
    @media (max-width: 413px) {
            height: 900px;
        .bannerMain {
            justify-content: space-around;
            .content {
                .left {
                    display: none;
                    background-color: red;
                    img{
                        display: none;
                    }
                }
                #formCadastro{
                    width:90%;
                    .receber {
                        width: 100%;
                        align-items: center;
                        .redesSelect {
                            justify-content: center;
                        }
                    }
                }
            }
        }

    }

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
        .perguntasContainer {
            width: 100%;
            display: flex;
            flex-direction: column;
        }

    }


`
export const IndicarBannerDiv = styled.div`
    
    width: 100%;
    min-height: 200px;
    height: auto;

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

        @media (max-width: 413px) {
            flex-direction: column;
            text-align: center;
        }

        .indicarLeft {
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: center;
        color: white;

        width: 50%;
        min-width: 200px;
        height: 100%;
        padding: 10px;
        
        h1{
            font-size: 1.4rem;
        }

        button{
            width: 50%;
            height: 40px;
            max-width: 250px;
            min-width: 200px;
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
        min-width: 200px;
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
    
    width: 100%;
    min-height: 220px;
    height: auto;

    display: flex;
    justify-content: center;

    .restMain {
        width: 100%;
        max-width: 1100px;
        
        min-height: 220px;
        height: auto;

        display: flex;
        flex-direction: column;
        
        .restTop {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            
            width: 100%;
            height: 140px;
            
            border-bottom: 5px #71265b solid;

            .list {
                display: flex;
                align-items: center;
                justify-content: space-around;
                width: 100%;
                height: 30%;
                max-width: 700px;

                .restLogo {
                    max-width: 110px;
                    height: 20px;
                    margin: 0 20px;
                }

                @media (max-width: 413px) {
                    width: 90%;
                    span {
                        font-size: 0,5rem;
                    }
                    .restLogo {
                        width: 90px;
                        margin: 0 5px;
                    }
                }

            }
            .bot {
                align-items: baseline;
                margin-top: 10px;
                font-weight: 700;
                font-size: 0.9rem;
                
            }
        }
        .restBot {
            width:100%;
            height: 80px;
            display: flex;
            align-items: center;
            padding-right: 5px;
            justify-content: space-between;

            @media (max-width: 623px) {
                flex-direction: column;
                margin: 10px 0;
            }

            .left {
                display: flex;
                
                div {
                    display: flex;
                    align-items: center;
                    margin-right: 10px;

                    span {
                        font-family: 'Poppins', sans-serif;
                        font-size: 0.7rem;
                        font-weight: 700;
                        margin-left: 10px;
                    }
                }
                .lIcon {
                    width: 25px;
                    height: 25px;
                }
            }

            .right {
                display: flex;
                align-items: center;
                div {
                    display: flex;
                    align-items: center;
                }
                span {
                    font-size: 0.8rem;
                    font-weight: 700;
                }
                .socialIcons {
                    width: 35px;
                    height: 35px;
                    margin-left: 10px;
                    :hover {
                        transform: scale(1.3);
                        cursor: pointer;
                    }
                }
                @media (max-width: 355px) {
                    flex-direction: column;
                }
            }
        }
    }
`
