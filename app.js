
const blogPosts = [
  {
    title: "India wins thrilling T20 match!",
    content: "India defeated southAfrica in a close T20 match with a last-over finish. The crowd went wild!"
  },
  {
    title: "Virat Kohli's 50th Century",
    content: "Virat Kohli achieves his 50th international century, cementing his place as one of the greatest."
  },
  {
    title: "World Cup Updates",
    content: "The Cricket World Cup 2025 has begun! Teams are gearing up for exciting matches ahead."
  }
];


const container = document.getElementById("blog-container");

blogPosts.forEach(post => {
  const article = document.createElement("div");
  article.classList.add("article");
  article.innerHTML = `
    <h3>${post.title}</h3>
    <p>${post.content}</p>
  `;
  container.appendChild(article);
});
