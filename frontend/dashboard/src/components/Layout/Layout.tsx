import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigationItems = [
    {
      label: "Dashboard",
      icon: "/image-1.png",
      path: "/dashboard",
    },
    {
      label: "Work Order",
      icon: "/image-2.png",
      path: "/work-order",
    },
    {
      label: "Insights",
      icon: "/image-3.png",
      path: "/insights",
    },
    {
      label: "Settings",
      icon: "/image-4.png",
      path: "/settings",
    },
  ];

  return (
    <div className="bg-white overflow-hidden w-full min-h-screen flex">
      {/* Left Sidebar */}
      <aside className="w-[314px] h-screen bg-neutral-50 border border-solid border-[#b6bdc6] flex flex-col">
        {/* Profile Section */}
        <div className="p-5 pt-[27px]">
          <div className="w-[75px] h-[75px] rounded-[37.5px] bg-[linear-gradient(180deg,rgba(15,176,166,1)_0%,rgba(14,168,206,1)_100%)]" />
          <div className="mt-5 [font-family:'Inter',Helvetica] font-normal text-[#000000b2] text-xl tracking-[0] leading-[normal]">
            Overview
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="px-2.5 mt-[22px]">
          <div className="w-[294px] space-y-[9px]">
            {navigationItems.map((item, index) => (
              <button
                key={index}
                onClick={() => navigate(item.path)}
                className={`w-full h-12 rounded-[15px] flex items-center px-[13px] transition-colors hover:bg-slate-200 ${
                  location.pathname === item.path ? "bg-slate-100" : ""
                }`}
              >
                <img
                  className="w-8 h-8 object-cover"
                  alt={item.label}
                  src={item.icon}
                />
                <span className="ml-[11px] [font-family:'Inter',Helvetica] font-bold text-black text-2xl tracking-[0] leading-[normal]">
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="h-[115px] bg-white border-2 border-solid border-[#b6bdc6] flex items-center justify-between px-5">
          {/* Search Section */}
          <div className="flex items-center gap-[34px] ml-[50px]">
            <div className="w-[581px] h-[58px] bg-white rounded-[15px] border-2 border-solid border-[#b6bcc5] relative">
              <Input 
                className="w-full h-full border-0 rounded-[15px] bg-transparent px-4 text-lg" 
                placeholder="Search..."
              />
            </div>
            <Button className="w-[131px] h-[58px] bg-[#10b77f] hover:bg-[#0ea06e] rounded-[15px] border-2 border-solid border-[#b6bcc5] text-white text-xl [font-family:'Inter',Helvetica] font-normal">
              Search
            </Button>
          </div>

          {/* User Profile */}
          <button 
            onClick={() => navigate('/login')}
            className="w-[187px] h-[58px] bg-white rounded-[15px] border-2 border-solid border-[#b6bcc5] flex items-center px-[13px] hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <div className="w-[35px] h-[35px] rounded-[17.5px] bg-[linear-gradient(180deg,rgba(15,176,166,1)_0%,rgba(14,168,206,1)_100%)]" />
            <div className="ml-[11px]">
              <div className="[font-family:'Inter',Helvetica] font-bold text-black text-xl tracking-[0] leading-[normal]">
                User
              </div>
              <div className="[font-family:'Inter',Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[normal]">
                Admin
              </div>
            </div>
          </button>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-auto">
          {children}
        </div>
      </main>
    </div>
  );
};