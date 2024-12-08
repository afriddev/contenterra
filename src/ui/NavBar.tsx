
import { FaGithub } from "react-icons/fa6";
function NavBar() {
  return (
    <div className="w-full justify-center ">
      <div className="w-full flex justify-between  px-3 items-center lg:px-20 font-semibold text-3xl  ">
        <label className="border-b-2 border-black h-fit lg:hover:scale-110 cursor-pointer">Contenterra</label>
        <div className="flex items-center gap-3 border rounded-md px-4 border-black cursor-pointer lg:hover:scale-110  py-1" onClick={()=>{window.open("https://github.com/afriddev")}}><FaGithub/> <span className="text-xs">github</span></div>
      </div>
    </div>
  );
}

export default NavBar;
