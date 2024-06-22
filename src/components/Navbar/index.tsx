import { NavLink } from 'react-router-dom'
// import images 
import home from '../../assets/navbar/home.svg'
import services from '../../assets/navbar/service.svg'
import clipboard from '../../assets/navbar/clipboard.svg'
import addres from '../../assets/navbar/addres.svg'
import group from '../../assets/navbar/group.svg'
import lawyer from '../../assets/navbar/lawyer.svg'

const Navbar = () => {
  return (
    <nav className='navbar flex justify-between items-center gap-5 max-lg:gap-2 bg-[#198277] px-5 max-sm:px-2 py-3 rounded-t-2xl max-md:w-full'>
        <NavLink to="/" className='flex flex-col justify-center items-center'>
            <img src={home} alt="" className='w-[40px] h-[40px] max-sm:w-[30px] max-sm:h-[30px] object-cover'/>
            <h1 className='text-sm text-[#FFF] max-sm:text-[12px]'>Home</h1>
        </NavLink>
        <NavLink to="/Services" className='flex flex-col justify-center items-center'>
            <img src={services} alt="" className='w-[40px] h-[40px] max-sm:w-[30px] max-sm:h-[30px] object-cover'/>
            <h1 className='text-sm text-[#FFF] max-sm:text-[12px]'>Services</h1>
        </NavLink>
        <NavLink to="/" className='flex flex-col justify-center items-center'>
            <img src={addres} alt="" className='w-[40px] h-[40px] max-sm:w-[30px] max-sm:h-[30px] object-cover'/>
            <h1 className='text-sm text-[#FFF] max-sm:text-[12px]'>Message</h1>
        </NavLink>
        <NavLink to="/Portfolio" className='flex flex-col justify-center items-center'>
            <img src={clipboard} alt="" className='w-[40px] h-[40px] max-sm:w-[30px] max-sm:h-[30px] object-cover'/>
            <h1 className='text-sm text-[#FFF] max-sm:text-[12px]'>Portfolio</h1>
        </NavLink>
        <NavLink to="/" className='flex flex-col justify-center items-center'>
            <img src={group} alt="" className='w-[45px] h-[40px] max-sm:w-[30px] max-sm:h-[30px] object-cover'/>
            <h1 className='text-sm text-[#FFF] max-sm:text-[12px]'>Team</h1>
        </NavLink>
        <NavLink to="/" className='flex flex-col justify-center items-center'>
            <img src={lawyer} alt="" className='w-[40px] h-[40px] max-sm:w-[30px] max-sm:h-[30px] object-cover'/>
            <h1 className='text-sm text-[#FFF] max-sm:text-[12px]'>Vacancy</h1>
        </NavLink>
    </nav>
  )
}

export default Navbar