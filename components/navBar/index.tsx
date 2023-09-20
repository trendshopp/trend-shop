import itemList from '@/utils/itemList';
import styles from './style.module.css';
import { useState } from 'react';
import cateList from '@/utils/categorias';
import produtoList from '@/utils/produtos';


const NavBar = () => {

    const [active, setActive] = useState('translateX(-100%)');
    const [buttonAnim, setButtonAnim] = useState('');
    const [buttonAnim2, setButtonAnim2] = useState('');
    const [buttonAnim3, setButtonAnim3] = useState('');
    const [display, setDisplay] = useState('none')
    const [mB, setMB] = useState('0px')
    const [filterList, setFilterList] = useState(produtoList)
    const [query, setQuery] = useState('')

    const showResponseMenu = () => {
        active === 'translateX(-100%)' ? setActive('translateX(0)') : setActive('translateX(-100%)');
    }
    const changeAnimModule = () => {
        buttonAnim === '' ? setButtonAnim('rotate(-45deg) translate(-16px, 16px)') : setButtonAnim('');
        buttonAnim2 === '' ? setButtonAnim2('0') : setButtonAnim2('');
        buttonAnim3 === '' ? setButtonAnim3('rotate(45deg) translate(-5px, -7px)') : setButtonAnim3('');
    }

    const showResponseMenu2 = () => {
        active === 'translateX(0)' ? setActive('translateX(-100%)') : setActive('translateX(0)');
    }

    const [id, setId] = useState(-1)

    const filterBySearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
        setDisplay('block')
        var updateList = [...produtoList];

        updateList = updateList.filter((item) => {
            return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        })

        setFilterList(updateList)
    }

    return (
        <div className={styles.nav}>
            <div className={styles.up}>
                <div className={styles.upCenter}>
                    <div className={styles.logo}>
                        <a className={styles.fancy} href="/">
                            <span className={styles.topKey}></span>
                            <span className={styles.text}>Trendshop</span>
                            <span className={styles.bottomKey1}></span>
                            <span className={styles.bottomKey2}></span>
                        </a>
                    </div>

                    <div className={styles.search}>
                        <input type="text" className={styles.input} placeholder='pesquisar produto' onChange={(e) => filterBySearch(e)} />
                        <div className={styles.buttonSearch}>
                            <img src="/icons/search.png" alt="" />
                        </div>
                        {query != '' ?
                            <div className={styles.searchList} style={{ display: display }}>
                                {filterList.map((item, index) => (
                                    <a href={item.link}>
                                        <div key={index} className={styles.eachItemSearch}>

                                            <div>
                                                <img src={item.img} alt="" />
                                            </div>
                                            <div>
                                                <div>{item.name}</div>
                                                <div style={{ fontSize: '12px' }}>- {item.categoria}</div>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                            :
                            ''
                        }
                    </div>

                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.responsiveNav} onClick={() => (showResponseMenu(), changeAnimModule(), mB === '0px' ? setMB('10px') : setMB('0px'))} style={{ marginBottom: mB }}>
                    <div style={{ transform: buttonAnim }}></div>
                    <div style={{ opacity: buttonAnim2 }}></div>
                    <div style={{ transform: buttonAnim3 }}></div>
                </div>

                <div className={styles.responsiveMenu} style={{ transform: active }}>
                    {itemList.map((item, index) => (
                        <div key={index} className={styles.eachItemResp} onClick={() => (showResponseMenu2(), changeAnimModule())} >
                            <a href={item.link} >{item.name}</a>
                        </div>
                    ))}
                </div>

                {itemList.map((item, index) => (
                    <a href={item.link} className={styles.link}>
                        <div className={styles.eachItem} key={index} onMouseMove={() => setId(index)} onMouseLeave={() => setId(-1)}>

                            {id === index ?
                                <>
                                    <div className={styles.item} style={{ color: 'rgb(248, 168, 20)' }}>{item.name}</div>
                                    <div className={styles.bottomLine} style={{ opacity: 1 }}></div>
                                    <ul className={styles.cateList}>
                                        <div className={styles.cateTitle}>CATEGORIAS</div>
                                        <div className={styles.line}></div>
                                        <div className={styles.cateArea}>
                                            {cateList.map((item, index) => (
                                                <>
                                                    {
                                                        item.categoria === itemList[id].name ?
                                                            <a href={item.link}><li key={index}>{item.name}</li></a>
                                                            :
                                                            ''
                                                    }
                                                </>
                                            ))}
                                        </div>
                                    </ul>
                                </>
                                :
                                <>
                                    <div className={styles.item} style={{ color: 'black' }}>{item.name}</div>
                                    <div className={styles.bottomLine} style={{ opacity: 0 }}></div>
                                </>
                            }
                        </div>
                    </a>
                ))}
            </div>
        </div >
    )
}

export default NavBar;