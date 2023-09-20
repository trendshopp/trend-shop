import styles from './style.module.css';

type Props = {
    name: string,
    oldPrice: number,
    price: number,
    img: string,
    img2: string,
    img3: string,
    link: string,
    linkZap: string,
    categoria: string,
    estado: string,
    estoque: number
}


const Produto = ({ name, oldPrice, price, img, img2, img3, link, linkZap, categoria, estado, estoque }: Props) => {

    var percem = (oldPrice / price * 100) - 100

    return (
        <div className={styles.produto}>
            {estoque > 0 ?
                <>
                    {estado === 'Usado' ?
                        <div className={styles.estado} style={{ backgroundColor: 'rgb(248, 168, 20)' }}>{estado}</div>
                        :
                        <div className={styles.estado} style={{ backgroundColor: 'rgb(11, 179, 11)', color: 'white' }}>{estado}</div>
                    }
                    <a href={link} className={styles.link}>
                        <div className={styles.imgArea}>
                            <img src={img} alt="" />
                        </div>
                    </a>

                    <div className={styles.prodInfo}>
                        <div className={styles.prodInfoArea}>

                            <a href={link} className={styles.link2}>
                                <div className={styles.oldPriceArea}>
                                    <div className={styles.oldPrice}>R$ {parseFloat(oldPrice.toFixed(0))},00</div>
                                </div>
                                <div className={styles.priceArea}>
                                    <div className={styles.price}>R$ {price.toFixed(0)},00</div>
                                    <div className={styles.off}>{percem.toFixed(0)}% OFF</div>
                                </div>
                                <div className={styles.frete}>
                                    Frete Grátis para toda região do Rio das Pedras
                                </div>
                                <div className={styles.prodName}>
                                    {name}
                                </div>
                            </a>
                            <div className={styles.buttonArea}>
                                <a href={linkZap} className={styles.buttonLink}>
                                    <div className={styles.button}>
                                        <img className={styles.zapLogo} src="https://agencianectarina.com.br/wp-content/uploads/2019/09/whatsapp-logo-png-transparent-background-9.png" alt="" />
                                        <div>Pedir</div>
                                    </div>
                                </a>
                            </div>
                            <div className={styles.space}></div>
                        </div>
                    </div>
                </>
                :

                <>
                    <div className={styles.estado} style={{ backgroundColor: 'rgb(146, 146, 146)', opacity: .3 }}>{estado}</div>
                    <div className={styles.imgArea}>
                        <img src={img} alt="" style={{ opacity: .3 }} />
                    </div>

                    <div className={styles.prodInfo}>
                        <div className={styles.prodInfoArea} style={{ opacity: .3 }}>
                            <div className={styles.priceArea}>
                                <div className={styles.price}>R$ 00,00</div>
                            </div>
                            <div className={styles.prodName}>
                                {name}
                            </div>
                        </div>
                        <div className={styles.out}>Fora de Estoque</div>
                        <div className={styles.buttonArea}>
                            <a href={linkZap} className={styles.buttonLink}>
                                <div className={styles.button2}>
                                    Solicitar
                                </div>
                            </a>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default Produto;