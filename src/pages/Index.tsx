import { useState } from "react";
import { Section } from "@/data/archive-data";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import HomeSection from "@/components/HomeSection";
import HistorySection from "@/components/HistorySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ArchiveSection from "@/components/ArchiveSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream font-golos">
      <SiteHeader
        activeSection={activeSection}
        menuOpen={menuOpen}
        setActiveSection={(s) => { setActiveSection(s); setSearch(""); }}
        setMenuOpen={setMenuOpen}
      />

      {activeSection === "home" && (
        <HomeSection setActiveSection={setActiveSection} />
      )}

      {activeSection === "history" && (
        <HistorySection />
      )}

      {activeSection === "testimonials" && (
        <TestimonialsSection search={search} setSearch={setSearch} />
      )}

      {activeSection === "archive" && (
        <ArchiveSection search={search} setSearch={setSearch} />
      )}

      {activeSection !== "home" && (
        <SiteFooter setActiveSection={setActiveSection} />
      )}
    </div>
  );
};

export default Index;
