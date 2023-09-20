import produtoList from '@/utils/produtos';
import styles from './style.module.css';
import { useRouter } from 'next/router';
import Stars from '@/components/stars';
import Rotas from '@/components/rota';
import { useEffect, useState } from 'react';
import itemList from '@/utils/itemList';

const Produtos = () => {
    const [id, setId] = useState(0)
    const router = useRouter()

    const prodName = router.query.prodName ? router.query.prodName : '';
    const subCate = router.query.subCate ? router.query.subCate : '';

    useEffect(() => {
        for (let i = 0; i < produtoList.length; i++) {
            produtoList[i].linkName === prodName ? setId(i) : '';
        }
    },)

    return (
        <div className={styles.main}>
            <Rotas cate={produtoList[id].categoria} produName={`${prodName}`} subCate={`${subCate}`} />
            <div className={styles.container}>
                {produtoList.map((item, index) => (
                    <>
                        {item.linkName === prodName ?
                            <>
                                <div className={styles.infBuy}>
                                    <div className={`${styles.miniImages} ${styles.item1}`} key={index}>
                                        <div className={styles.miniImg}>
                                            <img src={item.img} alt="" />
                                        </div>
                                        {item.img2 != '' ?
                                            <div className={styles.miniImg}>
                                                <img src={item.img2} alt="" />
                                            </div>
                                            :
                                            ''
                                        }
                                        {item.img3 != '' ?
                                            <div className={styles.miniImg}>
                                                <img src={item.img3} alt="" />
                                            </div>
                                            :
                                            ''
                                        }
                                    </div>
                                    <div className={`${styles.image} ${styles.item2}`}>
                                        <div className={styles.imgArea}>
                                            <img src={item.img} alt={item.name} />
                                        </div>
                                    </div>
                                </div>

                                <div className={`${styles.prodInfo} ${styles.item3}`}>
                                    <div className={styles.prodInfoArea}>
                                        <div className={styles.estado}>Produto: {item.estado}</div>
                                        <div className={styles.name}>{item.name}</div>
                                        <Stars />
                                        <div className={styles.oldPrice}>R$ {item.oldPrice.toFixed(0)},00</div>
                                        <div className={styles.price}>R$ {item.price.toFixed(0)},00&nbsp;<span className={styles.span}>{((item.oldPrice / item.price * 100) - 100).toFixed(0)}% OFF</span></div>

                                        <div className={styles.frete}>
                                            Frete Grátis para toda região do Rio das Pedras
                                        </div>
                                        <div className={styles.pagamento}>
                                            <div className={styles.metodo}>Metodos de Pagamento</div>
                                            <div className={styles.metodosImg}>
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Logo%E2%80%94pix_powered_by_Banco_Central_%28Brazil%2C_2020%29.svg/1200px-Logo%E2%80%94pix_powered_by_Banco_Central_%28Brazil%2C_2020%29.svg.png" alt="" />
                                            </div>
                                        </div>
                                        <div className={styles.desc}>
                                            <div className={styles.descProd}>Descrição do Produto</div>
                                            <ul>
                                                {item.descricao?.map((item, index) => (
                                                    <li key={index}>{item.desc}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.buyArea} ${styles.item4}`}>
                                    <div className={styles.buyInfos}>
                                        <div className={styles.buyLocal}>
                                            <div className={styles.frete}>
                                                Frete para regiões fora do Rio das Pedras será cobrada uma taxa
                                            </div>
                                            <div style={{ marginTop: '20px', fontSize: '14px' }}>Entrega no mesmo dia para Regiões do Rio das Pedras</div>
                                            <div className={styles.buttonBuy}>
                                                <img className={styles.zapLogo} src="https://agencianectarina.com.br/wp-content/uploads/2019/09/whatsapp-logo-png-transparent-background-9.png" alt="" />
                                                <div>Pedir</div>
                                            </div>
                                            <div className={styles.buttonInfo}>Informações</div>
                                            <div className={styles.compra}>
                                                <div>
                                                    <img src="https://cdn-icons-png.flaticon.com/128/3314/3314310.png" alt="" />
                                                </div>
                                                <div>
                                                    <span style={{ color: 'rgb(248, 168, 20)', fontWeight: 'bold' }}>Devolução Gratis. </span>Caso haja problemas, você tem 7 dias a partir da data de recebimento.
                                                </div>
                                            </div>
                                            <div className={styles.compra}>
                                                <div>
                                                    <img src="https://cdn-icons-png.flaticon.com/128/2492/2492347.png" alt="" />
                                                </div>
                                                <div>
                                                    <span style={{ color: 'rgb(248, 168, 20)', fontWeight: 'bold' }}>Compra Garantida</span>, receba o produto que está esperando ou devolvemos seu dinheiro.
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </>
                            :
                            ''
                        }
                    </>
                ))}
            </div>
        </div>
    )
}

export default Produtos;