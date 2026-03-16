import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";
import PhotoGallery from "@/components/PhotoGallery";

const galleryImages: { src: string; alt: string; label: string }[] = [];

const criticalFactors = [
  { icon: "Shield", title: "Износ корпуса", desc: "Сквозной абразивный износ корпуса центрифуги" },
  { icon: "LayoutGrid", title: "Износ керамики", desc: "Полный износ алюмооксидной керамической плитки" },
  { icon: "DoorOpen", title: "Износ шарниров и двери", desc: "Критический износ шарниров и двери центрифуги" },
  { icon: "Droplets", title: "Масляная система", desc: "Выход из строя компонентов масляной системы смазки" },
  { icon: "CircleDot", title: "Посадочные места", desc: "Износ посадочных мест под подшипники вибрационного блока и главного вала" },
  { icon: "Cog", title: "Износ подшипников", desc: "Критический износ подшипников качения" },
  { icon: "Vibrate", title: "Вибромоторы", desc: "Выход из строя вибромоторов, заломыши болтов крепления" },
  { icon: "Wrench", title: "Коррозия рамы", desc: "Коррозионное поражение элементов опорной рамы" },
];

const workSteps = [
  {
    title: "Восстановление корпуса",
    desc: "Восстановление сквозного абразивного износа корпуса центрифуги. Восстановление резьб и удаление заломышей болтов крепления вибромоторов.",
  },
  {
    title: "Замена керамической плитки",
    desc: "Замена алюмооксидной керамической плитки 100%.",
  },
  {
    title: "Шарниры и дверь",
    desc: "Изготовление и замена шарниров и двери центрифуги.",
  },
  {
    title: "Масляная система смазки",
    desc: "Замена всех компонентов масляной системы смазки.",
  },
  {
    title: "Вибрационный блок",
    desc: "Восстановление посадочных мест под подшипники вибрационного блока.",
  },
  {
    title: "Главный вал",
    desc: "Восстановление посадочных мест под подшипники, резьб главного вала.",
  },
  {
    title: "Замена подшипников",
    desc: "Замена подшипников качения.",
  },
  {
    title: "Лабиринтные уплотнения",
    desc: "Изготовление и замена лабиринтных уплотнений главного вала центрифуги.",
  },
  {
    title: "Замена вибромоторов",
    desc: "Замена вибромоторов.",
  },
  {
    title: "Кожух ременной передачи",
    desc: "Изготовление и замена кожуха ременной передачи.",
  },
  {
    title: "Вибрационный блок и опоры",
    desc: "Замена резины вибрационного блока, замена опорных подушек.",
  },
  {
    title: "Опорная рама",
    desc: "Замена элементов опорной рамы, поражённых коррозией.",
  },
  {
    title: "Ревизия электродвигателя",
    desc: "Ревизия электродвигателя, замена подшипников, изготовление и замена крыльчатки охлаждения.",
  },
  {
    title: "Грунтовка и покраска",
    desc: "Грунтовка и покраска всех элементов центрифуги.",
  },
  {
    title: "Сборка и наладка",
    desc: "Сборка, регулировка и наладка центрифуги на холостом ходу.",
  },
];

const results = [
  { label: "01", text: "Полное восстановление работоспособности 2 центрифуг" },
  { label: "02", text: "100% замена керамической плитки и всех изнашиваемых узлов" },
  { label: "03", text: "Безаварийная работа оборудования после ремонта" },
];

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useInView();
  return (
    <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>
      {children}
    </div>
  );
}

const WZ1400 = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-primary/90 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm mb-8">
              <Icon name="Settings" size={16} />
              <span>Проект выполнен</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Капитальный ремонт центрифуги{" "}
              <span className="text-cyan-300">WZ‑1400</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
              Комплексное восстановление 2 центрифуг WZ&nbsp;1400 — от корпуса и керамической футеровки до полной сборки и наладки
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <Section>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">О проекте</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
                Восстановление центрифуг до штатных параметров
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Две центрифуги WZ&nbsp;1400 поступили в ремонт со сквозным абразивным износом корпуса, полным износом керамической плитки и критическим состоянием вибрационного блока, подшипниковых узлов и опорной рамы. Выполнен полный комплекс работ из 15 этапов.
              </p>
            </div>
          </Section>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-6">
          <Section>
            <div className="text-center mb-16">
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">Диагностика</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Причины проведения ремонта
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Необходимость проведения работ была обусловлена рядом критических факторов
              </p>
            </div>
          </Section>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {criticalFactors.map((factor, i) => (
              <Section key={i}>
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={factor.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">{factor.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{factor.desc}</p>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-6">
          <Section>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">Ход работ</span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                  Процесс работ
                </h2>
              </div>
              <div className="space-y-6">
                {workSteps.map((step, i) => (
                  <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                        {i + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-foreground mb-3">{step.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Section>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-slate-900">
        <div className="container mx-auto px-6">
          <Section>
            <div className="text-center mb-16">
              <span className="inline-block text-emerald-400 font-semibold text-sm uppercase tracking-widest mb-4">Итоги</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
                Результат работ
              </h2>
            </div>
          </Section>

          <Section>
            <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
              {results.map((result, i) => (
                <div key={i} className="bg-slate-900 p-8 md:p-10 flex flex-col gap-6 hover:bg-slate-800 transition-colors duration-300">
                  <span className="text-5xl font-bold text-emerald-400/30 font-heading leading-none">{result.label}</span>
                  <p className="text-white text-lg font-medium leading-snug">{result.text}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section>
            <div className="max-w-4xl mx-auto mt-10 border-t border-white/10 pt-10">
              <p className="text-white/50 text-base leading-relaxed text-center max-w-2xl mx-auto">
                Капитальный ремонт с полной заменой керамической плитки, восстановлением корпуса и всех подшипниковых узлов обеспечивает кратное увеличение ресурса оборудования по сравнению с частичными восстановительными работами.
              </p>
            </div>
          </Section>
        </div>
      </section>

      {galleryImages.length > 0 && (
        <section className="py-20 md:py-28 bg-slate-50">
          <div className="container mx-auto px-6">
            <Section>
              <div className="text-center mb-12">
                <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">Фотографии</span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Фотогалерея проекта
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Нажмите на фотографию для просмотра в полном размере
                </p>
              </div>
            </Section>
            <Section>
              <div className="max-w-4xl mx-auto">
                <PhotoGallery images={galleryImages} />
              </div>
            </Section>
          </div>
        </section>
      )}

      <footer className="bg-slate-900 text-white/60 py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Капитальный ремонт промышленного оборудования
          </p>
        </div>
      </footer>
    </div>
  );
};

export default WZ1400;
