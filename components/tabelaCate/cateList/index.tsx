import cateList from '@/utils/categorias';
import styles from './style.module.css';
import itemList from '@/utils/itemList';

const CateList = () => {
    return (

        <div className={styles.categoriaLista}>
            <h3 className={styles.h3}>Categorias</h3>
            <h4 className={styles.h4}>
                <a href={itemList[0].link}>{itemList[0].name}</a>
            </h4>
            {cateList.map((item, index) => (
                <>
                    {item.categoria === itemList[0].name ?
                        <a href={item.link} className={styles.link}><div className={styles.eachCate} key={index}>{item.name}</div></a>
                        :
                        ''
                    }
                </>
            ))}
            <div className={styles.line}></div>
            <h4 className={styles.h4}>
                <a href={itemList[1].link}>{itemList[1].name}</a>
            </h4>
            {cateList.map((item, index) => (
                <>
                    {item.categoria === itemList[1].name ?
                        <a href={item.link} className={styles.link}><div className={styles.eachCate} key={index}>{item.name}</div></a>
                        :
                        ''
                    }
                </>
            ))}
            <div className={styles.line}></div>
            <h4 className={styles.h4}>
                <a href={itemList[2].link}>{itemList[2].name}</a>
            </h4>
            {cateList.map((item, index) => (
                <>
                    {item.categoria === itemList[2].name ?
                        <a href={item.link} className={styles.link}><div className={styles.eachCate} key={index}>{item.name}</div></a>
                        :
                        ''
                    }
                </>
            ))}
            <div className={styles.line}></div>
            <h4 className={styles.h4}>
                <a href={itemList[3].link}>{itemList[3].name}</a>
            </h4>
            {cateList.map((item, index) => (
                <>
                    {item.categoria === itemList[3].name ?
                        <a href={item.link} className={styles.link}><div className={styles.eachCate} key={index}>{item.name}</div></a>
                        :
                        ''
                    }
                </>
            ))}
            <div className={styles.line}></div>
            <h4 className={styles.h4}>
                <a href={itemList[4].link}>{itemList[4].name}</a>
            </h4>
            {cateList.map((item, index) => (
                <>
                    {item.categoria === itemList[4].name ?
                        <a href={item.link} className={styles.link}><div className={styles.eachCate} key={index}>{item.name}</div></a>
                        :
                        ''
                    }
                </>
            ))}
            <div className={styles.line}></div>
            <h4 className={styles.h4}>
                <a href={itemList[5].link}>{itemList[5].name}</a>
            </h4>
            {cateList.map((item, index) => (
                <>
                    {item.categoria === itemList[5].name ?
                        <a href={item.link} className={styles.link}><div className={styles.eachCate} key={index}>{item.name}</div></a>
                        :
                        ''
                    }
                </>
            ))}
        </div>
    )
}

export default CateList;