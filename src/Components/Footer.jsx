import '../index.css'
import { SiInstagram, SiLinkedin, SiMaildotru } from 'react-icons/si';
import logo from '../image/Logo.png'

const date = new Date()
export const Footer = () => {
  return (
    <div id='contact' className='flex justify-evenly py-10 mx-20 border-y border-primaryPink border-opacity-40'>
      <div className='relative flex'>
        <img src={logo} className='w-32 bg-secondaryBlue rounded-md opacity-80' alt="" />
        <div className='absolute bottom-3 left-3 text-white'>DEVELOPOOL</div>
      </div>
      <div className='w-1/3 flex items-center '>© {date.getFullYear()} Developool</div>
      <div>
        <div className='text-center border-b border-primaryPink border-opacity-40 mb-3'>CONTACT US</div>
        <div className='flex'>
          <div className='mb-1 mx-2'>
            <p className='text-md text-center'>Hanefi Gülbahar</p>
            <ul>
              <a href='https://www.instagram.com/hanifig/' className='flex justify-start items-center  opacity-70 hover:opacity-100'><SiInstagram className='text-instagramIcon my-2 mr-2' />Instagram</a>
              <a href='https://www.linkedin.com/in/hanefigulbahar/' className='flex justify-start items-center  opacity-70 hover:opacity-100'><SiLinkedin className='text-swiftUI mr-2' />Linkedin</a>
              <p className='flex justify-start items-center  opacity-70 hover:opacity-100'><SiMaildotru className='text-mailIcon my-2 mr-2' />hanefigulbahar@outlook.com</p>
            </ul>
          </div>
          <div className='mb-1 ml-10 items-center text-center'>
            <p className='text-md'>Ayşe Nur Bakırcı</p>
            <ul>
              <a href='https://www.instagram.com/aysenurbakircii/' className='flex justify-start items-center  opacity-70 hover:opacity-100'><SiInstagram className='text-instagramIcon my-2 mr-2' />Instagram</a>
              <a href='https://www.linkedin.com/in/aysenurbakircii/' className='flex justify-start items-center  opacity-70 hover:opacity-100'><SiLinkedin className='text-swiftUI mr-2' />Linkedin</a>
              <p className='flex justify-start items-center  opacity-70 hover:opacity-100'><SiMaildotru className='text-mailIcon my-2 mr-2' />bakirciaysenur@gmail.com</p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
