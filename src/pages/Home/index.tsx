// import Navbar 
import Navbar from '../../components/Navbar/'
// import images 
import project from '../../assets/aside/project.svg'
import home from '../../assets/home/home.svg'
import images from '../../assets/home/images.svg'

const Home = () => {
  return (
    <div className="home bg-[#1E1E20] w-[100vw] h-[100vh] relative">
        <div className="flex justify-between gap-16 pt-20 px-20 max-md:px-5 max-md:pt-5">
    {/* section Start  */}
            <section className="bg-[#242426] w-[80vw] flex items-start justify-between max-lg:flex-col-reverse gap-5 max-xl:w-[75vw] h-[70vh] rounded-2xl max-md:w-full px-16 py-12 max-md:px-4 max-md:py-4 overflow-scroll">
              <div className='home-content w-[50%] max-lg:w-full'>
                <img src={home} alt="" className='max-lg:hidden'/>
                <div className="text pr-48 max-2xl:p-0">
                  <p className='text-[#FFF] py-16 max-xl:py-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>
                  <p className='text-[#FFF] max-xl:pt-0'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>
                </div>
              </div>
              <div className="images w-[30%] max-lg:w-full max-xl:w-[50%] max-2xl:w-[45%] max-lg:h-[70vh]">
                <img src={images} alt="" className='object-cover rounded-3xl border'/>
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

export default Home