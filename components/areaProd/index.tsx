import styles from './style.module.css';
import TabelaCate from '@/components/tabelaCate';
import ProdutosRef from '@/components/produtosRef';

type Props = {
    categoria?: string,
    subCategoria?: string,
}

const AreaProdutos = ({ categoria, subCategoria }: Props) => {
    return (
        <div className={styles.container}>
            <TabelaCate />
            <ProdutosRef categoria={`${categoria}`} subCategoria={`${subCategoria}`} />
        </div>
    )
}

export default AreaProdutos;