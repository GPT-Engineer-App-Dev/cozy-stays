import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { UserCircle, Search } from "lucide-react";

export const Navbar = () => {
  return (
    <header className="flex items-center justify-between p-4 border-b">
      <Link to="/" className="text-2xl font-bold">
        <img src="/placeholder.svg" alt="Logo" className="h-8" />
      </Link>
      <div className="flex items-center space-x-2">
        <Input placeholder="Location" className="w-32" />
        <Input placeholder="Check-in" className="w-32" />
        <Input placeholder="Check-out" className="w-32" />
        <Input placeholder="Guests" className="w-32" />
        <Button variant="outline">
          <Search className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex items-center space-x-4">
        <Link to="/explore">Explore</Link>
        <Link to="/wishlist">Wishlist</Link>
        <Link to="/trips">Trips</Link>
        <Link to="/inbox">Inbox</Link>
        <Link to="/profile">
          <UserCircle className="h-8 w-8" />
        </Link>
      </div>
    </header>
  );
};