import React from "react";
import { Link } from "react-router-dom";
import { SearchIcon } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { UserRound } from "lucide-react";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [searchWidth, setSearchWidth] = useState("0px");
  const [border, setBorder] = useState("none");

  const navigate = useNavigate();

  const inputRef = useRef(null);

  useEffect(() => {
    if (searchWidth === "230px" && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchWidth]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setSearchWidth("0px");
        setBorder("none");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleSearch = () => {
    setSearchWidth(searchWidth === "0px" ? "230px" : "0px");
    setBorder(border === "none" ? "solid 1px #FFFFFF" : "none");
  };

  return (
    <div className="flex justify-between items-center py-6 border-b-[1px]">
      <div className="flex items-center gap-10">
        <Link to="/" className="text-secondary font-semibold text-2xl m-0">
          BLOG APP
        </Link>
        <div className="flex items-center gap-5">
          <Link to="/" className="text-secondary">
            Home
          </Link>
          <Link to="blogs" className="text-secondary">
            Blogs
          </Link>
          <Link className="text-secondary">About</Link>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-5">
          <div className="relative">
            <input
              ref={inputRef}
              type="text"
              placeholder="Search blogs..."
              className="bg-transparent pr-10 pl-3 py-1 text-secondary rounded-sm focus:outline-none transition-width transition-border duration-300"
              style={{ width: searchWidth, border: border }}
            />
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2"
              onClick={toggleSearch}
            >
              <SearchIcon size={20} className="text-secondary" />
            </button>
          </div>
          {auth?.user ? (
            <Link to={`/profile/${auth.user.id}`} className="flex items-center">
              <UserRound size={20} className="text-secondary" />
              <p className="m-0 text-secondary">{auth.user.name}</p>
            </Link>
          ) : (
            <button
              onClick={() => navigate("/auth")}
              className="text-secondary border px-3 rounded-sm py-1 hover:bg-secondary hover:text-primary transition"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
