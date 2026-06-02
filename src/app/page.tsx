import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";

export default function Home() {
  return (
    <div className="flex relative min-h-screen items-center w-full overflow-x-hidden flex-col">
      <Navbar />
      <Section />
      <Footer />
    </div>
  );
}
