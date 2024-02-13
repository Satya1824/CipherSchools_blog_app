import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { useAuth } from "../context/auth";
import { Mail, UserRound } from "lucide-react";
import BlogCard from "../components/blogs/BlogCard";
import { toast } from "react-toastify";
import { bouncy } from "ldrs";

const Profile = () => {
  const [auth, setAuth] = useAuth();
  const [user, setUser] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [load, setLoad] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const params = useParams();

  const { id } = params;

  const Auth = auth?.user?.id === id;

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/auth");
  };

  const getUserBlogs = async (id) => {
    setLoading(true);
    try {
      const res = await fetch(
        `${process.env.SERVER_URL}/blogs/user-blogs/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();

      if (data.success) {
        setBlogs(data.userBlogs);
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

  const getUser = async (id) => {
    try {
      const res = await fetch(`${process.env.SERVER_URL}/user/${id}`);

      const data = await res.json();

      if (data.success) {
        setUser(data.user);
      }
    } catch (error) {
      toast.error("Error fetching user details!", {
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
    getUserBlogs(id);
    bouncy.register();
    if (!Auth) {
      getUser(id);
    }
  }, [id]);

  return (
    <Layout title={"Profile"}>
      <div className="pt-10 pb-20">
        <h1 className="font-bold text-secondary text-[2rem] mb-2">
          {auth?.user?.id === id ? "My Profile" : "User Profile"}
        </h1>
        <div className="flex items-center gap-3 mb-2">
          <UserRound size={20} className="text-tertiary" />
          <p className="text-tertiary m-0">
            {Auth ? auth?.user?.name : user?.name}
          </p>
        </div>
        <div className="flex items-center gap-3 mb-5">
          <Mail size={20} className="text-tertiary" />
          <p className="text-tertiary m-0">
            {Auth ? auth?.user?.email : user?.email}
          </p>
        </div>
        {Auth && (
          <div className="flex gap-3 items-center mb-5">
            <button
              onClick={() => navigate("/addblog")}
              className="text-secondary border hover:bg-secondary hover:text-primary px-3 py-1 rounded-sm transition font-semibold"
            >
              Add Blog
            </button>
            <button
              className="text-secondary border hover:bg-secondary hover:text-primary px-3 py-1 rounded-sm transition font-semibold"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}
        <h1 className="font-bold text-secondary text-[2rem] mt-10 mb-5">
          {auth?.user?.id === id ? "My Blogs" : "User Blogs"}
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

export default Profile;
