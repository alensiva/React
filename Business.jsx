import React from 'react'
import img from './girl.webp'
import { Link } from 'react-router-dom'
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
export const Business = () => {
    return (
        <div>
            <div className=' bg-blue-700  h-[700px] ps-10'>
                <div>
                    <ul className='flex flex-row gap-10 ml-64 text-2xl  text-cyan-50 pt-2'>
                    <li className='flex flex-'><a href="Home">Business</a></li>

                        <li><Link to="/Home"><a href="Home">Home</a></Link>
                            </li>
                        <li><a href="Services">Services</a></li>
                        <li><a href="Portfolio">Portfolio</a></li>
                        <li><a href="Pricing">Pricing</a></li>
                        <li><a href="Team">Team</a></li>
                        <li><a href="Contact">Contact</a></li>

                    </ul>
                </div>
                <div className='flex flex-column gap-10'>
                    <div className="mt-40  text-cyan-50 flex flex-wrap w-[700px] gap-8 " >
                        <h1 className='text-5xl'>Corporate & Business Site <br /> Template By Ayro UI</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo neque, dolorem eos architecto nobis earum obcaecati hic
                            expedita beatae facilis harum fugiat voluptatum, esse qui pariatur a, porro illo officia.</p>
                        <div className='flex gap-10 '>
                            <button type="button" class="btn rounded bg-slate-200 text-blue-700 ps-5 pr-5 ">Get started</button>
                            <button type="button" class="btn rounded  bg-slate-200 text-blue-700 ps-5 pr-5">Watch intro</button>
                        </div>
                    </div>
                    <div className=' mt-24'>
                        <img src={img} alt="img" height={500} width={600} />

                    </div>

                </div>
            </div>
            <div className='flex flex-wrap bg-white h-[700px] mt-[75px]'>
                <div>
                    <img src={img} alt='' height={500} width={600} />
                </div>
                <div className='flex flex-col w-[600px] '>
                    <h2 className='text-3xl'>our story</h2>
                    <h1 className='text-5xl'>Our team comes with the experience and knowledge</h1>
                    <div className='flex  flex-wrap gap-10  h-20 w-[100] bg-slate-400 mt-24'>
        
                        <button type="button" class="btn rounded  bg-slate-200 text-blue-700 ">Watch intro</button>
                        <button type="button" class="btn rounded  bg-slate-200 text-blue-700">Watch intro</button>
                        <button type="button" class="btn rounded  bg-slate-200 text-blue-700">Watch intro</button>
                        
                    </div>
                     
                </div>
                
            </div>
        </div>
    )
}
