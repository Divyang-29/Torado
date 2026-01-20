import Events from "./Events";
import AboutCampaign from "./AboutCampaign";
import Hero from "./Hero";
import Ideology from "./Ideology";
import Involved from "./Involved";
import DonateSection from "./DonateSection";
import FightForNation from "./FightForNation";
import Volunteers from "./Volunteers";
import Testimonials from "./Testimonials";
import Biography from "./Biography";
import BlogSection from "./BlogSection";

export default function HeroPage(){
    return(
        <>
        <Hero/>
        <AboutCampaign/>
        <Ideology/>
        <Involved/>
        <Events/>
        <DonateSection/>
        <FightForNation/>
 
        <Testimonials/>
        <Biography/>
        <BlogSection/>
        </>
    )
}