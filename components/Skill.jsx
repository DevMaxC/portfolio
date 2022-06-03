import React, { Component } from 'react';
import Image from 'next/image'

function Skill(props) {
    return(
        <div className='flex space-x-5 md:space-x-10 items-center shadow-2xl bg-slate-500 rounded-xl'>
            <div className='h-24 w-24 rounded-l-xl bg-white shrink-0 p-2'>
                
                <Image alt={props.title + " logo"} height={200} width={200} src={props.src}></Image>
            </div>
            <div className='flex flex-col md:flex-row md:gap-10'>
                <h2 className='sm:text-2xl'>{props.title}</h2>
                <h2 className='sm:text-2xl'>{props.caption}</h2>
            </div>
            
        </div>
    )
}

export default Skill;