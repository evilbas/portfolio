"use client";
import { RiDoubleQuotesL } from "react-icons/ri";
import Link from "next/link";
import TIIcons from "./ti-icons";

const ProfileDescPage = () => {
  return (
    <>
      <div
        className="polyg bg-gradient-to-r from-blue-950 to-gray-900 overflow-y-auto min-h-screen"
        style={{
          height: "40vh",
          width: "100%",
        }}
      >
        <div className="relative p-2">
          <h1 className="text-4xl text-center text-cyan-100">
            Full Stack Developper - DevOps Engineer
          </h1>
          <p className="p-2 text-xl font-thin text-cyan-100 animate-rotate-x">
            <RiDoubleQuotesL
              className="relative bottom-2 inline text-3xl"
              fill="yellow"
            />
            <b>Développeur Full Stack</b>, spécialisé en développement backend
            avec Java, C#/.NET et Python, et frontend avec Angular et React.
            Avec une maîtrise approfondie des frameworks modernes et des
            technologies comme JavaScript et TypeScript, je conçois des
            applications robustes, performantes et évolutives. Passionné par
            l&apos;amélioration continue et la collaboration en équipe, je
            transforme des exigences complexes en solutions intuitives et
            orientées utilisateur, tout en assurant une grande attention aux
            détails et à l&apos;expérience utilisateur.
            <RiDoubleQuotesL
              className="relative -bottom-2 inline rotate-180 text-3xl"
              fill="yellow"
            />
            <span>
              <Link className="btn btn-sm btn-info" href="/contact">
                Me contacter
              </Link>
            </span>
          </p>
        </div>

        <div className="pb-10">
          <TIIcons color="gray" size={4} />
        </div>

        <div className="flex flex-col items-center">
          <h1 className="font-extralight bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text text-[4rem] md:text-[5rem] lg:text-[6rem]">
            Recherche
          </h1>
          <h1 className="font-extralight bg-gradient-to-r from-indigo-400 via-blue-600 to-green-500 inline-block text-transparent bg-clip-text text-[4rem] md:text-[5rem] lg:text-[6rem]">
            Innovation
          </h1>
          <h1 className="font-extrabold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text text-[4rem] md:text-[5rem] lg:text-[6rem]">
            Créativité
          </h1>
        </div>
      </div>
    </>
  );
};

export default ProfileDescPage;
