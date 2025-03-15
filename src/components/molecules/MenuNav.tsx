export default function Nav(defaultSelected: any) {
    let selected = defaultSelected['defaultSelected'];

    return (
        <ul>
            <li><a className={selected === 'start' ? 'selected' : 'unselected'} href='/'>Start</a></li>
            <li><a className={selected === 'study-cases' ? 'selected' : 'unselected'} href='/study-cases'>Study Cases</a></li>
            <li><a className={selected === 'writing' ? 'selected' : 'unselected'} href='/writing'>Writing</a></li>
            <li><a className={selected === 'side-projects' ? 'selected' : 'unselected'} href='/side-projects'>Side Projects</a></li>
        </ul>
    );
}
