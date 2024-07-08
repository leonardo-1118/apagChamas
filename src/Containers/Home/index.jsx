import Container from './styles'
import Header from '../../Components/Header'
import CoverImage from '../../assets/CapaApagChamas.png'
import AboutUs from '../../Components/AboutUs'
import OurServices from '../../Components/OurServices'
import Line from '../../Components/Line'
import Contacts from '../../Components/Contacts'
import ServiceRate from '../../Components/ServiceRate'

function Home() {

    return (
        <Container>
            <main>
                <Header />
                <img src={CoverImage} />
                <AboutUs />
                <Line />
                <OurServices />
                <Line />
                <Contacts />
                <ServiceRate />
                
            </main>
        </Container>
    )
}

export default Home