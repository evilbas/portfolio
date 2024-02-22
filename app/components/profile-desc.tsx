"use client";

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
        <div className="p-2">
          <h1 className="text-4xl text-center text-cyan-100">
            Full Stack Developper - DevOps
          </h1>
          <p className="font-thin p-2 text-2xl bg-gradient-to-r from-cyan-100 via-green-900 to-blue-200 text-transparent bg-clip-text animate-rotate-x">
            &quot;Titulaire d&apos;un Master Expert en Informatique et Système
            d&apos;Information, je suis un Développeur Fullstack et DevOps avec
            trois ans d&apos;expérience dans le domaine des TI. J&apos;ai
            travaillé sur plusieurs projets et je suis capable de travailler sur
            plusieurs technologies. Egalement, je suis capable de travailler en
            équipe et de gérer des projets informatique. Je suis très motive et
            je suis prêt à relever de nouveaux défis. Mes compétences en DevOps
            me permettent de mettre en place un environnement opérationnel
            intégrant les TDD et en facilitant le déploiement des applications;
            ce qui est un atout pour une entreprise.&quot;
          </p>
        </div>
      </div>
    </>
  );
};

export default ProfileDescPage;
