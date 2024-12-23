import React from "react";

const Sidebar = ({ selectedTab, setSelectedTab }) => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen p-4">
      <div className="p-4 text-lg font-bold border-b border-gray-700">
        Sidebar
      </div>
      <nav className="p-4">
        <ul className="space-y-4">
          <li>
            <a
              href="#"
              className={`block p-2 hover:bg-gray-700 rounded ${selectedTab === 'Home' ? 'bg-violet-700' : ''}`}
              onClick={() => setSelectedTab("Home")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`block p-2 hover:bg-gray-700 rounded ${selectedTab === 'CreatePost' ? 'bg-violet-700' : ''}`}
              onClick={() => setSelectedTab("CreatePost")}
            >
              Create Post
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
