'use client'
import NavLink from '@/components/shares/NavLink'
import { Fragment } from 'react'
import './homestyle.css'



const HomePage = () => {
  return (
    <Fragment>
      <div className='wrapper'>
        <div className="container">
          <div className="backimg__home">
            <div className="home__texts">
              <h6 className='home__h6'>Lorem ipsum dolor sit amet consectetur.</h6>
              <h1 className='home__title'><span className='title__span0'>Lore</span>m ips<span className='title__span'>um do</span><span className='title__span2'>lor sit.</span> </h1>
              <div className='home__btn'>
                <NavLink href='/parfumes'>Show All</NavLink>
              </div>
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default HomePage
