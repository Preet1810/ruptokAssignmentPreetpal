'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import ColorScheme from "@/components/ColorScheme";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [showIcon, setShowIcon] = useState<boolean>(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowIcon(false)
      } else {
        setSidebarOpen(true)
        setShowIcon(true);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    console.log(isSidebarOpen);
  }, [isSidebarOpen])
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='flex bg-[#064333] w-full h-[100vh]'>
          <div className={`min-w-[248px] z-10 min-h-full bg-[#064333] md:relative absolute transition-all duration-300 ${isSidebarOpen ? 'left-0' : 'left-[-248px]'}`}>
            <Sidebar
              setSidebarOpen={setSidebarOpen}
              showIcon={showIcon}
            />
          </div>
          <div className={`flex flex-col h-full  md:w-[calc(100%-248px)] w-full bg-[#f1f4f9] ${isSidebarOpen ? 'rounded-tl-[2.5rem]' : ''} `}>
            <div className="min-h-[60px]">
              <Navbar
                showIcon={showIcon}
                setShowIcon={setShowIcon}
                isSidebarOpen={isSidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
            </div>
            <div className="p-5  z-0">
              {children}
            </div>
          </div>
          <div className="absolute z-50 bottom-[3rem] right-[15rem] flex items-center gap-x-5">
            <ColorScheme
              colors={["#084d3b", "#1f40ac", "#1e3a8d", "#194d63", "#302f7f"]}
            />
            <div>yooo</div>
          </div>
        </main>
      </body>
    </html>
  );
}
