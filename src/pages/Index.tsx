import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/063346cf-35af-47f1-a0b1-34fd8d951972/files/d902ab77-6ddb-47fc-8587-2f7e0782df19.jpg";
const ARCHIVE_IMAGE = "https://cdn.poehali.dev/projects/063346cf-35af-47f1-a0b1-34fd8d951972/files/6155b082-f49f-4247-b35c-9dc02cdc9a83.jpg";

const testimonials = [
  {
    id: 1,
    name: "Нина Алексеевна Соколова",
    year: "1934 г.р., Ленинград",
    text: "Нам было по семь-восемь лет. Мы не понимали что такое война — мы просто знали, что отец ушёл и не вернулся. Мама работала на заводе, а я варила кашу из отрубей. Это было нашим завтраком.",
    tag: "Блокада Ленинграда",
  },
  {
    id: 2,
    name: "Иван Петрович Громов",
    year: "1937 г.р., Сталинград",
    text: "Когда начались бомбёжки, мать укрывала нас под кроватью. Помню запах гари и звук самолётов. Мне было четыре года, но я запомнил это на всю жизнь — тот страх никуда не уходит.",
    tag: "Сталинградская битва",
  },
  {
    id: 3,
    name: "Мария Степановна Белова",
    year: "1932 г.р., Смоленская область",
    text: "Немцы пришли в деревню осенью сорок первого. Нас выгнали из домов. Три зимы мы жили в землянке — дети и старики. Выжили только потому, что помогали друг другу.",
    tag: "Оккупация",
  },
  {
    id: 4,
    name: "Александр Фёдорович Крылов",
    year: "1929 г.р., Москва",
    text: "В двенадцать лет я пошёл работать на завод — точил детали для снарядов. Нас было много, таких мальчишек. Стояли на ящиках, чтобы дотянуться до станка. Никто не жаловался.",
    tag: "Дети у станка",
  },
];

const archiveItems = [
  {
    id: 1,
    title: "Дети блокадного Ленинграда",
    date: "1941–1944",
    type: "Фотодокументы",
    description: "Фотографии детей в эвакуации и в осаждённом городе. Коллекция Государственного музея истории Санкт-Петербурга.",
  },
  {
    id: 2,
    title: "Письма детей фронтовикам",
    date: "1942–1945",
    type: "Письма",
    description: "Архив писем, написанных школьниками солдатам на фронт. Личный фонд Центрального архива Министерства обороны.",
  },
  {
    id: 3,
    title: "Сводки об эвакуации детских домов",
    date: "1941–1942",
    type: "Документы",
    description: "Официальные документы о переводе детских учреждений за Урал. ГАРФ, фонд Совета народных комиссаров СССР.",
  },
  {
    id: 4,
    title: "Рисунки детей войны",
    date: "1943–1945",
    type: "Художественный архив",
    description: "Коллекция детских рисунков военного времени. Переданы в музей родственниками в 1960–1980-х годах.",
  },
  {
    id: 5,
    title: "Дети-герои: наградные листы",
    date: "1941–1945",
    type: "Наградные документы",
    description: "Копии наградных листов пионеров-героев: Марата Казея, Зины Портновой, Вали Котика.",
  },
  {
    id: 6,
    title: "Эвакуация по Дороге жизни",
    date: "Январь 1942",
    type: "Оперативные документы",
    description: "Документальные записи об эвакуации мирного населения по льду Ладожского озера.",
  },
];

const historyBlocks = [
  {
    year: "1941",
    title: "Начало войны",
    text: "22 июня 1941 года на территории СССР насчитывалось около 35 миллионов детей. В первые же дни миллионы из них оказались в зоне боёв, оккупации или эвакуации.",
  },
  {
    year: "1941–1944",
    title: "Блокада Ленинграда",
    text: "В осаждённом городе оставалось более 400 тысяч детей. Норма хлеба для иждивенцев составляла 125 граммов в сутки. Многие из них погибли от голода.",
  },
  {
    year: "1941–1943",
    title: "Эвакуация",
    text: "За годы войны из прифронтовых районов было эвакуировано около 10 миллионов детей. Многие потеряли семьи и оказались в детских домах.",
  },
  {
    year: "1941–1945",
    title: "Дети у станка",
    text: "Подростки 12–16 лет заменяли ушедших на фронт рабочих. На некоторых заводах до 50% работников составляли дети и подростки.",
  },
];

type Section = "home" | "history" | "testimonials" | "archive";

