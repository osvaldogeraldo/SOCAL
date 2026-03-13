export interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  category: string;
  categorySlug: string;
  description: string;
  specs?: string[];
  image: string;
  rating: number;
  reviews: number;
  bestseller?: boolean;
  featured?: boolean;
  promo?: boolean;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  productCount: number;
}

export const categories: Category[] = [
  { name: "Iluminação", slug: "iluminacao", description: "Lâmpadas LED, fluorescentes, bocais e acessórios de iluminação", productCount: 8 },
  { name: "Materiais Elétricos", slug: "materiais-eletricos", description: "Cabos, fios, interruptores, tomadas e disjuntores", productCount: 10 },
  { name: "Ferramentas", slug: "ferramentas", description: "Ferramentas elétricas e manuais profissionais", productCount: 8 },
  { name: "Acessórios", slug: "acessorios", description: "Conectores, abraçadeiras, caixas de junção e mais", productCount: 6 },
  { name: "Equipamentos", slug: "equipamentos", description: "Quadros elétricos, transformadores e equipamentos de proteção", productCount: 5 },
];

export const products: Product[] = [
  // Iluminação
  { id: "1", name: "Lâmpada LED 12W Branca", price: 450, oldPrice: 600, category: "Iluminação", categorySlug: "iluminacao", description: "Lâmpada LED de alta eficiência energética, 12W equivalente a 100W incandescente. Luz branca fria 6500K, ideal para escritórios e áreas de trabalho.", specs: ["Potência: 12W", "Fluxo luminoso: 1200lm", "Temperatura: 6500K", "Vida útil: 25.000h", "Base: E27"], image: "/placeholder.svg", rating: 4.8, reviews: 124, bestseller: true, featured: true },
  { id: "2", name: "Lâmpada LED 9W Quente", price: 350, category: "Iluminação", categorySlug: "iluminacao", description: "Lâmpada LED com luz amarela quente, perfeita para ambientes acolhedores.", specs: ["Potência: 9W", "Temperatura: 3000K", "Base: E27"], image: "/placeholder.svg", rating: 4.6, reviews: 89 },
  { id: "3", name: "Bocal E27 Porcelana", price: 180, category: "Iluminação", categorySlug: "iluminacao", description: "Bocal de porcelana resistente ao calor para lâmpadas E27.", specs: ["Material: Porcelana", "Rosca: E27", "Tensão: 250V"], image: "/placeholder.svg", rating: 4.5, reviews: 67 },
  { id: "4", name: "Luminária LED Painel 18W", price: 1200, oldPrice: 1500, category: "Iluminação", categorySlug: "iluminacao", description: "Painel LED embutir quadrado 18W, design slim e moderno.", specs: ["Potência: 18W", "Dimensão: 22x22cm", "Cor: 6500K"], image: "/placeholder.svg", rating: 4.7, reviews: 56, promo: true, featured: true },

  // Materiais Elétricos
  { id: "5", name: "Cabo Flexível 2.5mm² (100m)", price: 8500, oldPrice: 9500, category: "Materiais Elétricos", categorySlug: "materiais-eletricos", description: "Cabo flexível de cobre 2.5mm², isolamento em PVC, rolo de 100 metros.", specs: ["Seção: 2.5mm²", "Comprimento: 100m", "Cor: Azul", "Tensão: 750V"], image: "/placeholder.svg", rating: 4.9, reviews: 203, bestseller: true, featured: true, promo: true },
  { id: "6", name: "Interruptor Simples", price: 250, category: "Materiais Elétricos", categorySlug: "materiais-eletricos", description: "Interruptor simples de embutir, design moderno com placa.", specs: ["Tipo: Simples", "Corrente: 10A", "Cor: Branco"], image: "/placeholder.svg", rating: 4.4, reviews: 145 },
  { id: "7", name: "Tomada Universal 2P+T", price: 300, category: "Materiais Elétricos", categorySlug: "materiais-eletricos", description: "Tomada universal 2 polos + terra, padrão brasileiro.", specs: ["Tipo: 2P+T", "Corrente: 20A", "Tensão: 250V"], image: "/placeholder.svg", rating: 4.6, reviews: 178, bestseller: true },
  { id: "8", name: "Disjuntor Bipolar 32A", price: 650, category: "Materiais Elétricos", categorySlug: "materiais-eletricos", description: "Disjuntor termomagnético bipolar 32A para proteção de circuitos.", specs: ["Corrente: 32A", "Polos: 2", "Curva: C"], image: "/placeholder.svg", rating: 4.8, reviews: 92, featured: true },
  { id: "9", name: "Fita Isolante 20m", price: 120, category: "Materiais Elétricos", categorySlug: "materiais-eletricos", description: "Fita isolante de PVC de alta qualidade, 20 metros.", specs: ["Comprimento: 20m", "Largura: 19mm", "Cor: Preta"], image: "/placeholder.svg", rating: 4.3, reviews: 234 },

  // Ferramentas
  { id: "10", name: "Furadeira de Impacto 750W", price: 15900, oldPrice: 18500, category: "Ferramentas", categorySlug: "ferramentas", description: "Furadeira de impacto profissional 750W com maleta e brocas.", specs: ["Potência: 750W", "Mandril: 13mm", "Rotação: 3000rpm", "Inclui maleta e brocas"], image: "/placeholder.svg", rating: 4.7, reviews: 67, bestseller: true, featured: true, promo: true },
  { id: "11", name: "Alicate Universal 8\"", price: 1200, category: "Ferramentas", categorySlug: "ferramentas", description: "Alicate universal profissional com cabo isolado 1000V.", specs: ["Tamanho: 8 polegadas", "Isolação: 1000V", "Material: Cromo-vanádio"], image: "/placeholder.svg", rating: 4.8, reviews: 156, bestseller: true },
  { id: "12", name: "Chave de Fenda Jogo 6pcs", price: 850, category: "Ferramentas", categorySlug: "ferramentas", description: "Jogo de chaves de fenda e Phillips profissional, 6 peças.", specs: ["Quantidade: 6 peças", "Tipo: Fenda e Phillips", "Isolamento: VDE"], image: "/placeholder.svg", rating: 4.5, reviews: 89 },
  { id: "13", name: "Multímetro Digital", price: 3500, oldPrice: 4200, category: "Ferramentas", categorySlug: "ferramentas", description: "Multímetro digital profissional com medição de tensão, corrente e resistência.", specs: ["Tensão: 600V AC/DC", "Corrente: 10A", "Display: LCD", "Categoria: CAT III"], image: "/placeholder.svg", rating: 4.9, reviews: 78, featured: true, promo: true },

  // Acessórios
  { id: "14", name: "Abraçadeira Nylon 100pcs", price: 250, category: "Acessórios", categorySlug: "acessorios", description: "Pacote com 100 abraçadeiras de nylon, diversas medidas.", specs: ["Quantidade: 100 unidades", "Material: Nylon 6.6", "Cor: Branca"], image: "/placeholder.svg", rating: 4.4, reviews: 312 },
  { id: "15", name: "Caixa de Passagem 4x2", price: 150, category: "Acessórios", categorySlug: "acessorios", description: "Caixa de passagem para embutir em alvenaria, padrão 4x2.", specs: ["Dimensão: 4x2 polegadas", "Material: PVC", "Cor: Amarela"], image: "/placeholder.svg", rating: 4.3, reviews: 198 },
  { id: "16", name: "Conector Wago 5 Vias", price: 450, category: "Acessórios", categorySlug: "acessorios", description: "Conector de emenda rápida Wago 5 vias, instalação sem ferramentas.", specs: ["Vias: 5", "Seção: 0.5-2.5mm²", "Tensão: 450V"], image: "/placeholder.svg", rating: 4.7, reviews: 145, featured: true },

  // Equipamentos
  { id: "17", name: "Quadro Distribuição 12 Disjuntores", price: 4500, oldPrice: 5200, category: "Equipamentos", categorySlug: "equipamentos", description: "Quadro de distribuição para até 12 disjuntores, com barramento.", specs: ["Capacidade: 12 disjuntores", "Material: Metálico", "Proteção: IP40"], image: "/placeholder.svg", rating: 4.6, reviews: 45, featured: true, promo: true },
  { id: "18", name: "Estabilizador 1000VA", price: 6800, category: "Equipamentos", categorySlug: "equipamentos", description: "Estabilizador de tensão 1000VA com 4 tomadas de saída.", specs: ["Potência: 1000VA", "Tomadas: 4", "Proteção: Surto e sobretensão"], image: "/placeholder.svg", rating: 4.5, reviews: 67 },
];

export const reviews = [
  { name: "Carlos M.", rating: 5, text: "Excelente qualidade nos produtos e atendimento muito profissional. Recomendo!", date: "2024-01-15" },
  { name: "Ana S.", rating: 5, text: "Sempre compro meus materiais elétricos aqui. Preços justos e produtos de marca.", date: "2024-02-20" },
  { name: "Pedro L.", rating: 4, text: "Boa variedade de ferramentas. Entrega rápida e produtos bem embalados.", date: "2024-03-10" },
  { name: "Maria F.", rating: 5, text: "A melhor loja de material elétrico da região. Equipe muito competente.", date: "2024-04-05" },
];

export function formatPrice(cents: number): string {
  return new Intl.NumberFormat('pt-AO', { style: 'currency', currency: 'AOA' }).format(cents);
}
