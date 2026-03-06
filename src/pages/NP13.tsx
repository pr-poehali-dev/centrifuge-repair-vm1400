import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";
import PhotoGallery from "@/components/PhotoGallery";

const galleryImages: { src: string; alt: string; label: string }[] = [];

const criticalFactors = [
  { icon: "Shield", title: "Износ футеровки", desc: "Сквозной абразивный износ броневой футеровки стенок корпуса (отсека питания и дробления)" },
  { icon: "AlertTriangle", title: "Трещины корпуса", desc: "Трещины, разрывы, изгибы стенок корпуса отсека питания и дробления" },
  { icon: "Activity", title: "Изгиб вала", desc: "Изгиб главного дробящего вала" },
  { icon: "Cog", title: "Износ подшипников", desc: "Износ подшипников качения" },
  { icon: "Droplets", title: "Смазочная станция", desc: "Выход из строя станции централизованной смазки" },
  { icon: "Wrench", title: "Износ передачи", desc: "Износ ручьев клиноременной передачи" },
  { icon: "Settings", title: "Механизмы экранов", desc: "Повреждения механизмов регулировки экранов" },
];

const workSteps = [
  {
    title: "Изготовление нового корпуса",
    desc: "Изготовление нового корпуса (отсек питания и дробления) с термической нормализацией.",
  },
  {
    title: "Броневая футеровка",
    desc: "Изготовление и монтаж броневой футеровки из высокомарганцевой стали Гадфильда.",
  },
  {
    title: "Механизмы регулировки экранов",
    desc: "Изготовление механизмов регулировки экранов.",
  },
  {
    title: "Сборка и балансировка ротора",
    desc: "Сборка ротора с заменой подшипников. Балансировка ротора.",
  },
  {
    title: "Полная сборка дробилки",
    desc: "Полная сборка дробилки с заменой подшипников качения. Дробеструйная обработка и окраска.",
  },
  {
    title: "Гидравлика и маслостанция",
    desc: "Замена всех гидроцилиндров и РВТ. Ревизия маслостанции. Подключение и настройка новой станции централизованной смазки.",
  },
  {
    title: "Шеф-монтаж и пусконаладка",
    desc: "Шеф-монтажные работы и пусконаладка на объекте заказчика.",
  },
];

const results = [
  { label: "01", text: "Полное восстановление работоспособности дробилки" },
  { label: "02", text: "Новый корпус с броневой футеровкой из стали Гадфильда" },
  { label: "03", text: "Безаварийная работа дробилки с апреля 2025 г." },
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

const NP13 = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-primary/90 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm mb-8">
              <Icon name="Settings" size={16} />
              <span>Проект выполнен</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Капитальный ремонт роторной дробилки{" "}
              <span className="text-orange-300">NP13</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
              Комплексное восстановление промышленного оборудования с изготовлением нового корпуса и броневой футеровки
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
                Восстановление дробилки до штатных параметров
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Роторная дробилка NP13 поступила в ремонт с критическим физическим износом корпуса, ротора и вспомогательных систем. Выполнен полный комплекс работ — от изготовления нового корпуса до шеф-монтажа на объекте заказчика.
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
              <div className="space-y-8">
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
                Капитальный ремонт с изготовлением нового корпуса и броневой футеровки из стали Гадфильда обеспечивает кратное увеличение ресурса оборудования по сравнению с частичными восстановительными работами.
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

export default NP13;
