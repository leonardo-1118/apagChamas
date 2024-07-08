import { Container } from "./styles";
import { BsBuildingFillGear, BsClipboardCheck, BsPatchCheck } from "react-icons/bs";
import { FaFire, FaFireExtinguisher } from "react-icons/fa6";
import { FaRunning, FaHandsHelping } from "react-icons/fa";
import { GrDocumentText } from "react-icons/gr";
import { ImExit } from "react-icons/im";
import { GiFireShield, GiRingingAlarm, GiArmorUpgrade } from "react-icons/gi";
import { RiAlarmWarningLine } from "react-icons/ri";
import { MdOutlineFireHydrantAlt } from "react-icons/md";
import avcbImage from '../../assets/avcb-image.jpg';
import epiImage from '../../assets/epi-apagchamas2.png';

function OurServices() {

    return (
        <Container>
            <div className="introduction">
                <h2>Serviços de Regularização</h2>
                <p>Não importa o tamanho de sua empresa, temos soluções para proteger pequenas, médias e grandes corporações contra incêndio.</p>
            </div>

            <div className="services regularisation">
                <div>
                    <img src={avcbImage} alt="documentação-do-AVCB" />
                </div>

                <div className="text-one">
                    <ul>
                        <li><BsPatchCheck className="ico" /> Aprovação de Projetos</li>
                        <li><BsClipboardCheck className="ico" /> Projetos e Consultoria</li>
                        <li><FaHandsHelping className="ico" /> Elaboração de Projetos</li>
                        <li><FaRunning className="ico" /> Projeto para Rota de Fuga</li>
                        <li><BsBuildingFillGear className="ico" /> Projeto Plano de Abandono</li>
                        <li><GrDocumentText className="ico" /> Vistoria e Obtenção do AVCB</li>
                        <li><GiFireShield className="ico" /> Vistoria do Corpo de Bombeiros</li>
                        <li><FaFire className="ico" /> Treinamento Brigadas de Incêndio</li>
                    </ul>
                </div>
            </div>

            <div className="introduction">
                <h2>Produtos Contra Incêndio</h2>
            </div>

            <div className="services">
                <div className="text-two">
                    <ul>
                        <li>Extintores Novos e Recondicionados <FaFireExtinguisher className="ico" /></li>
                        <li>Acessórios e EPI’s <GiArmorUpgrade className="ico" /></li>
                        <li>Placas Indicativas <ImExit className="ico" /></li>
                        <li>Alarmes e Detectores<GiRingingAlarm className="ico" /></li>
                        <li>Hidrantes e Mangueiras <MdOutlineFireHydrantAlt className="ico" /></li>
                        <li>Iluminações de Emergência <RiAlarmWarningLine className="ico" /></li>
                    </ul>
                </div>
                <div>
                    <img src={epiImage} alt="documentação-do-AVCB" />
                </div>
            </div>
        </Container>
    )
}

export default OurServices