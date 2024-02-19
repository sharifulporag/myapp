"use client";

import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";
import React from "react";

const BlogListComponent = ({ getAllData }) => {
  const router = useRouter();

  async function HandleDeleteBlog(getCurrentId) {
    const response = await fetch(`/api/blog/delete_blog?id=${getCurrentId}`, {
      method: "DELETE",
    });

    const data = await response.json();

    console.log(data); 

    if(!data){
      return NextResponse.json({
        success: false,
        message: "something [List] went wrong!!"
      })
    }

    if(data?.success) return router.refresh();
  }

  return (
    <div>
      {getAllData && getAllData.length > 0 ? (
        getAllData.map((item) => (
          <div key={item._id} className="w-auto bg-transparent border p-3 my-3">
            <p>Uniq Id: {item._id}</p>
            <h1 className="font-bold text-2xl text-pink-600">{item.title}</h1>
            <p>{item.description}</p>
            <div>
              
              <button onClick={() => HandleDeleteBlog(item._id)}>Delete Here</button>
            </div>
          </div>
        ))
      ) : (
        <h1 className="bg-sky-600 px-4 py-2 mr-4 rounded-lg mt-4">
          No Blog Here
        </h1>
      )}
    </div>
  );
};

export default BlogListComponent;
