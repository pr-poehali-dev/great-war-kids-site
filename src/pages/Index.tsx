import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG     = "https://cdn.poehali.dev/projects/063346cf-35af-47f1-a0b1-34fd8d951972/files/2e33b845-5001-4d44-a172-9b24554cf827.jpg";
const NATURE_IMG   = "https://cdn.poehali.dev/projects/063346cf-35af-47f1-a0b1-34fd8d951972/files/c1c389f7-194a-4533-a9a5-eba54a55eda4.jpg";
const ORNAMENT_IMG = "https://cdn.poehali.dev/projects/063346cf-35af-47f1-a0b1-34fd8d951972/files/381c2325-5908-4ee9-b0c9-9d341a19716e.jpg";

type Section = "home" | "history" | "testimonials" | "archive";

const navItems: { id: Section; label: string }[] = [
  { id: "home",         label: "Главная" },
  { id: "history",      label: "История" },
  { id: "testimonials", label: "Свидетельства" },
  { id: "archive",      label: "Архив" },
];

const historyBlocks = [
  {
    year: "Август 1942",
    title: "Оккупация Адыгеи",
    text: "В августе 1942 года немецкие войска оккупировали большую часть Адыгейской автономной области. Майкоп был захвачен 10 августа 1942 года. Более 70 тысяч жителей оказались под властью оккупантов, среди них тысячи детей.",
  },
  {
    year: "1942–1943",
    title: "Дети в оккупации",
    text: "В период оккупации дети Адыгеи столкнулись с карательными акциями, принудительным трудом и голодом. Многие сёла были сожжены, школы закрыты. Дети прятали семьи от угона в Германию, несли продукты партизанам в горы.",
  },
  {
    year: "Январь 1943",
    title: "Освобождение",
    text: "В январе 1943 года советские войска освободили Адыгею. Дети видели отступление немцев и встречали красноармейцев. Многие из них потеряли отцов, братьев и дома — но встретили освобождение живыми.",
  },
  {
    year: "1943–1945",
    title: "Дети — труженики тыла",
    text: "После освобождения подростки Адыгеи наравне со взрослыми восстанавливали разрушенное хозяйство. Собирали урожай, работали на заводах и в мастерских, отправляли посылки на фронт. Трудовой вклад детей был огромен.",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Зулейха Хасановна Тхакушинова",
    year: "1935 г.р., аул Понежукай",
    tag: "Оккупация",
    text: "Когда пришли немцы, мне было семь лет. Мама спрятала нас в погребе под сеном. Мы слышали топот сапог над головой. Я зажала рот сестрёнке, чтобы она не заплакала. Три дня мы не выходили наружу.",
  },
  {
    id: 2,
    name: "Мурат Асланович Шхалахов",
    year: "1930 г.р., Майкоп",
    tag: "Партизанский аул",
    text: "Мне было двенадцать, когда я начал носить хлеб в горы — партизанам. Прятал лепёшки под одеждой, шёл через лес ночью. Мать знала, но молчала. Говорила: «Ты делаешь то, что должен делать мужчина».",
  },
  {
    id: 3,
    name: "Фатима Казбековна Меретукова",
    year: "1933 г.р., аул Хакуринохабль",
    tag: "Эвакуация",
    text: "Нас погрузили в телеги и повезли через перевал. Была осень, холодно. Дедушка умер в дороге. Мы добрались до Грузии с тем, что успели взять в руки. Вернулись домой через полтора года — в пепелище.",
  },
  {
    id: 4,
    name: "Аслан Нурбиевич Куёк",
    year: "1929 г.р., Майкоп",
    tag: "Тыл",
    text: "В четырнадцать лет я встал к токарному станку. Делали детали для оружия. Руки не доставали до рычагов — подкладывал доску. Мастер смотрел сквозь пальцы. Все понимали: другого выхода нет.",
  },
];

const archiveItems = [
  {
    id: 1,
    title: "Дети Майкопа в оккупации",
    date: "1942–1943",
    type: "Фотодокументы",
    desc: "Документальные снимки периода немецкой оккупации. Фонд Национального архива Республики Адыгея.",
  },
  {
    id: 2,
    title: "Письма фронтовикам из аулов Адыгеи",
    date: "1942–1945",
    type: "Письма",
    desc: "Письма, собранные школами Адыгеи и отправленные солдатам. Хранятся в Адыгейском краеведческом музее.",
  },
  {
    id: 3,
    title: "Акты о зверствах оккупантов",
    date: "1943",
    type: "Архивные документы",
    desc: "Официальные акты, составленные после освобождения о преступлениях в отношении мирного населения, включая детей.",
  },
  {
    id: 4,
    title: "Списки детей-сирот 1943 года",
    date: "1943–1944",
    type: "Личные дела",
    desc: "Документы районных советов Адыгеи об устройстве детей, потерявших родителей в период оккупации.",
  },
  {
    id: 5,
    title: "Воспоминания пионеров-героев",
    date: "1941–1945",
    type: "Мемуарный архив",
    desc: "Рукописные воспоминания, записанные в 1960–1970-х годах от жителей Адыгеи — очевидцев войны.",
  },
  {
    id: 6,
    title: "Книга памяти Республики Адыгея",
    date: "1941–1945",
    type: "Мемориальный документ",
    desc: "Именные списки жителей республики, погибших в годы Великой Отечественной войны. Майкоп, 1994–2005.",
  },
];

