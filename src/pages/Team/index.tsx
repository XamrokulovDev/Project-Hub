// import Navbar 
import Navbar from '../../components/Navbar'
// import images 
import project from '../../assets/aside/project.svg'
import home from '../../assets/home/home.svg'
// import data 
import { teamData } from '../../data'

const Team = () => {
  return (
    <div className="home bg-[#1E1E20] w-[100vw] h-[100vh] relative">
        <div className="flex justify-between gap-16 pt-20 px-20 max-md:px-5 max-md:pt-5">
    {/* section Start  */}
            <section className="bg-[#242426] w-[80vw] max-xl:w-[75vw] h-[70vh] rounded-2xl max-md:w-full px-16 py-12 max-md:px-4 max-md:py-4 overflow-scroll">
              <h1 className="text-5xl text-[#4CAAAA] font-bold pb-10">Our Team</h1>
              <h1 className='text-3xl text-[#4CAAAA] font-semibold pb-8'>Front End Developers</h1>
              <div className="cards grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-1  max-xl:grid-cols-2 gap-10">
                {
                  teamData.filter ((item)=> item.category === "Front End").map((item)=>(
                    <div className="card rounded-2xl bg-[#0B716D] overflow-hidden relative">
                      <span className='absolute text-2xl top-3 right-3 bg-[#4CAAAA] text-[#FFF] px-2 font-semibold rounded-md'>{item.category}</span>
                      <div className="card_img">
                        <img src={item.img} alt="" className='object-cover'/>
                      </div>
                      <div className="card_body py-2 pb-3">
                        <h1 className='text-2xl text-[#FFF] text-center'>{item.title}</h1>
                      </div>
                    </div>
                  ))
                }
              </div>
              <h1 className='text-3xl text-[#4CAAAA] font-semibold py-10'>Back End Developers</h1>
              <div className="cards grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-1  max-xl:grid-cols-2 gap-10">
                {
                  teamData.filter ((item)=> item.category === "Back End").map((item)=>(
                    <div className="card rounded-2xl bg-[#0B716D] overflow-hidden relative">
                      <span className='absolute text-2xl top-3 right-3 bg-[#4CAAAA] text-[#FFF] px-2 font-semibold rounded-md'>{item.category}</span>
                      <div className="card_img">
                        <img src={item.img} alt="" className='object-cover'/>
                      </div>
                      <div className="card_body py-2 pb-3">
                        <h1 className='text-2xl text-[#FFF] text-center'>{item.title}</h1>
                      </div>
                    </div>
                  ))
                }
              </div>
              <h1 className='text-3xl text-[#4CAAAA] font-semibold py-10'>Full Stack Developers</h1>
              <div className="cards grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-1  max-xl:grid-cols-2 gap-10">
                {
                  teamData.filter ((item)=> item.category === "Full Stack").map((item)=>(
                    <div className="card rounded-2xl bg-[#0B716D] overflow-hidden relative">
                      <span className='absolute text-2xl top-3 right-3 bg-[#4CAAAA] text-[#FFF] px-2 font-semibold rounded-md'>{item.category}</span>
                      <div className="card_img">
                        <img src={item.img} alt="" className='object-cover'/>
                      </div>
                      <div className="card_body py-2 pb-3">
                        <h1 className='text-2xl text-[#FFF] text-center'>{item.title}</h1>
                      </div>
                    </div>
                  ))
                }
              </div>
              <div className="images hidden max-lg:block">
                <img src={home} alt="" />
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

export default Team