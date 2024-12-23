import React, { useContext, useReducer } from "react";
import { PostList } from "./store/PostListStore";

const CreatePost = () => {
  const { createPost } = useContext(PostList);

  // Reducer to manage form state
  const reducer = (state, action) => {
    switch (action.type) {
      case "ID_INPUT":
        return { ...state, id: action.payload };
      case "TITLE_INPUT":
        return { ...state, title: action.payload };
      case "DES_INPUT":
        return { ...state, description: action.payload };
      case "REACTION":
        return { ...state, reactiona: action.payload };
      case "USER_ID":
        return { ...state, userId: action.payload };
      case "TAGS":
        return { ...state, tags: action.payload };
        case "FILE_UPLOAD":
  return { ...state, uploadedFile: action.payload };

      default:
        throw new Error(`Cannot resolve the input ${action.type}`);
    }
  };
  
  // Initial state for the form
  const initialState = {
      id: "",
      title: "",
      description: "",
      reactiona: 0,
      userId: "",
      tags: "",
    };
    
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleOnSubmit = (e) => {
      e.preventDefault();
      createPost({
          id: state.id,
          title: state.title,
          description: state.description,
          reactiona: parseInt(state.reactiona, 10),
          userId: state.userId,
          tags: state.tags.split(",").map((tag) => tag.trim()),
          uploadedFile: state.uploadedFile.file,
        });
        // Reset the form
        dispatch({ type: "RESET" });
    };
    const handleFileUpload = (e) => {
      const file = e.target.files[0]; // Get the uploaded file
      if (file) {
        const fileUrl = URL.createObjectURL(file); // Create a temporary URL for preview
        dispatch({ type: "FILE_UPLOAD", payload: { file, fileUrl } }); // Save file and preview URL
      }
    };

  return (
    <div className="max-w-xl p-6 border rounded-lg shadow-lg bg-white mt-0">
      <h2 className="text-2xl font-semibold mb-6 text-center">Create a New Post</h2>
      <form className="space-y-4" onSubmit={handleOnSubmit}>
        <div>
          <label htmlFor="id" className="block text-sm font-medium text-gray-700">
            Post ID
          </label>
          <input
            type="text"
            id="id"
            value={state.id}
            onChange={(e) => dispatch({ type: "ID_INPUT", payload: e.target.value })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter post ID"
            required
          />
        </div>
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={state.title}
            onChange={(e) => dispatch({ type: "TITLE_INPUT", payload: e.target.value })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter post title"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            rows="4"
            value={state.description}
            onChange={(e) => dispatch({ type: "DES_INPUT", payload: e.target.value })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter post description"
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="reactions" className="block text-sm font-medium text-gray-700">
            Reactions
          </label>
          <input
            type="number"
            id="reactions"
            value={state.reactiona}
            onChange={(e) => dispatch({ type: "REACTION", payload: e.target.value })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter reaction count"
            required
          />
        </div>
        <div>
          <label htmlFor="userId" className="block text-sm font-medium text-gray-700">
            User ID
          </label>
          <input
            type="text"
            id="userId"
            value={state.userId}
            onChange={(e) => dispatch({ type: "USER_ID", payload: e.target.value })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter user ID"
            required
          />
        </div>
        <div>
          <label htmlFor="tags" className="block text-sm font-medium text-gray-700">
            Tags (Comma Separated)
          </label>
          <input
            type="text"
            id="tags"
            value={state.tags}
            onChange={(e) => dispatch({ type: "TAGS", payload: e.target.value })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter tags (e.g., vacations, Mumbai)"
            required
          />
          
        </div>
        {/* File Input */}
<div>
  <label htmlFor="fileUpload" className="block text-sm font-medium text-gray-700">
    Upload Image/Video
  </label>
  <input
    type="file"
    id="fileUpload"
    accept="image/*,video/*"
    onChange={(e) => handleFileUpload(e)}
    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
  />
</div>

        <div className="text-center">
          <button
            type="submit"
            className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Create Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
