import { Metadata } from "next";
import Link from "next/link";

const ProjectsPage = () => {
  return (
    <div
      className=""
      style={{
        height: "100vh",
      }}
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-cyan-800">Mes Réalisations</h1>
        <div
          className="flex flex-wrap gap-4 justify-center"
          style={{ marginTop: "5rem" }}
        >
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-semibold pt-10 text-gray-300">
              {"EcoLibrairie".toUpperCase()}
            </h1>
            <p>
              <span className="text-cyan-800">
                Learnings and Earnings Platform for Students
              </span>
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-semibold pt-10 text-gray-300">
              {"SchoolTECH".toUpperCase()}
            </h1>
            <p>
              <span className="text-cyan-800">
                School Management Platform for Teachers and Students
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-3 text-center">
        <h3 className="text-6xl">In progress</h3>
        <p className="md:mx-40">
          These projects are in progress and will be available soon on the web.
          Actually, I&apos;m working on the backend of these projects. If you
          want to know more about these projects, please contact me. I will be
          happy to share with you the progress of these projects. Please, click
          the button below to send me an email.
        </p>
        <div className="flex justify-center mt-6">
          <span className="inline-flex rounded-md shadow-sm">
            <Link className="btn btn-neutral" href="/contact">
              Leave me a message
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export const metadata: Metadata = {
  title: "Asin Portfolio - Projects",
  description: "View my projects and my work.",
};

export default ProjectsPage;
