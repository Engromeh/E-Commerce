import React, { useState } from "react";
import "./OtherPages.css";

const blogPosts = [
  {
    id: 1,
    title: "How to Choose the Best Product",
    date: "Jan 10, 2026",
    content: `Choosing the best product depends on several factors including quality, price, and user reviews. Always compare different options before making a purchase. Detailed research helps you make smart decisions and avoid regrets.`,
  },
  {
    id: 2,
    title: "Top 10 Shopping Tips",
    date: "Feb 5, 2026",
    content: `Shopping smartly can save you time and money. Here are the top 10 tips for getting the best deals and avoiding common mistakes. From comparing prices to reading reviews, these tips will make you a savvy shopper.`,
  },
  {
    id: 3,
    title: "Latest Trends in Electronics",
    date: "Mar 12, 2026",
    content: `The electronics market is constantly evolving. Learn about the latest gadgets, innovations, and tech trends to stay updated. From smartphones to smart home devices, stay ahead with the newest technology.`,
  },
];

const Blog = () => {
  const [expandedPosts, setExpandedPosts] = useState([]);

  const toggleExpand = (id) => {
    if (expandedPosts.includes(id)) {
      setExpandedPosts(expandedPosts.filter((pid) => pid !== id));
    } else {
      setExpandedPosts([...expandedPosts, id]);
    }
  };

  return (
    <div className="blog-container">
      <h2>Our Blog</h2>
      <div className="blog-list">
        {blogPosts.map((post) => {
          const isExpanded = expandedPosts.includes(post.id);
          return (
            <div key={post.id} className="blog-item">
              <h3>{post.title}</h3>
              <p className="date">{post.date}</p>
              <p>
                {isExpanded ? post.content : post.content.substring(0, 100) + "..."}
              </p>
              <button onClick={() => toggleExpand(post.id)}>
                {isExpanded ? "Show Less" : "Read More"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
