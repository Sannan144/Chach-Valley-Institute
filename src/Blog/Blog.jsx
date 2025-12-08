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
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-poppins">
      <Logo />
      <Tabs />

      {/* Blog List View */}
      {!selectedPost ? (
        <div className="container mx-auto px-4 py-8">
            {/* Header Section for SEO */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Latest Tech Insights & Career Guides</h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Explore our expert articles on Web Development, Digital Marketing, AI Trends, and Freelancing to boost your career in 2025.
                </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogData.map((post) => (
                <div
                key={post.id}
                onClick={() => handleCardClick(post)}
                className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden flex flex-col h-full"
                >
                <div className="relative overflow-hidden h-56">
                    <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 leading-tight hover:text-blue-600 transition-colors">
                    {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 flex-grow text-sm leading-relaxed">
                    {post.excerpt}
                    </p>
                    <button className="mt-auto self-start text-blue-600 font-semibold hover:text-blue-800 flex items-center gap-1 group">
                    Read Article 
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                </div>
                </div>
            ))}
            </div>
        </div>
      ) : (
        /* Single Blog Post View */
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <button
            onClick={handleBack}
            className="flex items-center text-blue-600 hover:text-blue-800 font-medium mb-6 transition-colors"
          >
            <span className="text-2xl mr-2">←</span> Back to All Posts
          </button>

          <article className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-100">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                {selectedPost.title}
            </h1>
            
            <div className="w-full h-64 md:h-96 mb-8 rounded-xl overflow-hidden shadow-md">
                <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
                />
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
                {selectedPost.content.map((section, index) => {
                switch (section.type) {
                    case "heading":
                    return (
                        <h2
                        key={index}
                        className="text-2xl md:text-3xl font-bold mt-10 mb-4 text-gray-800 border-l-4 border-blue-500 pl-4"
                        >
                        {section.text}
                        </h2>
                    );
                    case "paragraph":
                    return (
                        <p
                        key={index}
                        className="text-lg leading-8 mb-6 text-gray-700"
                        >
                        {section.text}
                        </p>
                    );
                    case "list":
                    return (
                        <ul key={index} className="list-disc list-outside ml-6 mb-8 space-y-3 bg-blue-50 p-6 rounded-lg border border-blue-100">
                        {section.items.map((item, idx) => (
                            <li key={idx} className="text-gray-800 text-lg pl-2">
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
            
            {/* Call to Action at the end of blog */}
            <div className="mt-12 p-8 bg-gray-900 text-white rounded-xl text-center">
                <h3 className="text-2xl font-bold mb-3">Want to learn these skills?</h3>
                <p className="mb-6 text-gray-300">Join our premium courses and start your journey today.</p>
                <button 
                    onClick={() => window.location.href = '/courses'} // Assuming you have a courses route
                    className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg"
                >
                    Explore Courses
                </button>
            </div>
          </article>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Blog;