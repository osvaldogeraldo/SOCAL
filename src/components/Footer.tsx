import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl mb-4 text-primary">SOCOAL</h3>
            <p className="text-sm opacity-80 leading-relaxed">
              Sua loja de confiança para materiais elétricos, ferramentas e acessórios. Qualidade e preço justo para profissionais e particulares.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="https://facebook.com/socoal" target="_blank" rel="noopener noreferrer" className="p-2 bg-primary/20 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-primary/20 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/loja" className="hover:text-primary transition-colors">Loja</Link></li>
              <li><Link to="/categorias" className="hover:text-primary transition-colors">Categorias</Link></li>
              <li><Link to="/projetos" className="hover:text-primary transition-colors">Projetos</Link></li>
              <li><Link to="/sobre" className="hover:text-primary transition-colors">Sobre Nós</Link></li>
              <li><Link to="/contactos" className="hover:text-primary transition-colors">Contactos</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg mb-4">Contactos</h3>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary shrink-0" /> Av. da Indústria, Maputo, Moçambique</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary shrink-0" /> +258 84 123 4567</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary shrink-0" /> info@socoal.co.mz</li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg mb-4">Horário</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary shrink-0" /> Seg - Sex: 08:00 - 18:00</li>
              <li className="pl-6">Sábado: 08:00 - 13:00</li>
              <li className="pl-6">Domingo: Fechado</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-primary/20">
        <div className="container mx-auto px-4 py-4 text-center text-sm opacity-60">
          © {new Date().getFullYear()} SOCOAL — Materiais Elétricos & Ferramentas. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
