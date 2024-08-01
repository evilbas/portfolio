import TIIconsPages from "../components/ti-icons";
import { Metadata } from "next";
import SkillItem from "../components/skill-item";

const SkillsPage = () => {
  return (
    <div id="skills mb-10">
      <h1 className="py-5 text-4xl font-bold text-cyan-800 text-center">
        Technologies
      </h1>
      <br />
      <TIIconsPages />

      <div className="my-5 animate-rotate-x">
        <div className="mt-10">
          <h1 className="mb-4 text-3xl sm:text2xl text-center">
            Structure et Design
          </h1>
          <div className="flex flex-wrap justify-around gap-5">
            <SkillItem progression={100} name="HTML" />
            <SkillItem progression={100} name="CSS" />
            <SkillItem progression={100} name="TailwindCSS" />
            <SkillItem progression={100} name="Bootstrap" />
          </div>
        </div>
        <div className="mt-10">
          <h1 className="text-3xl sm:text2xl text-center">
            Langage de programmation
          </h1>
          <div className="flex flex-wrap justify-around gap-5">
            <SkillItem progression={80} name="Java" />
            <SkillItem progression={70} name="Kotlin" />
            <SkillItem progression={80} name="Typescript" />
            <SkillItem progression={90} name="Javascript" />
          </div>
          <div className="flex flex-wrap justify-around gap-5">
            <SkillItem progression={80} name="PHP" />
            <SkillItem progression={50} name="C#" />
            <SkillItem progression={70} name="Python" />
            <SkillItem progression={50} name="C" />
          </div>
        </div>
      </div>

      <div className="animate-bounce animate-twice">
        <div className="mt-10">
          <h1 className="mb-10 text-3xl sm:text2xl text-center">
            Frameworks et Librairies
          </h1>
          <div className="mt-10 flex flex-wrap justify-around gap-5">
            <SkillItem progression={70} name="Sping BOOT" />
            <SkillItem progression={50} name="Quarkus" />
            <SkillItem progression={90} name="React" />
            <SkillItem progression={90} name="Angular" />
            <SkillItem progression={90} name="Next.js" />
          </div>
        </div>
      </div>
      <div className="animate-bounce animate-twice">
        <div className="mt-10">
          <h1 className="mb-10 text-3xl sm:text2xl text-center">
            Base de données
          </h1>
          <div className="mt-10 flex flex-wrap justify-around gap-5">
            <SkillItem progression={80} name="MySQL" />
            <SkillItem progression={80} name="PostgreSQL" />
            <SkillItem progression={80} name="MongoDB" />
          </div>
        </div>
      </div>
      <div className="animate-bounce animate-twice">
        <div className="mt-10">
          <h1 className="mb-10 text-3xl sm:text2xl text-center">
            Infrastructure et DevOps
          </h1>
          <div className="mt-10 flex flex-wrap justify-around gap-5">
            <SkillItem progression={70} name="Docker" />
            <SkillItem progression={70} name="Jenkins" />
            <SkillItem progression={80} name="Gitlab" />
            <SkillItem progression={80} name="Github" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const metadata: Metadata = {
  title: "Abdoulaye BA Portfolio - Technologies",
  description:
    "The technologies used for the development of my personal and professional projects.",
  category: "Skills",
  twitter: {
    card: "summary",
    site: "@evilbas1038",
    title: "Abdoulaye BA Portfolio - Technologies",
    description:
      "The technologies used for the development of my personal and professional projects.",
    images: [
      {
        url: "/images/skills.jpg",
        alt: "Abdoulaye BA Portfolio - Technologies",
      },
    ],
  },
};

export default SkillsPage;
