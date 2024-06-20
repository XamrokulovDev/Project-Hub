// import images 
import project from '../../assets/aside/project.svg'
import Navbar from '../../components/Navbar/'

const Home = () => {
  return (
    <div className="home bg-[#1E1E20] w-[100vw] h-[100vh] relative">
        <div className="flex justify-between gap-16 pt-20 px-20 max-lg:px-10 max-lg:pt-10">
    {/* section Start  */}
            <section className="bg-[#242426] w-[80vw] max-xl:w-[75vw] h-[70vh] rounded-2xl">
            </section>
    {/* aside Start          */}
            <aside className="w-[10vw] max-lg:w-[20vw] max-xl:w-[15vw] h-[70vh]">
                <img src={project} alt="" className=''/>
            </aside>
        </div>
        <div className="navbar absolute bottom-0 left-[50%] translate-x-[-85%]">
          <Navbar />
        </div>
    </div>
  )
}

export default Home