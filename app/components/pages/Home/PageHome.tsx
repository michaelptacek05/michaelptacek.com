import Hero from "./HomeHero";
import HomeTechStack from "./HomeTechStack";
import HomeExpecience from "./HomeExperience";
import { HomeProjects } from "./HomeProjects";

export default function PageHome() {
    return(
        <div>
            <Hero />
            <HomeTechStack />
            <HomeProjects />
            <HomeExpecience />
        </div>
    );
}