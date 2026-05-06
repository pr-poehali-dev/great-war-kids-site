import Icon from "@/components/ui/icon";
import { Section, HERO_IMG, NATURE_IMG, stats } from "@/data/archive-data";

interface HomeSectionProps {
  setActiveSection: (s: Section) => void;
}

const homeCards: { id: Section; label: string; icon: string; desc: string; border: boolean }[] = [
  { id: "history",      label: "История",      icon: "BookOpen",     desc: "Хронология оккупации и освобождения Адыгеи — через судьбы детей.", border: false },
  { id: "testimonials", label: "Свидетельства", icon: "MessageSquare", desc: "Личные воспоминания очевидцев, записанные десятилетия спустя.",    border: true  },
  { id: "archive",      label: "Архив",         icon: "Archive",       desc: "Документы, письма, списки — историческое наследие республики.",     border: false },
];

const HomeSection = ({ setActiveSection }: HomeSectionProps) => {
  return (
    <main>
      <section className="relative h-[72vh] min-h-[500px] overflow-hidden">
        <img src={HERO_IMG} alt="Дети Адыгеи" className="absolute inset-0 w-full h-full object-cover photo-adygea" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a3d2b] via-[#1a3d2b]/55 to-transparent" />
        <div className="relative h-full flex flex-col justify-end max-w-6xl mx-auto px-6 pb-16">
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-gold" />
              <span className="font-cormorant-sc text-gold text-[10px] tracking-[0.5em]">1941 — 1945</span>
            </div>
            <h1 className="font-cormorant text-cream text-5xl md:text-7xl font-light leading-tight mb-4">
              Дети войны —<br />
              <span className="text-gold-light italic">наши земляки</span>
            </h1>
            <p className="font-golos text-cream/75 text-base max-w-lg leading-relaxed mb-10 font-light">
              Документальный проект о судьбах детей Адыгейской автономной области,
              переживших оккупацию, эвакуацию и годы военного лихолетья.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setActiveSection("history")}
                className="bg-gold text-ash font-golos text-sm font-semibold tracking-wide px-7 py-3 hover:bg-gold-light transition-colors"
              >
                Читать историю
              </button>
              <button
                onClick={() => setActiveSection("testimonials")}
                className="border border-cream/50 text-cream font-golos text-sm px-7 py-3 hover:border-gold hover:text-gold-light transition-colors"
              >
                Свидетельства
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ash text-cream py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={s.label} className={`text-center ${i < 3 ? "border-r border-white/10" : ""}`}>
              <div className="font-cormorant text-3xl md:text-4xl text-gold font-light mb-1">{s.num}</div>
              <div className="font-golos text-[11px] text-cream/50 tracking-wide leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 border-t border-cream-dark">
        {homeCards.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`group text-left p-10 hover:bg-cream-dark transition-all ${item.border ? "border-x border-cream-dark" : ""}`}
          >
            <div className="text-forest-mid mb-4">
              <Icon name={item.icon} size={22} />
            </div>
            <div className="font-cormorant text-2xl text-ash mb-3 group-hover:text-forest">{item.label}</div>
            <div className="font-golos text-sm text-stone leading-relaxed font-light">{item.desc}</div>
            <div className="mt-6 font-cormorant-sc text-[10px] tracking-[0.25em] text-gold flex items-center gap-2">
              ОТКРЫТЬ <Icon name="ArrowRight" size={11} />
            </div>
          </button>
        ))}
      </section>

      <section className="relative bg-forest overflow-hidden">
        <div className="ornament-band" />
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-gold text-6xl font-cormorant leading-none mb-4">"</div>
            <blockquote className="font-cormorant text-cream text-2xl md:text-3xl italic font-light leading-relaxed mb-6">
              Горы помнят всё. Они стояли, когда горели наши аулы,
              и стоят сейчас — чтобы мы не забывали.
            </blockquote>
            <div className="font-cormorant-sc text-gold text-[10px] tracking-[0.3em]">
              — ИЗ СВИДЕТЕЛЬСТВ ДЕТЕЙ АДЫГЕИ
            </div>
          </div>
          <div className="relative">
            <img src={NATURE_IMG} alt="Горы Адыгеи" className="w-full h-64 object-cover photo-adygea" />
            <div className="absolute bottom-0 left-0 right-0 bg-forest/80 px-4 py-2">
              <div className="font-golos text-xs text-gold/80">Кавказские горы — родина детей войны</div>
            </div>
          </div>
        </div>
        <div className="ornament-band" />
      </section>
    </main>
  );
};

export default HomeSection;
