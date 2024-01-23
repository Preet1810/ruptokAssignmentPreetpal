import { RxCross2 } from "react-icons/rx";
import { SidebarProps } from "@/lib/types";
import { ImStack } from "react-icons/im";
import { FiUsers } from "react-icons/fi";
import { LuBox } from "react-icons/lu";
import { LuShoppingBag } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegFileAlt } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { useState } from "react";

const Sidebar = (props: SidebarProps) => {
    const { showIcon, setSidebarOpen } = props;
    return (
        <div className="h-[100%] bg-[#064333] w-full flex flex-col items-center p-5 gap-y-5">
            {/* {showIcon && (
                <div
                    onClick={() => setSidebarOpen(false)}
                    className="ml-auto">
                    <RxCross2 className="text-[2rem]" />
                </div>
            )} */}
            <div className="flex items-center gap-x-3 h-[3rem]">
                <ImStack className="text-white" />
                <p className="text-md font-[400] text-white">Fund Flow 360</p>
            </div>
            <div className="h-[1px] bg-white w-full opacity-15">
            </div>
            <div className="flex items-center gap-x-3 h-[50px] w-full p-3 hover:bg-[#215c4a] rounded-lg cursor-pointer">
                <AiOutlineHome className="text-white text-[1.5rem]" />
                <p className="text-md font-[400] text-white">Dashboard</p>
            </div>
            <div className="flex items-center gap-x-3 h-[50px] w-full p-3 bg-[#215c4a] rounded-lg cursor-pointer">
                <FiUsers className="text-white text-[1.5rem]" />
                <p className="text-md font-[400] text-white">Customers</p>
            </div>
            <div className="flex items-center gap-x-3 h-[50px] w-full p-3 hover:bg-[#215c4a] rounded-lg cursor-pointer">
                <LuBox className="text-white text-[1.5rem]" />
                <p className="text-md font-[400] text-white">Vendors</p>
            </div>
            <div className="flex items-center gap-x-3 h-[50px] w-full p-3 hover:bg-[#215c4a] rounded-lg cursor-pointer">
                <LuShoppingBag className="text-white text-[1.5rem]" />
                <p className="text-md font-[400] text-white">Goods/Services</p>
            </div>
            <div className="flex items-center  h-[50px] w-full p-3 hover:bg-[#215c4a] rounded-lg cursor-pointer">
                <div className="flex items-center gap-x-3">
                    <IoSettingsOutline className="text-white text-[1.5rem]" />
                    <p className="text-md font-[400] text-white">Settings</p>
                </div>
                <div className="ml-auto">
                    <MdKeyboardArrowDown className="text-white text-[1.3rem]" />
                </div>
            </div>
            <div className="flex items-center  h-[50px] w-full p-3 hover:bg-[#215c4a] rounded-lg cursor-pointer">
                <div className="flex items-center gap-x-3">
                    <FaRegFileAlt className="text-white text-[1.5rem]" />
                    <p className="text-md font-[400] text-white">Reports</p>
                </div>
                <div className="ml-auto">
                    <MdKeyboardArrowDown className="text-white text-[1.3rem]" />
                </div>
            </div>
            <div className="h-[1px] bg-white w-full opacity-15">
            </div>
        </div>
    )
}

export default Sidebar