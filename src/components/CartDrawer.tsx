import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { formatPrice } from "@/data/products";
import { Link } from "react-router-dom";

export default function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, removeItem, updateQuantity, totalPrice, clearCart } = useCart();

  if (!isCartOpen) return null;

  const whatsappMessage = items.map(i => `${i.quantity}x ${i.product.name} - ${formatPrice(i.product.price * i.quantity)}`).join("\n");
  const whatsappUrl = `https://wa.me/258841234567?text=${encodeURIComponent(`Olá! Gostaria de encomendar:\n\n${whatsappMessage}\n\nTotal: ${formatPrice(totalPrice)}`)}`;

  return (
    <>
      <div className="fixed inset-0 bg-foreground/50 z-50" onClick={() => setIsCartOpen(false)} />
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-card z-50 shadow-2xl flex flex-col animate-slide-in" style={{ animationDirection: "normal", ["--tw-translate-x" as string]: "100%" }}>
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="text-xl font-display flex items-center gap-2"><ShoppingBag className="h-5 w-5" /> Carrinho</h2>
          <button onClick={() => setIsCartOpen(false)} className="p-2 hover:text-primary transition-colors"><X className="h-5 w-5" /></button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 p-8 text-muted-foreground">
            <ShoppingBag className="h-16 w-16 opacity-30" />
            <p>O seu carrinho está vazio</p>
            <Link to="/loja" onClick={() => setIsCartOpen(false)} className="bg-primary text-primary-foreground px-6 py-2 rounded-md font-display text-sm hover:opacity-90 transition-opacity">
              Ver Produtos
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {items.map(item => (
                <div key={item.product.id} className="flex gap-3 bg-muted rounded-lg p-3">
                  <div className="w-16 h-16 bg-border rounded-md flex items-center justify-center shrink-0">
                    <ShoppingBag className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium truncate">{item.product.name}</h4>
                    <p className="text-sm text-primary font-bold">{formatPrice(item.product.price)}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="p-1 bg-card rounded hover:bg-primary hover:text-primary-foreground transition-colors">
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="p-1 bg-card rounded hover:bg-primary hover:text-primary-foreground transition-colors">
                        <Plus className="h-3 w-3" />
                      </button>
                      <button onClick={() => removeItem(item.product.id)} className="ml-auto p-1 text-destructive hover:bg-destructive/10 rounded transition-colors">
                        <Trash2 className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border p-4 space-y-3">
              <div className="flex items-center justify-between font-display text-lg">
                <span>Total:</span>
                <span className="text-primary">{formatPrice(totalPrice)}</span>
              </div>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block w-full bg-whatsapp text-whatsapp-foreground text-center py-3 rounded-md font-display text-sm hover:opacity-90 transition-opacity">
                Encomendar via WhatsApp
              </a>
              <button onClick={clearCart} className="w-full text-sm text-muted-foreground hover:text-destructive transition-colors">
                Limpar carrinho
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
