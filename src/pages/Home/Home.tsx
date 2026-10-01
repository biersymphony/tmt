import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../sections/Hero/Hero";
import Capabilities from "../../sections/Capabilities/Capabilities";
import Process from "../../sections/Process/Process";
import MachineManufacturing from "../../sections/MachineManufacturing/MachineManufacturing";
import Facility from "../../sections/Facility/Facility";
import Industries from "../../sections/Industries/Industries";
import FinalCTA from "../../sections/FinalCTA/FinalCTA";
import Location from "../../sections/Location/Location";
import Footer from "../../sections/Footer/Footer";
import WhatsAppButton from "../../components/WhatsAppButton/WhatsAppButton";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Capabilities />
        <Process />
        <MachineManufacturing />
        <Facility />
        <Industries />
        <FinalCTA />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
