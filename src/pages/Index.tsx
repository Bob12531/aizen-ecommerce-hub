import { Navigation } from "@/components/Navigation";
import { ProductCard } from "@/components/ProductCard";

const FEATURED_PRODUCTS = [
  {
    id: 1,
    title: "Premium Wireless Headphones",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    rating: 4,
  },
  {
    id: 2,
    title: "Ultra-thin Laptop",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    rating: 5,
  },
  {
    id: 3,
    title: "Smart Home Hub",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
    rating: 4,
  },
  {
    id: 4,
    title: "Professional Camera Kit",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    rating: 5,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-aizen-900 to-aizen-700 text-white p-12">
            <div className="relative z-10 max-w-xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Welcome to Aizen
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-200">
                Discover premium products with exceptional quality and unmatched service.
              </p>
              <button className="px-8 py-3 bg-white text-aizen-900 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Shop Now
              </button>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
              {/* Abstract pattern */}
              <div className="absolute inset-0 bg-white/20 transform rotate-45"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-aizen-900 mb-8">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_PRODUCTS.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-aizen-900 mb-8">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Electronics", "Fashion", "Home & Kitchen", "Books"].map((category) => (
              <div key={category} className="group cursor-pointer">
                <div className="aspect-square rounded-lg bg-aizen-100 flex items-center justify-center mb-4 transition-colors group-hover:bg-aizen-200">
                  <span className="text-aizen-700 group-hover:text-aizen-900 transition-colors">
                    {category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;