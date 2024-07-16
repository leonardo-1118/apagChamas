import Container from './styles'
import Header from '../../Components/Header'
import CoverImage from '../../assets/CapaApagChamas.png'
import OurServices from '../../Components/OurServices'
import Line from '../../Components/Line'
import Contacts from '../../Components/Contacts'
import ServiceRate from '../../Components/ServiceRate'
import Introduction from '../../Components/Introduction'

function Home() {

    return (
        <Container>
            <main>
                <Header />
                <img src={CoverImage} />
                <Introduction />
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