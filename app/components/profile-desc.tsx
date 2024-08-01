"use client";
import { RiDoubleQuotesL } from "react-icons/ri";
import Link from "next/link";
import TIIcons from "./ti-icons";

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
            Développeur Full Stack, spécialisé en Spring Boot et Java pour le
            backend, et en Angular et React pour le frontend. Compétent en
            JavaScript et Typescript, je crée des applications robustes et
            performantes. Passionné par l&pos;amélioration continue et la
            collaboration efficace en équipe, je suis capable de transformer des
            exigences complexes en solutions intuitives et fonctionnelles, avec
            une attention particulière aux détails et à l&pos;expérience
            utilisateur.
            <RiDoubleQuotesL
              className="relative -bottom-2 inline rotate-180 text-3xl"
              fill="yellow"
            />
            <span>
              <Link className="btn btn-sm btn-info" href="#contact">
                Me contacter
              </Link>
            </span>
          </p>
        </div>

        <div className="pb-10">
          <TIIcons color="gray" size={4} />
        </div>
      </div>
    </>
  );
};

export default ProfileDescPage;
