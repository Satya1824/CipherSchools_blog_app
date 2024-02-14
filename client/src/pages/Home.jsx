import React from "react";
import Layout from "../components/layout/Layout";
import BlogCard from "../components/blogs/BlogCard";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { bouncy } from "ldrs";
import { ArrowUpRight, SquarePen } from "lucide-react";
import { useAuth } from "../context/auth";

const Home = () => {
  const [auth, setAuth] = useAuth();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const options = { month: "short", day: "numeric", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

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
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
          <div className="col-span-1">
            <img className="rounded" src={blogs[0]?.image} alt="Image" />
          </div>
          <div className="col-span-1">
            <div className="flex items-center justify-between">
              <p className="text-tertiary text-[1rem] mb-1 uppercase">
                {blogs[0]?.category}
              </p>
              <p className="text-green-300 text-[1rem] my-2">
                <Link
                  className="hover:underline"
                  to={`/profile/${blogs[0]?.user_id}`}
                >
                  {blogs[0]?.user_name}
                </Link>{" "}
                - {formatDate(blogs[0]?.createdAt)}
              </p>
            </div>
            <div className="flex items-center justify-between my-5">
              <h2 className="text-secondary font-bold text-[2rem] leading-tight line-clamp-2 sm:line-clamp-3">
                {blogs[0]?.title}
              </h2>
              <div className="flex items-center gap-1">
                <Link to={`/blog/${blogs[0]?._id}`}>
                  <ArrowUpRight size={20} className="text-secondary" />
                </Link>
                {auth?.user?.id === blogs[0]?.user_id && (
                  <Link to={`/updateBlog/${blogs[0]?._id}`}>
                    <SquarePen size={13} className="text-secondary" />
                  </Link>
                )}
              </div>
            </div>

            <p className="my-3 text-secondary text-opacity-70 text-[.75rem] leading-snug line-clamp-5 md:line-clamp-6">
              {blogs[0]?.body}
            </p>
          </div>
        </div>
        <h4 className="mb-5 mt-5 sm:mt-10 text-secondary">Blog Posts</h4>
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
                    {blogs?.slice(1, 9).map((b) => (
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
