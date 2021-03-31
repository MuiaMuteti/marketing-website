import MainContent from "./MainContent";
import './LandingPage.css';

function LandingPage() {
    return (
        <div id="landingPage">
            <MainContent
            headlineText="Get cheap, reliable and clean energy. Own your power today"
            descText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
            sed diam nonumy eirmod tempor invidunt ut labore et dolore 
            magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
            et justo duo dolores et ea rebum."
            linkTo="/sign-up"
            linkTitle="Sign Up" />
        </div>
    );
}

export default LandingPage;