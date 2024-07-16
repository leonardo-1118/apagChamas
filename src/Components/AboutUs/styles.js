import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    justify-content: space-between;
    font-family: "Lato", sans-serif;
    padding: 50px 50px 80px;

    .paragraph {
        width: 55%;
        display: flex;
        flex-direction: column;
        align-items: center;

        h2 {
            font-size: 28px;
            color: #C3161C;
            letter-spacing: 1px;
            font-weight: 900;
            margin-bottom: 30px;
        }

        p {
            margin-bottom: 10px;
            font-size: 16px;
            line-height: 1.5;
            text-align: justify;
        }

        a {
            margin-top: 30px;
            background-color: #C3161C;
            color: #fff;
            text-decoration: none;
            font-size: 20px;
            width: 200px;
            height: 50px;
            text-align: center;
            border-radius: 15px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            font-weight: 600;
            font-size: 20px;
            transition: 0.5s ease;
            font-family: 'lato';
        }

        a:hover {
            background-color: black;
        }
    }

    @media(max-width: 810px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px 30px 0;

        .paragraph {
            margin: 20px;
            width: 100%;
        }

        img {
            max-width: 90%;
        }
    }
`

export default Container