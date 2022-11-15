import { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState(["post one", "post two", "post three"]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data);
      console.log(data);
      setIsLoading(false);
    };
    getPosts();
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      {isLoading && <span>Loading ...</span>}
      {!isLoading &&
        posts.map((post) => {
          return (
            <p style={{ color: "red", fontSize: "2em" }} key={post.id}>
              {post.title}
            </p>
          );
        })}
    </div>
  );
};

export default Posts;
