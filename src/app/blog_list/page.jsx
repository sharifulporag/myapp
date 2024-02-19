
import Header from "@/components/Header/header";
import BlogListComponent from "@/components/blogs/list";
import React from "react";

async function fetchAllBlog(){
  const response = await fetch('http://localhost:3000/api/blog/get_all_blog', {
    method: "GET",
    cache: "no-store",
  })
  const result = await response.json();
  
  if(result?.success){
    return result.data;
  }
}

async function BlogList() {





  const getAllData = await fetchAllBlog();

  return (
    <div className="px-5">
      <Header />
      <BlogListComponent getAllData={getAllData} />
    </div>
  );
}

export default BlogList;
