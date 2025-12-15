import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#servicos", label: "Serviços" },
    { href: "#dr-jose", label: "Dr. José Gomes" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-gold/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3">
            <span className="font-display text-2xl md:text-3xl font-semibold text-gold">
              Instituto José Gomes de Moura
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-cream/80 hover:text-gold transition-colors duration-300 font-body text-sm tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://linktr.ee/institutojosegomes?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnZHJokcg8CzFl9iteQOFIZHCEFVSJJM79_iE7bIgfDZ64lc8xUrpE9OLxkvs_aem_PM3k_foGwIa2sdynWPfFlg"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-5 py-2.5 rounded-md text-sm flex items-center gap-2"
            >
              <Phone size={16} />
              Agendar
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-cream p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 border-t border-gold/20 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-cream/80 hover:text-gold transition-colors duration-300 font-body text-lg py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://form.jotform.com/253403459000648"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold px-5 py-3 rounded-md text-center mt-2"
              >
                Agendar Consulta
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
