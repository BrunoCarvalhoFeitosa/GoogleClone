import {
    DotsVerticalIcon
} from "@heroicons/react/solid";
import {
    MapIcon,
    NewspaperIcon,
    PhotographIcon,
    PlayIcon,
    SearchIcon
} from "@heroicons/react/outline";

const HeaderOptions = () => {
    return (
        <nav className='flex justify-center lg:justify-start items-center w-full md:w-[82%] mx-auto'>
            <ul className='flex items-center space-x-6 md:space-x-8'>
                <li className='flex items-center text-md pb-2 text-gray-700 border-b-4 cursor-pointer selected'>
                    <SearchIcon className='h-5 md:mr-2' />
                    <p className='hidden md:inline-flex'>Tudo</p>
                </li>
                <li className='flex items-center text-md pb-2 text-gray-700 border-b-4 border-transparent hover:border-blue-500 cursor-pointer'>
                    <PhotographIcon className='h-5 md:mr-2' />
                    <p className='hidden md:inline-flex'>Imagens</p>
                </li>
                <li className='flex items-center text-md pb-2 text-gray-700 border-b-4 border-transparent hover:border-blue-500 cursor-pointer'>
                    <PlayIcon className='h-5 md:mr-2' />
                    <p className='hidden md:inline-flex'>Vídeos</p>
                </li>
                <li className='flex items-center text-md pb-2 text-gray-700 border-b-4 border-transparent hover:border-blue-500 cursor-pointer'>
                    <NewspaperIcon className='h-5 md:mr-2' />
                    <p className='hidden md:inline-flex'>Notícias</p>
                </li>
                <li className='flex items-center text-md pb-2 text-gray-700 border-b-4 border-transparent hover:border-blue-500 cursor-pointer'>
                    <MapIcon className='h-5 md:mr-2' />
                    <p className='hidden md:inline-flex'>Maps</p>
                </li>
                <li className='flex items-center text-md pb-2 text-gray-700 border-b-4 border-transparent hover:border-blue-500 cursor-pointer'>
                    <DotsVerticalIcon className='h-5 md:mr-2' />
                    <p className='hidden md:inline-flex'>Mais</p>
                </li>
            </ul>
            <ul className='hidden lg:flex items-center ml-20 space-x-6 text-md text-gray-700'>
                <li className='pb-3 cursor-pointer'>Configurações</li>
                <li className='pb-3 cursor-pointer'>Ferramentas</li>
            </ul>
        </nav>
    );
}

export default HeaderOptions;