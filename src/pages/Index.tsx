import Header from "@/components/Header";
import LandingScreen from "@/components/LandingScreen";
import CertificationsBar from "@/components/CertificationsBar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section id="skills">
          <LandingScreen />
        </section>
        <section id="certifications">
          <CertificationsBar />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
