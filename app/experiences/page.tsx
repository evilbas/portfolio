import { Metadata } from "next";
import { CiLink } from "react-icons/ci";

const ExperiencesPage = () => {
  return (
    <div id="experiences" className="px-5 lg:px-40">
      <h1 className="py-5 text-4xl font-bold text-cyan-800 text-center">
        Experiences
      </h1>

      <div className="p-4">
        <h2 className="text-4xl sm:text-2xl font-sans">
          System<span className="text-blue-500">3P</span> -
          {" Projet Personnel et Profesionnel (3P)"}
        </h2>
        <h4 className="text-xl font-sans">Bordeaux</h4>
        <p className="text-xl">
          January 24 -{" "}
          <span className="badge badge-primary p-2">In progress...</span>
        </p>
        <div className="flex gap-3 items-center">
          <CiLink size={30} />
          <a
            className="link hover:text-cyan-800"
            target="_blank"
            href="https://www.system3p.online"
          >
            Plus d&apos;informations
          </a>
        </div>
        <div className="mt-3">
          <p className="text-xl text-justify md:text-lg font-light md:p-4">
            System 3P est un projet de &quot;Gestion des Tâches&quot; conçu pour
            aider les managers dans une entreprise informatique à gérer leurs
            projets et leurs tâches, ainsi que les affectations aux membres de
            leur équipe. Cette plateforme permet aux managers de créer des
            tâches et des projets, et de les attribuer aux développeurs,
            designers, testeurs, et autres collaborateurs. Elle offre également
            la possibilité aux utilisateurs de suivre l&apos;avancement des
            projets, de gérer les priorités, et de faciliter la communication au
            sein de l&apos;équipe. La plateforme est pensée pour rendre la
            gestion de projets plus efficace et organisée, avec une interface
            conviviale et facile à utiliser. <br />
            Pour un usage personnel, System 3P aide les individus à organiser
            leurs propres projets et tâches, qu&apos;il s&apos;agisse de projets
            professionnels ou personnels. Les utilisateurs peuvent créer des
            listes de tâches, définir des priorités, et suivre leur progression.
            Cette plateforme est idéale pour ceux qui cherchent à mieux
            structurer leur travail et à augmenter leur productivité de manière
            simple et intuitive.
          </p>
          <h3 className="mt-4 text-2xl sm:text-lg font-sans p-3">Missions</h3>
          <div>
            <ul className="list-disc">
              <li>
                Mettre en place une methode de gestion de projet efficace et
                l&apos;environnement DevOps
                <ul className="ml-10 flex flex-wrap gap-5 mt-2 mb-4">
                  <li className="badge badge-primary p-2">SCRUM</li>
                  <li className="badge badge-primary p-2">Gitlab</li>
                  <li className="badge badge-primary p-2">Jenkins - CI/CD</li>
                  <li className="badge badge-primary p-2">Docker</li>
                  <li className="badge badge-primary p-2">Kubernetes</li>
                </ul>
              </li>
              <li>
                Concevoir l&apos;architecture micro-services de
                l&apos;application
                <ul className="ml-10 flex flex-wrap gap-5 mt-2 mb-4">
                  <li className="badge badge-info p-2">Architechture</li>
                  <li className="badge badge-info p-2">Microservices</li>
                  <li className="badge badge-info p-2">
                    Eureka Discovery and Server
                  </li>
                  <li className="badge badge-info p-2">
                    Configuration Client and Server
                  </li>
                  <li className="badge badge-info p-2">Reactive Gateway</li>
                  <li className="badge badge-info p-2">Kafka</li>
                </ul>
              </li>
              <li>
                Concevoir et développer l&apos;API de la Solution 3P
                <ul className="ml-10 flex flex-wrap gap-5 mt-2 mb-4">
                  <li className="badge badge-neutral p-2">Spring Boot</li>
                  <li className="badge badge-neutral p-2">PostgreSQL</li>
                  <li className="badge badge-neutral p-2">MySQL</li>
                  <li className="badge badge-neutral p-2">API Rest</li>
                  <li className="badge badge-neutral p-2">GraphQL</li>
                </ul>
              </li>
              <li>
                Concevoir les interfaces d&apos;administration et des
                utilisateurs finaux
                <ul className="ml-10 flex gap-10 mt-2 mb-4">
                  <li className="badge badge-success p-2">Angular</li>
                  <li className="badge badge-success p-2">React</li>
                  <li className="badge badge-success p-2">TailwindCSS</li>
                </ul>
              </li>
            </ul>
          </div>
          <video
            className=" shadow-2xl"
            src="/medias/s3p-media.mp4"
            controls
            autoPlay
          ></video>
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-4xl sm:text-2xl font-sans">
          At Softimeo / Actimeo
        </h2>
        <h4 className="text-xl font-sans">Marmande</h4>
        <p className="text-xl font-sans">September 2021 - September 2023</p>

        <div className="mt-2">
          <p className="text-xl text-justify md:text-lg font-light md:p-4">
            Dans le cadre de mes missions au sein de la société Softimeo,
            j&apos;ai eu l&apos;opportunité de travailler sur un projet
            innovant: Le{" "}
            <span className="hover:underline text-blue-800 font-semibold">
              <a target="_blank" href="https://social.softi.fr/">
                Framework SOFTI
              </a>
            </span>
            . Ce Framework de Softimeo met en place des outils permettant de
            construire à une vitesse inégalée des solutions intégralement
            personnalisées et de décliner des solutions de base par segment
            (clubs de sport, communes, écoles de musique, services sociaux,
            établissements scolaires etc.). Les traitements ainsi constitués
            sont documentés pour faciliter leur enregistrement dans le
            &quot;registre de traitements&quot; prévu par le{" "}
            <span className="underline text-primary">
              <a
                target="_blank"
                href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees"
              >
                RGPD
              </a>
            </span>
            .
          </p>

          <h3 className="mt-4 text-xl font-sans p-3">Missions</h3>
          <ul className="list-disc">
            <li>Partciper à la conception et au développement de SOFTI</li>
            <li>
              Partciper à la conception de la base de données:{" "}
              <span className="badge badge-neutral p-2">PostgreSQL</span>
            </li>
            <li>
              Concevoir l&apos;API:{" "}
              <span className="badge badge-neutral p-2">PHP 8.0</span>
            </li>
            <li>
              Concevoir les interfaces webisées:{" "}
              <span className="badge badge-neutral">Angular 14</span>
            </li>
            <li>
              Mettre en place un processus d&apos;importation et
              d&apos;exportation des données:{" "}
              <span className="badge badge-neutral p-2">ETL</span>
            </li>
            <li>Mettre en place la sécurité des applications</li>
          </ul>
          <ul className="my-4 flex gap-2">
            <li className="badge badge-primary p-2">Debian</li>
            <li className="badge badge-primary p-2">Apache 2</li>
            <li className="badge badge-primary p-2">Github</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const metadata: Metadata = {
  title: "Abdoulaye BA Portfolio - Experiences",
  description:
    "Discover the experiences I have had in the field of computer science. Contact me for more information.",
  category: "Experiences",
  twitter: {
    card: "summary",
    site: "@evilbas1038",
    title: "Abdoulaye BA Portfolio - Experiences",
    description:
      "Discover the experiences I have had in the field of computer science. Contact me for more information.",
    images: [
      {
        url: "/images/profile.jpg",
        alt: "Abdoulaye BA Portfolio - Experiences",
      },
    ],
  },
};
export default ExperiencesPage;
