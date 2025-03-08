import Image from "next/image";
import brandLogo from "@/public/images/logo.svg";
import section1Img from "@/public/images/desktop/image-interactive.jpg";
import gallery1 from "@/public/images/desktop/image-deep-earth.jpg";
import gallery2 from "@/public/images/desktop/image-night-arcade.jpg";
import gallery3 from "@/public/images/desktop/image-soccer-team.jpg";
import gallery4 from "@/public/images/desktop/image-grid.jpg";
import gallery5 from "@/public/images/desktop/image-from-above.jpg";
import gallery6 from "@/public/images/desktop/image-pocket-borealis.jpg";
import gallery7 from "@/public/images/desktop/image-curiosity.jpg";
import gallery8 from "@/public/images/desktop/image-fisheye.jpg";
import facebook from "@/public/images/icon-facebook.svg";
import twitter from "@/public/images/icon-twitter.svg";
import pinterest from "@/public/images/icon-pinterest.svg";
import instagram from "@/public/images/icon-instagram.svg";

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
      <div className="header_bg w-full flex items-center ">
        <div className="border font-josefin-sans border-white uppercase w-[25%] p-10 h-[200px] text-4xl mx-14 text-white">
          immersive experience that delivers
        </div>
      </div>
      {/* main sections */}
      <div className="mx-14 my-28 flex flex-col gap-28">
        <div className="relative w-full flex items-end ">
          <Image src={section1Img} className="w-[60%]" alt="img" />
          <div className="bg-white absolute  right-28 w-[40%]  p-10 text-black">
            <h2 className="text-5xl font-josefin-sans uppercase">
              The leader in interactive VR{" "}
            </h2>
            <span>
              <p>
                Founded in 2011, Loopstudios has been producing world-class
                virtual reality projects for some of the best companies around
                the globe. Our award-winning creations have transformed
                businesses through digital experiences that bind to their brand.
              </p>
            </span>
          </div>
        </div>
        <div>
          <div className="flex items-center mb-10 justify-between">
            <h3 className="text-4xl font-josefin-sans"> OUR CREATIONS </h3>
            <button className="border bg-white px-8 py-2 flex justify-center ">
              SEE ALL
            </button>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <span>
              <Image src={gallery1} className="w-full" alt="gal_img" />
            </span>
            <span>
              <Image src={gallery2} className="w-full" alt="gal_img" />{" "}
            </span>
            <span>
              <Image src={gallery3} className="w-full" alt="gal_img" />
            </span>
            <span>
              <Image src={gallery4} className="w-full" alt="gal_img" />
            </span>
            <span>
              <Image src={gallery5} className="w-full" alt="gal_img" />
            </span>
            <span>
              <Image src={gallery6} className="w-full" alt="gal_img" />
            </span>
            <span>
              <Image src={gallery7} className="w-full" alt="gal_img" />
            </span>
            <span>
              <Image src={gallery8} className="w-full" alt="gal_img" />{" "}
            </span>
          </div>
        </div>
      </div>
      {/* FOOTER */}
      <div className="w-full bg-black text-white px-14 py-8 flex flex-col gap-5">
        <div className="flex justify-between items-start">
          <span>
            <Image src={brandLogo} alt="img" />
          </span>
          <div className="flex items-center justify-end text-white gap-4">
            <Image src={facebook} alt="social_links" />
            <Image src={twitter} alt="social_links" />
            <Image src={pinterest} alt="social_links" />
            <Image src={instagram} alt="social_links" />
          </div>
        </div>
        <div className="flex justify-between items-start">
          <div className="flex items-center font-alata-reg text-white gap-5">
            <span>About</span>
            <span>Careers</span>
            <span>Events</span>
            <span>Products</span>
            <span>Support</span>
          </div>
          <div>
            <p className="text-veryDarkGray font-alata-reg">
              &copy; 2021 Loopstudios. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
