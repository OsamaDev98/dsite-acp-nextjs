"use client";

import { ChevronDownIcon, Search } from "lucide-react";
import { useState } from "react";

export default function SearchableDropdown({
  items,
  placeholder = "Search...",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    setFilteredItems(
      items.filter((item) => item.title.toLowerCase().includes(value))
    );
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
    setSearchTerm(""); // Reset search field after selection
    setFilteredItems(items); // Reset filtered list
  };

  return (
    <div className="relative w-48 md:w-56 hidden md:flex">
      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        className="w-full bg-white border border-input rounded-md shadow-sm px-4 py-2 text-left flex items-center justify-between focus:outline-none focus:ring dark:bg-mainDark-900 dark:text-mainDark-200 hover:bg-accent"
      >
        {/* <span>{selectedItem || placeholder}</span> */}
        {selectedItem ? (
          <div className="flex flex-col w-full">
            <h3 className="font-bold text-[17px] text-[#1d1d1d] text-start line-clamp-1 text-wrap dark:text-mainDark-200">
              {items.find((domain) => domain.title === selectedItem)?.title}
            </h3>
            <p className="text-[#b2b2b2] text-[14px] line-clamp-1 text-wrap">
              {items.find((domain) => domain.title === selectedItem)?.subtitle}
            </p>
          </div>
        ) : (
          <div className="flex flex-col">
            <h3 className="font-bold text-[17px] text-[#1d1d1d] line-clamp-1 dark:text-mainDark-200 text-start">
              domain.sa
            </h3>
            <p className="text-[#b2b2b2] text-[14px] line-clamp-1">
              dsite.sa/domain.sa
            </p>
          </div>
        )}
        <ChevronDownIcon
          className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 z-10 w-full mt-2 bg-white border border-input rounded-lg shadow-lg dark:bg-mainDark-800">
          {/* Search Input */}
          <div className="relative p-2">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Type to search..."
              className="w-full pl-10 rtl:pr-10 p-2 border border-input rounded-lg focus:outline-none focus:ring dark:bg-mainDark-900"
            />
            {/* Search Icon */}
            <Search className="w-5 h-5 text-gray-500 absolute top-5 left-4" />
          </div>

          {/* Items List */}
          <ul className="max-h-56 overflow-y-auto !mx-0">
            {filteredItems.map((item, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-accent hover:text-white dark:text-mainDark-200 cursor-pointer"
                onClick={() => handleItemClick(item.title)}
              >
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-[17px] text-[#1d1d1d] line-clamp-1 dark:text-mainDark-200">
                    {item.title}
                  </h3>
                  <p className="text-[#b2b2b2] text-[14px] line-clamp-1">
                    {item.subtitle}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
