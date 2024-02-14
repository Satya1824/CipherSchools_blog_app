import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { useAuth } from "../context/auth";
import { Mail, UserRound } from "lucide-react";
import BlogCard from "../components/blogs/BlogCard";
import { toast } from "react-toastify";
import { bouncy } from "ldrs";
import { useSearch } from "../context/search";

const Search = () => {
  const [search, setSearch] = useSearch();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

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

  const filteredBlogs = blogs?.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout title={"All Blogs"}>
      <div className="pt-10 pb-20">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-secondary text-[2rem] mb-5">
            Blog Posts
          </h1>
          <p className="text-secondary text-[.8rem]">
            {filteredBlogs?.length === 1
              ? "1 result found!"
              : `${filteredBlogs?.length} results found!`}
          </p>
        </div>

        <div>
          {loading ? (
            <div className="flex items-center justify-center h-[40dvh] w-[100%]">
              <l-bouncy size="45" speed="1.75" color="white"></l-bouncy>
            </div>
          ) : (
            <>
              {filteredBlogs?.length === 0 ? (
                <p className="text-secondary text-center mt-20 mb-10">
                  No blogs found!
                </p>
              ) : (
                <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-y-3">
                  {filteredBlogs?.map((b) => (
                    <BlogCard data={b} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Search;
