import { ORNAMENT_IMG, historyBlocks } from "@/data/archive-data";

const HistorySection = () => {
  return (
    <main className="max-w-6xl mx-auto px-6 py-14">
      <div className="mb-12 animate-slide-up">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-10 bg-gold" />
          <span className="font-cormorant-sc text-gold text-[10px] tracking-[0.4em]">ДОКУМЕНТАЛЬНАЯ ХРОНИКА</span>
        </div>
        <h2 className="font-cormorant text-5xl text-ash font-light mb-2">Адыгея в годы войны</h2>
        <div className="w-16 h-0.5 bg-gold mt-3" />
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="font-golos text-sm text-ash-mid leading-loose font-light">
          <p className="mb-4">
            Адыгея оказалась в эпицентре событий 1942–1943 годов. Немецкие войска рвались к нефти Кавказа,
            и Майкоп стал одной из первых целей. 10 августа 1942 года город пал.
            Оккупация длилась около шести месяцев — но эти месяцы стали вечностью для тех,
            кто пережил их детьми.
          </p>
          <p className="mb-4">
            Горные аулы стали убежищем для многих семей. Кавказский хребет защищал —
            немецкие части не смогли пробиться через перевалы. Именно здесь, в лесах,
            действовали партизанские отряды, которым помогали дети.
          </p>
          <p>
            После освобождения в январе 1943 года дети Адыгеи встали рядом со взрослыми
            на восстановление разрушенного. История этих детей — это история самой республики,
            выжившей и сохранившей свою идентичность.
          </p>
        </div>
        <div className="relative">
          <img src={ORNAMENT_IMG} alt="Традиционный узор Адыгеи" className="w-full h-56 object-cover" />
          <div className="bg-cream-dark border-t-2 border-gold px-6 py-4">
            <div className="font-cormorant text-lg text-ash mb-1">Традиции сохранились</div>
            <div className="font-golos text-xs text-stone font-light">
              Даже в годы войны дети Адыгеи помнили родной язык, песни и обычаи —
              то, что передали им бабушки и деды.
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-cream-dark">
        <div className="font-cormorant-sc text-[10px] tracking-[0.4em] text-gold py-8">ХРОНОЛОГИЯ</div>
        {historyBlocks.map((b, i) => (
          <div
            key={i}
            className="grid md:grid-cols-4 gap-6 border-b border-cream-dark py-8 hover:bg-cream-dark transition-colors px-4 -mx-4"
          >
            <div>
              <div className="font-cormorant text-2xl text-red-flag font-light leading-tight">{b.year}</div>
            </div>
            <div className="md:col-span-3">
              <div className="font-cormorant text-xl text-ash mb-2">{b.title}</div>
              <div className="font-golos text-sm text-ash-mid leading-relaxed font-light">{b.text}</div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default HistorySection;
