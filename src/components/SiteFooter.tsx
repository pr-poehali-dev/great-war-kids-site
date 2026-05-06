import { Section, navItems } from "@/data/archive-data";

interface SiteFooterProps {
  setActiveSection: (s: Section) => void;
}

const SiteFooter = ({ setActiveSection }: SiteFooterProps) => {
  return (
    <footer className="bg-forest mt-24">
      <div className="ornament-band" />
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="font-cormorant text-cream text-xl mb-2">Дети войны — наши земляки</div>
            <div className="font-golos text-xs text-cream/40 leading-relaxed font-light">
              Документальный проект, посвящённый памяти детей Адыгейской автономной области,
              переживших Великую Отечественную войну.
            </div>
          </div>
          <div>
            <div className="font-cormorant-sc text-[10px] tracking-[0.3em] text-gold mb-4">РАЗДЕЛЫ</div>
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className="font-golos text-xs text-cream/40 hover:text-gold text-left transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <div className="font-cormorant-sc text-[10px] tracking-[0.3em] text-gold mb-4">ПАМЯТЬ</div>
            <div className="font-cormorant text-3xl text-gold/60">1941 — 1945</div>
            <div className="font-golos text-xs text-cream/30 mt-2 font-light">«Никто не забыт, ничто не забыто»</div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6">
          <div className="font-golos text-[11px] text-cream/25 text-center">
            Документальный проект. Все материалы носят историко-образовательный характер.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
