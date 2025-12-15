import clinicImage from "@/assets/clinic-reception.webp";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={clinicImage}
          alt="Recepção do Instituto José Gomes de Moura"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-2xl">
          <p className="text-gold font-body text-sm md:text-base tracking-[0.3em] uppercase mb-4 animate-fade-in">
            Excelência em Saúde
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-cream leading-tight mb-6 animate-slide-up">
            Instituto
            <span className="block text-gold">José Gomes de Moura</span>
          </h1>
          <p className="text-cream/80 font-body text-lg md:text-xl leading-relaxed mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Cuidado integral à sua saúde com profissionais especializados em 
            <strong className="text-gold"> Odontologia</strong>, Fisioterapia e Dermatologia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <a
              href="https://form.jotform.com/253403459000648"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-8 py-4 rounded-md text-center font-medium text-lg"
            >
              Agende sua Consulta
            </a>
            <a
              href="#servicos"
              className="btn-outline-gold px-8 py-4 rounded-md text-center font-medium text-lg"
            >
              Nossos Serviços
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
