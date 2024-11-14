import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-aizen-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-aizen-900">Aizen</h1>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="nav-link">Home</a>
            <a href="#" className="nav-link">Products</a>
            <a href="#" className="nav-link">Deals</a>
            <a href="#" className="nav-link">Electronics</a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-aizen-100 rounded-full transition-colors">
              <Search className="w-5 h-5 text-aizen-700" />
            </button>
            <button className="p-2 hover:bg-aizen-100 rounded-full transition-colors">
              <ShoppingCart className="w-5 h-5 text-aizen-700" />
            </button>
            <button className="p-2 hover:bg-aizen-100 rounded-full transition-colors">
              <User className="w-5 h-5 text-aizen-700" />
            </button>
            <button 
              className="md:hidden p-2 hover:bg-aizen-100 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5 text-aizen-700" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-aizen-100 animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <a href="#" className="nav-link">Home</a>
              <a href="#" className="nav-link">Products</a>
              <a href="#" className="nav-link">Deals</a>
              <a href="#" className="nav-link">Electronics</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};