import {ModalDiv} from './modalStyled'
import InputText from '../inputText'
import BtnFlip from '../BtnFlip'

export default function MCadastro() {
    return (
        <ModalDiv>
            
            <div className="modalMain">
                <form action="" id='formSendCadastro'>
                    <h2 className='formTitle'>
                        Complete seu cadastro e escolha uma senha para que você possa
                        editar ou cancelar seus alertas aqui pelo site.
                    </h2>
                    <div className='divForm'>
                        <InputText
                            divTamanhoX={'95%'} inputTamanhoX={'100%'}
                            text={'Nome Completo'} lColor={'white'}
                            inputTamanhoY={'35px'}
                        />
                        <div className='stwo'>
                            <InputText
                                divTamanhoX={'30%'} inputTamanhoX={'100%'}
                                text={'Data Nascimento:'} lColor={'white'}
                                inputTamanhoY={'35px'} name={'dataNascimento'} 
                                htmlfor={'dataNascimento'} id={'dataNascimento'}
                            />
                            <InputText
                                divTamanhoX={'30%'} inputTamanhoX={'100%'}
                                text={'E-mail:'} lColor={'white'}
                                inputTamanhoY={'35px'} name={'dataNascimento'} 
                                htmlfor={'dataNascimento'} id={'dataNascimento'}
                            />
                            <InputText
                                divTamanhoX={'30%'} inputTamanhoX={'100%'}
                                text={'Crie uma Senha:'} lColor={'white'}
                                inputTamanhoY={'35px'}
                            />
                        </div>
                        <p className='pform'>
                            Para cadastrar mais veículos, editar ou cancelar o envio dos alertas,
                            acesse a área administrativa do site com sua senha.
                        </p>

                        <div className='divtemos'>
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">Li e aceito os <span>termos de uso</span>.</label>
                        </div>
                        <button className='prontobtn'>Pronto!</button>
                    </div>
                </form>                
            </div>
        </ModalDiv>
    )
}