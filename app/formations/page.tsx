import { Metadata } from "next";

const EducationPage = () => {
  return (
    <div id="education" className="px-5 lg:px-40 m-auto lg:w-9/12">
      <h1 className="py-5 text-4xl font-bold text-cyan-800 text-center">
        Education
      </h1>

      <div className="flex flex-col items-center justify-center">
        <div>
          <h1 className="text-2xl">Ecole d'Ingénierie Informatique (EPSI)</h1>
          <p className="text-lg">
            Master Expert en Informatique et Système d'Information.
          </p>
          <p className="badge badge-neutral">2021 - 2023</p>
        </div>

        <div className="my-10">
          <h1 className="text-xl">Objectifs</h1>
          <div className="alert">
            <ul className="px-3 text-left list-decimal">
              <li>
                Analyse et définition de la stratégie des systèmes d’information
              </li>
              <li>Pilotage d’un projet Système d’Information</li>
              <li>
                Management d’un projet informatique dans un environnement agile
                en collaboration avec les parties prenantes
              </li>
              <li>
                Pilotage de l’informatique décisionnelle d’un système
                d’information
              </li>
              <li>
                Développement d’une solution applicative spécifique et métier
              </li>
              <li>
                Intégration dans une architecture cloud et maintenance d’un
                système virtualisé
              </li>
            </ul>
          </div>

          <div>
            <h1 className="font-bold md:font-normal md:text-2xl mt-3">
              Concevoir et développer des solutions applicatives métier et
              spécifiques
            </h1>
            <div>
              <ul className="list-disc">
                <li>Ingénierie des besoins et conception applicative</li>
                <li>Développement Cloud & I.A</li>
                <li>Test et intégration</li>
                <li>Mise en place de l'applicatif</li>
              </ul>
            </div>
            <h1 className="font-bold md:font-normal md:text-2xl mt-3">
              Piloter l'informatique décisionnel d'un S.I (Big Data & BI)
            </h1>
            <div>
              <ul className="list-disc">
                <li>Data Science</li>
                <li>Visualisation des données</li>
                <li>Gouvernance des données & intégration</li>
                <li>Data Architectures</li>
                <li>Data & sécurité</li>
              </ul>
            </div>
            <h1 className="font-bold md:font-normal md:text-2xl mt-3">
              Analyser et définir la stratégie d'un Système d'Information
            </h1>
            <div>
              <ul className="list-disc">
                <li>Veille et analyse des besoins</li>
                <li>Management et performance d'un Système d'Information</li>
                <li>Sécurité d'un Système d'Information</li>
                <li>Stratégie SI</li>
                <li>RSE et SI</li>
              </ul>
            </div>
            <h1 className="font-bold md:font-normal md:text-2xl mt-3">
              Manager un projet informatique avec agilité en collaboration avec
              les parties prenantes
            </h1>
            <div>
              <ul className="list-disc">
                <li>Management de projet et agile</li>
                <li>Management d'équipe et environnement multiculturel</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div>
          <h1 className="text-2xl">Université Cheikh Anta DIOP (UCAD)</h1>
          <p className="text-lg">
            Licence et Master 1 Mathématiques et Informatique. <br />
            <span>
              Transmission des Données et Sécurité de l'Information (TDSI)
            </span>
          </p>
          <p className="badge badge-neutral">2019 - 2020</p>
        </div>

        <div className="my-10">
          <h1 className="text-xl">Objectifs</h1>
          <div className="alert">
            <ul className="px-3 text-left list-decimal">
              <li>Sécurité des systèmes d’information et audit de sécurité</li>
              <li>Sécurité des réseaux informatique</li>
              <li>
                Développement d’applications sécurisées (avec Java/JEE, Python,
                C#, .Net, XML, PHP-MySQL)
              </li>
              <li>
                Administration de Base de données (avec MySQL, Oracle, SQL
                Server)
              </li>
            </ul>
          </div>

          <div>
            <h1 className="font-bold md:font-normal md:text-2xl mt-3">
              Informatique
            </h1>
            <div>
              <ul className="list-disc">
                <li>Architecture des ordinateurs</li>
                <li>Algorithmique et Programmation</li>
                <li>Développement web et systèmes Linux - HTML - CSS</li>
                <li>Langage de programmation et Framework</li>
                <li>Base de données</li>
                <li>Développement Web et Mobile</li>
                <li>Systèmes d'exploitation</li>
                <li>Système d'information</li>
                <li>Analyse Informatique</li>
                <li>Réseaux et Systèmes</li>
                <li>Sécurité des systèmes et services réseaux</li>
                <li>Administration Système et services réseaux</li>
                <li>Projet de fin d'année</li>
              </ul>
            </div>
            <h1 className="font-bold md:font-normal md:text-2xl mt-3">
              Mathématiques
            </h1>
            <div>
              <ul className="list-disc">
                <li>Analyse</li>
                <li>Algèbre</li>
                <li>Probabilité et Statistique</li>
                <li>Cryptographie et Algèbre</li>
                <li>Cryptographie Moderne</li>
                <li>Electricité et Electronique</li>
              </ul>
            </div>
            <h1 className="font-bold md:font-normal md:text-2xl mt-3">
              Communication et Management
            </h1>
            <div>
              <ul className="list-disc">
                <li>Création d'entreprise</li>
                <li>Gestion de projet</li>
                <li>Techniques d'expression</li>
                <li>Anglais</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const metadata: Metadata = {
  title: "Abdoulaye BA Portfolio - Education",
  description:
    "Discover the education I have had in the field of computer science. Contact me for more information.",
  category: "Education",
  twitter: {
    card: "summary",
    site: "@evilbas1038",
    title: "Abdoulaye BA Portfolio - Education",
    description:
      "Discover the education I have had in the field of computer science. Contact me for more information.",
    images: [
      {
        url: "/images/education.jpg",
        alt: "Abdoulaye BA Portfolio - Education",
      },
    ],
  },
};

export default EducationPage;
