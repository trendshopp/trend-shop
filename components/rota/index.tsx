import styles from './style.module.css';

type Props = {
    cate?: string,
    subCate?: string,
    produName?: string,
}

const Rotas = ({ cate, subCate, produName }: Props) => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <>
                    {produName ?
                        <>
                            <a href="/">home</a>&nbsp;{'>'}&nbsp;<a href="/produtos">produtos</a>&nbsp;{'>'}&nbsp;<a href={`/produtos/${cate}`}>{cate}</a>&nbsp;{'>'}&nbsp;<a href={`/produtos/${cate}/${subCate}`}>{subCate}</a>&nbsp;{'>'}&nbsp;<span style={{ color: 'rgb(248, 168, 20)', fontWeight: 'bold', textShadow: '1px 1px 3px white' }}>{produName}</span>
                        </>
                        :
                        <>
                            {subCate ?
                                <>
                                    <a href="/">home</a>&nbsp;{'>'}&nbsp;<a href="/produtos">produtos</a>&nbsp;{'>'}&nbsp;<a href={`/produtos/${cate}`}>{cate}</a>&nbsp;{'>'}&nbsp;<span style={{ color: 'rgb(248, 168, 20)', fontWeight: 'bold', textShadow: '1px 1px 3px white' }}>{subCate}</span>
                                </>
                                :
                                <>
                                    {cate ?
                                        <>
                                            <a href="/">home</a>&nbsp;{'>'}&nbsp;<a href="/produtos">produtos</a>&nbsp;{'>'}&nbsp;<span style={{ color: 'rgb(248, 168, 20)', fontWeight: 'bold', textShadow: '1px 1px 3px white' }}>{cate}</span>
                                        </>
                                        :
                                        <>
                                            <a href="/">home</a>&nbsp;{'>'}&nbsp;<span style={{ color: 'rgb(248, 168, 20)', fontWeight: 'bold', textShadow: '1px 1px 3px white' }}>produtos</span>
                                        </>
                                    }
                                </>
                            }
                        </>
                    }
                </>
            </div>
        </div>
    )
}

export default Rotas;