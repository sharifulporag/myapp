"use client"

import { useRouter } from "next/navigation";
import Header from "@/components/Header/header";





export default function Home() {
  const router = useRouter();

  const HandleRoute = () => {
    router.push("/add_blog");
  }


  return (
    <main className="flex min-h-screen flex-col  p-8 h-lvh">
      <Header />
      <button onClick={HandleRoute} className='bg-sky-600 px-4 py-2 mr-4 rounded-lg mt-4'>Add New</button>
    </main>
  );
}
