import Hero from "./HomeHero";
import HomeTechStack from "./HomeTechStack";
import HomeExpecience from "./HomeExperience";
import { HomeProjects } from "./HomeProjects";
import { HomeServices } from "./HomeServices";
import { HomeClients } from "./HomeClients";
import { HomeSocials } from "./HomeSocials";
import { HomeEducation } from "./HomeEducation";

export default function PageHome() {
    return (
        <div>
            <Hero />
            <HomeServices />
            <HomeClients />
            <HomeTechStack />
            <HomeProjects />
            <HomeExpecience />
            <HomeEducation />
            <HomeSocials />
        </div>
    );
}
