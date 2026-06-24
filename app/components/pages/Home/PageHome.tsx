import Hero from "./HomeHero";
import HomeTechStack from "./HomeTechStack";
import HomeExpecience from "./HomeExperience";
import { HomeProjects } from "./HomeProjects";
import { HomeSocials } from "./HomeSocials";
import { HomeEducation } from "./HomeEducation";

export default function PageHome() {
    return (
        <div>
            <Hero />
            <HomeTechStack />
            <HomeProjects />
            <HomeExpecience />
            <HomeEducation />
            <HomeSocials />
        </div>
    );
}
