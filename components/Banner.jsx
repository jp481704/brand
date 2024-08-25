import React from 'react'
import { home } from '../public/assets/data/data'
import Image from 'next/image'

export default function Banner() {
  return (
    <section className='container--responsive pt--60 flex flex--align-items-center flex--justify-content-between'>
        <div className="content">
         <h1 className="heading break font--bolder">{home.heading}</h1>
         <p className='break fs--20 mt--30 font--bold color--gray'>{home.disc}</p>
        </div>
                 <Image src={home.src} width={590} height={480}/>

    </section>
  )
}
