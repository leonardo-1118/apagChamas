import styled from "styled-components";

export const Container = styled.div`
background-color: #fff;

img {
    width: 100%;
    max-width: 400px;
}

.image-section {
    width: 40%;
    margin: 5px 0 5px 50px;

}

@media(max-width: 700px) {
    .image-section {
        width: 65%;
        margin: 5px 0 5px 20px;
    }
}
`