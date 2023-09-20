import cateList from '@/utils/categorias';
import styles from './style.module.css';

const Ofertas = () => {
    return (
        <div className={styles.main}>
            <div className={styles.off}>Ofertas que você também precisa conhecer</div>
            <div className={styles.cates}>
                {cateList.map((item, index) => (
                    <a href={item.link} key={index} className={styles.eachCate}><div>{item.name}</div></a>
                ))}
            </div>
        </div>
    )
}

export default Ofertas;