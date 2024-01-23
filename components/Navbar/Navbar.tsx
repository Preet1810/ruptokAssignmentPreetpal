import { GiHamburgerMenu } from "react-icons/gi";
import { NavbarProps } from "@/lib/types";
const Navbar = (props: NavbarProps) => {
    const { setSidebarOpen, showIcon } = props;
    return (
        <div className='w-full h-full flex items-center'>
            {showIcon && (
                <div
                    onClick={() => setSidebarOpen(true)}
                >
                    <GiHamburgerMenu className="text-[2rem]" />
                </div>
            )}
        </div>
    )
}

export default Navbar