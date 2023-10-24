'use client'

import NavLink from "../../../components/shares/NavLink";
import { usePathname, useRouter } from "next/navigation";

import logojon from '../../../assets/logojon.png'
import Image from 'next/image'

import './headerstyle.css'
import {
    HeartOutlined,
    UserOutlined,
} from '@ant-design/icons';
const PublicHeader = () => {
    const router = useRouter();
    const pathName = usePathname();
    console.log(router);
    console.log(pathName);

    

    return (
        <div className='heder__main-wrapper'>
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__logotip">
                        <Image className='image-logo'src={logojon} alt="logotip" />
                    </div>
                    <div className='header__btn'>
                        <div className='login'>
                            <NavLink href="/login">Login</NavLink>
                        </div>
                        <div className='account'>
                            <UserOutlined />
                            <NavLink href="/register">Account</NavLink>
                        </div>
                        <span className='like'>
                            <HeartOutlined /> Wishlist
                        </span>
                    </div>
                </div>
                <header className="header__ul">
                    <div className="ul">
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/about">About</NavLink>
                        <NavLink href="/products">Parfumes</NavLink>
                        <NavLink href="/contact">Contact</NavLink>
                    </div>
                </header>
            </div>
        </div>
    )
}

export default PublicHeader