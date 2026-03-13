import { ShoppingCart, MessageCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Product, formatPrice } from "@/data/products";
import { useCart } from "@/contexts/CartContext";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const whatsappUrl = `https://wa.me/258841234567?text=${encodeURIComponent(`Olá! Tenho interesse no produto: ${product.name} - ${formatPrice(product.price)}`)}`;

  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow group border border-border">
      {/* Image */}
      <Link to={`/produto/${product.id}`} className="block relative overflow-hidden">
        <div className="aspect-square bg-muted flex items-center justify-center">
          <ShoppingCart className="h-12 w-12 text-muted-foreground/30" />
        </div>
        {product.promo && (
          <span className="absolute top-2 left-2 bg-sale text-sale-foreground text-xs font-bold px-2 py-1 rounded">PROMOÇÃO</span>
        )}
        {product.bestseller && (
          <span className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded">MAIS VENDIDO</span>
        )}
      </Link>

      {/* Content */}
      <div className="p-4">
        <Link to={`/produto/${product.id}`}>
          <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
          <h3 className="font-display text-sm mb-2 group-hover:text-primary transition-colors line-clamp-2">{product.name}</h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`h-3 w-3 ${i < Math.floor(product.rating) ? "text-sale fill-sale" : "text-border"}`} />
          ))}
          <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-3">
          <span className="font-display text-lg text-primary">{formatPrice(product.price)}</span>
          {product.oldPrice && (
            <span className="text-xs text-muted-foreground line-through">{formatPrice(product.oldPrice)}</span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <button onClick={() => addItem(product)} className="flex-1 bg-primary text-primary-foreground py-2 rounded-md text-xs font-display flex items-center justify-center gap-1 hover:opacity-90 transition-opacity">
            <ShoppingCart className="h-3.5 w-3.5" /> Adicionar
          </button>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-whatsapp text-whatsapp-foreground p-2 rounded-md hover:opacity-90 transition-opacity" aria-label="Comprar via WhatsApp">
            <MessageCircle className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
