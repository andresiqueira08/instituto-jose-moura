import { Smile, Activity, Sparkles } from "lucide-react";

const services = [
  {
    icon: Smile,
    title: "Odontologia",
    description: "Tratamentos completos em reabilitação oral, implantes, estética dental e muito mais. Tecnologia de ponta para o seu sorriso.",
    highlight: true,
  },
  {
    icon: Activity,
    title: "Fisioterapia",
    description: "Reabilitação funcional e tratamento de lesões com técnicas modernas para recuperar sua qualidade de vida.",
    highlight: false,
  },
  {
    icon: Sparkles,
    title: "Dermatologia",
    description: "Cuidados especializados para a saúde e beleza da sua pele com procedimentos estéticos e tratamentos clínicos.",
    highlight: false,
  },
];

const Services = () => {
  return (
    <section id="servicos" className="section-padding bg-cream-dark">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
            Nossos Serviços
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-navy mb-6">
            Cuidado Completo para sua Saúde
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            Oferecemos um atendimento multidisciplinar com profissionais altamente qualificados.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`card-elegant p-8 text-center group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                service.highlight ? "ring-2 ring-gold/50" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 transition-colors duration-300 ${
                service.highlight 
                  ? "bg-gold text-navy" 
                  : "bg-navy/10 text-navy group-hover:bg-gold group-hover:text-navy"
              }`}>
                <service.icon size={28} />
              </div>
              <h3 className="font-display text-2xl font-semibold text-navy mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {service.description}
              </p>
              {service.highlight && (
                <span className="inline-block mt-6 text-gold text-sm font-medium tracking-wide">
                  ★ Especialidade Principal
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
