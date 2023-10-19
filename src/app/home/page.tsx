import './homestyle.css'
import Image from 'next/image'
import backimg from '../../assets/parfume__backimg.jpg'


const HomePage = () => {
  return (
    <div className='wrapper'>
      <div className="container">
        <div className="backimg__home">
          <div className="home__texts">
            <h6 className='home__h6'>Lorem ipsum dolor sit amet consectetur.</h6>
            <h1 className='home__title'><span className='title__span0'>Lore</span>m ips<span className='title__span'>um do</span><span className='title__span2'>lor sit.</span> </h1>
            <button className='home__btn'>Show All</button>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
