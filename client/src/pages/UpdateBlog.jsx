import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { toast } from "react-toastify";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { bouncy } from "ldrs";

const UpdateBlog = () => {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [blog, setBlog] = useState("");
  const [error1, setError1] = useState(false);
  const [error2, setError2] = useState(false);
  const [error3, setError3] = useState(false);
  const [error4, setError4] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [loading3, setLoading3] = useState(false);

  const navigate = useNavigate();

  const params = useParams();

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
        setTitle(data.blog.title);
        setCategory(data.blog.category);
        setBody(data.blog.body);
        setImage(data.blog.image);
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
      toast.error("Error fetching blog data!", {
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

  useEffect(() => {
    getSingleBlog(id);
  }, [id]);

  const handleUpdate = async () => {
    if (!category) {
      setError1(true);
      return;
    }
    if (!title) {
      setError2(true);
      return;
    }
    if (!body) {
      setError3(true);
      return;
    }
    if (!image) {
      setError4(true);
      return;
    }
    setLoading2(true);
    try {
      const res = await axios.patch(`${process.env.SERVER_URL}/blogs/${id}`, {
        title: title,
        body: body,
        category: category,
        image: image,
      });

      if (res.data.success) {
        getSingleBlog(id);
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        toast.error(res.data.message, {
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
      toast.error("Something went wrong! Please try again after some time!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      getSingleBlog(id);
    }
    setLoading2(false);
  };

  const handleDelete = async () => {
    setLoading3(true);
    try {
      const res = await axios.delete(`${process.env.SERVER_URL}/blogs/${id}`);

      if (res.data.success) {
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        navigate("/");
      } else {
        toast.error(res.data.message, {
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
      setLoading3(false);
    } catch (error) {
      toast.error("Something went wrong! Please try again after some time!", {
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
    setLoading3(false);
  };

  useEffect(() => {
    bouncy.register();
  }, []);

  return (
    <Layout title={"Add Blog"}>
      <div className="pt-10 pb-20">
        {loading1 ? (
          <div className="flex items-center justify-center h-[70dvh] w-[100%]">
            <l-bouncy size="45" speed="1.75" color="white"></l-bouncy>
          </div>
        ) : (
          <>
            <h1 className="text-secondary font-bold text-[2rem]">Add Blog</h1>
            <div className="mb-5 mt-3">
              <label
                htmlFor="category"
                className="font-semibold text-secondary block mb-2"
              >
                Category
              </label>
              <input
                type="text"
                id="category"
                name="category"
                placeholder="Category of the blog"
                className="px-3 py-2 w-full border rounded-md bg-transparent focus:outline-none text-secondary"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="title"
                className="font-semibold text-secondary block mb-2"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Title of the blog"
                className="px-3 py-2 w-full border rounded-md bg-transparent focus:outline-none text-secondary"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="body"
                className="font-semibold text-secondary block mb-2"
              >
                Body
              </label>
              <textarea
                rows="20"
                type="text"
                id="body"
                name="body"
                placeholder="Body of the blog..."
                className="px-3 py-2 w-full border rounded-md bg-transparent focus:outline-none text-secondary"
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />
            </div>
            <div className="mb-10">
              <label
                htmlFor="image"
                className="font-semibold text-secondary block mb-2"
              >
                Image URL
              </label>
              <input
                type="text"
                id="image"
                name="image"
                placeholder="URL of the image"
                className="px-3 py-2 w-full border rounded-md bg-transparent focus:outline-none text-secondary"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-5">
              <button
                className="text-primary md:text-tertiary bg-tertiary md:bg-transparent border border-tertiary md:hover:bg-tertiary hover:text-primary px-3 py-1 rounded-sm transition font-semibold w-full sm:w-auto"
                onClick={handleUpdate}
              >
                Update
              </button>
              <button
                className="text-secondary md:text-red-500 bg-red-500 md:bg-transparent border border-red-500 md:hover:bg-red-500 hover:text-secondary px-3 py-1 rounded-sm transition font-semibold w-full sm:w-auto"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default UpdateBlog;
