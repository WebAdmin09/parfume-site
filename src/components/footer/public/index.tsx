import './footer.css'
import facebook from '../../../assets/facebook.svg'
import ok from '../../../assets/ok.svg'
import insta from '../../../assets/instagram.svg'
import logojon from '../../../assets/logojon.png'
import Image from 'next/image'
import { Fragment } from 'react'
const PublicFooter = () => {
  return (
    <Fragment>
      <div className='footer'>
        <div className='footer-item'>
          <div className="footer__img-apps">
            <div className='img__div'>
              <Image className='img__footer' src={facebook} alt="facebook" />
            </div>
            <div className='img__div'>
              <Image className='img__footer' src={ok} alt="ok" />
            </div>
            <div className='img__div'>
              <Image className='img__footer' src={insta} alt="insta" />
            </div>
          </div>
          <div className="footer__texts">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Excepturi doloribus quo inventore!</p>
          </div>
        </div>
        <div className='footer__texts'>
          <h4>Tel: +9981621321</h4>
          <h4>Email: logo@gmail.com</h4>
        </div>
        <Image className='logo__footer' src={logojon} alt="logojon" />
      </div>
    </Fragment>
  )
}

export default PublicFooter