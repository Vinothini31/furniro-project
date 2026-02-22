import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import logo from "../../assets/logo.png";

import searchIcon from "../../assets/search.png";
import userIcon from "../../assets/user.png";
import wishlistIcon from "../../assets/wishlist.png";
import cartIcon from "../../assets/cart.png";

const Header = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="relative bg-white text-black shadow-md pt-[29px] pb-4 pr-8">
      
      <div className="flex justify-between items-center">
        
        {/* Logo Section */}
        <div className="flex items-center gap-[5px] w-[185px] h-[41px] pl-[54px]">
          
          <img
            src={logo}
            alt="FurniStore Logo"           
            className="h-full w-auto object-contain"
          />
          
        </div>
        

        {/* Navigation Bar */}
        <nav className="absolute left-[505px] top-[38px] flex gap-10">
          <Link
            to="/home"
            className="w-[48px] h-[24px] text-[16px] font-medium leading-[100%] tracking-[0%] text-black font-[Poppins]"
          >
            Home
          </Link>

          <Link
            to="/shop"
            className="w-[48px] h-[24px] text-[16px] font-medium leading-[100%] tracking-[0%] text-black font-[Poppins]"
          >
            Shop
          </Link>

          <Link
            to="/about"
            className="w-[48px] h-[24px] text-[16px] font-medium leading-[100%] tracking-[0%] text-black font-[Poppins]"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="w-[68px] h-[24px] text-[16px] font-medium leading-[100%] tracking-[0%] text-black font-[Poppins]"
          >
            Contact
          </Link>
          <Link
            to="/cart"
            className="w-[68px] h-[24px] text-[16px] font-medium leading-[100%] tracking-[0%] text-black font-[Poppins]"
          >
            Cart
          </Link>
        </nav>

        {/* Top Right Icons (Figma Exact Position) */}
        <div className="absolute right-[54px] top-[36px] flex gap-6">
          <Link to="/login">
          <img
            src={userIcon}
            alt="User"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
          />
          </Link>
          <Link to="/shop">
          <img
            src={searchIcon}
            alt="Search"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
          />
          </Link>
          <img
            src={wishlistIcon}
            alt="Wishlist"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
          />
          <Link to="/cart">
          <img
            src={cartIcon}
            alt="Cart"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
          />
           </Link>
        </div>

        {/* Right Side (Email Only) */}
        <div className="flex items-center gap-6">
          <span className="text-sm opacity-90">
            {user?.email}
          </span>
        </div>

      </div>
    </header>
  );
};

export default Header;
