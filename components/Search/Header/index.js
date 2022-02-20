import { useRef } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { MicrophoneIcon, SearchIcon, ViewGridIcon, XIcon } from '@heroicons/react/solid';
import { CogIcon } from '@heroicons/react/outline';

const Header = () => {
    const router = useRouter();
    const searchInputRef = useRef(null);

    const search = (ev) => {
        ev.preventDefault();

        const term = searchInputRef.current.value;

        if (!term) return;

        router.push(`/search?term=${term}`);
    }

    return (
        <header className='sticky top-0 flex justify-between items-center py-6 px-[10px] bg-white z-50'>
            <div className='flex flex-grow items-center'>
                <div className='flex mr-1 md:mr-8 cursor-pointer'>
                    <Image
                        src='/google-logo.svg'
                        width={120}
                        height={50}
                        onClick={() => router.push('/')}
                    />
                </div>
                <div className='flex flex-grow px-4 h-[50px] border border-gray-200 rounded-full shadow-lg max-w-3xl lg:max-w-[54%] items-center'>
                    <form className='flex flex-grow h-[100%]'>
                        <div className='w-full h-[100%]'>
                            <input
                                ref={searchInputRef}
                                type='text'
                                className='w-full h-[100%] focus:outline-none pl-2'
                            />
                        </div>
                        <div className='flex items-center'>
                            <div>
                                <XIcon
                                    className='h-6 mr-0 md:mr-3 text-gray-500 transition duration-200 transform hover:scale-125 cursor-pointer'
                                    onClick={() => (searchInputRef.current.value = '')}
                                />
                            </div>
                            <div className='hidden md:inline-flex'>
                                <MicrophoneIcon
                                    className='h-5 hidden sm:inline-flex pl-4 text-blue-500 border-l border-gray-300 cursor-pointer'
                                />
                            </div>
                            <div className='hidden md:inline-flex'>
                                <SearchIcon
                                    className='h-5 hidden sm:inline-flex pl-2 text-blue-500 cursor-pointer'
                                />
                            </div>
                            <div>
                                <button hidden type='submit' onClick={search}>Buscar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className='hidden md:inline-flex'>
                <ul className='flex items-center text-gray-600'>
                    <li className='flex justify-center items-center w-[40px] h-[40px] rounded-full transition duration-300 hover:bg-gray-200 cursor-pointer'>
                        <CogIcon className='w-[20px] h-[20px]' />
                    </li>
                    <li className='flex justify-center items-center w-[40px] h-[40px] rounded-full transition duration-300 hover:bg-gray-200 cursor-pointer'>
                        <ViewGridIcon className='w-[20px] h-[20px]' />
                    </li>
                    <li className=''>
                        <button className='py-[6px] px-4 ml-4 bg-blue-600 rounded text-base text-white transition-opacity duration-200 hover:opacity-90'>Fazer login</button>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;