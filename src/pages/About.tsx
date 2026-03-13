import { Target, Eye, Heart, Award } from "lucide-react";
import aboutStore from "@/assets/about-store.jpg";

const values = [
  { icon: Target, title: "Missão", text: "Fornecer materiais elétricos e ferramentas de qualidade, garantindo segurança e satisfação dos nossos clientes em todo Moçambique." },
  { icon: Eye, title: "Visão", text: "Ser a referência nacional em materiais elétricos, reconhecida pela excelência no atendimento e qualidade dos produtos." },
  { icon: Heart, title: "Valores", text: "Integridade, compromisso com a qualidade, atendimento personalizado e responsabilidade com a segurança elétrica." },
  { icon: Award, title: "Experiência", text: "Mais de 15 anos de experiência no mercado moçambicano, servindo milhares de clientes entre profissionais e particulares." },
];

export default function About() {
  return (
    <>
      <div className="bg-secondary text-secondary-foreground py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl mb-2">Sobre Nós</h1>
          <p className="text-secondary-foreground/60 text-sm">Conheça a história da SOCOAL</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl mb-4">A Nossa História</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A SOCOAL nasceu da paixão pela eletricidade e da vontade de oferecer aos angolanos produtos de qualidade a preços acessíveis. Desde a nossa fundação, temos vindo a crescer e a expandir o nosso catálogo para atender às necessidades de electricistas profissionais e clientes particulares.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Com uma equipa dedicada e conhecedora do setor, garantimos não só a venda de produtos, mas também aconselhamento técnico especializado para que cada projeto seja realizado com segurança e eficiência.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Trabalhamos com as melhores marcas do mercado e mantemos um stock diversificado para responder rapidamente às exigências dos nossos clientes.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={aboutStore} alt="Loja SOCOAL" className="w-full h-auto" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
