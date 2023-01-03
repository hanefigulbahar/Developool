import '../index.css'
import image2 from '../image/holidaypool.png'
import imageWeather from '../image/WeatherWeb.png'
import imageCountry from '../image/CountryWeb.png'
import imageTodo from '../image/TodoList.png'
import imageIn from '../image/Sign-in.png'
import imageUp from '../image/Sign-up.png'






export const Project = () => {
  return (
    <div id="project" className=' my-10 mx-20'>
      <div className='justify-center text-center my-10 text-xl'>
        <div className='text-center border-b border-primaryPink border-opacity-40 my-10 '>WORK IN PROGRESS</div>
        <div className='w-1/2 mx-auto pt-1 bg-white rounded-md shadow-md hover:-translate-y-1 duration-500'>
          <a href='https://github.com/hanefigulbahar/Holiday-Pool'>
            <p className='text-center my-3 text-sm '>Holiday Pool</p>
            <img className=' mx-auto rounded-md shadow-md' src={image2} alt="Holiday Pool" /></a>
        </div>
      </div>
      <div className='text-center my-10 text-xl border-b border-primaryPink border-opacity-40'>PROJECT</div>
      <div className="grid grid-cols-3 gap-y-8 justify-center items-center my-10 text-center">
      <div className='w-2/3 mx-auto bg-white rounded-md shadow-md hover:-translate-y-1.5 duration-500 '>
          <a className='no-underline hover:underline decoration-from-font underline-offset-4  ' href='https://github.com/hanefigulbahar/Holiday-Pool'>
            <p className='text-center my-3 text-sm '>WeatherWeb</p>
            <img className=' mx-auto rounded-md my-1' src={imageWeather} alt="WeatherWeb" /></a>
        </div>
        <div className='w-2/3 mx-auto bg-white rounded-md shadow-md hover:-translate-y-1.5 duration-500'>
          <a className='no-underline hover:underline decoration-from-font underline-offset-4 ' href='https://github.com/hanefigulbahar/Holiday-Pool'>
            <p className='text-center my-2 text-sm '>CountryWeb</p>
            <img className=' mx-auto rounded-md my-4 ' src={imageCountry} alt="CountryWeb" /></a>
        </div>
        <div className='w-2/3 mx-auto bg-white rounded-md shadow-md hover:-translate-y-1.5 duration-500'>
          <a className='no-underline hover:underline decoration-from-font underline-offset-4 ' href='https://github.com/hanefigulbahar/Holiday-Pool'>
            <p className='text-center my-2 text-sm '>TodoList</p>
            <img className=' mx-auto rounded-md my-7' src={imageTodo} alt="odoList" /></a>
        </div>
        <div className='w-2/3 mx-auto bg-white rounded-md shadow-md hover:-translate-y-1.5 duration-500'>
          <a className='no-underline hover:underline decoration-from-font underline-offset-4 ' href='https://github.com/hanefigulbahar/Holiday-Pool'>
            <p className='text-center my-2 text-sm '>Sign-In Component</p>
            <img className=' mx-auto my-9 rounded-md ' src={imageIn} alt="Sign-In" /></a>
        </div>
        <div className='w-2/3 mx-auto bg-white rounded-md shadow-md hover:-translate-y-1.5 duration-500'>
          <a className='no-underline hover:underline decoration-from-font underline-offset-4 ' href='https://github.com/hanefigulbahar/Holiday-Pool'>
            <p className='text-center my-2 text-sm '>Sign-Up Component</p>
            <img className=' mx-auto my-9  rounded-md ' src={imageUp} alt="Holiday Pool" /></a>
        </div>
      </div>
    </div>
  )
}
