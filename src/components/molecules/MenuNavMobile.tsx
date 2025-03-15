export default function MenuNavMobile(defaultSelected: any) {
    let selected = defaultSelected['defaultSelected'];

    return (
        <ul className='list-menu-body'>
            <li><a href='/'>
                <div className='icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                </div>
                <div className='label'>
                    <div className='title-line'>
                        <p className='title'>Start</p>
                        <div className={`circle ${selected === 'home' ? 'content' : 'hidden'}`}></div>
                    </div>
                    <p className='desc'>Freelance UX designer</p>
                </div>
            </a></li>
            <li><a href='/study-cases'>
                <div className='icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12h.01" /><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /><path d="M22 13a18.15 18.15 0 0 1-20 0" /><rect width="20" height="14" x="2" y="6" rx="2" /></svg>
                </div>
                <div className='label'>
                    <div className='title-line'>
                        <p className='title'>Study Cases</p>
                        <div className={`circle ${selected === 'study-cases' ? 'content' : 'hidden'}`}></div>
                    </div>
                    <p className='desc'>What did I done?</p>
                </div>
            </a></li>
            <li><a href='/writing'>
                <div className='icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" /><path d="M18 14h-8" /><path d="M15 18h-5" /><path d="M10 6h8v4h-8V6Z" /></svg>
                </div>
                <div className='label'>
                    <div className='title-line'>
                        <p className='title'>Writing</p>
                        <div className={`circle ${selected === 'writing' ? 'content' : 'hidden'}`}></div>
                    </div>
                    <p className='desc'>Coding, Design, life, etc.</p>
                </div>
            </a></li>
            <li><a href='/side-projects'>
                <div className='icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2" /></svg>
                </div>
                <div className='label'>
                    <div className='title-line'>
                        <p className='title'>Side Projects</p>
                        <div className={`circle ${selected === 'side-projects' ? 'content' : 'hidden'}`}></div>
                    </div>
                    <p className='desc'>Some personal projects.</p>
                </div>
            </a></li>
        </ul>
    );
}
