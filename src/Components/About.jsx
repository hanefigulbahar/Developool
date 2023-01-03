import '../index.css'
import { FaSwift, FaReact } from 'react-icons/fa';
import { DiDotnet, DiJavascript1 } from 'react-icons/di';



export const About = () => {
    return (
        <div id='about' className='justify-center h-screen bg-secondaryPink bg-opacity-60 text-lg text-primaryBlue '>
            <div className='flex justify-center items-center text-center font-body my-auto mx-auto text-4xl h-1/6'>Who Are We?</div>
            <div className='flex justify-center items-center text-center font-body mx-20 text-md'>
                <p>We are a couple who continue to improve ourselves in software and love this field very much. One of us is progressing in the field of Web and the other in the field of Mobile. Our goal is to develop quality and user-friendly applications. For now, although we only advance in the front-end field, we want to improve ourselves and advance all our work ourselves.</p>
            </div>

            <div className='grid grid-cols-5 gap-6 mt-10 mx-10 h-98 items-start justify-center text-center'>
                <div className='flex flex-col items-center text-center bg-backround bg-opacity-60 border border-primaryPink border-opacity-20 rounded shadow-md h-96 px-5'>
                    <div className='mt-3'>
                        <FaSwift className='text-6xl text-swiftIcon' />
                    </div>
                    <div className='mt-3 opacity-60'>Swift</div>
                    <div className='border border-primaryPink w-full opacity-10 mx-10' />
                    <p className='text-sm opacity-60 my-2'>A well-maintained and user-friendly programming language by Apple for iOS, Apple TV, and Apple Watch apps.</p>
                </div>
                <div className='flex flex-col items-center text-center bg-backround bg-opacity-60 border border-primaryPink border-opacity-20 rounded shadow-md h-96 px-5'>
                    <div className='mt-3'>
                        <FaSwift className='text-6xl text-swiftUI' />
                    </div>
                    <div className='mt-3 opacity-60'>SwiftUI</div>
                    <div className='border border-primaryPink w-full opacity-10 mx-10' />
                    <p className='text-sm opacity-60 my-2'>SwiftUI is a framework made available to developers by Apple in 2019 and offers the opportunity to develop all of its products such as iPhone, iPad, Mac with a single design.</p>
                </div>
                <div className='flex flex-col items-center text-center bg-backround bg-opacity-60 border border-primaryPink border-opacity-20 rounded shadow-md h-96 px-5'>
                    <div className='mt-3'>
                        <DiJavascript1 className='text-6xl text-jsIcon' />
                    </div>
                    <div className='mt-3 opacity-60'>JavaScript</div>
                    <div className='border border-primaryPink w-full opacity-10 mx-10' />
                    <p className='text-sm opacity-60 my-2'>JavaScript is a programming language that, along with HTML and CSS, is one of the core technologies of the World Wide Web. More than 97% of websites use client-side JavaScript for web page gestures, and the code used often includes third-party libraries.</p>
                </div>
                <div className='flex flex-col items-center text-center bg-backround bg-opacity-60 border border-primaryPink border-opacity-20 rounded shadow-md h-96 px-5'>
                    <div className='mt-3'>
                        <FaReact className='text-6xl text-reactIcon' />
                    </div>
                    <div className='mt-3 opacity-60'>React</div>
                    <div className='border border-primaryPink w-full opacity-10 mx-10' />
                    <p className='text-sm opacity-60 my-2'>React is a JavaScript library used to create fast and interactive user interfaces for web applications. As an open source, component-based and front-end library, React is only responsible for the view layer of the application.</p>
                </div>
                <div className='flex flex-col items-center text-center bg-backround bg-opacity-60 border border-primaryPink border-opacity-20 rounded shadow-md h-96 px-5'>
                    <div className='mt-3'>
                        <DiDotnet className='text-6xl text-dotNetIcon' />
                    </div>
                    <div className='mt-3 opacity-60'>.Net</div>
                    <div className='border border-primaryPink w-full opacity-10 mx-10' />
                    <p className='text-sm opacity-60 my-2'>.NET Framework is an "application" development platform developed by Microsoft, built on open Internet protocols and standards.</p>
                </div>
            </div>
        </div>

    )
}
