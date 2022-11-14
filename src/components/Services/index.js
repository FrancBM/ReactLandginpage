import React from "react";
import Icon1 from "../../images/img8.jpg";
import Icon2 from "../../images/img7.jpg";
import Icon3 from "../../images/img6.jpg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Ventajas</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Multifuncional</ServicesH2>
          <ServicesP>
            Carga distintos dispositivos con un solo cable a tu comodidad,
            ahorrando espacio y energía
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Carga Rápida</ServicesH2>
          <ServicesP>
            Con su sistema de Output Power: 5W, 15W, 10W, 7.5W carga tus
            dispositivos en menor tiempo.{" "}
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Estilo</ServicesH2>
          <ServicesP>
            Decora tu espacio con un gadget estético que ayudará a organizar
            mejor tu lugar y a tener todo al alcance.{" "}
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
