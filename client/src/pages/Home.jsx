import React from "react";
import Layout from "../components/layout/Layout";
import BlogCard from "../components/blogs/BlogCard";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { bouncy } from "ldrs";

const Home = () => {
  const [blogs, setBlogs] = useState();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const getAllBlogs = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${process.env.SERVER_URL}/blogs`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

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
      setLoading(false);
    } catch (error) {
      toast.error("Error fetching blogs!", {
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
    setLoading(false);
  };

  useEffect(() => {
    getAllBlogs();
    bouncy.register();
  }, []);

  return (
    <Layout title={"Blog App - Home"}>
      <div className="mt-10 my-20">
        <h4 className="mb-5 text-secondary">Blog Posts</h4>
        <div>
          {loading ? (
            <div className="flex items-center justify-center h-[40dvh] w-[100%]">
              <l-bouncy size="45" speed="1.75" color="white"></l-bouncy>
            </div>
          ) : (
            <>
              {blogs?.length === 0 ? (
                <p>No blogs found!</p>
              ) : (
                <>
                  <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-y-3">
                    {blogs?.slice(0, 8).map((b) => (
                      <BlogCard data={b} />
                    ))}
                  </div>

                  <div className="text-center my-10">
                    <button
                      onClick={() => navigate("/blogs")}
                      className="border text-secondary rounded px-5 py-1 hover:bg-secondary hover:text-primary transition"
                    >
                      All Blogs
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
