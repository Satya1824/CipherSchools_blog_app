import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import { toast } from "react-toastify";
import axios from "axios";

const AddBlog = () => {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [error1, setError1] = useState(false);
  const [error2, setError2] = useState(false);
  const [error3, setError3] = useState(false);
  const [error4, setError4] = useState(false);
  const [loading, setLoading] = useState(false);

  const resetForm = () => {
    setCategory("");
    setTitle("");
    setBody("");
    setImage("");
  };

  const handleSubmit = async () => {
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
    setLoading(true);
    try {
      const res = await axios.post(`${process.env.SERVER_URL}/blogs/`, {
        title: title,
        body: body,
        category: category,
        image: image,
      });

      if (res.data.success) {
        resetForm();
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
      setLoading(false);
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
      resetForm();
    }
    setLoading(false);
  };

  return (
    <Layout title={"Add Blog"}>
      <div className="pt-10 pb-20">
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
            className="px-3 py-2 w-full rounded-md bg-transparent focus:outline-none text-secondary"
            style={{ border: error1 ? "1px solid red" : "1px solid #dadada" }}
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setError1(false);
            }}
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
            className="px-3 py-2 w-full rounded-md bg-transparent focus:outline-none text-secondary"
            style={{ border: error2 ? "1px solid red" : "1px solid #dadada" }}
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setError2(false);
            }}
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
            className="px-3 py-2 w-full rounded-md bg-transparent focus:outline-none text-secondary"
            style={{ border: error3 ? "1px solid red" : "1px solid #dadada" }}
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
              setError3(false);
            }}
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
            className="px-3 py-2 w-full rounded-md bg-transparent focus:outline-none text-secondary"
            style={{ border: error4 ? "1px solid red" : "1px solid #dadada" }}
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
              setError4(false);
            }}
          />
        </div>
        <button
          className="text-primmary md:text-secondary bg-secondary md:bg-transparent border md:hover:bg-secondary hover:text-primary px-3 py-1 rounded-sm transition font-semibold w-full sm:w-auto"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </Layout>
  );
};

export default AddBlog;
