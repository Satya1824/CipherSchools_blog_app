import React from "react";
import BlogCard from "../components/blogs/BlogCard";
import Layout from "../components/layout/Layout";

const SingleBlog = () => {
  return (
    <Layout title={"Blog - ABC"}>
      <div className="grid grid-cols-4 my-10">
        <div className="col-span-1">
          <h4 className="text-secondary ml-7 mb-4">Recent blog posts</h4>
          <div className="flex flex-col gap-3">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
        <div className="col-span-3">
          <div className="flex items-center justify-between mb-2">
            <p className="text-tertiary text-[1rem] mb-1 uppercase">
              Technology
            </p>
            <p className="text-green-300 text-[.9rem] my-2">
              Satya Prakash - Jan 25, 2023
            </p>
          </div>
          <h1 className="text-secondary text-[2.5rem] font-semibold leading-none">
            Grid system for better design user interface fafa adfadf
          </h1>
          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1707571194430-fc68d033e603?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8"
              alt="Image"
              className="w-full"
            />
          </div>
          <p className="text-slate-300">
            ll blog posts Sunday , 1 Jan 2023 Sunday , 1 Jan 2023 Sunday , 1 Jan
            2023 Bill Walsh leadership lessons PM mental models What is
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
            10 Next ll blog posts Sunday , 1 Jan 2023 Sunday , 1 Jan 2023 Sunday
            , 1 Jan 2023 Bill Walsh leadership lessons PM mental models What is
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
            10 Next ll blog posts Sunday , 1 Jan 2023 Sunday , 1 Jan 2023 Sunday
            , 1 Jan 2023 Bill Walsh leadership lessons PM mental models What is
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
            10 Next ll blog posts Sunday , 1 Jan 2023 Sunday , 1 Jan 2023 Sunday
            , 1 Jan 2023 Bill Walsh leadership lessons PM mental models What is
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
            10 Next.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default SingleBlog;
