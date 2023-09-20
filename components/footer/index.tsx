import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './style.module.css';

const social = [
    { name: '', img: '/images/social/whatsapp.png', link: 'https://web.whatsapp.com/send?phone=552135562929' },
    { name: '', img: '/images/social/insta.png', link: 'https://www.instagram.com/' }
]

const navList = [
    { name: 'Inicio', img: '', link: '/' },
    { name: 'Produtos', img: '', link: '/produtos' },
    { name: 'Contato', img: '', link: '/contato' },
    { name: 'Sobre nós', img: '', link: '/sobre' }
]

const Footer = () => {
    return (
        <div className={styles.footer}>
            <a href='/'><div className={styles.logo}>
                <h2>TREND SHOP</h2>
            </div></a>
            <div className={styles.social}>
                {social.map((item, index) => (
                    <img src={item.img} alt="" key={index} />
                ))}
            </div>
            <div className={styles.infos}>

                <div className={styles.contato}>
                    <div style={{ fontWeight: 'bold', fontSize: '18px' }}>- Contato</div>
                    <div>(21) 96970-3202</div>
                    <div>Trend Shop</div>
                    <div>trend_shop@outlook.com.br</div>
                </div>

                <div className={styles.contato}>
                    <div style={{ fontWeight: 'bold', fontSize: '18px' }}>- Localização</div>
                    <div>Rio de Janeiro - RJ</div>
                    <div>Est. Jacarepagua</div>
                    <div>5171 - Anil</div>
                </div>

            </div>
            <div className={styles.line}></div>
            <div className={styles.menu}>
                {navList.map((item, index) => (
                    <div className={styles.itemMenu} key={index}>
                        <a href={item.link}>{item.name}</a>
                    </div>
                ))}
            </div>
            <div className={styles.direito}>© 2023 Trend Shop. Todos os direitos reservados.</div>
        </div>
    )
}

export default Footer;