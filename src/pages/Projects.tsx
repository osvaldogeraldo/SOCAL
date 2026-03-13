import catIluminacao from "@/assets/cat-iluminacao.jpg";
import catMateriais from "@/assets/cat-materiais.jpg";
import catFerramentas from "@/assets/cat-ferramentas.jpg";
import aboutStore from "@/assets/about-store.jpg";

const projects = [
  { title: "Instalação Elétrica Residencial", location: "Matola, Maputo", description: "Instalação completa do sistema elétrico de uma moradia de 4 quartos, incluindo quadro de distribuição, iluminação LED e tomadas.", image: aboutStore },
  { title: "Iluminação Comercial LED", location: "Polana, Maputo", description: "Substituição de toda a iluminação convencional por LED numa loja comercial, reduzindo o consumo energético em 60%.", image: catIluminacao },
  { title: "Quadro Elétrico Industrial", location: "Machava, Maputo", description: "Montagem e instalação de quadro elétrico industrial com proteção diferencial e disjuntores para uma fábrica.", image: catMateriais },
  { title: "Manutenção Preventiva", location: "Sommerschield, Maputo", description: "Serviço de manutenção preventiva do sistema elétrico de um condomínio, verificação de cabos e substituição de componentes.", image: catFerramentas },
];

export default function Projects() {
  return (
    <>
      <div className="bg-secondary text-secondary-foreground py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl mb-2">Projetos</h1>
          <p className="text-secondary-foreground/60 text-sm">Veja alguns dos nossos trabalhos realizados</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="bg-card rounded-lg overflow-hidden shadow-sm border border-border">
              <div className="aspect-video overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <span className="text-xs text-primary font-display">{project.location}</span>
                <h3 className="text-xl mt-1 mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