const Index = () => {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredArchive = archiveItems.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.date.includes(searchQuery)
  );

  const filteredTestimonials = testimonials.filter(
    (t) =>
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.year.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const navItems: { id: Section; label: string }[] = [
    { id: "home", label: "Главная" },
    { id: "history", label: "История" },
    { id: "testimonials", label: "Свидетельства" },
    { id: "archive", label: "Архив" },
  ];

  return (
    <div className="min-h-screen bg-parchment font-ibm">
      {/* Header */}
      <header className="bg-sepia-dark border-b border-sepia-warm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="cursor-pointer" onClick={() => setActiveSection("home")}>
            <div className="font-cormorant-sc text-sepia-light text-xs tracking-[0.3em] mb-0.5">
              ДОКУМЕНТАЛЬНЫЙ ПРОЕКТ
            </div>
            <div className="font-cormorant text-white text-xl font-semibold tracking-wide">
              Дети войны
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`font-cormorant-sc text-sm tracking-[0.15em] transition-colors ${
                  activeSection === item.id
                    ? "text-white border-b border-sepia-light pb-0.5"
                    : "text-sepia-light hover:text-white"
                }`}
              >
                {item.label.toUpperCase()}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden text-sepia-light"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-sepia-dark border-t border-sepia-warm px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { setActiveSection(item.id); setMobileMenuOpen(false); }}
                className={`font-cormorant-sc text-sm tracking-[0.15em] text-left transition-colors ${
                  activeSection === item.id ? "text-white" : "text-sepia-light"
                }`}
              >
                {item.label.toUpperCase()}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* ─── HOME ─── */}
      {activeSection === "home" && (
        <main>
          <section className="relative h-[70vh] min-h-[480px] overflow-hidden">
            <img
              src={HERO_IMAGE}
              alt="Дети войны"
              className="absolute inset-0 w-full h-full object-cover photo-frame"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1208] via-[#1a1208]/60 to-transparent" />
            <div className="relative h-full flex flex-col justify-end max-w-6xl mx-auto px-6 pb-14">
              <div className="animate-fade-in">
                <div className="font-cormorant-sc text-sepia-light text-xs tracking-[0.4em] mb-4">
                  1941 — 1945
                </div>
                <h1 className="font-cormorant text-white text-5xl md:text-7xl font-light leading-tight mb-4">
                  Дети войны
                </h1>
                <p className="font-ibm text-[#c4a882] text-base md:text-lg max-w-xl leading-relaxed mb-8 font-light">
                  Документальный проект о судьбах детей, чьё детство оборвала
                  Великая Отечественная война. Свидетельства, архивы, память.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => setActiveSection("history")}
                    className="bg-parchment text-ink font-ibm text-sm tracking-wide px-6 py-3 hover:bg-parchment-dark transition-colors"
                  >
                    Читать историю
                  </button>
                  <button
                    onClick={() => setActiveSection("archive")}
                    className="border border-sepia-light text-sepia-light font-ibm text-sm tracking-wide px-6 py-3 hover:border-white hover:text-white transition-colors"
                  >
                    Открыть архив
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-sepia-dark text-white py-12">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { num: "35 млн", label: "детей в СССР к 1941 году" },
                { num: "10 млн", label: "эвакуированных детей" },
                { num: "400 тыс.", label: "детей в блокадном Ленинграде" },
                { num: "600+", label: "детей-героев" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-cormorant text-3xl md:text-4xl text-sepia-light font-light mb-2">
                    {stat.num}
                  </div>
                  <div className="font-ibm text-xs text-[#a08060] tracking-wide leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3">
            {[
              {
                section: "history" as Section,
                label: "История",
                desc: "Хронология событий войны глазами детей — от первых дней до Победы.",
                icon: "BookOpen",
                border: "",
              },
              {
                section: "testimonials" as Section,
                label: "Свидетельства",
                desc: "Личные воспоминания очевидцев, переживших войну в детском возрасте.",
                icon: "MessageSquare",
                border: "border-x",
              },
              {
                section: "archive" as Section,
                label: "Архив",
                desc: "Документы, фотографии и письма военных лет. Поиск по материалам.",
                icon: "Archive",
                border: "",
              },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => setActiveSection(item.section)}
                className={`group text-left p-10 border-sepia hover:bg-parchment-dark transition-all ${item.border}`}
                style={{ borderColor: "var(--sepia-light)" }}
              >
                <div className="text-sepia-warm mb-4">
                  <Icon name={item.icon} size={24} />
                </div>
                <div className="font-cormorant text-2xl text-ink mb-3 group-hover:text-sepia-mid">
                  {item.label}
                </div>
                <div className="font-ibm text-sm text-sepia-warm leading-relaxed font-light">
                  {item.desc}
                </div>
                <div className="mt-6 font-cormorant-sc text-xs tracking-[0.2em] text-sepia-light flex items-center gap-2">
                  ПЕРЕЙТИ <Icon name="ArrowRight" size={12} />
                </div>
              </button>
            ))}
          </section>

          <section className="bg-parchment-dark border-t border-b border-sepia py-16">
            <div className="max-w-3xl mx-auto px-6 text-center">
              <div className="text-sepia-light text-5xl font-cormorant mb-4">"</div>
              <blockquote className="font-cormorant text-2xl md:text-3xl text-ink italic font-light leading-relaxed mb-6">
                Мы не выбирали время, в которое нам выпало родиться.
                Но мы выбирали — помнить.
              </blockquote>
              <div className="font-ibm text-xs text-sepia-warm tracking-widest">
                — ИЗ АРХИВА СВИДЕТЕЛЬСТВ
              </div>
            </div>
          </section>
        </main>
      )}

      {/* ─── HISTORY ─── */}
      {activeSection === "history" && (
        <main className="max-w-6xl mx-auto px-6 py-14">
          <div className="mb-12 animate-slide-up">
            <div className="font-cormorant-sc text-sepia-warm text-xs tracking-[0.4em] mb-3">
              ДОКУМЕНТАЛЬНАЯ ХРОНИКА
            </div>
            <h2 className="font-cormorant text-5xl text-ink font-light mb-4">
              История
            </h2>
            <div className="w-16 h-px bg-sepia-warm" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="font-ibm text-sm text-sepia-mid leading-loose font-light">
              <p className="mb-4">
                Великая Отечественная война стала величайшей трагедией в истории
                Советского Союза. Она затронула каждую семью, каждый дом. Но
                особую страницу в этой истории занимают дети — те, для кого
                война стала первым и главным испытанием в жизни.
              </p>
              <p className="mb-4">
                Им не было места в военных сводках. Они не принимали решений.
                Но именно они несли на своих плечах часть непосильного груза
                войны — голод, холод, потерю родных, эвакуацию в неизвестность.
              </p>
              <p>
                Этот проект — попытка сохранить их голоса. Потому что память о
                детях войны — это память о цене, которую заплатил народ за Победу.
              </p>
            </div>
            <div className="relative">
              <img
                src={ARCHIVE_IMAGE}
                alt="Архивные материалы"
                className="w-full h-64 object-cover photo-frame"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-sepia-dark/80 px-4 py-2">
                <div className="font-ibm text-xs text-sepia-light">
                  Архивные материалы. 1941–1945 гг.
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-sepia">
            <div className="font-cormorant-sc text-xs tracking-[0.3em] text-sepia-warm py-8">
              ХРОНОЛОГИЯ
            </div>
            {historyBlocks.map((block, i) => (
              <div
                key={i}
                className="grid md:grid-cols-4 border-b border-sepia py-8 gap-6 hover:bg-parchment-dark transition-colors px-4 -mx-4"
              >
                <div className="font-cormorant text-3xl text-red-accent font-light">
                  {block.year}
                </div>
                <div className="md:col-span-3">
                  <div className="font-cormorant text-xl text-ink mb-2">
                    {block.title}
                  </div>
                  <div className="font-ibm text-sm text-sepia-mid leading-relaxed font-light">
                    {block.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      )}

      {/* ─── TESTIMONIALS ─── */}
      {activeSection === "testimonials" && (
        <main className="max-w-6xl mx-auto px-6 py-14">
          <div className="mb-8 animate-slide-up">
            <div className="font-cormorant-sc text-sepia-warm text-xs tracking-[0.4em] mb-3">
              ЛИЧНЫЕ ВОСПОМИНАНИЯ
            </div>
            <h2 className="font-cormorant text-5xl text-ink font-light mb-4">
              Свидетельства
            </h2>
            <div className="w-16 h-px bg-sepia-warm mb-8" />
            <div className="relative max-w-md">
              <Icon
                name="Search"
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-sepia-warm"
              />
              <input
                type="text"
                placeholder="Поиск по свидетельствам..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-parchment-dark border border-sepia font-ibm text-sm text-ink placeholder:text-sepia-light focus:outline-none focus:border-sepia-warm"
              />
            </div>
          </div>

          {filteredTestimonials.length === 0 ? (
            <div className="text-center py-24 text-sepia-warm font-cormorant text-2xl">
              Ничего не найдено
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {filteredTestimonials.map((t) => (
                <div key={t.id} className="archive-card p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="font-cormorant text-xl text-ink mb-1">
                        {t.name}
                      </div>
                      <div className="font-ibm text-xs text-sepia-warm tracking-wide">
                        {t.year}
                      </div>
                    </div>
                    <span className="font-ibm text-xs text-red-accent border border-red-accent px-2 py-1 whitespace-nowrap ml-4">
                      {t.tag}
                    </span>
                  </div>
                  <blockquote className="font-cormorant text-lg text-sepia-mid italic font-light leading-relaxed">
                    «{t.text}»
                  </blockquote>
                </div>
              ))}
            </div>
          )}
        </main>
      )}

      {/* ─── ARCHIVE ─── */}
      {activeSection === "archive" && (
        <main className="max-w-6xl mx-auto px-6 py-14">
          <div className="mb-8 animate-slide-up">
            <div className="font-cormorant-sc text-sepia-warm text-xs tracking-[0.4em] mb-3">
              ДОКУМЕНТАЛЬНЫЕ МАТЕРИАЛЫ
            </div>
            <h2 className="font-cormorant text-5xl text-ink font-light mb-4">
              Архив
            </h2>
            <div className="w-16 h-px bg-sepia-warm mb-8" />
            <div className="relative max-w-md">
              <Icon
                name="Search"
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-sepia-warm"
              />
              <input
                type="text"
                placeholder="Поиск по архиву: тип, год, тема..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-parchment-dark border border-sepia font-ibm text-sm text-ink placeholder:text-sepia-light focus:outline-none focus:border-sepia-warm"
              />
            </div>
            {searchQuery && (
              <div className="mt-3 font-ibm text-xs text-sepia-warm">
                Найдено материалов: {filteredArchive.length}
              </div>
            )}
          </div>

          {filteredArchive.length === 0 ? (
            <div className="text-center py-24 text-sepia-warm font-cormorant text-2xl">
              Материалы не найдены
            </div>
          ) : (
            <div className="border-t border-sepia">
              {filteredArchive.map((item) => (
                <div
                  key={item.id}
                  className="border-b border-sepia py-6 grid md:grid-cols-4 gap-4 hover:bg-parchment-dark transition-colors px-4 -mx-4 cursor-pointer group"
                >
                  <div>
                    <div className="font-ibm text-xs text-sepia-warm tracking-wide mb-1">
                      {item.type}
                    </div>
                    <div className="font-cormorant text-xl text-ink">
                      {item.date}
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <div className="font-cormorant text-xl text-ink mb-2 group-hover:text-sepia-mid">
                      {item.title}
                    </div>
                    <div className="font-ibm text-sm text-sepia-mid leading-relaxed font-light">
                      {item.description}
                    </div>
                  </div>
                  <div className="flex items-center justify-end">
                    <div className="font-cormorant-sc text-xs tracking-[0.2em] text-sepia-light flex items-center gap-2 group-hover:text-sepia-warm transition-colors">
                      ОТКРЫТЬ <Icon name="ArrowRight" size={12} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      )}

      {/* Footer */}
      <footer className="bg-sepia-dark text-sepia-light mt-24">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="font-cormorant text-white text-xl mb-3">
                Дети войны
              </div>
              <div className="font-ibm text-xs text-[#806040] leading-relaxed font-light">
                Документальный проект, посвящённый памяти детей, переживших
                Великую Отечественную войну.
              </div>
            </div>
            <div>
              <div className="font-cormorant-sc text-xs tracking-[0.3em] text-sepia-warm mb-4">
                РАЗДЕЛЫ
              </div>
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className="font-ibm text-xs text-[#806040] hover:text-sepia-light text-left transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <div className="font-cormorant-sc text-xs tracking-[0.3em] text-sepia-warm mb-4">
                ПАМЯТЬ
              </div>
              <div className="font-ibm text-xs text-[#806040] leading-relaxed font-light">
                «Никто не забыт, ничто не забыто»
              </div>
              <div className="mt-4 font-cormorant text-3xl text-sepia-warm">
                1941 — 1945
              </div>
            </div>
          </div>
          <div className="border-t border-[#3d2b1a] pt-6">
            <div className="font-ibm text-xs text-[#5a4030] text-center">
              Документальный проект. Все материалы носят историко-образовательный характер.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
