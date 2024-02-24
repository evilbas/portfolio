import Link from "next/link";
import CardSkillsPage from "./components/card-skill";
import ProfileDescPage from "./components/profile-desc";

export default function Home() {
  return (
    <div>
      <ProfileDescPage />
      {/* <div
        className="flex flex-wrap gap-4 justify-center"
        style={{ marginTop: "5rem" }}
      >
        <CardSkillsPage
          title="My Card"
          description="Possibilité"
          dateStart="2010"
          dateEnd="2021"
        />
        <CardSkillsPage
          title="My Card"
          description="Possibilité"
          dateStart="2010"
          dateEnd="2021"
        />
        <CardSkillsPage
          title="My Card"
          description="Possibilité"
          dateStart="2010"
          dateEnd="2021"
        />
      </div> */}

      <h3 className="text-2xl text-center"></h3>

      <div>
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-semibold pt-10 text-gray-300">
            <Link href="/about">{"About".toUpperCase()}</Link>
          </h1>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-semibold pt-10 text-gray-300">
            <Link href="/experiences">{"Experiences".toUpperCase()}</Link>
          </h1>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-semibold pt-10 text-gray-300">
            <Link href="/ti">{"Skills - Ti".toUpperCase()}</Link>
          </h1>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-semibold pt-10 text-gray-300">
            <Link href="/projects">{"Projects".toUpperCase()}</Link>
          </h1>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-semibold pt-10 text-gray-300">
            <Link href="/contact">{"Contact".toUpperCase()}</Link>
          </h1>
        </div>
      </div>
    </div>
  );
}
