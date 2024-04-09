import Image from "next/image";
import SearchBar from "@/components/searchBar/SearchBar";
import HomeBgSlider from "@/components/HomeBgSlider/HomeBgSlider";
import HomeTextSlider from "@/components/HomeTextSlider/HomeTextSlider";
import bg1 from "../../public/img/homebg1.jpg";
import bg2 from "../../public/img/bg2.jpeg";
import bg3 from "../../public/img/bg3.jpg";
import bg4 from "../../public/img/bg4.jpg";
import { FaInstagramSquare, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Home() {
  const BGList = [bg1, bg2, bg3, bg4];
  return (
    <div>
      <SearchBar />
      <HomeBgSlider srcs={BGList} />
      <div className="relative h-screen w-[100%] -z-10">
        <div className="absolute h-screen w-[100%] leading-loose">
          <HomeTextSlider />
        </div>
      </div>
    </div>
  );
}
