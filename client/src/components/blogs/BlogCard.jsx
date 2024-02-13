import React, { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const BlogCard = ({ data }) => {
  useEffect(() => {
    console.log(data);
  }, []);
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
            <h2 className="text-secondary text-[1.15rem]">{data.title}</h2>
            <Link to={`/blog/${data._id}`}>
              <ArrowUpRight size={20} className="text-secondary" />
            </Link>
          </div>
          <p className="text-green-300 text-[.75rem] my-2">
            Satya Prakash - Jan 25, 2023
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
