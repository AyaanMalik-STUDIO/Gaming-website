// src/data/dummyData.js

// Function to generate a single dummy blog post manually
const generateDummyBlog = (id, title, content, image) => {
  return {
    id,
    title,
    content,
    image,
  };
};

// Generate an array of 10 dummy blog posts manually
export const dummyPosts = [
  generateDummyBlog(1, "First Blog Post", "Content of the first blog post.", "blog1.jpg"),
  generateDummyBlog(2, "Another Blog Post", "Content of another blog post.", "blog2.jpg"),
  generateDummyBlog(3, "Exciting News", "Exciting news to share with our readers.", "blog3.jpg"),
  generateDummyBlog(4, "Tips for Success", "Key tips for achieving success in your endeavors.", "blog4.jpg"),
  generateDummyBlog(5, "Exploring Nature", "A journey into the heart of nature.", "blog5.jpg"),
  generateDummyBlog(6, "Tech Trends", "The latest trends in technology.", "blog6.jpg"),
  generateDummyBlog(7, "Healthy Living", "Maintaining a healthy lifestyle for a better you.", "blog7.jpg"),
  generateDummyBlog(8, "Travel Diaries", "Discovering new places and cultures.", "blog8.jpg"),
  generateDummyBlog(9, "The Art of Cooking", "Exploring the culinary world.", "blog9.jpg"),
  generateDummyBlog(10, "Mindfulness Meditation", "Finding peace in the present moment.", "blog10.jpg"),
];
