import Icon from "@/components/ui/icon";
import { Section, navItems } from "@/data/archive-data";

interface SiteHeaderProps {
  activeSection: Section;
  menuOpen: boolean;
  setActiveSection: (s: Section) => void;
  setMenuOpen: (v: boolean) => void;
}

const SiteHeader = ({ activeSection, menuOpen, setActiveSection, setMenuOpen }: SiteHeaderProps) => {
  return (
    <header className="bg-forest sticky top-0 z-50">
      <div className="ornament-band" />
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => setActiveSection("home")} className="text-left">
          <div className="font-cormorant-sc text-gold text-[10px] tracking-[0.4em] mb-0.5">
            ДОКУМЕНТАЛЬНЫЙ ПРОЕКТ · АДЫГЕЯ
          </div>
          <div className="font-cormorant text-cream text-xl font-semibold tracking-wide leading-tight">
            Дети войны — наши земляки
          </div>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`font-cormorant-sc text-xs tracking-[0.2em] transition-colors ${
                activeSection === item.id
                  ? "text-gold-light border-b border-gold pb-0.5"
                  : "text-cream/70 hover:text-cream"
              }`}
            >
              {item.label.toUpperCase()}
            </button>
          ))}
        </nav>

        <button className="md:hidden text-cream/70" onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-forest border-t border-forest-mid px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { setActiveSection(item.id); setMenuOpen(false); }}
              className={`font-cormorant-sc text-xs tracking-[0.2em] text-left ${
                activeSection === item.id ? "text-gold-light" : "text-cream/60"
              }`}
            >
              {item.label.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
