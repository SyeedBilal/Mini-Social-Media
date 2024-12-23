import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "./store/PostListStore";

const PostCard = ({ post }) => {
  const { id, title, description, reactiona, userId, tags ,uploadedFile} = post;
  const { deletePost } = useContext(PostList);

  return (
    <div className="relative max-w-md p-6 border rounded-lg shadow-lg bg-white">
      {/* Delete Icon */}
      <button
        className="absolute -top-3 -right-3 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
        onClick={() => deletePost(id)}
      >
        <MdDelete size={20} />
      </button>

      {/* Title and Reactions */}
      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex gap-4">
        {title}
        <button className="btn">
          Reactions
          <div className="badge badge-secondary">{reactiona}</div>
        </button>
      </h3>

      {/* Description */}
      <p className="text-gray-700 mb-4">{description}</p>

      {/* User Info */}
      <p className="text-sm text-gray-600">Posted by: {userId}</p>

      {/* Tags */}
      <div className="mt-4">
        <span className="text-sm font-medium text-gray-800">Tags:</span>
        <ul className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <li
              key={index}
              className="px-2 py-1 text-xs text-white bg-blue-500 rounded-full"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      {state.uploadedFile?.fileUrl && (
    <div className="uploaded-media">
      {state.uploadedFile.file.type.startsWith("image/") ? (
        <img
          src={state.uploadedFile.fileUrl}
          alt="Uploaded Preview"
          className="w-full h-auto rounded-lg"
        />
      ) : (
        <video
          src={state.uploadedFile.fileUrl}
          controls
          className="w-full rounded-lg"
        />
      )}
    </div>
  )}
    </div>
  );
};

export default PostCard;