const stats = [
  { num: "70 000+", label: "жителей под оккупацией" },
  { num: "6 месяцев", label: "длилась оккупация Адыгеи" },
  { num: "17 000+", label: "ушли на фронт" },
  { num: "10 000+", label: "не вернулись домой" },
];

const Index = () => {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredTestimonials = testimonials.filter((t) =>
    [t.name, t.year, t.tag, t.text].some((f) =>
      f.toLowerCase().includes(search.toLowerCase())
    )
  );

  const filteredArchive = archiveItems.filter((a) =>
    [a.title, a.date, a.type, a.desc].some((f) =>
      f.toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-cream font-golos">

      {/* ── HEADER ── */}
      <header className="bg-forest sticky top-0 z-50">
        <div className="ornament-band" />
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={() => setActiveSection("home")} className="text-left">
            <div className="font-cormorant-sc text-gold text-[10px] tracking-[0.4em] mb-0.5">
              ДОКУМЕНТАЛЬНЫЙ ПРОЕКТ · АДЫГЕЯ
            </div>
            <div className="font-cormorant text-cream text-xl font-semibold tracking-wide leading-tight">
              Дети войны
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

      {/* ══ HOME ══ */}
      {activeSection === "home" && (
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
                  Дети войны<br />
                  <span className="text-gold-light italic">в Адыгее</span>
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
            {(
              [
                { id: "history" as Section, label: "История", icon: "BookOpen", desc: "Хронология оккупации и освобождения Адыгеи — через судьбы детей.", border: false },
                { id: "testimonials" as Section, label: "Свидетельства", icon: "MessageSquare", desc: "Личные воспоминания очевидцев, записанные десятилетия спустя.", border: true },
                { id: "archive" as Section, label: "Архив", icon: "Archive", desc: "Документы, письма, списки — историческое наследие республики.", border: false },
              ]
            ).map((item) => (
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
      )}

      {/* ══ HISTORY ══ */}
      {activeSection === "history" && (
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
      )}

      {/* ══ TESTIMONIALS ══ */}
      {activeSection === "testimonials" && (
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

          {filteredTestimonials.length === 0 ? (
            <div className="text-center py-24 text-stone font-cormorant text-2xl">Ничего не найдено</div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {filteredTestimonials.map((t) => (
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
      )}

      {/* ══ ARCHIVE ══ */}
      {activeSection === "archive" && (
        <main className="max-w-6xl mx-auto px-6 py-14">
          <div className="mb-8 animate-slide-up">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-gold" />
              <span className="font-cormorant-sc text-gold text-[10px] tracking-[0.4em]">ДОКУМЕНТАЛЬНЫЕ МАТЕРИАЛЫ</span>
            </div>
            <h2 className="font-cormorant text-5xl text-ash font-light mb-2">Архив</h2>
            <div className="w-16 h-0.5 bg-gold mt-3 mb-8" />
            <div className="relative max-w-md">
              <Icon name="Search" size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-stone" />
              <input
                type="text"
                placeholder="Поиск по теме, типу, году..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-cream-dark border border-cream-dark font-golos text-sm text-ash placeholder:text-stone focus:outline-none focus:border-gold"
              />
            </div>
            {search && (
              <div className="mt-2 font-golos text-xs text-stone">Найдено: {filteredArchive.length}</div>
            )}
          </div>

          {filteredArchive.length === 0 ? (
            <div className="text-center py-24 text-stone font-cormorant text-2xl">Материалы не найдены</div>
          ) : (
            <div className="border-t border-cream-dark">
              {filteredArchive.map((item) => (
                <div
                  key={item.id}
                  className="border-b border-cream-dark py-6 grid md:grid-cols-4 gap-4 hover:bg-cream-dark transition-colors px-4 -mx-4 cursor-pointer group"
                >
                  <div>
                    <div className="font-golos text-[10px] text-stone tracking-wide mb-1 uppercase">{item.type}</div>
                    <div className="font-cormorant text-xl text-forest">{item.date}</div>
                  </div>
                  <div className="md:col-span-2">
                    <div className="font-cormorant text-xl text-ash mb-1 group-hover:text-forest-mid transition-colors">{item.title}</div>
                    <div className="font-golos text-sm text-stone leading-relaxed font-light">{item.desc}</div>
                  </div>
                  <div className="flex items-center justify-end">
                    <div className="font-cormorant-sc text-[10px] tracking-[0.25em] text-stone flex items-center gap-2 group-hover:text-gold transition-colors">
                      ОТКРЫТЬ <Icon name="ArrowRight" size={11} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      )}

      {/* ── FOOTER ── */}
      <footer className="bg-forest mt-24">
        <div className="ornament-band" />
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="font-cormorant text-cream text-xl mb-2">Дети войны в Адыгее</div>
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

    </div>
  );
};

export default Index;
