import { GiHamburgerMenu } from "react-icons/gi";
import { NavbarProps } from "@/lib/types";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import profile from '../../public/profile.jpg'
import Image from "next/image";
const Navbar = (props: NavbarProps) => {
    const { setSidebarOpen, showIcon } = props;
    return (
        <div className='h-full flex items-center justify-between sm:px-8 px-3 border-b-2'>

            <div className="flex items-center gap-x-6">
                {showIcon && (
                    <div
                        onClick={() => setSidebarOpen(true)}
                    >
                        <GiHamburgerMenu className="text-[1.5rem]" />
                    </div>
                )}
                <div className="flex items-center">
                    <p className="text-[12px] font-[600] text-[#215c4a]">Application</p>
                    <MdOutlineKeyboardArrowRight />
                    <p className="text-[12px] font-[500]">Dashboard</p>
                </div>
            </div>
            <div className="flex items-center gap-x-5">
                <div className="sm:flex hidden items-center w-[220px] h-[38px] rounded-2xl bg-slate-200 border-2 border-grey px-3">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-transparent focus:outline-none w-full"
                    />
                    <IoSearchOutline className="text-2xl text-slate-500" />
                </div>
                <div className="relative">
                    <div className="w-[0.7rem] h-[0.7rem] absolute right-[2px] top-[1px] bg-red-600 rounded-full">
                    </div>
                    <IoMdNotificationsOutline className="text-2xl text-slate-500 " />
                </div>
                <div className="h-[30px] w-[30px] rounded-full">
                    <Image className="w-full h-full rounded-full" height={20} width={20} src={profile} alt=""></Image>
                </div>
            </div>
        </div>
    )
}

export default Navbar