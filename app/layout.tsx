'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
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
        <main className='min-h-[100vh] w-[100%] flex bg-[#064333]'>
          <div className={`min-w-[248px] h-[100vh] md:relative absolute transition-all duration-300 ${isSidebarOpen ? 'left-0' : 'left-[-248px]'}`}>
            <Sidebar
              setSidebarOpen={setSidebarOpen}
              showIcon={showIcon}
            />
          </div>
          <div className="flex flex-col w-full bg-[#f1f4f9] rounded-tl-[4rem]">
            <div className="h-[50px] w-full">
              <Navbar
                showIcon={showIcon}
                setShowIcon={setShowIcon}
                isSidebarOpen={isSidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
            </div>
            <div>
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
