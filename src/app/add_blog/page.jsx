"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const initialformData = {
  title: "",
  description: "",
};

function AddBlog() {
  const router = useRouter();
  const [BlogformData, setBlogformData] = useState(initialformData);

  async function handleAddBlog() {
    const response = await fetch("../api/blog/add_new_blog/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(BlogformData),
    });

    const result = await response.json();
    console.log(result);

    router.push("/blog_list");
  }

  return (
    <div className="p-8">
      <h1 className="font-bold text-lg">Add a new Blog</h1>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <label for="inputField">Add a new Blog title</label>
          <input
            className="outline-none border-red-500 border-2 p-3 text-black"
            type="text"
            name="title"
            placeholder="Add a new Blog title"
            value={BlogformData.title}
            onChange={(e) =>
              setBlogformData({
                ...BlogformData,
                title: e.target.value,
              })
            }
            id="inputField"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label for="textareaField">Add a new Blog Description</label>
          <textarea
            className="outline-none border-red-500 border-2 p-3 text-black"
            name="Description"
            placeholder="Add a new Blog description"
            value={BlogformData.description}
            onChange={(e) =>
              setBlogformData({
                ...BlogformData,
                description: e.target.value,
              })
            }
            id="textareaField"
          />
        </div>
        <div>
          <button
            onClick={handleAddBlog}
            className="bg-green-800 p-3 rounded-md"
          >
            Add Blog
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddBlog;
