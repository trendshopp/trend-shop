import produtoList from '@/utils/produtos';
import styles from './style.module.css';
import Produto from '../produto';

type Props = {
    categoria: string,
    subCategoria: string,
}

const ProdutosRef = ({ categoria, subCategoria }: Props) => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.catalog}>
                    {produtoList.map((item, index) => (
                        <>
                            {categoria === '' || item.categoria === categoria || subCategoria === item.subCategoria ?
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
    )
}

export default ProdutosRef;