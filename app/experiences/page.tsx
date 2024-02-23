const ExperiencesPage = () => {
  return (
    <div className="m-3">
      <h1 className="text-6xl sm:text-4xl text-center font-sans text-blue-950">
        Experiences
      </h1>

      <div className="p-4 mb-20">
        <h2 className="text-4xl sm:text-2xl font-sans">
          School<span className="text-blue-500">TECH</span> -
          {" personnal project"}
        </h2>
        <h4 className="text-xl font-sans">Bordeaux</h4>
        <p className="text-xl">
          January 24 -{" "}
          <span className="badge badge-primary p-2">In progress...</span>
        </p>
        <div className="mt-3">
          <p className="text-xl text-justify md:text-lg font-light md:p-4">
            Je mets en place une plateforme d&apos;apprentissage en ligne, de
            simulation, de recherche, de documentation et de gestion
            d&apos;institut (pluridisciplinaires). Cette plateforme offre aux
            apprenants une gamme d&apos;outils adaptés à leurs besoins. En
            premier lieu, ils pourront explorer un large choix de cours en
            fonction de leurs préférences et de critères de recherche
            spécifiques. Ces cours, élaborés par des professionnels, sont
            soigneusement conçus pour être accessibles et faciles à comprendre
            grâce à la pédagogie employée. Ainsi, les apprenants pourront avoir
            confiance dans la qualité des contenus proposés et s&apos;engager
            efficacement dans leur processus d&apos;apprentissage.
          </p>
          <h3 className="mt-4 text-2xl sm:text-lg font-sans p-3">Missions</h3>
          <div>
            <ul className="list-disc list-inside">
              <li>
                Mettre en place une methode de gestion de projet efficace et
                l&apos;environnement DevOps
                <ul className="ml-10 flex flex-wrap gap-5 mt-2 mb-4">
                  <li className="badge badge-primary p-2">SCRUM</li>
                  <li className="badge badge-primary p-2">GitFlow - CI/CD</li>
                  <li className="badge badge-primary p-2">Jira</li>
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
                  <li className="badge badge-info p-2">gRPC</li>
                </ul>
              </li>
              <li>
                Concevoir et développer l&apos;API de la plateforme
                <ul className="ml-10 flex flex-wrap gap-5 mt-2 mb-4">
                  <li className="badge badge-neutral p-2">Spring Boot</li>
                  <li className="badge badge-neutral p-2">PostgreSQL</li>
                  <li className="badge badge-neutral p-2">MySQL</li>
                  <li className="badge badge-neutral p-2">API Rest</li>
                  <li className="badge badge-neutral p-2">GraphQL</li>
                </ul>
              </li>
              <li>
                Conception de l&apos;interface d&apos;administration et des
                utilisateurs finaux
                <ul className="ml-10 flex gap-10 mt-2 mb-4">
                  <li className="badge badge-success p-2">React</li>
                  <li className="badge badge-success p-2">Next.js</li>
                  <li className="badge badge-success p-2">TailwindCSS</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="p-4 mb-20">
        <h2 className="text-4xl sm:text-2xl font-sans">
          At Softimeo / Actimeo
        </h2>
        <h4 className="text-xl font-sans">Marmande</h4>
        <p className="text-xl font-sans">September 2021 - September 2023</p>

        <div className="mt-3">
          <p className="text-xl text-justify md:text-lg font-light md:p-4">
            Dans le cadre de mon apprentissage au sein de la société Softimeo,
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
          <div className="">
            <p>Partciper à la conception et au développement de SOFTI</p>
            <p>
              Partciper à la conception de la base de données:{" "}
              <span className="badge badge-neutral p-2">PostgreSQL</span>
            </p>
            <p>
              Conception de l&apos;API:{" "}
              <span className="badge badge-neutral p-2">PHP 8.0</span>
            </p>
            <p>
              Conception des interfaces webisées:{" "}
              <span className="badge badge-neutral">Angular 14</span>
            </p>
            <p>
              Mise en place du processus d&apos;importation et
              d&apos;exportation des données:{" "}
              <span className="badge badge-neutral p-2">ETL</span>
            </p>
          </div>
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

export default ExperiencesPage;
