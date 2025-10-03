"use client";
import { useState } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import Sidebar from "./Sidebar";

export default function Navbar({
  onLanguageToggle = () => {},
  onLatestIssue = () => {},
  onEditionChange = () => {},
  onSearch = (q) => {},
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // const [edition, setEdition] = useState("");
  const [query, setQuery] = useState("");

  const toggleSidebar = () => {
    setIsSidebarOpen((o) => !o);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleEdition = (e) => {
    setEdition(e.target.value);
    onEditionChange(e.target.value);
  };

  return (
    <>
      <header className="w-full py-4 border-b border-gray-400 bg-white ">
        <div className="max-w-7xl mx-auto px-4">
          {/* Desktop */}
          <div className="hidden lg:flex w-full items-center">
            {/* Left: menu + search */}
            <div className="flex items-center gap-6 flex-1 ">
              <button
                aria-label="فتح القائمة"
                className="text-black text-xl "
                onClick={toggleSidebar}
              >
                <FaBars />
              </button>
                <button
                onClick={onLanguageToggle}
                className="  text-black font-bold px-4 py-2 rounded "
              >
                En
              </button>

              <form
                onSubmit={handleSearchSubmit}
                className="flex items-center"
                aria-label="بحث"
              >
                <div className="flex items-center bg-gray-100 rounded overflow-hidden">
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    type="text"
                    required
                    placeholder="البحث في الأخبار"
                    onInvalid={(e) =>
                      e.currentTarget.setCustomValidity("يرجى كتابة محتوى البحث")
                    }
                    onInput={(e) => e.currentTarget.setCustomValidity("")}
                    className="px-4 py-2 bg-transparent text-black placeholder-gray-500 outline-none"
                  />
                  <button
                    type="submit"
                    className="px-3 flex items-center justify-center"
                    aria-label="ابحث"
                  >
                    <FaSearch className="text-black " />
                  </button>
                  
                </div>
              </form>
            </div>

            {/* Center: logo */}
            <div className="flex justify-center flex-1">
              <div>
                <img
                  src="/images/logo.svg"
                  alt="الخندق"
                  className="h-16 object-contain"
                />
              </div>
            </div>

            {/* Right: actions */}
            <div className="flex items-center gap-4 flex-1 justify-end">
            
            <div className="flex gap-2">
  <button
    onClick={onLatestIssue}
    className="bg-gray-300 text-black font-bold px-12 py-2 rounded whitespace-nowrap"
  >
    العدد الأخير
  </button>

  <button
    onClick={onLatestIssue}
    className="bg-gray-300 text-black font-bold px-12 py-2 rounded whitespace-nowrap"
  >
    تحميل العدد
  </button>
</div>

              <select
                // value={edition}
                // onChange={handleEdition}
                className="px-3 py-2 rounded border border-black bg-white text-sm text-black border "
                aria-label="العدد - التاريخ"
              >
                <option disabled value="">
                  العدد - التاريخ
                </option>
                <option value="13">العدد 13 - 10/09/2023</option>
                <option value="12">العدد 12 - 30/09/2021</option>
              </select>
            </div>
          </div>

          {/* Mobile */}
          <div className="flex flex-col lg:hidden">
            <div className="flex items-center justify-between">
              <button
                aria-label="فتح القائمة"
                className="text-black text-xl"
                onClick={toggleSidebar}
              >
                <FaBars />
              </button>

                {/* <button
                onClick={onLanguageToggle}
                className=" bg-gray-300 text-black font-bold px-4 py-2 rounded "
              >
                En
              </button> */}
              <div className="flex-1 flex justify-center">
                <div>
                  <img
                    src="/images/logo.svg"
                    alt="الخندق"
                    className="h-16 object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Buttons row */}
            <div className="mt-3 flex flex-col items-start gap-2 px-2">
              <div className="w-full flex flex-wrap gap-2">
                <button className="bg-gray-300 text-black font-bold px-4 py-2 rounded flex-1 text-center cursor-pointer" onClick={onLanguageToggle}>
                  En
                </button>
                <button className="bg-gray-300 text-black font-bold px-4 py-2 rounded flex-1 text-center cursor-pointer" onClick={onLatestIssue}>
                  العدد الأخير
                </button>

                <button className="bg-gray-300 text-black font-bold px-4 py-2 rounded flex-1 text-center cursor-pointer" onClick={onLatestIssue}>
                  تحميل العدد 
                </button>
                <select
                  // value={edition}
                  // onChange={handleEdition}
                  className="px-3 py-2 rounded border border-black bg-white text-sm text-black border cursor-pointer"
                  aria-label="العدد - التاريخ"
                >
                  {/* nabih */}
                  <option disabled value="">
                    العدد - التاريخ
                  </option>
                  <option value="13">العدد 13 - 10/09/2023</option>
                  <option value="12">العدد 12 - 30/09/2021</option>
                </select>
              </div>
            </div>

            {/* Mobile search */}
            <div className="mt-3 flex justify-center px-2">
              <form
                onSubmit={handleSearchSubmit}
                className="w-full"
                aria-label="بحث"
              >
                <div className="flex items-center gap-2 bg-gray-100 rounded overflow-hidden w-full">
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    name="q"
                    type="text"
                    required
                    placeholder="البحث في الأخبار"
                    onInvalid={(e) =>
                      e.currentTarget.setCustomValidity("يرجى كتابة محتوى البحث")
                    }
                    onInput={(e) => e.currentTarget.setCustomValidity("")}
                    className="flex-1 px-4 py-2 bg-transparent text-black placeholder-gray-500 outline-none"
                  />
                  <button
                    type="submit"
                    className="px-4 flex items-center justify-center"
                    aria-label="ابحث"
                  >
                    <FaSearch className="text-black" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>

      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
    </>
  );
}
