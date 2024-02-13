import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { useAuth } from "../context/auth";
import { Mail, UserRound } from "lucide-react";
import BlogCard from "../components/blogs/BlogCard";

const Profile = () => {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const params = useParams();

  const { id } = params;

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/auth");
  };

  return (
    <Layout title={"Profile"}>
      <h1 className="font-bold text-secondary text-[2rem] mb-2 mt-5">
        {auth?.user?.id === id ? "My Profile" : "User Profile"}
      </h1>
      <div className="flex items-center gap-3 mb-2">
        <UserRound size={20} className="text-tertiary" />
        <p className="text-tertiary m-0">{auth?.user?.name}</p>
      </div>
      <div className="flex items-center gap-3 mb-5">
        <Mail size={20} className="text-tertiary" />
        <p className="text-tertiary m-0">{auth?.user?.email}</p>
      </div>
      <div className="flex gap-3 items-center mb-5">
        <button className="text-secondary border hover:bg-secondary hover:text-primary px-3 py-1 rounded-sm transition font-semibold">
          Add Blog
        </button>
        <button
          className="text-secondary border hover:bg-secondary hover:text-primary px-3 py-1 rounded-sm transition font-semibold"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      <h1 className="font-bold text-secondary text-[2rem] my-2">
        {auth?.user?.id === id ? "My Blogs" : "User Blogs"}
      </h1>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-y-3">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <div className="text-center my-10">
        <button className="border text-secondary rounded px-5 py-1 hover:bg-secondary hover:text-primary transition">
          Load All Blogs
        </button>
      </div>
    </Layout>
  );
};

export default Profile;
