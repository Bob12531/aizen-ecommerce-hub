import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { ProductCard } from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const PRODUCTS = [
  {
    id: 1,
    title: "Premium Wireless Headphones",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    rating: 4,
    category: "electronics"
  },
  {
    id: 2,
    title: "Ultra-thin Laptop",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    rating: 5,
    category: "electronics"
  },
  {
    id: 3,
    title: "Smart Home Hub",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
    rating: 4,
    category: "electronics"
  },
  {
    id: 4,
    title: "Professional Camera Kit",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    rating: 5,
    category: "electronics"
  },
  {
    id: 5,
    title: "Gaming Console",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    rating: 5,
    category: "electronics"
  },
  {
    id: 6,
    title: "Smartwatch",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9",
    rating: 4,
    category: "deals"
  }
];

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(false);

  const filteredProducts = PRODUCTS?.filter(product => {
    if (!product) return false;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  }) || [];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="container mx-auto px-4 pt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-48 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))}
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24">
        <div className="mb-8">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          </div>
        </div>

        <div className="mb-8 flex gap-4">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === "all" ? "bg-aizen-900 text-white" : "bg-white"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setSelectedCategory("electronics")}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === "electronics" ? "bg-aizen-900 text-white" : "bg-white"
            }`}
          >
            Electronics
          </button>
          <button
            onClick={() => setSelectedCategory("deals")}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === "deals" ? "bg-aizen-900 text-white" : "bg-white"
            }`}
          >
            Deals
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Products;