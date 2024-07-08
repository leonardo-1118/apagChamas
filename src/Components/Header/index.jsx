import { Container } from './styles'
import LogoApagchamas from '../../assets/logo-apagchamas.png'

function Header() {
    
    return(
        <Container>
            <div className='image-section'>
                <img src={LogoApagchamas} alt="logo-APAGCHAMAS" />
            </div>
        </Container>
    )
}

export default Header