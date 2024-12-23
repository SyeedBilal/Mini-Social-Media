import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  createPost: () => {},
  deletePost: () => {},
});
import { useContext } from "react";
const postListReducer = (state, action) => {
    switch (action.type) {
      case "ADD_POST":
        return [...state, action.payload];
      case "DELETE_POST":
        return state.filter((post) => post.id !== action.payload);
      case "ADD_Intial_POSTS":
        return [...state, ...action.payload]; // Spread the array into the state
      default:
        throw new Error(`Unknown action type ${action.type}`);
    }
  };
  
  const PostListProvider = ({ children }) => {
    const [postList, dispatch] = useReducer(postListReducer, []);
  
    const createPost = (newPost) => {
      dispatch({ type: "ADD_POST", payload: newPost });
    };
  
    const createInitialPost = (posts) => {
      dispatch({ type: "ADD_Intial_POSTS", payload: posts });
    };
  
    const deletePost = (postId) => {
      dispatch({ type: "DELETE_POST", payload: postId });
    };
  
    return (
      <PostList.Provider value={{ postList, createPost, deletePost, createInitialPost }}>
        {children}
      </PostList.Provider>
    );
  };
  
  export default PostListProvider;
  
