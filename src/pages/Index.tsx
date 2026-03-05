import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import PhotoGallery from "@/components/PhotoGallery";

const BEFORE_IMG = "https://cdn.poehali.dev/projects/72a0e6d4-b621-4949-b64d-102d6e193920/files/993b38fc-0a54-422d-9c83-31a0c1f7e5fa.jpg";
const AFTER_IMG = "https://cdn.poehali.dev/projects/72a0e6d4-b621-4949-b64d-102d6e193920/files/124f7b07-ae66-466b-90fe-5c749353795b.jpg";
const DETAIL_IMG = "https://cdn.poehali.dev/projects/72a0e6d4-b621-4949-b64d-102d6e193920/files/797c9a51-4720-4e5c-abdd-a2737757a746.jpg";

const galleryImages = [
  { src: BEFORE_IMG, alt: "Центрифуга до ремонта — общий вид", label: "До ремонта" },
  { src: AFTER_IMG, alt: "Центрифуга после ремонта — общий вид", label: "После ремонта" },
  { src: DETAIL_IMG, alt: "Внутренние механизмы центрифуги", label: "Механизмы" },
  { src: BEFORE_IMG, alt: "Износ корпуса центрифуги", label: "До ремонта" },
  { src: AFTER_IMG, alt: "Восстановленный корпус", label: "После ремонта" },
  { src: DETAIL_IMG, alt: "Ситовая тарелка и корзина", label: "Детали" },
];

const criticalFactors = [
  { icon: "Activity", title: "Нестабильная вибрация", desc: "Снижение и нестабильность уровня вибрации оборудования" },
  { icon: "Droplets", title: "Утечки масла", desc: "Шумная и нестабильная работа маслосистемы с утечками" },
  { icon: "Shield", title: "Износ футеровки", desc: "Критический износ футеровки корпуса центрифуги" },
  { icon: "Thermometer", title: "Повышенная влажность", desc: "Повышенная влажность концентрата на выходе" },
  { icon: "AlertTriangle", title: "Твёрдые включения", desc: "Увеличение содержания твёрдых включений в фугате" },
  { icon: "Wrench", title: "Трещины корпуса", desc: "Трещины и механические повреждения корпуса и рамы" },
];

const results = [
  { label: "01", text: "Полное восстановление работоспособности центрифуги" },
  { label: "02", text: "Возврат проектных количественных и качественных технологических показателей" },
  { label: "03", text: "Стабильная и безаварийная эксплуатация оборудования с ноября 2024 года" },
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

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-primary/90 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm mb-8">
              <Icon name="Settings" size={16} />
              <span>Проект выполнен</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Капитальный ремонт центрифуги{" "}
              <span className="text-blue-300">VM-1400</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
              Комплексное восстановление промышленного оборудования с гарантией стабильной безаварийной эксплуатации
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
                Восстановление оборудования до штатных параметров
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Комплекс работ по капитальному ремонту и восстановлению центрифуги предназначен для возвращения оборудования к штатным техническим и технологическим параметрам, повышения надежности и обеспечения стабильной безаварийной эксплуатации. Решение актуально для предприятий, столкнувшихся с износом узлов, ухудшением качества обезвоживания и ростом аварийных рисков.
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
                Критические факторы ремонта
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

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <Section>
            <div className="text-center mb-16">
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">Результат</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                До и после ремонта
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Перетащите ползунок для сравнения состояния оборудования до и после капитального ремонта
              </p>
            </div>
          </Section>
          <Section>
            <div className="max-w-3xl mx-auto">
              <BeforeAfterSlider
                beforeImage={BEFORE_IMG}
                afterImage={AFTER_IMG}
              />
            </div>
          </Section>
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
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">1</div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground mb-3">Ревизия и восстановление узлов</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Проведена ревизия и восстановление ключевых узлов центрифуги, включая основной привод, вибрационный блок и маслосистему с заменой изношенных компонентов и элементов автоматизации. Выполнено восстановление и модернизация внутренних разделительных элементов корпуса и вращающихся частей по разработанной технологии, что позволило обеспечить чистоту фугата и снизить влажность обезвоживаемого концентрата.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">2</div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground mb-3">Восстановление футеровки и корпуса</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Отдельное внимание уделено восстановлению футеровки корпуса, двери и питающей трубы с применением алюмокерамической плитки и износостойких смесей, а также ремонту и усилению корпуса и опорных конструкций.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">3</div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground mb-3">Настройка и замена компонентов</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Работы включали настройку уровня вибрации до рекомендуемых значений, замену подшипников, ремней, виброизолирующих элементов, корзины и ситовой тарелки, восстановление лакокрасочного покрытия с предварительной дробеструйной обработкой.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">4</div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground mb-3">Обкатка и пусконаладка</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Перед передачей заказчику центрифуга прошла 24-часовую обкатку на территории исполнителя с фиксацией всех рабочих параметров, а затем — шеф-монтаж и пусконаладочные работы на объекте заказчика. В гарантийный период обеспечивается сопровождение с периодическими осмотрами и выдачей рекомендаций по эксплуатации.
                      </p>
                    </div>
                  </div>
                </div>
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
                Комплексный капитальный ремонт центрифуги позволяет продлить срок службы оборудования, восстановить эффективность технологического процесса и избежать затрат на приобретение новой машины, обеспечивая надежную работу в долгосрочной перспективе.
              </p>
            </div>
          </Section>
        </div>
      </section>

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

export default Index;