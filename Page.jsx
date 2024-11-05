import React from 'react'
import img from './10.jpg'

export const Page = () => {
    return (
        <div>
            <div className='d-flex bg-success justify-content-center'  >
                <div className='pt-5 ps-5 mt-5 m-lg-5 container'>
                    <h1>Really catch headline here</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eos ipsam rem suscipit sequi, beatae est, veritatis fugit enim qui animi voluptate incidunt repellendus. Possimus perspiciatis minima velit nemo maiores.</p>
                    <div className='d-flex gap-3'>
                        <button className='btn btn-light mr-3 border-1 border-black'>Get started</button>
                        <button className='btn btn-light mr-3 border-1 border-black'>Learn more</button>
                    </div>
                </div>
                <div className='pt-5 ps-5 mt-5 m-lg-5 container'>
                    <img src={img} alt="laptop" height={200} width={250} className='rounded' />
                </div>
            </div>
            <div className='d-flex gap-3 justify-content-center mt-5'>
                <div className='d-flex flex-column w-25 justify-content-center align-items-center'>
                  <img src={img} alt="laptop" height={150} width={150} className='rounded' />
                  <h4>khxbihshh</h4>
                  <p className='mt-5 ml-5 '>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> 
                    Cupiditate minus quis iusto, sunt quisquam nulla alias accusamus magni ducimus
                  </p>
                </div>
                <div className='d-flex flex-column w-25 justify-content-center align-items-center'>
                  <img src={img} alt="laptop" height={150} width={150} className='rounded' />
                  <h3>hdigidgia</h3>
                  <p className='mt-5 ml-5 '>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> 
                    Cupiditate minus quis iusto, sunt quisquam nulla alias accusamus magni ducimus
                  </p>
                </div>
                <div className='d-flex flex-column w-25 justify-content-center align-items-center'>
                  <img src={img} alt="laptop" height={150} width={150} className='rounded' />
                  <h3>disgaihig</h3>
                  <p className='mt-5 ml-5 '>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> 
                    Cupiditate minus quis iusto, sunt quisquam nulla alias accusamus magni ducimus
                  </p>
                </div> 
                  
            </div>
        </div>
    )
}
