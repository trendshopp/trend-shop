import itemList from '@/utils/itemList';
import styles from './style.module.css';


const CateBalls = () => {
    return (
        <div className={styles.main}>
            {itemList.map((item, index) => (
                <>
                    {index <= 7 ?
                        <a href={item.link} className={styles.link}>
                            <div key={index} className={styles.eachBall}>
                                <img src={item.img} alt="" />
                            </div>
                            <div>{item.name}</div>
                        </a>
                        :
                        ''
                    }
                </>
            ))}
        </div>
    )
}

export default CateBalls;