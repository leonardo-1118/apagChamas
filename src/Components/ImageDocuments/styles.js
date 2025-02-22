import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: baseline;
`
export const LicenseDocument = styled.div`

    margin: 0 -50px 0px 0;

   img {
    width: 200px;
    border: solid 3px #C3161C;
    border-radius: 5px;
    z-index: 4;
    padding: 2px;
   }

   @media(max-width: 500px) {
        img {
            width: 45vw;
        }
    }
`

export const AvcbImg = styled.div`
    img {
        width: 200px;
        border: solid 2px #C3161C;
        border-radius: 5px;
        z-index: 5;
    }

    @media(max-width: 500px) {
        img {
            width: 50vw;
        }
    }
`