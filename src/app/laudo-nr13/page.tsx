/* eslint-disable react-hooks/rules-of-hooks */

"use client";
import CardAccordion from "@/components/CardAccordion";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { dataNr13 } from "@/data";
import Image from "next/image";
import { useState } from "react";

export default function page() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index: any) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="h-full">
      <Nav />
      <div className="px-5 lg:px-60 py-32 flex flex-col items-center justify-center gap-10 bg-azul-claro ">
        <div className="mt-32 flex flex-col justify-center items-center">
          <h2 className="lg:text-6xl text-4xl pb-4 font-bold text-white">
            NR 13 - CALDEIRAS, VASOS DE PRESSÃO, TUBULAÇÕES E TANQUES METÁLICOS DE
            ARMAZENAMENTO
          </h2>
        </div>
        <a
          title="Fale com nossa Equipe"
          href="/#falarconosco"
          className="bg-blue-500 hover:bg-blue-600 w-fit lg:px-20 py-4 px-10 lg:py-5 lg:text-3xl text-xl text-white rounded-2xl font-bold"
          style={{
            boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
          }}
        >
          Fale com nossa Equipe
        </a>
      </div>
      <div className="px-5 lg:px-60 flex flex-col gap-5 lg:mb-40 mb-20 lg:py-32 py-20">
        <div className="flex flex-col gap-10 pb-8">
          <h2 className="lg:text-5xl text-3xl  pb-8 font-bold text-azul-claro">
          Mantenha seus funcionários e equipamentos seguros e em conformidade com a NR13!
          </h2>
          <h3 className="lg:text-3xl text-2xl  pb-8 font-bold text-azul-claro">
          Transforme a segurança em prioridade com nossos serviços especializados
          </h3>
          <p className="text-cinza-medio-texto-sec  text-2xl">
          Você sabia que a segurança e a conformidade com a NR13 são fundamentais para a operação segura e eficiente de caldeiras e vasos de pressão? Estamos aqui para garantir que seus equipamentos estejam sempre em perfeitas condições e alinhados com as normas regulamentadoras, proporcionando tranquilidade e proteção para sua equipe e operação.
          </p>
        </div>
        <div className="flex lg:flex-row flex-col gap-10">
          <div className="lg:w-1/2 flex flex-col gap-4">
            {dataNr13.map((item) => (
              <CardAccordion
                id={item.id}
                key={item.id}
                question={item.title}
                answer={item.text}
                activeAccordion={activeAccordion}
                toggleAccordion={toggleAccordion}
                sigla={""}
              />
            ))}
          </div>
          <div className="lg:w-1/2">
            <Image
              className="rounded-2xl"
              src={"/nr13.jpg"}
              width={600}
              height={600}
              alt="Laudo NR13"
            />
          </div>
        </div>
        <div>
          <p className="lg:text-3xl text-2xl  pb-8 font-bold text-azul-claro">Entre em contato conosco para garantir que seus equipamentos estejam sempre em conformidade com a NR13 e seguros. Estamos prontos para oferecer suporte completo e especializado para atender a todas as suas necessidades de segurança e conformidade.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
