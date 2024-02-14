import React, { useEffect } from "react";
import { ArrowUpRight, SquarePen } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth";

const BlogCard = ({ data }) => {
  const [auth, setAuth] = useAuth();

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const options = { month: "short", day: "numeric", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div className="flex justify-center">
      <div className="bord w-[18rem] p-3">
        <div className="w-full">
          <img src={data.image} alt="Image" className="rounded-sm" />
        </div>
        <div className="mt-5">
          <p className="text-tertiary text-[.8rem] mb-1 uppercase">
            {data.category}
          </p>
          <div className="flex items-center justify-between">
            <h2 className="text-secondary text-[1.15rem] line-clamp-1">
              {data.title}
            </h2>
            <div className="flex items-center gap-1">
              <Link to={`/blog/${data._id}`}>
                <ArrowUpRight size={20} className="text-secondary" />
              </Link>
              {auth?.user?.id === data.user_id && (
                <Link to={`/updateBlog/${data._id}`}>
                  <SquarePen size={13} className="text-secondary" />
                </Link>
              )}
            </div>
          </div>
          <p className="text-green-300 text-[.75rem] my-2">
            <Link className="hover:underline" to={`/profile/${data.user_id}`}>
              {data.user_name}
            </Link>{" "}
            - {formatDate(data.createdAt)}
          </p>
          <p className="my-3 text-secondary text-opacity-70 text-[.75rem] leading-snug line-clamp-3">
            {data.body}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
