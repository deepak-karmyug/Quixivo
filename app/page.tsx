import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import TrustBar from "@/components/TrustBar";
import InstituteTypes from "@/components/InstituteTypes";
import Features from "@/components/Features";
import LiveClasses from "@/components/LiveClasses";
import ProblemSolving from "@/components/ProblemSolving";
import StudentPortal from "@/components/StudentPortal";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import DemoSection from "@/components/DemoSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <TrustBar />
      <InstituteTypes />
      <Features />
      <LiveClasses />
      <ProblemSolving />
      <StudentPortal />
      <Testimonials />
      {/* <Pricing /> */}
      <DemoSection />
      <Footer />
    </main>
  );
}
