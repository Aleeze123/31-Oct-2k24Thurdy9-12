import React from "react";
import Header from "@/components/Header";
import Image from "next/image";

function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex h-[80%] justify-center items-center">
        <div className="max-w-[548px] flex flex-col justify-center items-start mx-4">
          <h1 className="text-[44px] font-bold">Welcome To Our Website</h1>
          <p className="text-[32px] leading-[38.73px] mb-4 font-inter text-gray-700">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industry&apos;s standard.
</p>

          <button className="bg-black text-white w-[237px] h-[66px] mt-4 text-[28px]">Contact Us</button>
        </div>
        <div className="max-w-[502px] mx-4">
          <Image 
            src="/figma_image.svg" 
            alt="Figma"
            width={502} 
            height={465} 
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
