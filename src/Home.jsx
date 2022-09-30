import {useState} from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import MCadastro from './components/ModalCadastro'
import BtnFlip from './components/BtnFlip'
import LiPerguntas from './components/LiPerguntas'

import {BannerDiv, ComoFuncionaDiv, PerguntasDiv, IndicarBannerDiv, RestInfoDiv} from './homeStyled'

import { BsFillShareFill} from 'react-icons/bs'
import {RiUserUnfollowFill} from 'react-icons/ri'
import {VscDebugStackframeDot} from 'react-icons/vsc'
import {MdReportProblem} from 'react-icons/md'


export default function Home() {

  const [cadastrar, setCadastrar] = useState(false)

  const sendCadastrar = (e) => {
    e.preventDefault()
    setCadastrar(true)
  }

  return (
    <>
      <Header/>
     {cadastrar === true ? <MCadastro/> : null}
      <BannerDiv>
        <div className="bannerMain">
          <h1>Receba diariamente seu horóscopo no zap!</h1>
          <div className='content'>
            <div className='left'>
              <img src="/image/telzap.png" alt="telzap"/>
              <img src="/image/gratis.png" alt="gratis" className='gratis'/>
            </div>
            <form method="post" id='formCadastro'>
              <div className='forT'>
                <div className="input">
                  <label htmlFor="name">Seu nome:</label>
                  <input type="text" name='name' id='name'/>
                </div>
                <div className="input">
                  <label htmlFor="email">E-mail:</label>
                  <input type="text" name='email' id='email'/>
                </div>
              </div>
              <dir className='fotB'>
                <div className='input'>
                  <label htmlFor="">Gênero:</label>
                  <select name="genero" id="genero">
                    <option value="masculino">Masculino</option>
                    <option value="faminino">Femenino</option>
                    <option value="trans">Trans</option>
                    <option value="nbinario">Não binário</option>
                    <option value="fluido">Fluido</option>
                  </select>
                </div>
                <div className="input">
                  <label htmlFor="nascimento">Data de Nasc.:</label>
                  <input type="text" name='nascimento' id='nascimento'/>
                </div>
              </dir>
              <div className='receber baseFont'>
                <span>Você quer receber seu Horóscopo por:</span>
                <div className='redesSelect'>
                  <div className='cardRede'>
                    <img src="/image/bwpp.png" alt="" />
                    <input type="radio" name="rede" id="" />
                  </div>
                  <div className='cardRede'>
                    <img src="/image/btele.png" alt="" />
                    <input type="radio" name="rede" id="" />
                  </div>
                  <div className='cardRede'>
                    <img src="/image/bemail.png" alt="" />
                    <input type="radio" name="rede" id="" />
                  </div>
                </div>
                <input type="text" className='redeDado'/>
                <div className='termosdiv'>
                  <input type="checkbox" name="termos" id="termos" />
                  <label htmlFor="termos"> Li e aceito os <span>termos de uso</span></label>
                </div>
                <div className='cadastrarbtn'>
                  <button onClick={sendCadastrar}> CADASTRAR </button>                
                </div>
              </div>
                                         
            </form>
          </div>
          <span className='servico'>
            Serviço gratuito.
            Se quiser cancelar os envios basta clicar em "descadastrar" no rodapé do site
          </span>
        </div>      
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
          <div className="perguntasContainer">
            <LiPerguntas></LiPerguntas>
            <LiPerguntas></LiPerguntas>
            <LiPerguntas></LiPerguntas>
            <LiPerguntas></LiPerguntas>
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

      <RestInfoDiv>
        <div className="restMain">
          <div className="restTop">
            <div className="list">
              <BtnFlip text={'Quem somos'} />
              <VscDebugStackframeDot className='baseColor'/>
              <BtnFlip text={'Termos de uso'}/>
              <VscDebugStackframeDot className='baseColor'/>
              <BtnFlip text={'Fale conosco'}/>
              <VscDebugStackframeDot className='baseColor'/>
              <BtnFlip text={'Politica de privacidade'}/>  
            </div>
            <div className="list bot">
              <span className='baseFont '> Apoio:</span>
              <img src="/image/submarino.png" alt="logosubmarino" className='restLogo'/>
              <img src="/image/americanas.png" alt="logoamericanas" className='restLogo'/>
              <img src="/image/genera.png" alt="logogenera" className='restLogo'/>
            </div>
          </div>
          <div className="restBot">
            <div className='left'>
              <div>
                <RiUserUnfollowFill className='lIcon baseColor'/>
                <BtnFlip text={'descadastrar'}/>
              </div>
              <div>
                <MdReportProblem className='lIcon baseColor'/>
                <BtnFlip text={'reportar erro'}/>
              </div>
            </div>

            <div className='right'>
              <span className='baseFont'>
                compartilhe:
              </span>
              <div>
                <img src="/image/wppicon.png" alt="wppicon" className='socialIcons'/>
                <img src="/image/teleicon.png" alt="telegramicon" className='socialIcons'/>
                <img src="/image/instaicon.png" alt="instagramicon" className='socialIcons'/>
                <img src="/image/faceicon.png" alt="facebookicon" className='socialIcons'/>
                <img src="/image/tticon.png" alt="twittericon" className='socialIcons'/>
                <img src="/image/linkicon.png" alt="linkedinicon" className='socialIcons'/>
              </div>
            </div>
          </div>
        </div> 
      </RestInfoDiv>
      <Footer/>
    </>
  );
}
