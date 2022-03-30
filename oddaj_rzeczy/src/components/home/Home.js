import Header from "./header/Header";
import Columns from "./columns/Columns";
import Steps from "./steps/Steps";
import AboutUs from "./aboutUs/AboutUs";
import Help from "./help/Help";
import Contact from "./contact/Contact";

export default function Home() {
    return (
        <>
            <>
                <Header />
            </>
            <>
                <Columns />
            </>
            <>
                <Steps />
            </>
            <>
                <AboutUs />
            </>
            <>
                <Help />
            </>
            <>
                <Contact />
            </>
        </>
    )
}