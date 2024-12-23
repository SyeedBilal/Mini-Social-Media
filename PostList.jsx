import { useContext, useEffect, useState } from "react";
import PostCard from "./Card";
import { PostList as PostListData } from "./store/PostListStore";
import EmptyMessage from "./EmptyMessage";

const PostList = () => {
  const { postList, createInitialPost } = useContext(PostListData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then((data) => {
        createInitialPost(data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setLoading(false);
      });
  }, [createInitialPost]);

  return (
    <>
      {/* Conditional rendering based on loading state */}
      {loading && <p>Loading...</p>}
  
      {/* Conditional rendering for empty list (after loading is complete) */}
      {!loading && postList.length === 0 && <EmptyMessage />}
  
      {/* Display posts (after loading is complete) */}
      {!loading && postList.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </>
  );
}
export default PostList



