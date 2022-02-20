import { ViewGridIcon } from '@heroicons/react/solid';

const Header = () => {
    return (
        <header className="flex justify-end py-3 px-4">
            <div>
                <ul className="flex items-center space-x-4 text-sm text-gray-600">
                    <li className='link cursor-pointer'>
                        <a href='https://accounts.google.com/ServiceLogin/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin'>
                            Gmail
                        </a>
                    </li>
                    <li className='link cursor-pointer'>
                        <a href='https://www.google.com.br/imghp?hl=pt-BR&ogbl'>
                            Imagens
                        </a>
                    </li>
                    <li className='flex justify-center items-center w-[40px] h-[40px] rounded-full transition duration-300 hover:bg-gray-200 cursor-pointer'>
                        <ViewGridIcon className='w-[20px] h-[20px]' />
                    </li>
                    <li className='cursor-pointer'>
                        <button className="py-[6px] px-4 bg-blue-600 rounded text-base text-white transition-opacity duration-200 hover:opacity-90">
                            <a href='https://accounts.google.com/ServiceLogin/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin'>
                                Fazer login
                            </a>
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;