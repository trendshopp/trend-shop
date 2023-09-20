import Rotas from '@/components/rota';
import styles from './style.module.css';
import produtoList from '@/utils/produtos';
import TabelaCate from '@/components/tabelaCate';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import cateList from '@/utils/categorias';
import AreaProdutos from '@/components/areaProd';

const SubCate = () => {
    const [id, setId] = useState(0);
    const router = useRouter()

    const subCate = router.query.subCate ? router.query.subCate : '';
    const cateName = router.query.cateName ? router.query.cateName : '';

    const changeId = () => {
        for (let i = 0; i < cateList.length; i++) {
            if (cateList[i].name === `${subCate}`.toLowerCase()) {
                setId(i)
            }
        }
    }

    useEffect(() => {
        changeId()
    }, [])

    return (
        <div className={styles.main}>
            <Rotas cate={`${cateName}`} subCate={`${subCate}`} />
            <AreaProdutos subCategoria={`${subCate}`} />
        </div>
    )
}

export default SubCate;