import { Container, LicenseDocument, AvcbImg } from './styles'
import AvcbDocument from '../../assets/avcb-document.jpg'
import DocumentLicense from '../../assets/licenseImage.png'

function ImageDocument() {

    return (
        <Container>
            <LicenseDocument>
                    <img src={DocumentLicense} alt="documento-de-licença-de-funcionamento" />
            </LicenseDocument>
            
            <AvcbImg>
                    <img src={AvcbDocument} alt="documento-do-avcb" />
            </AvcbImg>
        </Container>
    )
}

export default ImageDocument