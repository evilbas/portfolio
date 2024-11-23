import ProfileDescPage from "./components/profile-desc";
import ExperiencesPage from "./experiences/page";
import EducationPage from "./education/page";
import ProjectsPage from "./projects/page";
import ContactsPage from "./contact/page";
import SkillsPage from "./skills/page";

export default function Home() {
  return (
    <div>
      <ProfileDescPage />

      <h3 className="text-2xl text-center"></h3>

      {/* <div className="-z-10">
        <ExperiencesPage />
        <SkillsPage />
        <EducationPage />
        <ProjectsPage />
        <ContactsPage />
      </div> */}
    </div>
  );
}

export const metadata = {
  title: "Abdoulaye BA Portfolio",
  description: "My personal portfolio",
  category: "Home",
  twitter: {
    card: "summary",
    site: "@evilbas1038",
    title: "Abdoulaye BA Portfolio",
    description: "My personal portfolio",
    images: [
      {
        url: "/images/abdoulaye.jpg",
        alt: "Abdoulaye BA Portfolio",
      },
    ],
  },
};
