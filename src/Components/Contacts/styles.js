import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-family: 'lato';
    margin-bottom: -300px;
    z-index: 2;

    .adress {
        font-size: 30px;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    h3 {
        font-size: 35px;
        margin-bottom: 25px;
    }

    p {
        font-size: 25px;
        font-family: 'lato';
        margin-top: 10px;
    }

    .head {
        margin-bottom: 60px;
        padding: 0 50px;
    }

    .social-contacts {
        display: flex;
        justify-content: space-around;
        width: 80%;

        .box {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 150px;
            height: 150px;
            border: 10px solid #000;
            border-radius: 45px; 
            margin: 0 10px;
            transition: transform 1.3s ease;
            transition: transform 1.3s ease, border-color 0.3s ease;

            svg {
                transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), color 0.5s ease;
                font-size: 90px;
                color: #000;
            }

            &:hover  {
                border-color: #C3161C;
                
                svg {
                    transform: rotate(15deg);
                    color: #C3161C;
                }
            }
        }
    }
    
    @media(max-width: 790px) {
        margin-bottom: -400px;
    }

    @media(max-width: 590px) {
        .adress {
            font-size: 20px;
        }

        p {
            font-size: 15px;
        }

        .social-contacts {
            .box {
                width: 75px;
                height: 75px;
                border-radius: 25px;
                border: 5px solid #000;

                svg {
                    font-size: 40px;
                }
            }
        }
    }
`