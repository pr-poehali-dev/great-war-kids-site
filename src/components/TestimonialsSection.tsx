import Icon from "@/components/ui/icon";
import { testimonials } from "@/data/archive-data";

interface TestimonialsSectionProps {
  search: string;
  setSearch: (v: string) => void;
}

const TestimonialsSection = ({ search, setSearch }: TestimonialsSectionProps) => {
  const filtered = testimonials.filter((t) =>
    [t.name, t.year, t.tag, t.text].some((f) =>
      f.toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <main className="max-w-6xl mx-auto px-6 py-14">
      <div className="mb-8 animate-slide-up">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-10 bg-gold" />
          <span className="font-cormorant-sc text-gold text-[10px] tracking-[0.4em]">ЛИЧНЫЕ ВОСПОМИНАНИЯ</span>
        </div>
        <h2 className="font-cormorant text-5xl text-ash font-light mb-2">Свидетельства</h2>
        <div className="w-16 h-0.5 bg-gold mt-3 mb-8" />
        <div className="relative max-w-md">
          <Icon name="Search" size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-stone" />
          <input
            type="text"
            placeholder="Поиск по имени, теме, аулу..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-cream-dark border border-cream-dark font-golos text-sm text-ash placeholder:text-stone focus:outline-none focus:border-gold"
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-24 text-stone font-cormorant text-2xl">Ничего не найдено</div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((t) => (
            <div key={t.id} className="adygea-card p-8">
              <div className="flex items-start justify-between mb-5">
                <div>
                  <div className="font-cormorant text-xl text-ash mb-0.5">{t.name}</div>
                  <div className="font-golos text-xs text-stone">{t.year}</div>
                </div>
                <span className="font-golos text-[10px] font-semibold text-forest border border-forest-light px-2 py-1 whitespace-nowrap ml-4">
                  {t.tag}
                </span>
              </div>
              <blockquote className="font-cormorant text-lg text-ash-mid italic font-light leading-relaxed">
                «{t.text}»
              </blockquote>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default TestimonialsSection;
