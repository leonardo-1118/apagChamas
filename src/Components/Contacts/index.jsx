import { Container } from "./styles";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { BsTelephoneForward } from "react-icons/bs";
import { RiMapPinLine } from "react-icons/ri";

function Contacts() {

    return (
        <Container>
            <div className="head">
                <h3> <a href="https://api.whatsapp.com/send?phone=5511976984011&text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servicos%20da%20Apag%20Chamas" target="blank">Solicite um Orçamento</a></h3>
                <a className="adress" href="https://maps.app.goo.gl/c3P16AoPgeeAzEwn6" target="blank">Av. Paulista. 1471 - Conj. 409 (4º andar) - São Paulo / SP <RiMapPinLine /></a>
            </div>
            <div className="social-contacts">
                <a href="https://www.instagram.com/apag_chamasdobrasil?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="blank">
                    <div className="box">
                        <FaInstagram />
                    </div>
                    <p>Instagram</p>
                </a>

                <a href="https://api.whatsapp.com/send?phone=5511976984011&text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servicos%20da%20Apag%20Chamas" target="blank">
                    <div className="box">
                        <FaWhatsapp />
                    </div>
                    <p>WhatsApp</p>
                </a>

                <a href="tel:5511976984011" target="blank">
                    <div className="box">
                        <BsTelephoneForward />
                    </div>
                    <p>Telefone</p>
                </a>
            </div>
        </Container>
    )
}

export default Contacts