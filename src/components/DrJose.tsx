import { GraduationCap, Award, Calendar } from "lucide-react";
import drJosePortrait from "@/assets/dr-jose-portrait.jpg";
import drJoseWorking from "@/assets/dr-jose-working.jpg";

const DrJose = () => {
  return (
    <section id="dr-jose" className="section-padding bg-navy">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Images */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={drJosePortrait}
                alt="Dr. José Gomes de Moura"
                className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 lg:right-8 w-48 md:w-64 z-20 hidden md:block">
              <img
                src={drJoseWorking}
                alt="Dr. José Gomes realizando procedimento"
                className="rounded-lg shadow-xl border-4 border-navy"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute top-8 -left-4 w-24 h-24 border-2 border-gold/30 rounded-lg -z-0" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
              Especialista em Reabilitação Oral
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-cream mb-6">
              Dr. José Gomes de Moura
            </h2>
            <p className="text-cream/70 font-body text-lg leading-relaxed mb-8">
              Com formação sólida e dedicação à excelência, o Dr. José Gomes de Moura 
              é referência em reabilitação oral, oferecendo tratamentos personalizados 
              com tecnologia de ponta e um atendimento humanizado.
            </p>

            {/* Credentials */}
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                  <GraduationCap className="text-gold" size={22} />
                </div>
                <div>
                  <p className="text-cream font-medium">Formação</p>
                  <p className="text-cream/60 text-sm">Universidade de Pernambuco (UPE)</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                  <Award className="text-gold" size={22} />
                </div>
                <div>
                  <p className="text-cream font-medium">Especialização</p>
                  <p className="text-cream/60 text-sm">Reabilitação Oral e Implantes</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="https://form.jotform.com/253403459000648"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-3 px-8 py-4 rounded-md text-lg font-medium"
            >
              <Calendar size={20} />
              Agende sua Consulta Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DrJose;
