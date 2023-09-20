import { useState } from 'react';
import styles from './style.module.css';
import Head from 'next/head';

const proInfoItemList = [
    { name: 'Contatar', img: './contato/contrato.png', txt: 'Contate-nos preenchendo os campos opcionais ao lado, pelo icone do whatsapp ou clicando diretamente no botão.' },
    { name: 'Trend Shop', img: './contato/site.png', txt: 'Uma loja virtual que vende produtos novos ou usados.' },
    { name: 'Frete', img: './contato/tec.png', txt: 'Entregamos em casa onde o pagamento pode ser feito na hora através dos nosso entregador.' },
    { name: 'WhatsApp', img: './icons/zap.avif', txt: 'Tel: (21) 96970-3202.', link: '' },
]

const Contato = () => {

    const [nome, setNome] = useState('')
    const [empresa, setEmpresa] = useState('')
    const [assunto, setAssunto] = useState('')
    const [mensagem, setMensagem] = useState('')

    return (
        <>
            <Head>
                <title>Trend Shop - Contato</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo.png" />
            </Head>
            <div className={styles.main}>
                <div className={styles.left}>
                    <div className={styles.barraLateral}>
                        <div className={styles.proInfo}>
                            {proInfoItemList.map((item, index) => (
                                <>
                                {item.link != undefined ?
                                <div className={styles.proInfoItem} key={index}>
                                    <a href={item.link} className={styles.link}>
                                        <div className={styles.nameImg}>
                                            <img src={item.img} alt="" className={styles.img} />
                                            <div className={styles.proInfoTitle}>{item.name}</div>
                                        </div>
                                    </a>
                                    <div className={styles.proInfoInfo}>{item.txt}</div>
                                </div>
                                :
                                <div className={styles.proInfoItem} key={index}>
                                        <div className={styles.nameImg}>
                                            <div className={styles.proInfoTitle}>{item.name}</div>
                                        </div>
                                    <div className={styles.proInfoInfo}>{item.txt}</div>
                                </div>

                                }
                                </>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles.middle}>
                    <div className={styles.contatoArea}>
                        <h2 className={styles.h2}>CONTATE-NOS</h2>
                        <div className={styles.inputArea}>
                            <div className={styles.inputItem}>
                                <div className={styles.inputTitle}>Nome <span className={styles.span}>* Opcional</span></div>
                                <input type="text" className={styles.input} value={nome} placeholder='Seu nome...' onChange={(e) => setNome(e.target.value)} />
                            </div>

                            <div className={styles.inputItem}>
                                <div className={styles.inputTitle}>Assunto <span className={styles.span}>* Opcional</span></div>
                                <input type="text" className={styles.input} value={assunto} placeholder='Assunto...' onChange={(e) => setAssunto(e.target.value)} />
                            </div>

                            <div className={styles.inputItem}>
                                <div className={styles.inputTitle}>Mensagem <span className={styles.span}>* Opcional</span></div>
                                <input type="text" className={styles.input} value={mensagem} placeholder='Mensagem...' onChange={(e) => setMensagem(e.target.value)} />
                            </div>
                            <a href={`mailto:trend.shop@outlook.com.br?subject=${assunto}&body=Olá eu me chamo ${nome}, ${mensagem}`} className={styles.buttonEnviar}>Contato E-mail</a>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.barraLateral}></div>
                </div>
            </div>
        </>
    )
}

export default Contato;