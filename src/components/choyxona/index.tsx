// import data 
import { text } from "../../data"
// import icons 
import { GrCheckmark } from "react-icons/gr";
import Swiper from "../Swiper";

const Choyxona = () => {
  return (
    <div className="py-5 px-3">
      <div className="grid grid-cols-4 gap-12 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-1 max-xl:grid-cols-2 max-2xl:grid-cols-3">
        {
          text?.map((item)=>(
            <div className="bg-[#1E1E20] p-5 border border-[#303B4D] rounded-2xl">
              <h1 className="text-xl text-[#4CAAAA] font-bold">{item.tarif}</h1>
              <p className="text-sm text-[#4CAAAA] py-1 leading-4">{item.title1}</p>
              <li className="bg-[#4CAAAA] h-[1px] w-full my-1 mb-2 list-none"></li>
              <h1 className="text-xl font-bold text-[#FFF] pt-1">{item.price}</h1>
              <h3 className="text-[#FFF] py-2">{item.reja}</h3>
              <span className="flex items-center gap-1 py-2 border-b border-[#303B4D]">
                <GrCheckmark className="text-[#4CAAAA]"/>
                <p className="text-[#FFF]">{item.text1}</p>
              </span>
              <span className="flex items-center gap-1 py-2 border-b border-[#303B4D]">
                <GrCheckmark className="text-[#4CAAAA]"/>
                <p className="text-[#FFF]">{item.text2}</p>
              </span>
              <span className="flex items-center gap-1 py-2 border-b border-[#303B4D]">
                <GrCheckmark className="text-[#4CAAAA]"/>
                <p className="text-[#FFF]">{item.text3}</p>
              </span>
              <span className="flex items-center gap-1 py-2 border-b border-[#303B4D]">
                <GrCheckmark className="text-[#4CAAAA]"/>
                <p className="text-[#FFF]">{item.text4}</p>
              </span>
              <span className="flex items-center gap-1 py-2">
                <GrCheckmark className="text-[#4CAAAA]"/>
                <p className="text-[#FFF]">{item.text5}</p>
              </span>
            </div>
          ))
        }
      </div>
      <Swiper />
    </div>
  )
}

export default Choyxona