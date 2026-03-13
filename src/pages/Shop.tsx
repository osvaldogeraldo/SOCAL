import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, Search } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";

export default function Shop() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "";
  const initialSearch = searchParams.get("search") || "";
  const initialPromo = searchParams.get("promo") === "true";

  const [category, setCategory] = useState(initialCategory);
  const [search, setSearch] = useState(initialSearch);
  const [sort, setSort] = useState("featured");
  const [promoOnly, setPromoOnly] = useState(initialPromo);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = [...products];
    if (category) result = result.filter(p => p.categorySlug === category);
    if (promoOnly) result = result.filter(p => p.promo);
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(p => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
    }
    switch (sort) {
      case "price-asc": result.sort((a, b) => a.price - b.price); break;
      case "price-desc": result.sort((a, b) => b.price - a.price); break;
      case "bestseller": result.sort((a, b) => (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0)); break;
      case "rating": result.sort((a, b) => b.rating - a.rating); break;
    }
    return result;
  }, [category, search, sort, promoOnly]);

  return (
    <>
      {/* Page Header */}
      <div className="bg-secondary text-secondary-foreground py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl mb-2">Loja</h1>
          <p className="text-secondary-foreground/60 text-sm">Explore o nosso catálogo completo de produtos</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Toolbar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Pesquisar produtos..."
              className="w-full pl-10 pr-4 py-2.5 rounded-md bg-card border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <select value={sort} onChange={e => setSort(e.target.value)} className="px-4 py-2.5 rounded-md bg-card border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary">
            <option value="featured">Em Destaque</option>
            <option value="price-asc">Mais Baratos</option>
            <option value="price-desc">Mais Caros</option>
            <option value="bestseller">Mais Vendidos</option>
            <option value="rating">Melhor Avaliados</option>
          </select>
          <button onClick={() => setFiltersOpen(!filtersOpen)} className="md:hidden flex items-center gap-2 px-4 py-2.5 bg-card border border-border rounded-md text-sm">
            <SlidersHorizontal className="h-4 w-4" /> Filtros
          </button>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <aside className={`${filtersOpen ? "block" : "hidden"} md:block w-full md:w-56 shrink-0 space-y-6`}>
            <div>
              <h3 className="font-display text-sm mb-3">Categorias</h3>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => setCategory("")} className={`text-sm w-full text-left px-3 py-1.5 rounded transition-colors ${!category ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}>
                    Todas
                  </button>
                </li>
                {categories.map(cat => (
                  <li key={cat.slug}>
                    <button onClick={() => setCategory(cat.slug)} className={`text-sm w-full text-left px-3 py-1.5 rounded transition-colors ${category === cat.slug ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}>
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <input type="checkbox" checked={promoOnly} onChange={e => setPromoOnly(e.target.checked)} className="rounded border-border text-primary focus:ring-primary" />
                Apenas promoções
              </label>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <p className="text-sm text-muted-foreground mb-4">{filtered.length} produto{filtered.length !== 1 ? "s" : ""} encontrado{filtered.length !== 1 ? "s" : ""}</p>
            {filtered.length === 0 ? (
              <div className="text-center py-16 text-muted-foreground">
                <p className="text-lg mb-2">Nenhum produto encontrado</p>
                <p className="text-sm">Tente alterar os filtros de pesquisa</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map(p => <ProductCard key={p.id} product={p} />)}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
