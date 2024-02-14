import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SearchIcon, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { UserRound } from "lucide-react";
import { useSearch } from "../../context/search";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [search, setSearch] = useSearch();
  const [toggle, setToggle] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth");
  };

  return (
    <div className=" pt-6 border-b-[1px]">
      <div className="flex justify-between items-center pb-6">
        <div className="flex items-center gap-10">
          <Link to="/" className="text-secondary font-semibold text-2xl m-0">
            BLOG APP
          </Link>
          <div className="lg:flex items-center gap-5 hidden">
            <Link to="/" className="text-secondary">
              Home
            </Link>
            <Link to="/blogs" className="text-secondary">
              Blogs
            </Link>
            <Link to="/addBlog" className="text-secondary">
              Add Blog
            </Link>
            {auth?.user && (
              <Link
                to="/auth"
                onClick={handleLogout}
                className="text-secondary"
              >
                Logout
              </Link>
            )}
          </div>
        </div>
        <div>
          <div className="flex items-center sm:gap-5 gap-2">
            <div className="relative lg:block hidden">
              <input
                type="text"
                placeholder="Search blogs..."
                className="bg-transparent pr-10 pl-3 py-1 text-secondary border rounded-sm focus:outline-none w-[150px]  md:w-[200px] lg:w-[230px]"
                // style={{ width: searchWidth, border: border }}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <SearchIcon
                size={20}
                className="text-secondary absolute right-2 top-1/2 -translate-y-1/2"
              />
            </div>
            {auth?.user ? (
              <Link
                to={`/profile/${auth.user.id}`}
                className="flex items-center"
              >
                <UserRound size={20} className="text-secondary" />
                <p className="m-0 text-secondary lg:block hidden">
                  {auth.user.name}
                </p>
              </Link>
            ) : (
              <button
                onClick={() => navigate("/auth")}
                className="text-secondary border px-3 rounded-sm py-1 hover:bg-secondary hover:text-primary transition"
              >
                Login
              </button>
            )}

            <button
              className="lg:hidden block"
              onClick={() => setToggle(!toggle)}
            >
              {!toggle ? (
                <Menu className="text-secondary" />
              ) : (
                <X className="text-secondary" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className="border-t-[1px] lg:hidden block py-6 transition-all h-0 duration-500"
        style={{
          height: toggle ? "auto" : "0px",
          overflow: "hidden",
          paddingTop: toggle ? "1.5rem" : "0px",
          paddingBottom: toggle ? "1.5rem" : "0px",
        }}
      >
        <div className="flex flex-col items-center justify-center gap-5">
          <Link to="/" className="text-secondary">
            Home
          </Link>
          <Link to="/blogs" className="text-secondary">
            Blogs
          </Link>
          <Link to="/addBlog" className="text-secondary">
            Add Blog
          </Link>
          {auth?.user && (
            <Link to="/auth" onClick={handleLogout} className="text-secondary">
              Logout
            </Link>
          )}
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search blogs..."
              className="bg-transparent pr-10 pl-3 py-1 text-secondary border rounded-sm focus:outline-none w-full"
              // style={{ width: searchWidth, border: border }}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <SearchIcon
              size={20}
              className="text-secondary absolute right-2 top-1/2 -translate-y-1/2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
