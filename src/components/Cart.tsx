import { ShoppingBag } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Premium Wireless Headphones",
      price: 249.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    },
  ]);

  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button className="relative p-2 hover:bg-aizen-100 rounded-full transition-colors">
          <ShoppingBag className="w-5 h-5 text-aizen-700" />
          {cartItems.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              {cartItems.length}
            </span>
          )}
        </button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        <div className="mt-8">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty</p>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">{item.title}</h3>
                    <p className="text-sm text-gray-500">
                      ${item.price.toFixed(2)} x {item.quantity}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 text-sm"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <div className="border-t pt-4">
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <Button className="w-full mt-4">Checkout</Button>
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};