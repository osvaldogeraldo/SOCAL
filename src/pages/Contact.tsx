import { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Nome: ${form.name}\nEmail: ${form.email}\nTelefone: ${form.phone}\n\n${form.message}`;
    window.open(`https://wa.me/258841234567?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <>
      <div className="bg-secondary text-secondary-foreground py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl mb-2">Contactos</h1>
          <p className="text-secondary-foreground/60 text-sm">Entre em contacto connosco</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <h2 className="text-2xl mb-6">Informações de Contacto</h2>
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-sm mb-1">Localização</h3>
                  <p className="text-sm text-muted-foreground">Av. da Indústria, nº 123, Maputo, Moçambique</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-sm mb-1">Telefone</h3>
                  <p className="text-sm text-muted-foreground">+258 84 123 4567</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-sm mb-1">Email</h3>
                  <p className="text-sm text-muted-foreground">info@socoal.co.mz</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-sm mb-1">Horário</h3>
                  <p className="text-sm text-muted-foreground">Seg - Sex: 08:00 - 18:00</p>
                  <p className="text-sm text-muted-foreground">Sábado: 08:00 - 13:00</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-lg overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125529.20174767373!2d13.18986!3d-8.83833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f15cdc4aac49%3A0x850c1c5c76bc4726!2sLuanda%2C%20Angola!5e0!3m2!1spt-PT!2s!4v1"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Localização SOCOAL"
              />
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="text-2xl mb-6">Envie uma Mensagem</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Nome</label>
                <input type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-2.5 rounded-md bg-card border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-2.5 rounded-md bg-card border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Telefone</label>
                <input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-2.5 rounded-md bg-card border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Mensagem</label>
                <textarea required rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-2.5 rounded-md bg-card border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
              </div>
              <button type="submit" className="w-full gradient-primary text-primary-foreground py-3 rounded-md font-display text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                <MessageCircle className="h-4 w-4" /> Enviar via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
