import Link from 'next/link';
import { useRouter } from "next/router";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

const PaginationButtons = () => {
    const router = useRouter();
    const startIndex = Number(router.query.start) || 0;

    return (
        <div className="w-full my-6 flex items-center">
            {startIndex >= 10 && (
                <Link href={`search?term=${router.query.term}&start=${startIndex - 10}`}>
                    <div className='flex items-center text-sm text-blue-800 mr-8 cursor-pointer hover:underline'>
                        <ChevronLeftIcon className='h-6' />
                        <span className='font-semibold'>Anterior</span>
                    </div>
                </Link>
            )}

            <Link href={`search?term=${router.query.term}&start=${startIndex + 10}`}>
                <div className='flex items-center text-sm text-blue-800 cursor-pointer hover:underline'>
                    <ChevronRightIcon className='h-6' />
                    <span className='font-semibold'>Mais</span>
                </div>
            </Link>
        </div>
    );
}

export default PaginationButtons;