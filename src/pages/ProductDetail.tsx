import { useParams, Link } from "react-router-dom";
import { ShoppingCart, MessageCircle, Star, ArrowLeft, ChevronRight } from "lucide-react";
import { products, formatPrice } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import ProductCard from "@/components/ProductCard";

export default function ProductDetail() {
  const { id } = useParams();
  const { addItem } = useCart();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl mb-4">Produto não encontrado</h1>
        <Link to="/loja" className="text-primary hover:underline">Voltar à loja</Link>
      </div>
    );
  }

  const related = products.filter(p => p.categorySlug === product.categorySlug && p.id !== product.id).slice(0, 4);
  const whatsappUrl = `https://wa.me/244923456789?text=${encodeURIComponent(`Olá! Tenho interesse no produto: ${product.name} - ${formatPrice(product.price)}`)}`;

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-muted">
        <div className="container mx-auto px-4 py-3 flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Início</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/loja" className="hover:text-primary">Loja</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to={`/loja?category=${product.categorySlug}`} className="hover:text-primary">{product.category}</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">{product.name}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Image */}
          <div className="bg-muted rounded-lg aspect-square flex items-center justify-center">
            <ShoppingCart className="h-24 w-24 text-muted-foreground/20" />
          </div>

          {/* Details */}
          <div>
            <p className="text-sm text-muted-foreground mb-1">{product.category}</p>
            <h1 className="text-3xl md:text-4xl mb-4">{product.name}</h1>

            <div className="flex items-center gap-2 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-sale fill-sale" : "text-border"}`} />
              ))}
              <span className="text-sm text-muted-foreground">({product.reviews} avaliações)</span>
            </div>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-display text-3xl text-primary">{formatPrice(product.price)}</span>
              {product.oldPrice && (
                <span className="text-lg text-muted-foreground line-through">{formatPrice(product.oldPrice)}</span>
              )}
              {product.oldPrice && (
                <span className="bg-sale text-sale-foreground text-xs font-bold px-2 py-1 rounded">
                  -{Math.round((1 - product.price / product.oldPrice) * 100)}%
                </span>
              )}
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">{product.description}</p>

            {/* Specs */}
            {product.specs && product.specs.length > 0 && (
              <div className="mb-6">
                <h3 className="font-display text-sm mb-3">Especificações Técnicas</h3>
                <ul className="space-y-1">
                  {product.specs.map((spec, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-3">
              <button onClick={() => addItem(product)} className="flex-1 gradient-primary text-primary-foreground py-3 rounded-md font-display text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                <ShoppingCart className="h-4 w-4" /> Adicionar ao Carrinho
              </button>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-whatsapp text-whatsapp-foreground px-6 py-3 rounded-md font-display text-sm flex items-center gap-2 hover:opacity-90 transition-opacity">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section>
            <h2 className="text-2xl mb-6">Produtos Relacionados</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
