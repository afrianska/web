import { useMenuProductsStore } from '../../store/menuStore';


export default function Nav(defaultSelected: any) {
    let selected = defaultSelected['defaultSelected'];
    const { isValue, makeChange } = useMenuProductsStore();

    return (
        <ul>
            <li><a className={selected === 'home' && !isValue ? 'selected' : 'unselected'} href='/'>Home</a></li>
            <li><a className={selected === 'blog' ? 'selected' : 'unselected'} href='/blog'>Blog</a></li>
            <li><a className={selected === 'works' ? 'selected' : 'unselected'} href='/portfolio'>Portfolio</a></li>
            <li><a className={selected === 'home' && isValue ? 'selected' : 'unselected'} onClick={makeChange} href={selected == 'home' ? '#products' : '/#products'}>Products</a></li>
        </ul>
    );
}
