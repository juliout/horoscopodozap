import { FooterDiv } from './footerStyled'
import { BiCopyright } from 'react-icons/bi'

export default function Footer() {
    return (
        <FooterDiv> 
            <div className="reservDiv">
                <h3>
                    nomedosite.org 2021                    
                </h3>
                    <BiCopyright className='cIcon'/>
                <h3>
                    Todos os direitos reservados                   
                </h3>
            </div>
            <img src="/image/lgpd.png" alt="lgpd icon" />
        </FooterDiv>
    )
}