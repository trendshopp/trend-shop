import Rotas from '@/components/rota';
import styles from './style.module.css';
import produtoList from '@/utils/produtos';
import cateList from '@/utils/categorias';
import itemList from '@/utils/itemList';
import CateList from './cateList';
import { useState } from 'react';

const TabelaCate = () => {

    const [display, setDisplay] = useState('none');

    return (
        <div className={styles.container}>
            <div className={styles.categoriaLista}>
                <CateList />
            </div>
            <div className={styles.responsiveArea}>
                <div className={styles.cateResponsive} onClick={() => {display == 'none' ? setDisplay('flex') : setDisplay('none')}}>
                    <div>Categorias</div>
                    <img src="/icons/setaDown.png" alt="" className={styles.setaImg} />
                </div>
                <div className={styles.listArea} style={{display: display}}>
                    <CateList />
                </div>
            </div>
        </div>
    )
}

export default TabelaCate;