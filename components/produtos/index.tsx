import produtoList from '@/utils/produtos';
import Produto from '../produto';
import styles from './style.module.css';


const Produtos = () => {
    {/* CRIAR UM ARRAY PARA CADA CATEGORIA - SE POSSIVEL - "TALVEZ" CRIAR UM ARRAY DENTRO DO ARRAY DE CATEGORIAS LISTADAS, E NO ARRAY RECEBE O ARRAY DE PRODUTOS */}
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <h2>Eletrônicos</h2>
                <div className={styles.line}></div>
                <div className={styles.produtoArea}>
                    <div className={styles.listProd}>
                        {produtoList.map((item, index) => (
                            <>
                                {item.categoria === 'eletronicos' ?
                                    <Produto
                                        name={item.name}
                                        img={item.img}
                                        img2={item.img2}
                                        img3={item.img3}
                                        oldPrice={item.oldPrice}
                                        price={item.price}
                                        link={item.link}
                                        linkZap={item.linkZap}
                                        categoria={item.categoria}
                                        estado={item.estado}
                                        estoque={item.estoque}
                                        key={index}
                                    />
                                    :
                                    ''
                                }
                            </>
                        ))}
                    </div>
                </div>
                <h2>Jogos</h2>
                <div className={styles.line}></div>
                <div className={styles.produtoArea}>
                    <div className={styles.listProd}>
                        {produtoList.map((item, index) => (
                            <>
                                {item.categoria === 'jogos' ?
                                    <Produto
                                        name={item.name}
                                        img={item.img}
                                        img2={item.img2}
                                        img3={item.img3}
                                        oldPrice={item.oldPrice}
                                        price={item.price}
                                        link={item.link}
                                        linkZap={item.linkZap}
                                        categoria={item.categoria}
                                        estado={item.estado}
                                        estoque={item.estoque}
                                        key={index}
                                    />
                                    :
                                    ''
                                }
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Produtos;