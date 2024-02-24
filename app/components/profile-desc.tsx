"use client";
import { RiDoubleQuotesL } from "react-icons/ri";
import TIIconsPages from "./ti-icons";
import Link from "next/link";

const ProfileDescPage = () => {
  return (
    <>
      <div
        className="polyg bg-gradient-to-r from-blue-950 to-gray-900 overflow-y-auto"
        style={{
          height: "40vh",
          width: "100%",
        }}
      >
        <div className="relative p-2">
          <h1 className="text-4xl text-center text-cyan-100">
            Full Stack Developper - DevOps
          </h1>
          <p className="p-2 text-xl font-thin text-cyan-100 animate-rotate-x">
            <RiDoubleQuotesL
              className="relative bottom-2 inline text-3xl"
              fill="yellow"
            />
            Titulaire d&apos;un Master Expert en Informatique et Système
            d&apos;Information, je suis un Développeur Fullstack et DevOps avec
            une expérience significative dans le domaine des TI. J&apos;ai
            travaillé sur plusieurs projets et je suis capable de travailler sur
            plusieurs technologies. Egalement, je suis capable de travailler en
            équipe et de gérer des projets informatique en mode classique, agile
            ou &quot;semi-agile&quot;. Je suis très motivé et je suis prêt à
            relever de nouveaux défis. Mes compétences en DevOps me permettent
            de mettre en place un environnement opérationnel intégrant les TDD
            et facilitant l&apos;évolution, l&apos;orchestration et le
            déploiement des applications; ce qui est un atout pour une
            entreprise.
            <RiDoubleQuotesL
              className="relative -bottom-2 inline rotate-180 text-3xl"
              fill="yellow"
            />
            <span>
              <Link className="btn btn-info" href="contact">
                Me contacter
              </Link>
            </span>
          </p>
        </div>

        <TIIconsPages color="gray" size={4} />
      </div>
    </>
  );
};

export default ProfileDescPage;
