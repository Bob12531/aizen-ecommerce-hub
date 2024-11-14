import { Search, User, Menu } from "lucide-react";
import { useState } from "react";
import { Cart } from "./Cart";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This would normally come from an auth context

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-aizen-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-aizen-900">
              Aizen
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/products" className="nav-link">Products</Link>
            <Link to="/products?category=deals" className="nav-link">Deals</Link>
            <Link to="/products?category=electronics" className="nav-link">Electronics</Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-aizen-100 rounded-full transition-colors">
              <Search className="w-5 h-5 text-aizen-700" />
            </button>
            <Cart />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="p-2 hover:bg-aizen-100 rounded-full transition-colors">
                  <User className="w-5 h-5 text-aizen-700" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {isLoggedIn ? (
                  <>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Orders</DropdownMenuItem>
                    <DropdownMenuItem onClick={handleLogout}>
                      Logout
                    </DropdownMenuItem>
                  </>
                ) : (
                  <>
                    <DropdownMenuItem>Login</DropdownMenuItem>
                    <DropdownMenuItem>Register</DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
            <button 
              className="md:hidden p-2 hover:bg-aizen-100 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5 text-aizen-700" />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-aizen-100 animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/products" className="nav-link">Products</Link>
              <Link to="/products?category=deals" className="nav-link">Deals</Link>
              <Link to="/products?category=electronics" className="nav-link">Electronics</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};