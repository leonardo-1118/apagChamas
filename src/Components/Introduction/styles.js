import styled from "styled-components";

export const Container = styled.div`
    font-family: 'lato';

    section {
        display: flex;
        flex-direction: column;
        align-items: center;

        .images {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
        }

        img {
            margin-top: 5px;
            border-radius: 15px;
            height: 50px;
            margin: 0 5px 10px;
        }

        .text {
            width: 90%;
            margin: 60px 0;

            p {
                text-align: center;
                font-weight: 700;
                font-size: 17px;
            }
        }
    }

    .introduction {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 50px;

        .avcb-img {
            img {
                width: 200px;
                border: solid 2px #C3161C;
                border-radius: 5px;
                padding: 2px;
            }
        }

        .text {
            width: 450px;

            h1 {
                font-weight: 800;
            }
            
            p {
                margin-top: 10px;
                font-weight: 500;
                font-size: 17px;
            }
        
            a {
                margin-top: 35px;
                background-color: #C3161C;
                color: #fff;
                text-decoration: none;
                font-size: 20px;
                width: 200px;
                height: 50px;
                text-align: center;
                border-radius: 10px;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                font-weight: 600;
                font-size: 20px;
                transition: 0.5s ease;
            }
            
            a:hover {
                background-color: black;
            }
        }

        @media(max-width: 800px) {

            padding: 0 50px;

            h1 {
                font-size: 27px;
                width: 85%;
            }
        }

        @media(max-width: 800px) {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 20px;

            .text {
                width: 90%; /* Ajusta a largura para telas menores */
                align-items: center;
                justify-content: center;

                h1 {
                    font-size: 27px;
                    width: 100%; /* Ajusta a largura para telas menores */
                }

                p {
                    margin-top: 30px;
                }

                a {
                    width: 100%;
                    height: 60px;
                    margin-bottom: 40px;
                }
            } 
        }
    }
`