import connectToDB from "@/database";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";




export async function DELETE(req){
    try {
        await connectToDB();

        const {searchParams} = new URL(req.url);
        const currentBlogId = searchParams.get('id');
        console.log(currentBlogId);

        if(!currentBlogId){
            return NextResponse.json({
                success: false,
                message: "Something wrong in DB. Id is not found."
            })
        }
        const deleteBlogItem = await Blog.findByIdAndDelete(currentBlogId);

        if(deleteBlogItem){
            return NextResponse.json({
                success: true,
                message: "Blog successfully Deleted😍"
            })
        }else{
            return NextResponse.json({
                success: false,
                message: "Blog is not deleted!. Please check it why?"
            })
        }

    } catch (error) {
        console.log(error);
        return NextResponse.json({
            success: false,
            message: "something went wrong!!"
        })
    }
}