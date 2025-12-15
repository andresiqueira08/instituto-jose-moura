import { MapPin, Phone, Clock, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="bg-navy-light border-t border-gold/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-2xl font-semibold text-gold mb-4">
              Instituto José Gomes de Moura
            </h3>
            <p className="text-cream/60 font-body leading-relaxed max-w-md mb-6">
              Excelência em saúde bucal e bem-estar. Nosso compromisso é oferecer 
              o melhor atendimento com tecnologia de ponta e profissionais qualificados.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-navy transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold text-cream mb-6">
              Contato
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-gold mt-1 flex-shrink-0" size={18} />
                <p className="text-cream/60 text-sm">
                  Endereço da clínica
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-gold flex-shrink-0" size={18} />
                <p className="text-cream/60 text-sm">
                  (XX) XXXXX-XXXX
                </p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-lg font-semibold text-cream mb-6">
              Horário de Funcionamento
            </h4>
            <div className="flex items-start gap-3">
              <Clock className="text-gold mt-1 flex-shrink-0" size={18} />
              <div className="text-cream/60 text-sm space-y-1">
                <p>Segunda a Sexta: 8h - 18h</p>
                <p>Sábado: 8h - 12h</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gold/10 mt-12 pt-8 text-center">
          <p className="text-cream/40 text-sm font-body">
            © {new Date().getFullYear()} Instituto José Gomes de Moura. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
