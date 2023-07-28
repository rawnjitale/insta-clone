import React from 'react';
import Link from 'next/link';
import { GrHomeRounded } from 'react-icons/gr';
import { BiSearchAlt2 } from 'react-icons/bi';
import { MdOutlineExplore, MdOutlineVideoLibrary } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { AiOutlineHeart } from 'react-icons/ai';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';
import { BsInstagram } from 'react-icons/bs';

const navbar = [
    "Home",
    "Search",
    "Explore",
    "Reels",
    "Messages",
    "Notifications",
    "Create",
    "Profile",
];

const navbarIcons = [
    GrHomeRounded,
    BiSearchAlt2,
    MdOutlineExplore,
    MdOutlineVideoLibrary,
    RiMessengerLine,
    AiOutlineHeart,
    IoMdAddCircleOutline,
    CgProfile,
];

function Leftbar() {
    return (
        <div className=" font-medium w-1/5 min-h-screen text-lg fixed top-0 left-0 bg-white shadow-md p-4 border-black md:w-1/5">
            {/* Instagram logo (hidden on mobile) */}
            <div className="md:block py-8  px-3 w-6 text-xl cursor-pointer transition-all hover:text-3xl  "><BsInstagram /></div>

            {/* Navigation links (visible on desktop) */}
            <div className="md:flex md:flex-col md:space-y-4 md:h-auto">
                {navbar.map((item, index) => {
                    const Icon = navbarIcons[index];
                    return (
                        <div
                            key={index}
                            className="hidden md:flex items-center py-4 px-2 cursor-pointer transition-colors space-x-3 hover:bg-gray-200 hover:scale-100"
                        >
                            <Link href={item === "Home" ? "/" : item.toLocaleLowerCase()}>
                                <p className="flex items-center px-1 gap-2">
                                    <Icon size={24} color="" className="opacity-60 items-center align-middle" />
                                    <span className="w-1/6 hidden md:block text-gray-600 hover:scale-100">{item}</span>
                                </p>
                            </Link>
                        </div>
                    );
                })}
            </div>

        </div>
    );
}

export default Leftbar;
