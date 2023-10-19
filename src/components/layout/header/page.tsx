import logojon from '../../../assets/logojon.png'
import Image from 'next/image'
import Search from 'antd/es/input/Search'
import './headerstyle.css'
import {
    HeartOutlined,
    UserOutlined,
} from '@ant-design/icons';
const Header = () => {
    return (
        <div className='heder__main-wrapper'>
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__search">
                        <Search className='header__input' size="large" placeholder="Searching...." />
                    </div>
                    <div className="header__logotip">
                        <Image className='image-logo' src={logojon} alt="logotip" />
                    </div>
                    <div className='header__btn'>
                        <button className='login'>Log In</button>
                        <button className='account'><UserOutlined /> Account</button>
                        <span className='like'>
                            <HeartOutlined /> Wishlist
                        </span>
                    </div>
                </div>
                <div className="header__ul">
                    <ul className='ul'>
                        <li className='li'>Home</li>
                        <li className='li'>About</li>
                        <li className='li'>Contact</li>
                        <li className='li'>Parfumes</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header