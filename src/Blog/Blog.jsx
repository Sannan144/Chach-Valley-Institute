import React, { useState } from "react";
import { blogData } from "./BlogData";
import Footer from "../Footer/Footer";
import Tabs from "../Tabs/Tabs";
import Logo from "../Logo/Logo";

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const handleCardClick = (post) => {
    setSelectedPost(post);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    setSelectedPost(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-poppins">
      <Logo />
      <Tabs />

      {!selectedPost ? (
        <div className="grid gap-6 p-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogData.map((post) => (
            <div
              key={post.id}
              onClick={() => handleCardClick(post)}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1 cursor-pointer"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-8 max-w-4xl mx-auto">
          <button
            onClick={handleBack}
            className="text-blue-600 hover:underline mb-4 cursor-pointer"
          >
            ← Back
          </button>

          <h2 className="text-3xl font-bold mb-4">{selectedPost.title}</h2>
          <img
            src={selectedPost.image}
            alt={selectedPost.title}
            className="w-full h-80 object-cover rounded-lg mb-6"
          />

          {selectedPost.content.map((section, index) => {
            switch (section.type) {
              case "heading":
                return (
                  <h3
                    key={index}
                    className="text-2xl font-semibold mt-6 mb-2 text-gray-800"
                  >
                    {section.text}
                  </h3>
                );
              case "paragraph":
                return (
                  <p
                    key={index}
                    className="text-gray-700 leading-relaxed mb-4"
                  >
                    {section.text}
                  </p>
                );
              case "list":
                return (
                  <ul key={index} className="list-disc list-inside mb-4">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="mb-1">
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              default:
                return null;
            }
          })}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Blog;
