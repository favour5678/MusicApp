import { PiMusicNoteDuotone } from "react-icons/pi";
import { AiFillHome } from "react-icons/ai";
import { MdOutlinePlaylistAddCheckCircle } from "react-icons/md";
import { FaHeadphonesAlt } from "react-icons/fa";
import { GiLoveSong } from "react-icons/gi";
import { IoAlbumsOutline } from "react-icons/io5";
import { BsGear } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { AiOutlineVideoCamera } from "react-icons/ai";
import SearchSongs from "./SearchSongs";
import { Link } from "react-router-dom";


const LeftSection = () => {
  return (
    <section className="w-[22%] h-screen border border-r-white border-l-0 border-t-0 border-b-0">
      <div className="flex flex-col items-center pt-5">
        <div className="flex items-center">
          <PiMusicNoteDuotone className="text-[#B23238] text-4xl" />
          <h2 className="text-2xl pl-2">Music</h2>
        </div>
        <SearchSongs />
      </div>

      <div className="pl-12 space-y-10 mt-5">
        {/* Menu */}
        <div className="space-y-3">
          <h2 className="text-xl">Menu</h2>
          <Link to={'/'} className="flex items-center cursor-pointer hover:bg-[#B23238] duration-200 ease-in-out">
            <AiFillHome className="text-lg" />
            <p className="text-base pl-2">Home</p>
          </Link>
          <Link to={'/playlist'} className="flex items-center cursor-pointer hover:bg-[#B23238] duration-200 ease-in-out">
            <MdOutlinePlaylistAddCheckCircle className="text-lg" />
            <p className="text-base pl-2">Playlists</p>
          </Link>
          <span className="flex items-center cursor-pointer hover:bg-[#B23238] duration-200 ease-in-out">
            <FaHeadphonesAlt className="text-lg" />
            <p className="text-base pl-2">Artists</p>
          </span>
        </div>

        {/* Library */}
        <div className="space-y-3">
          <h2 className="text-xl">Library</h2>
          <Link to={'/songs'} className="flex items-center cursor-pointer hover:bg-[#B23238] duration-200 ease-in-out">
            <GiLoveSong className="text-lg" />
            <p className="text-base pl-2">Songs</p>
          </Link>
          <span className="flex items-center cursor-pointer hover:bg-[#B23238] duration-200 ease-in-out">
            <IoAlbumsOutline className="text-lg" />
            <p className="text-base pl-2">Albums</p>
          </span>
          <span className="flex items-center cursor-pointer hover:bg-[#B23238] duration-200 ease-in-out">
            <AiOutlineVideoCamera className="text-lg" />
            <p className="text-base pl-2">Music Videos</p>
          </span>
        </div>

        {/* Other */}
        <div className="space-y-3">
          <h2 className="text-xl">Other</h2>
          <span className="flex items-center cursor-pointer hover:bg-[#B23238] duration-200 ease-in-out">
            <BsGear className="text-lg" />
            <p className="text-base pl-2">Settings</p>
          </span>
          <span className="flex items-center cursor-pointer hover:bg-[#B23238] duration-200 ease-in-out">
            <BiLogOut className="text-lg" />
            <p className="text-base pl-2">Log out</p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default LeftSection;
