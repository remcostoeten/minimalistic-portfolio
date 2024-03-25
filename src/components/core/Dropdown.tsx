"use client"

import React, { useState } from "react"
import Link from "next/link"

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState("")

  const dropdownItems = [
    {
      url: "/blackjack",
      text: "Blackjack",
      submenus: ["Use Client", "Submenu 2", "Submenu 3"],
    },
    { url: "transactions", text: "Transactions" },
    { url: "ssr", text: "sSR" },
  ]

  const handleButtonClick = () => {
    setIsOpen(!isOpen)
    setSelectedItem("")
  }

  const handleItemClick = (id: string) => {
    setSelectedItem(id)
    setIsOpen(false)
  }

  return (
    <div className="flex items-center ">
      <p
        onClick={handleButtonClick}
        className="text-[#a3a3a3] w-max text-[18px] font-weight-500   inline mr-24"
      >
        Miscellaneous {isOpen ? "▲" : "▼"}
      </p>

      <div
        className={`z-[9999999999] dropdown absolute text-[#a3a3a3] text-sm bg-[#e5e5e5] shadow top-[50px] pt-4 pb-4 rounded-2xl block cursor-pointer w-48 transform ${
          isOpen ? "scale-100 opacity-100 " : " scale-0 opacity-0"
        } transition-all ease duration-300`}
      >
        {dropdownItems.map((item) => (
          <div key={item.url}>
            <Link
              href={item.url}
              id={item.url}
              className={`relative block text-gray-600 text-sm py-3 pl-6 transition-colors ease duration-200 ${
                selectedItem === item.url ? "clicked" : ""
              }`}
              onClick={() => handleItemClick(item.url)}
            >
              {item.text}
              <span
                className={`absolute top-[50px] left-0 bottom-0 bg-purple-900 transition-width ease duration-400 ${
                  selectedItem === item.url ? "clicked" : ""
                }`}
              ></span>
            </Link>

            {isOpen && selectedItem === item.url && item.submenus && (
              <div className="ml-4">
                {item.submenus.map((submenu, index) => (
                  <Link
                    key={index}
                    href={`#${submenu.toLowerCase().replace(" ", "-")}`}
                    className={`relative block text-gray-600 text-sm py-2 transition-colors ease duration-200`}
                  >
                    {submenu}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dropdown
