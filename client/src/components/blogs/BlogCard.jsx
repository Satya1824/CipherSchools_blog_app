import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="flex justify-center">
      <div className="bord w-[18rem] p-3">
        <div className="w-full">
          <img
            src="https://images.unsplash.com/photo-1707327956851-30a531b70cda?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"
            alt="Image"
            className="rounded-sm"
          />
        </div>
        <div className="mt-5">
          <p className="text-tertiary text-[.8rem] mb-1 uppercase">
            Technology
          </p>
          <div className="flex items-center justify-between">
            <h2 className="text-secondary text-[1.15rem]">
              Bill Wuaf ubuwfhw ubcuew
            </h2>
            <Link to="/blog/12345">
              <ArrowUpRight size={20} className="text-secondary" />
            </Link>
          </div>
          <p className="text-green-300 text-[.75rem] my-2">
            Satya Prakash - Jan 25, 2023
          </p>
          <p className="my-3 text-secondary text-opacity-70 text-[.75rem] leading-snug line-clamp-3">
            All blog posts Sunday , 1 Jan 2023 Sunday , 1 Jan 2023 Sunday , 1
            Jan 2023 Bill Walsh leadership lessons PM mental models What is
            Wireframing? Like to know the secrets of transforming a 2-14 team
            into a 3x Super Bowl winning Dynasty? Mental models are simple
            expressions of complex processes or relationships. Introduction to
            Wireframing and its Principles. Learn from the best in the industry.
            Leadership Management Presentation Product Research Frameworks
            Design Research Presentation Sunday , 1 Jan 2023 Sunday , 1 Jan 2023
            Sunday , 1 Jan 2023 How collaboration makes us better designers Our
            top 10 Javascript frameworks to use Podcast: Creating a better CX
            Community Collaboration can make our teams stronger, and our
            individual designs better. JavaScript frameworks make development
            easy with extensive features and functionalities. Starting a
            community doesn’t need to be complicated, but how do you get
            started? Design Research Presentation Software Development Tools
            SaaS Podcasts Customer Success Presentation Previous 1 2 3 ... 8 9
            10 Next
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
