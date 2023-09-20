import Rotas from '@/components/rota';
import styles from './style.module.css';
import TabelaCate from '@/components/tabelaCate';
import ProdutosRef from '@/components/produtosRef';
import AreaProdutos from '@/components/areaProd';

const Produtos = () => {
    return (
        <div className={styles.main}>
            
            <Rotas />
            <AreaProdutos categoria='' />
        </div>
    )
}

export default Produtos;