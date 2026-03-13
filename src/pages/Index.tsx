import { Link } from "react-router-dom";
import { ArrowRight, Star, Truck, Shield, Headphones } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products, categories, reviews, formatPrice } from "@/data/products";
import heroBanner from "@/assets/hero-banner.jpg";
import catIluminacao from "@/assets/cat-iluminacao.jpg";
import catMateriais from "@/assets/cat-materiais.jpg";
import catFerramentas from "@/assets/cat-ferramentas.jpg";
import catAcessorios from "@/assets/cat-acessorios.jpg";
import catEquipamentos from "@/assets/cat-equipamentos.jpg";

const categoryImages: Record<string, string> = {
  iluminacao: catIluminacao,
  "materiais-eletricos": catMateriais,
  ferramentas: catFerramentas,
  acessorios: catAcessorios,
  equipamentos: catEquipamentos,
};

export default function Index() {
  const featured = products.filter(p => p.featured);
  const promos = products.filter(p => p.promo);
  const bestsellers = products.filter(p => p.bestseller);

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center overflow-hidden">
        <img src={heroBanner} alt="Materiais elétricos e ferramentas" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-hero opacity-80" />
        <div className="relative container mx-auto px-4 z-10">
          <div className="max-w-xl animate-fade-in">
            <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded text-xs font-display mb-4">PROMOÇÕES ACTIVAS</span>
            <h1 className="text-4xl md:text-6xl text-secondary-foreground leading-tight mb-4">
              Materiais Elétricos & Ferramentas
            </h1>
            <p className="text-secondary-foreground/80 text-lg mb-6">
              Tudo o que precisa para os seus projetos elétricos. Qualidade profissional a preços acessíveis.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/loja" className="gradient-primary text-primary-foreground px-8 py-3 rounded-md font-display text-sm hover:opacity-90 transition-opacity inline-flex items-center gap-2">
                Ver Produtos <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="https://wa.me/244923456789" target="_blank" rel="noopener noreferrer" className="bg-whatsapp text-whatsapp-foreground px-8 py-3 rounded-md font-display text-sm hover:opacity-90 transition-opacity">
                Fale Connosco
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits bar */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 py-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex items-center justify-center gap-3 text-sm"><Truck className="h-5 w-5 text-primary" /><span>Entrega em toda Angola</span></div>
          <div className="flex items-center justify-center gap-3 text-sm"><Shield className="h-5 w-5 text-primary" /><span>Produtos com garantia</span></div>
          <div className="flex items-center justify-center gap-3 text-sm"><Headphones className="h-5 w-5 text-primary" /><span>Suporte profissional</span></div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl">Categorias</h2>
          <Link to="/categorias" className="text-primary text-sm font-display flex items-center gap-1 hover:underline">Ver Todas <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map(cat => (
            <Link key={cat.slug} to={`/loja?category=${cat.slug}`} className="group relative rounded-lg overflow-hidden aspect-[4/3]">
              <img src={categoryImages[cat.slug]} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent" />
              <div className="absolute bottom-0 left-0 p-3">
                <h3 className="text-sm text-secondary-foreground">{cat.name}</h3>
                <p className="text-xs text-secondary-foreground/60">{cat.productCount} produtos</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-muted">
        <div className="container mx-auto px-4 py-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl">Produtos em Destaque</h2>
            <Link to="/loja" className="text-primary text-sm font-display flex items-center gap-1 hover:underline">Ver Todos <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {featured.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">🔥 Promoções Especiais</h2>
          <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">Aproveite descontos exclusivos em materiais elétricos e ferramentas selecionadas.</p>
          <Link to="/loja?promo=true" className="inline-block bg-secondary text-secondary-foreground px-8 py-3 rounded-md font-display text-sm hover:opacity-90 transition-opacity">
            Ver Promoções
          </Link>
        </div>
      </section>

      {/* Promos */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl mb-8">Ofertas da Semana</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {promos.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* Bestsellers */}
      <section className="bg-muted">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl mb-8">Mais Vendidos</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {bestsellers.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl mb-8 text-center">O Que Dizem os Nossos Clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-card rounded-lg p-6 shadow-sm border border-border">
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className={`h-4 w-4 ${j < r.rating ? "text-sale fill-sale" : "text-border"}`} />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4 italic">"{r.text}"</p>
              <p className="font-display text-sm">{r.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-3xl mb-3">Receba as Nossas Novidades</h2>
          <p className="text-secondary-foreground/70 mb-6 max-w-md mx-auto text-sm">Inscreva-se para receber promoções e novos produtos em primeira mão.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="O seu email" className="flex-1 px-4 py-3 rounded-md text-sm bg-secondary-foreground/10 border border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary" />
            <button type="submit" className="gradient-primary text-primary-foreground px-6 py-3 rounded-md font-display text-sm hover:opacity-90 transition-opacity">
              Inscrever
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
