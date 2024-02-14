import React, { useEffect, useState } from "react";
import BlogCard from "../components/blogs/BlogCard";
import Layout from "../components/layout/Layout";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { bouncy } from "ldrs";

const SingleBlog = () => {
  const [blog, setBlog] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const params = useParams();

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const options = { month: "short", day: "numeric", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const { id } = params;

  const getSingleBlog = async (id) => {
    setLoading1(true);
    try {
      const res = await fetch(`${process.env.SERVER_URL}/blogs/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      if (data.success) {
        setBlog(data.blog);
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
      setLoading1(false);
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
    setLoading1(false);
  };

  const getAllBlogs = async () => {
    setLoading2(true);
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
      setLoading2(false);
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
    setLoading2(false);
  };

  useEffect(() => {
    getSingleBlog(id);
    getAllBlogs();
    bouncy.register();
  }, [id]);

  return (
    <Layout title={`${blog?.title}`}>
      <div className="grid grid-cols-1 lg:grid-cols-4 my-10">
        <div className="col-span-1 hidden lg:block">
          <h4 className="text-secondary ml-7 mb-4">Recent blog posts</h4>
          {loading1 ? (
            <div className="flex items-center justify-center h-[40dvh] w-[100%]">
              <l-bouncy size="45" speed="1.75" color="white"></l-bouncy>
            </div>
          ) : (
            <>
              {blogs?.length === 0 ? (
                <p>No blogs found!</p>
              ) : (
                <>
                  <div className="flex flex-col gap-3">
                    {blogs?.slice(0, 3).map((b) => (
                      <BlogCard data={b} />
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>

        <div className="lg:col-span-3 col-span-1">
          {loading2 ? (
            <div className="flex items-center justify-center h-[40dvh] w-[100%]">
              <l-bouncy size="45" speed="1.75" color="white"></l-bouncy>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-2">
                <p className="text-tertiary text-[1rem] mb-1 uppercase">
                  {blog?.category}
                </p>
                <p className="text-green-300 text-[.9rem] my-2">
                  <Link to={`/profile/${blog?.user_id}`}>
                    {blog?.user_name}
                  </Link>{" "}
                  - {formatDate(blog?.createdAt)}
                </p>
              </div>
              <h1 className="text-secondary text-[2.5rem] font-semibold leading-none">
                {blog?.title}
              </h1>
              <div className="my-8">
                <img
                  src={blog?.image}
                  alt="Image"
                  className="w-full text-secondary"
                />
              </div>
              <p className="text-slate-300">{blog?.body}</p>
            </>
          )}
          <p className="text-secondary text-center text-[2rem] mt-3 mb-10">
            .....
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default SingleBlog;
