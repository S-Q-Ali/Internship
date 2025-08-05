import { FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FiTruck } from "react-icons/fi";



export default function NavBar() {
  return (
    <nav className="bg-white relative z-50 shadow-md px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold">SAPPHIRE</div>
      <div className="w-full max-w-sm min-w-[200px]">
        <div className="relative">
          <input
            className="w-full bg-transparent placeholder:text-black text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="FIND YOUR FAVOURITES"
          />
          <button
            className="absolute top-1 right-1 flex items-center py-1 px-2.5 text-center hover:text-2xl duration-300 cursor-pointer text-sm text-black transition-all shadow-sm hover:shadow focus:shadow-none active:shadow-none  disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-6 mr-2  "
            >
              <path
                fill-rule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <ul className="hidden md:flex gap-6 text-gray-600 font-medium">
        <li className="hover:text-gray-400 cursor-pointer">MAN</li>
        <li className="hover:text-gray-400 cursor-pointer">WOMEN</li>
        <li className="hover:text-gray-400 cursor-pointer">UNSTICHED</li>
        <li className="hover:text-gray-400 cursor-pointer">ACCESSORIES</li>
        <li className="hover:text-gray-400 cursor-pointer">KIDS</li>
      </ul>

      <div className="flex items-center gap-4 bg-transparent">
        <FiTruck  className=" text-xl hover:text-2xl rotate-y-180 cursor-pointer transition-all duration-300" />
        <FaRegUser className="text-xl hover:text-2xl cursor-pointer transition-all duration-300" />
        <MdOutlineShoppingBag className="text-2xl hover:text-3xl cursor-pointer transition-all duration-300" />
      </div>
    </nav>
  );
}
