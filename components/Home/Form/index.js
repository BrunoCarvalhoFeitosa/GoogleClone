import { useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { SearchIcon, MicrophoneIcon } from '@heroicons/react/solid';

const Form = () => {
    const router = useRouter();
    const searchInputRef = useRef(null);

    const search = (ev) => {
        ev.preventDefault();

        const term = searchInputRef.current.value;

        if (!term) return;

        router.push(`/search?term=${term}`);
    }

    return (
        <form className="flex flex-col items-center justify-center flex-grow px-[20px]">
            <div className='mb-2'>
                <Image
                    src='/google-logo.svg'
                    width={400}
                    height={130}
                />
            </div>
            <div className='flex items-center w-full max-w-md rounded-full border px-5 h-[50px] border-gray-200 hover:shadow-lg focus-within:shadow-lg sm:max-w-xl lg:max-w-2xl'>
                <div className="mr-3">
                    <SearchIcon className='h-5 text-gray-400' />
                </div>
                <div className="flex-grow h-[100%]">
                    <input
                        ref={searchInputRef}
                        type='text'
                        className='w-full h-[100%] focus:outline-none'
                    />
                </div>
                <div className='cursor-pointer'>
                    <MicrophoneIcon className='h-5 text-blue-500' />
                </div>
            </div>
            <div className="flex justify-center items-center space-x-4 mt-6">
                <div className='search-button'>
                    <button onClick={search}>Pesquisa Google</button>
                </div>
                <div className='search-button'>
                    <button onClick={search}>Estou com sorte</button>
                </div>
            </div>
        </form>
    );
}

export default Form;