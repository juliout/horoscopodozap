import Header from './components/Header'
import Footer from './components/Footer'
import {BannerDiv, ComoFuncionaDiv, PerguntasDiv, IndicarBannerDiv, RestInfoDiv} from './homeStyled'

import { BsFillShareFill} from 'react-icons/bs'
import {RiArrowDropDownLine} from 'react-icons/ri'


export default function Home() {
  return (
    <>
      <Header/>

      <BannerDiv>      
      </BannerDiv>

      <ComoFuncionaDiv>
        <div className="funcionaMain">
          <div className='funcionaTop'>
            <h1>Como Funciona?</h1>
            <p>Para receber os lembretes, basta você seguir os passos abaixo:</p>
          </div>
          <div className='funcionaBottom'>
            <div className="funcionaCard">
              <span className='cardN'>1</span>
              <p> 
                Cadastre os horários que você 
                termina suas refeições no 
                nosso sistema. 
              </p>
              <img src="/image/card1.png" alt="card" />
            </div>
            <div className="funcionaCard">
              <span className='cardN'>2</span>
              <p>
                cadastre seus dados e uma senha, 
                para que você possa editar ou cancelar o envio dos 
                lembretes aqui pelo site
              </p>
              <img src="/image/card2.png" alt="card" />
            </div>
            <div className="funcionaCard">
              <span className='cardN'>3</span>
              <p>
                Pronto! Todos os dias, ao fim de cada refeição,
               você receberá no zap um lembrete para escovar os dentes.
                O serviço é 100% gratuito e não precisa de instalação de 
                nenhum tipo de aplicativo no seu celular.
              </p>
              <img src="/image/card3.png" alt="card" />
            </div>
            <div className="funcionaCard">
              <span className='cardN exclam'>!</span>
              <p>
                Se você quiser alterar os horários ou cancelar o envio dos 
                lembretes, basta entrar aqui no site e acessar o sistema, 
                usando a senha que você criou no momento do cadastro.
              </p>
              <img src="/image/card4.png" alt="card" />
            </div>

          </div>
        </div>
      
      </ComoFuncionaDiv>
    
      <PerguntasDiv>
        <div className="perguntasMain">
          <h1>Perguntas Frequentes</h1>

          <div className="perguntasDiv">
            <h3>Punctuation conventions used in Chinese languages</h3>
            <RiArrowDropDownLine className='arrowIcon'/>
          </div>
          <div className="perguntasDiv">
            <h3>Punctuation conventions used in Chinese languages</h3>
            <RiArrowDropDownLine className='arrowIcon'/>
          </div>
          <div className="perguntasDiv">
            <h3>Mark added to a letter</h3>
            <RiArrowDropDownLine className='arrowIcon'/>
          </div>
          <div className="perguntasDiv">
            <h3>Mark added to a letter</h3>
            <RiArrowDropDownLine className='arrowIcon'/>
          </div>
        </div>

      </PerguntasDiv>
      
      <IndicarBannerDiv>
        <div className="indicaMain">
          <div className="indicarLeft">
            <h1>Título texto alerta de Horoscopo exemplo</h1>
            <button> Indicar Amigos <BsFillShareFill className='shareIcon'/></button>
          </div>
          <div className="indicarRight">
            <img src="/image/indicarImg2.png" alt="conjuntodeimages" />
          </div>
        </div>
      </IndicarBannerDiv>

      <RestInfoDiv></RestInfoDiv>
      <Footer/>
    </>
  );
}
