import React from "react";

const Footer = () => {
  return (
    <div className="border-t-[1px] pt-10 pb-3 text-center">
      <p className="text-secondary mb-8">
        Made With ❤️ By{" "}
        <span>
          <a
            className="text-tertiary hover:underline"
            href="https://github.com/Satya1824"
            target="_blank"
          >
            Satya Prakash.
          </a>
        </span>{" "}
      </p>
      <p className="text-secondary">
        &copy; {new Date().getFullYear()} Blog App
      </p>
    </div>
  );
};

export default Footer;
