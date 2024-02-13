import React from "react";
import Layout from "../components/layout/Layout";
import BlogCard from "../components/blogs/BlogCard";
import { blogs } from "../data/data";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [blogs, setBlogs] = useState();

  const navigate = useNavigate();

  const getAllBlogs = async () => {
    try {
      const res = await fetch(`${process.env.SERVER_URL}/blogs`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);

      if (data.success) {
        setBlogs(data.blogs);
      } else {
        toast.error(data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } catch (error) {
      toast.error(data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  return (
    <Layout title={"Blog App - Home"}>
      <h4 className="my-5 text-secondary">Blog Posts</h4>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-y-3">
        {/* {blogs?.map((b) => {
          <BlogCard data={b} />;
        })} */}
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>

      <div className="text-center my-10">
        <button
          onClick={() => navigate("/blogs")}
          className="border text-secondary rounded px-5 py-1 hover:bg-secondary hover:text-primary transition"
        >
          All Blogs
        </button>
      </div>
    </Layout>
  );
};

export default Home;
