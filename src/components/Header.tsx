import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Search, Menu, X, Phone } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import logo from "@/assets/logo.png";

const navLinks = [
  { to: "/", label: "Início" },
  { to: "/loja", label: "Loja" },
  { to: "/categorias", label: "Categorias" },
  { to: "/projetos", label: "Projetos" },
  { to: "/sobre", label: "Sobre Nós" },
  { to: "/contactos", label: "Contactos" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { totalItems, setIsCartOpen } = useCart();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/loja?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <Phone className="h-3 w-3" />
            <span>+258 84 123 4567</span>
          </div>
          <span className="hidden sm:block font-medium">Entrega em todo Moçambique 🇲🇿</span>
          <a href="https://wa.me/258841234567" target="_blank" rel="noopener noreferrer" className="bg-whatsapp px-3 py-1 rounded text-xs font-semibold text-whatsapp-foreground hover:opacity-90 transition-opacity">
            WhatsApp
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-card shadow-md">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="SOCOAL" className="h-12 w-auto" />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-6">
            {navLinks.map(link => (
              <li key={link.to}>
                <Link to={link.to} className="font-display text-sm tracking-wide text-foreground hover:text-primary transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button onClick={() => setSearchOpen(!searchOpen)} className="p-2 hover:text-primary transition-colors" aria-label="Pesquisar">
              <Search className="h-5 w-5" />
            </button>

            <button onClick={() => setIsCartOpen(true)} className="p-2 hover:text-primary transition-colors relative" aria-label="Carrinho">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </button>

            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2" aria-label="Menu">
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="border-t border-border">
            <form onSubmit={handleSearch} className="container mx-auto px-4 py-3 flex gap-2">
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Pesquisar produtos..."
                className="flex-1 bg-muted rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                autoFocus
              />
              <button type="submit" className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-display text-sm hover:opacity-90 transition-opacity">
                Buscar
              </button>
            </form>
          </div>
        )}

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-border animate-slide-in">
            <ul className="container mx-auto px-4 py-4 space-y-3">
              {navLinks.map(link => (
                <li key={link.to}>
                  <Link to={link.to} onClick={() => setMobileOpen(false)} className="block font-display text-sm tracking-wide py-2 text-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
