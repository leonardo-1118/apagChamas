import { Container } from './styles'
import AvcbDocument from '../../assets/avcb-document.jpg'
import BombeiroImage from '../../assets/logotipo-bombeiros.png'
import AnvisaLogo from '../../assets/anvisa-logo.png'
import AbntLogo from '../../assets/abnt-logo.png'
import CetesbLogo from '../../assets/logo-cetesb.png'
import CreaspLogo from '../../assets/creasp-logo.jpg'
import SpLogo from '../../assets/LOGOTIPO-PREFEITURA.png'

function Introduction() {

    return (
        <Container>
            <div className="introduction">
                <div className='text'>
                    <h1>Obtenha seu AVCB e garanta a segurança e a conformidade do seu estabelecimento.</h1>
                    <p>Valor a partir de R$400,00</p>
                    <a href="https://api.whatsapp.com/send?phone=5511976984011&text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servicos%20da%20Apag%20Chamas" target='blank'>Entre em contato</a>
                </div>
                <div className='avcb-img'>
                    <img src={AvcbDocument} alt="documento-do-avcb" />
                </div>
            </div>
            <section>
                <img src={CreaspLogo} alt="logo-creasp" />
                <img src={BombeiroImage} alt="logo-bombeiro" />
                <img src={AnvisaLogo} alt="logo-anvisa" />
                <img src={AbntLogo} alt="logo-abnt" />
                <img src={CetesbLogo} alt="logo-cetesb" />
                <img src={SpLogo} alt="logo-governo-de-são-paulo" />
            </section>
        </Container>
    )
}

export default Introduction