// import Navbar 
import Navbar from "../../components/Navbar"
// import images 
import project from '../../assets/aside/project.svg'
// import data 
import { portfolio } from "../../data"

const Portfolio = () => {
  return (
    <div className="home bg-[#1E1E20] w-[100vw] h-[100vh] relative">
        <div className="flex justify-between gap-16 pt-20 px-20 max-md:px-5 max-md:pt-5">
    {/* section Start  */}
            <section className="bg-[#242426] w-[80vw] max-xl:w-[75vw] h-[70vh] rounded-2xl max-md:w-full px-16 py-12 max-md:px-4 max-md:py-4 overflow-scroll">
              <h1 className="text-5xl text-[#4CAAAA] font-bold pb-10">Portfolio</h1>
              <div className="cards grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-1  max-xl:grid-cols-2 gap-10">
                {
                  portfolio?.map((item) => (
                    <div className="card rounded-2xl bg-[#0B716D]">
                      <div className="card_img w-full">
                        <img src={item.img} alt="" className="object-cover"/>
                      </div>
                      <div className="card_body text-[#FFF] flex items-center justify-between px-4 py-1 pb-4">
                        <h1 className="text-xl">{item.title}</h1>
                        <a href={item.link} className="py-1 px-5 border boreder-[#FFF] rounded-md">{item.discription}</a>
                      </div>
                    </div>
                  ))
                }
              </div>
            </section>
    {/* aside Start  */}
            <aside className="w-[10vw] max-lg:w-[20vw] max-xl:w-[15vw] h-[70vh] max-md:hidden">
                <img src={project} alt="" className=''/>
            </aside>
        </div>
        <div className="navbar absolute bottom-0 left-[50%] translate-x-[-75%] max-md:translate-x-0 max-md:left-0 max-md:w-full px-4">
          <Navbar />
        </div>
    </div>
  )
}

export default Portfolio