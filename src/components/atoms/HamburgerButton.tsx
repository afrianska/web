import { useHamMenuStore } from '../../store/menuStore'

export default function HamburgerButton() {
    const isValueHam = useHamMenuStore((state) => state.isValue);
    const makeChangeHam = useHamMenuStore((state) => state.makeChange);

    return (
        <button onClick={makeChangeHam}>
            {
                isValueHam
                    ? <svg
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            d='M4 12H20M4 6H20M4 18H20'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'></path>
                    </svg>
                    : <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.5 5.5L5.5 16.5M5.5 5.5L16.5 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

            }

        </button>
    );
}