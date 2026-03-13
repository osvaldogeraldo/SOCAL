import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/products";
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

export default function Categories() {
  return (
    <>
      <div className="bg-secondary text-secondary-foreground py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl mb-2">Categorias</h1>
          <p className="text-secondary-foreground/60 text-sm">Explore os nossos produtos por categoria</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(cat => (
            <Link key={cat.slug} to={`/loja?category=${cat.slug}`} className="group relative rounded-lg overflow-hidden aspect-[3/2]">
              <img src={categoryImages[cat.slug]} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-2xl text-secondary-foreground mb-1">{cat.name}</h2>
                <p className="text-sm text-secondary-foreground/70 mb-3">{cat.description}</p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-display group-hover:gap-2 transition-all">
                  Ver Produtos <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
