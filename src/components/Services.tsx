import { Smile } from "lucide-react";

const services = [
  {
    icon: Smile,
    title: "Odontologia",
    description:
      "Tratamentos completos em reabilitação oral, implantes, estética dental e muito mais. Tecnologia de ponta para o seu sorriso.",
    highlight: true,
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
            Oferecemos um atendimento especializado em odontologia.
          </p>
        </div>

        {/* Services Grid */}
        <div className="flex justify-center">
          {services.map((service) => (
            <div
              key={service.title}
              className="card-elegant p-8 text-center max-w-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ring-2 ring-gold/50"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 bg-gold text-navy">
                <service.icon size={28} />
              </div>
              <h3 className="font-display text-2xl font-semibold text-navy mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {service.description}
              </p>
              <span className="inline-block mt-6 text-gold text-sm font-medium tracking-wide">
                ★ Especialidade Principal
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
