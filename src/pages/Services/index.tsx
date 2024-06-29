// import Navbar 
import Navbar from '../../components/Navbar'
// import images 
import project from '../../assets/aside/project.svg'
// import Choyxona page 
import Choyxona from '../../components/choyxona'

const Services = () => {
  return (
    <div className="home bg-[#1E1E20] w-[100vw] h-[100vh] relative">
        <div className="flex justify-between gap-16 pt-20 px-20 max-md:px-5 max-md:pt-5">
    {/* section Start  */}
            <section className="bg-[#242426] w-[80vw] max-xl:w-[75vw] h-[70vh] rounded-2xl max-md:w-full px-16 py-12 max-md:px-4 max-md:py-4 overflow-scroll">
              <h1 className='text-4xl text-[#4CAAAA] font-bold'>Narxlar va tariflar:</h1>
              <div className="top_bar flex items-center justify-center py-5">
                <ul className='flex items-center gap-[10vw] font-semibold'>
                  <li className='focus-within:border-b-2 text-[#FFF] cursor-pointer'>Choyxona</li>
                  <li className='focus-within:border-b-2 text-[#FFF] cursor-pointer'>Apteka</li>
                  <li className='focus-within:border-b-2 text-[#FFF] cursor-pointer'>Restarant</li>
                </ul>
              </div>
              <Choyxona />
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

export default Services