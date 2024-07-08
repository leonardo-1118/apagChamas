import { Container } from "./styles"
import documentsImage from '../../assets/Documents-image2.png'

function AboutUs() {

    return (
        <Container>
            <div className="paragraph">
                <h2>Obtenha seu AVCB Rapidamente e Sem Complicações</h2>

                <p>Bem-vindo ao <strong>Apag Chamas, especializada em prevenção e combate a incêndios.</strong> Oferecemos soluções técnicas para garantir a conformidade com as normas de segurança e a renovação do AVCB.</p>
                <br />
                <p>Nossos técnicos qualificados oferecem assistência completa, incluindo manutenção preventiva e corretiva. Encontre aqui recursos para entender exigências legais, agendar vistorias e acompanhar o status do AVCB.</p>
                <br />
                <p>A <strong>Apag Chamas</strong> protege vidas e patrimônios, destacando-se na prevenção de riscos de incêndio. Explore nosso site para conhecer nossos serviços e conte conosco para um ambiente mais seguro.</p>

                <a href="https://api.whatsapp.com/send?phone=5511976984011&text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servicos%20da%20Apag%20Chamas">Entre em contato</a>
            </div>
            <div>
                <img src={documentsImage} alt="mãos-segurando-documentos" />
            </div>
        </Container>
    )
}

export default AboutUs