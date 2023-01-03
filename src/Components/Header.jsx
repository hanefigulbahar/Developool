import '../index.css'
import { Link } from 'react-scroll'
import logo from '../image/Logo.png'

export const Header = () => {
    return (
        <div className='grid grid-cols-3  justify-center items-center text-center w-full xs:w-screen text-lg h-14 sticky top-0 z-10 text-backround bg-secondaryBlue'>
            <div className='flex justify-center items-center text-2xl no-underline '>
                <img className='w-14 flex items-center justify-center text-center' src={logo} alt="" />
                <Link to='home' spy={true} smooth={true} offset={-70} duration={500}>DEVELOPOOL</Link>
            </div>
            <div className='flex flex-row gap-8 justify-center '>
                <div className='no-underline hover:underline decoration-from-font underline-offset-4 hover:-translate-y-0.5 duration-700 '>
                    <Link to='about' spy={true} smooth={true} offset={-60} duration={700} >About</Link>
                </div>
                <div className='no-underline hover:underline decoration-from-font underline-offset-4 hover:-translate-y-0.5 duration-700 '>
                    <Link to='project' spy={true} smooth={true} offset={-90} duration={700}>Project</Link>
                </div>
            </div>
            <div className='no-underline hover:underline decoration-from-font underline-offset-4 hover:-translate-y-0.5 duration-700'>
                <Link to='contact' spy={true} smooth={true} offset={50} duration={700}>Contact</Link>
            </div>
        </div>
    )
}


