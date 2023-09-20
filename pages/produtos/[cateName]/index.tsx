import Rotas from '@/components/rota';
import styles from './style.module.css';
import { useRouter } from 'next/router';
import TabelaCate from '@/components/tabelaCate';
import ProdutosRef from '@/components/produtosRef';
import AreaProdutos from '@/components/areaProd';

const Produtos = () => {
    const router = useRouter()

    const cateName = router.query.cateName ? router.query.cateName : '';

    return (
        <div className={styles.main}>
            <Rotas cate={`${cateName}`} />
            <AreaProdutos categoria={`${cateName}`} />
        </div>
    )
}

export default Produtos;