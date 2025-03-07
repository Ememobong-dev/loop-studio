import Image from "next/image";
import brandLogo from "@/public/images/logo.svg";

export default function Home() {
  return (
    <div>
      <div className="bg-transparent w-full fixed top-0 px-14 py-3 flex items-center justify-between">
        <span>
          <Image src={brandLogo} alt="logo" />
        </span>
        <div className="flex items-center text-white gap-5">
          <span>About</span>
          <span>Careers</span>
          <span>Events</span>
          <span>Products</span>
          <span>Support</span>
        </div>
      </div>
      <div className="header_bg">
        <div className="border border-white uppercase w-1/2 h-[200px]  text-4xl mx-14 text-white">
          immersive experience that delivers
        </div>
      </div>
    </div>
  );
}
