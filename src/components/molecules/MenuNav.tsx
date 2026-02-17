
export default function Nav(defaultSelected: any) {
  let selected = defaultSelected['defaultSelected'];

  return (
    <ul>
      <li><a className={selected === 'start' ? 'selected' : 'unselected'} href='/'>Start</a></li>
      <li><a className={selected === 'study-cases' ? 'selected' : 'unselected'} href='/study-cases'>Study Cases</a></li>
      <li><a className={`flex flex-row gap-1 unselected`} href='/links' target='_blank'>Links <span className='opacity-50'><svg width="16" height="16" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g id="_26" data-name="26"><path d="M30,7H15a1,1,0,0,0,0,2H29.59L8.29,30.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L31,10.41V25a1,1,0,0,0,2,0V10A3,3,0,0,0,30,7Z" /></g></svg></span></a></li>
      <li><a className={`flex flex-row gap-1 unselected`} href='https://afrian.substack.com' target="_blank">
        Writing <span className='opacity-50'><svg width="16" height="16" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g id="_26" data-name="26"><path d="M30,7H15a1,1,0,0,0,0,2H29.59L8.29,30.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L31,10.41V25a1,1,0,0,0,2,0V10A3,3,0,0,0,30,7Z" /></g></svg></span>
      </a></li>
    </ul>
  );
}
