import React from 'react';
import Link from 'next/link';
import { GrHomeRounded } from 'react-icons/gr';
import { MdOutlineVideoLibrary } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { AiOutlineHeart } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';

const navbar = [
    "Home",
    "Reels",
    "Messages",
    "Notifications",
    "Profile",
];

const navbarIcons = [
    GrHomeRounded,
    MdOutlineVideoLibrary,
    RiMessengerLine,
    AiOutlineHeart,
    CgProfile,
];

function BottomBar() {
    return (
        <div className="flex fixed bottom-0 w-full bg-white border-t border-gray-300">
            {navbar.map((item, index) => {
                const Icon = navbarIcons[index];
                return (
                    <Link key={index} href={item === "Home" ? "/" : item.toLocaleLowerCase()}>
                        <p className="flex-1 flex flex-grow-0 flex-shrink  justify-center items-center py-2 px-6">
                            <Icon size={24} color="" className="icon" />
                        </p>
                    </Link>
                );
            })}
        </div>
    );
}

export default BottomBar;
