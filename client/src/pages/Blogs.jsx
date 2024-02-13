import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { useAuth } from "../context/auth";
import { Mail, UserRound } from "lucide-react";
import BlogCard from "../components/blogs/BlogCard";
import { toast } from "react-toastify";
import { bouncy } from "ldrs";

const Blogs = () => {
  const [blogs, setBlogs] = useState();
  const [load, setLoad] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const getBlogs = async () => {
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
    getBlogs();
    bouncy.register();
  }, []);

  return (
    <Layout title={"All Blogs"}>
      <div className="pt-10 pb-20">
        <h1 className="font-bold text-secondary text-[2rem] mb-5">
          Blog Posts
        </h1>

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
                    {load ? (
                      <>
                        {blogs?.map((b) => (
                          <BlogCard data={b} />
                        ))}
                      </>
                    ) : (
                      <>
                        {blogs?.slice(0, 8).map((b) => (
                          <BlogCard data={b} />
                        ))}
                      </>
                    )}
                  </div>
                  {blogs?.length > 8 ? (
                    <div className="text-center my-10">
                      <button
                        onClick={() => setLoad(!load)}
                        className="border text-secondary rounded px-5 py-1 hover:bg-secondary hover:text-primary transition"
                      >
                        {load ? "Load Less Blogs" : "Load All Blogs"}
                      </button>
                    </div>
                  ) : (
                    <></>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Blogs;
