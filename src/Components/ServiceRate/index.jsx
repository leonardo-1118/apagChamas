import React from 'react';
import { Container } from './styles';
import { BiSolidLike, BiTransferAlt, BiReceipt } from "react-icons/bi";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { PiHandshake } from "react-icons/pi";
import { BsGraphUpArrow } from "react-icons/bs";

function ServiceRate() {
  return (
    <Container>
      <div className="inner-header flex">
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto">
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(0,0,0,0.7)" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(0,0,0,0.5)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(0,0,0,0.3)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#000" />
          </g>
        </svg>
      </div>
      <div className="content">
        <h1>Porque escolher a Apag&nbsp;Chamas</h1>
        <table>
          <tbody>
            <tr>
              <td className='left'>
                <div className="left">
                  <BiSolidLike className='ico' />

                  <div className='text'>
                    <h2>Satisfação</h2>
                    <p>De pequenas a grandes empresas, a Apag Chamas conta com mais de 1.000 clientes satisfeitos em todo o Brasil.</p>
                  </div>
                </div>
              </td>
              <td>
                <div className="right">
                  <TbRosetteDiscountCheckFilled className='ico' />

                  <div className='text'>
                    <h2>Autoridade</h2>
                    <p>Nossos profissionais são certificados e estão preparados para encontrar as melhores soluções contra incêndio.</p>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="left">
                  <BiReceipt className='ico' />

                  <div className='text'>
                    <h2>Discrição</h2>
                    <p>A Apag Chamas te ajuda a regularizar seus débitos com todos os orgãos responsáveis.</p>
                  </div>
                </div>
              </td>
              <td>
                <div className="right">
                  <BiTransferAlt className='ico' />

                  <div className='text'>
                    <h2>Transparência</h2>
                    <p>A transparência molda nossas relações com clientes, parceiros e colaboradores.</p>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className='left'>
                  <PiHandshake className='ico' />

                  <div className='text'>
                    <h2>Tranquilidade</h2>
                    <p>As soluções inteligentes da Apag Chamas permitem que você foque no mais importante - seu negócio.</p>
                  </div>
                </div>
              </td>
              <td>
                <div className="right">
                  <BsGraphUpArrow className='ico' />

                  <div className='text'>
                    <h2>Inovação</h2>
                    <p>A Apag Chamas está sempre à frente, adotando as mais novas tecnologias e práticas para garantir a segurança contra incêndios.</p>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Container>
  )
}

export default ServiceRate