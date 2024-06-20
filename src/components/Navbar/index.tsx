// import images 
import home from '../../assets/navbar/home.svg'
import services from '../../assets/navbar/service.svg'
import clipboard from '../../assets/navbar/clipboard.svg'
import addres from '../../assets/navbar/addres.svg'
import group from '../../assets/navbar/group.svg'
import lawyer from '../../assets/navbar/lawyer.svg'

const Navbar = () => {
  return (
    <nav className='navbar flex justify-between items-center gap-5 bg-[#198277] px-5 py-3 rounded-t-2xl'>
        <div className='flex flex-col justify-center'>
            <img src={home} alt="" className='w-[40px] h-[40px] object-cover'/>
            <h1 className='text-sm text-[#FFF]'>Home</h1>
        </div>
        <div>
            <img src={services} alt="" className='w-[40px] h-[40px] object-cover'/>
            <h1 className='text-sm text-[#FFF]'>Services</h1>
        </div>
        <div>
            <img src={addres} alt="" className='w-[40px] h-[40px] object-cover'/>
            <h1 className='text-sm text-[#FFF]'>Message</h1>
        </div>
        <div>
            <img src={clipboard} alt="" className='w-[40px] h-[40px] object-cover'/>
            <h1 className='text-sm text-[#FFF]'>Portfolio</h1>
        </div>
        <div>
            <img src={group} alt="" className='w-[40px] h-[40px] object-cover'/>
            <h1 className='text-sm text-[#FFF]'>Team</h1>
        </div>
        <div>
            <img src={lawyer} alt="" className='w-[40px] h-[40px] object-cover'/>
            <h1 className='text-sm text-[#FFF]'>Vacancy</h1>
        </div>
    </nav>
  )
}

export default Navbar