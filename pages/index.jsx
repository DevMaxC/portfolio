import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Skill from '/components/Skill'

const Home = () => {
  return(
    <div>
      <Head>
        <title>Max Church</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Max Church - Full Stack Develloper" />
      </Head>

      <div className='min-w-screen min-h-screen bg-slate-600'>
        <nav className='z-20 py-5 flex justify-evenly sticky top-0 bg-slate-700 opacity-100 text-white md:text-2xl font-thin'>
          <Link href="/"><a className='hover:text-slate-400'>Home</a></Link>
          <Link href="/"><a className='hover:text-slate-400'>About</a></Link>
          <Link href="/"><a className='hover:text-slate-400'>Elements</a></Link>
          <Link href="/"><a className='hover:text-slate-400'>Other</a></Link>

        </nav>

        <main className='grid grid-cols-1 lg:grid-cols-2 gap-6 py-6'>

          <div className='px-6 text-white space-y-6'>
            <h1 className='text-4xl  text-center'>Max Church</h1>
            <h2 className='md:text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>
            <div className='aspect-video bg-black m-5'>
              <iframe className='w-full h-full bg-black' src="https://www.youtube.com/embed/kLBtY_rneF0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>

          <div className='px-6 text-white space-y-5 flex flex-col'>
            <h1 className='text-4xl text-center'>Skills</h1>
            
            <Skill src="/skillIcons/react.png" title="React" caption="Started learning in Early 2022"/>
            <Skill src="/skillIcons/next.png" title="Next" caption="Started learning in Early 2022"/>
            <Skill src="/skillIcons/tailwind.png" title="Tailwind CSS" caption="Started learning in Early 2022"/>
            <Skill src="/skillIcons/python.png" title="Python" caption="Used educationally and privately since 2017"/>
            <Skill src="/skillIcons/java.png" title="Java" caption="Used in university, recieved a 1st class in Java module"/>
            <Skill src="/skillIcons/ruby.png" title="Ruby" caption="Used in university for web devellopment module"/>
            
          </div>


          
        </main>


      </div>
    </div>
    
  )
}

export default Home
