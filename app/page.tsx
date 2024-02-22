import CardSkillsPage from "./components/card-skill";
import ProfileDesc from "./components/profile-desc";
import UsersPage from "./users/page";

export default function Home() {
  return (
    <div>
      <div className="flex gap-4 justify-center" style={{ marginTop: "5rem" }}>
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
      </div>
      <UsersPage />
    </div>
  );
}
