import { useState } from "react";
import Icon from "@/components/ui/icon";
import { ArchiveItem, archiveItems } from "@/data/archive-data";

interface ArchiveSectionProps {
  search: string;
  setSearch: (v: string) => void;
}

const ArchiveModal = ({ item, onClose }: { item: ArchiveItem; onClose: () => void }) => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-ash/70 backdrop-blur-sm" />
      <div
        className="relative bg-cream max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="ornament-band" />

        <div className="bg-forest px-8 py-6 flex items-start justify-between gap-4">
          <div>
            <div className="font-golos text-[10px] text-gold/70 tracking-[0.3em] uppercase mb-1">
              {item.type} · {item.date}
            </div>
            <div className="font-cormorant text-cream text-2xl font-light leading-snug">
              {item.title}
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-cream/50 hover:text-cream transition-colors mt-1 flex-shrink-0"
          >
            <Icon name="X" size={20} />
          </button>
        </div>

        <div className="px-8 py-8 space-y-7">
          <div className="flex items-start gap-3 bg-cream-dark border-l-2 border-gold px-5 py-4">
            <Icon name="Archive" size={14} className="text-gold mt-0.5 flex-shrink-0" />
            <div>
              <div className="font-golos text-[10px] text-stone tracking-wide uppercase mb-0.5">Место хранения</div>
              <div className="font-golos text-sm text-ash-mid">{item.storage}</div>
            </div>
          </div>

          <div>
            <div className="font-cormorant-sc text-[10px] tracking-[0.3em] text-gold mb-3">АННОТАЦИЯ</div>
            <div className="font-golos text-sm text-ash-mid leading-relaxed font-light">
              {item.content}
            </div>
          </div>

          {item.photos && item.photos.length > 0 && (
            <div>
              <div className="font-cormorant-sc text-[10px] tracking-[0.3em] text-gold mb-4">ФОТОГРАФИИ</div>
              <div className="grid grid-cols-2 gap-3">
                {item.photos.map((photo, i) => (
                  <button
                    key={i}
                    onClick={() => setLightbox(i)}
                    className="group relative overflow-hidden text-left"
                  >
                    <img
                      src={photo.src}
                      alt={photo.caption}
                      className="w-full h-36 object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-ash/0 group-hover:bg-ash/20 transition-colors flex items-center justify-center">
                      <Icon name="ZoomIn" size={20} className="text-cream opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="bg-ash px-2 py-1.5">
                      <div className="font-golos text-[10px] text-cream/60 leading-snug line-clamp-2">{photo.caption}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {item.entries && item.entries.length > 0 && (
            <div>
              <div className="font-cormorant-sc text-[10px] tracking-[0.3em] text-gold mb-4">СОСТАВ ФОНДА</div>
              <div className="space-y-3">
                {item.entries.map((entry, i) => (
                  <div key={i} className="flex items-start gap-3 border-b border-cream-dark pb-3">
                    <div className="w-5 h-5 bg-forest text-cream flex items-center justify-center font-golos text-[10px] flex-shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <div className="font-golos text-sm text-ash-mid font-light leading-relaxed">{entry}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <button
            onClick={onClose}
            className="w-full border border-forest text-forest font-golos text-xs tracking-wide py-3 hover:bg-forest hover:text-cream transition-colors"
          >
            ЗАКРЫТЬ ДОКУМЕНТ
          </button>
        </div>

        <div className="ornament-band" />
      </div>

      {lightbox !== null && item.photos && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/60 hover:text-white"
            onClick={() => setLightbox(null)}
          >
            <Icon name="X" size={28} />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + item.photos!.length) % item.photos!.length); }}
          >
            <Icon name="ChevronLeft" size={36} />
          </button>
          <div className="max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={item.photos[lightbox].src}
              alt={item.photos[lightbox].caption}
              className="w-full max-h-[75vh] object-contain"
            />
            <div className="mt-4 text-center font-golos text-sm text-white/60">
              {item.photos[lightbox].caption}
            </div>
            <div className="mt-2 text-center font-golos text-xs text-white/30">
              {lightbox + 1} / {item.photos.length}
            </div>
          </div>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % item.photos!.length); }}
          >
            <Icon name="ChevronRight" size={36} />
          </button>
        </div>
      )}
    </div>
  );
};

const ArchiveSection = ({ search, setSearch }: ArchiveSectionProps) => {
  const [selectedArchive, setSelectedArchive] = useState<ArchiveItem | null>(null);

  const filtered = archiveItems.filter((item) =>
    [item.title, item.type, item.date, item.desc].some((f) =>
      f.toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <>
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
            <div className="mt-2 font-golos text-xs text-stone">Найдено: {filtered.length}</div>
          )}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-24 text-stone font-cormorant text-2xl">Материалы не найдены</div>
        ) : (
          <div className="border-t border-cream-dark">
            {filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedArchive(item)}
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

      {selectedArchive && (
        <ArchiveModal item={selectedArchive} onClose={() => setSelectedArchive(null)} />
      )}
    </>
  );
};

export default ArchiveSection;
