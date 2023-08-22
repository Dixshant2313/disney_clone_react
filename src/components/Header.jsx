import logo from "../assets/Images/logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";
import { useState } from "react";

function Header() {
  const [toggle, setToggle] = useState(false);

  const menu = [
    {
      id: 1,
      name: "HOME",
      icon: HiHome,
    },
    {
      id: 2,
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      id: 3,
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      id: 4,
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      id: 5,
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      id: 6,
      name: "SERIES",
      icon: HiTv,
    },
  ];

  return (
    <div className="flex justify-between items-center p-5">
      <div className="flex  items-center gap-8 ">
        <img
          className="w-[80px] md:w-[115px] object-cover"
          src={logo}
          alt="logo"
        />
        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <HeaderItem key={item.id} name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="flex md:hidden gap-5 ">
          {menu.map(
            (item, index) =>
              index < 3 && (
                <HeaderItem key={item.id} name={""} Icon={item.icon} />
              )
          )}
          <div className="md:hidden" onClick={()=>setToggle(!toggle)}>
            <HeaderItem name={""} Icon={HiDotsVertical} />
            {toggle ? (
              <div className="absolute mt-3 bg-[#121212] border-[1px] p-3 border-gray-700">
                {menu.map(
                  (item, index) =>
                    index >= 3 && (
                      <HeaderItem
                        key={item.id}
                        name={item.name}
                        Icon={item.icon}
                      />
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <img
        src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        alt="user avatar"
        className="w-[40px] rounded-full"
      />
    </div>
  );
}

export default Header;
