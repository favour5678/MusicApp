import React from "react";
import { LuMusic2 } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { AiFillHome } from "react-icons/ai";
import { MdOutlinePlaylistAddCheckCircle } from "react-icons/md";
import { FaHeadphonesAlt } from "react-icons/fa";
import { GiLoveSong } from "react-icons/gi";
import { IoAlbumsOutline } from "react-icons/io5";
import { BsGear } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";

const LeftSection = () => {
    return (
        <section>
            <div>
                <LuMusic2 />
                <p>Music</p>
            </div>
            <div>
                <CiSearch />
                <input type="text" placeholder="Search" />
            </div>

            {/* Menu */}
            <div>
                <h2>Menu</h2>
                <span>
                    <AiFillHome />
                    <p>Home</p>
                </span>
                <span>
                    <MdOutlinePlaylistAddCheckCircle />
                    <p>Playlists</p>
                </span>
                <span>
                    <FaHeadphonesAlt />
                    <p>Artists</p>
                </span>
            </div>

            {/* Library */}
            <div>
                <h2>Library</h2>
                <span>
                    <GiLoveSong />
                    <p>Songs</p>
                </span>
                <span>
                    <IoAlbumsOutline />
                    <p>Albums</p>
                </span>
            </div>

            {/* Other */}
            <div>
                <h2>Other</h2>
                <span>
                    <BsGear />
                    <p>Settings</p>
                </span>
                <span>
                    <BiLogOut />
                    <p>Log out</p>
                </span>
            </div>
        </section>
    );
};

export default LeftSection;
