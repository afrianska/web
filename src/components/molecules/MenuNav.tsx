
import { Iconmu } from '@iconmu/react'
import { ArrowUpRightIcon } from '@iconmu/base-line'

export default function Nav(defaultSelected: any) {
  let selected = defaultSelected['defaultSelected'];

  return (
    <ul>
      <li><a className={selected === 'start' ? 'selected' : 'unselected'} href='/'>Start</a></li>
      <li><a className={selected === 'study-cases' ? 'selected' : 'unselected'} href='/study-cases'>Study Cases</a></li>
      <li><a className={`flex flex-row gap-1 unselected`} href='/links' target='_blank'>Links <span className='opacity-50'><Iconmu icon={ArrowUpRightIcon} /></span></a></li>
      <li><a className={`flex flex-row gap-1 unselected`} href='https://afrian.substack.com' target="_blank">
        Writing <span className='opacity-50'><Iconmu icon={ArrowUpRightIcon} /></span>
      </a></li>
    </ul>
  );
}
