import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import CreatePost from "./CreatePost";
import Footer from "./Footer";
import PostList from "./PostList";

const App = () => {
  const [selectedTab, setSelectedTab] = useState("CreatePost");

  return (
    <>
      <div className="flex">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

        <div className="flex-1 flex flex-col">
          <Header selectedTab={selectedTab} />
          <main className="flex-1 p-6 bg-gray-100">
            <h1 className="text-2xl font-bold">Main Content</h1>

            {/* Conditional Rendering */}
            {selectedTab === "Home" ? <PostList /> : <CreatePost />}
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
