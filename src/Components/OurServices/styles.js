import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    padding: 0 10px 40px;
    font-family: "Lato", sans-serif;
    align-items: center;

    .introduction {
        text-align: center;
        width: 80%;

        h2 {
            font-size: 35px;
            color: #C3161C;
            font-weight: 800;
            margin: 50px 0;
        }

        p {
            margin: 0 0 45px;
            font-size: 16px;
            line-height: 1.6;
        }
    }

    .services {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .regularisation {
        gap: 5vw;
    }

    .text {
        font-size: 20px;
    }

    .ico {
        font-size: 25px;
        margin: 0 5px;
        vertical-align: middle;
    }

    img {
        width: 100%;
    }

    ul {
        list-style: none;  
    }

    li {
        margin: 20px 0;
    }

    .text-two {
        text-align: end;
        
    }

    @media(max-width: 900px) {
        padding:  0 30px;

        .services {
        flex-direction: column;
        margin-bottom: 50px;
        }

        .services .text {
            font-size: 15px;
        }
    }
`