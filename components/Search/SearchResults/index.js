import { SearchIcon } from "@heroicons/react/outline";
import PaginationButtons from "../PaginationButtons";

const SearchResults = ({ results }) => {

    return (
        <div className='w-full flex flex-col flex-grow justify-center basis-auto px-20 md:w-[82%] md:px-0 mx-auto'>
            <div className='h-full'>
                {
                     results && !results.error ? (
                        results?.searchInformation?.totalResults != 0 ? (
                            <>
                                <div className='mt-4'>
                                   <h4 className="text-[14px] font-normal text-gray-400">
                                      Aproximadamente
                                      <strong className='mx-1 font-normal'>{results?.searchInformation?.formattedTotalResults.replace(',', '.')}</strong> 
                                      resultados
                                      <strong className='mx-1 font-normal'>({results?.searchInformation?.formattedSearchTime}) segundos</strong> 
                                   </h4>
                                </div>
                                <div className='mt-10'>
                                    {results.items?.map((result) => (
                                        <div key={result.link} className='mb-8 max-w-xl'>
                                            <div className='line-clamp-1'>
                                                <a href={result.link} className='text-gray-500'>{result.formattedUrl}</a>
                                            </div>
                                            <div>
                                                <a href={result.link}>
                                                    <h2 className='truncate text-lg text-blue-800 font-medium hover:underline'>{result.title}</h2>
                                                </a>
                                            </div>
                                            <div className='mt-2 line-clamp-2'>
                                                <p>{result.snippet}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <PaginationButtons />
                            </>
                        ) : (
                            <div className='mt-10 max-w-xl'>
                                <div className="mb-3">
                                    <h2 className="text-[22px] text-gray-900 font-normal">
                                        Sua pesquisa para
                                        <strong className='mx-1 text-red-300 font-normal'>{results.queries.request[0].searchTerms}</strong> 
                                        não encontrou nenhum documento correspondente</h2>
                                </div>
                                <div className='text-sm mb-5'>
                                    <p className='mb-3'>
                                        Precisa de ajuda? Veja mais
                                        <a href='https://support.google.com/websearch/answer/134479?hl=pt-BR&sa=X&ved=2ahUKEwjX99v-g432AhVYq5UCHZl8CYsQjfsDegQIARAB' className="mx-1 text-blue-500 hover:underline">
                                            dicas
                                        </a>
                                        para pesquisar no Google.
                                    </p>
                                    <p>Você também pode tentar fazer estas pesquisas:</p>
                                </div>
                                <div>
                                   <nav>
                                       <ul>
                                            <li className='py-3 border-t border-gray-200'>
                                               <a href='https://www.google.com/search?q=tabela+do+Brasileirao' className='flex items-center'>
                                                   <SearchIcon className='h-4 mr-2 text-gray-400' />
                                                   <p className='lowercase hover:underline'>Tabela do Brasileirão</p>
                                               </a>
                                           </li>
                                            <li className='py-3 border-t border-gray-200'>
                                               <a href='https://www.google.com/search?q=noticias' className='flex items-center'>
                                                   <SearchIcon className='h-4 mr-2 text-gray-400' />
                                                   <p className='lowercase hover:underline'>Notícias</p>
                                               </a>
                                           </li>
                                            <li className='py-3 border-t border-gray-200'>
                                               <a href='https://www.google.com/search?q=frases+de+amizade' className='flex items-center'>
                                                   <SearchIcon className='h-4 mr-2 text-gray-400' />
                                                   <p className='lowercase hover:underline'>Frases de amizade</p>
                                               </a>
                                           </li>
                                            <li className='py-3 border-t border-gray-200'>
                                               <a href='https://www.google.com/search?q=frases+de+amor' className='flex items-center'>
                                                   <SearchIcon className='h-4 mr-2 text-gray-400' />
                                                   <p className='lowercase hover:underline'>Frases de amor</p>
                                               </a>
                                           </li>
                                            <li className='py-3 border-t border-gray-200'>
                                               <a href='https://www.google.com/search?q=filmes+em+cartaz' className='flex items-center'>
                                                   <SearchIcon className='h-4 mr-2 text-gray-400' />
                                                   <p className='lowercase hover:underline'>Filmes em cartaz</p>
                                               </a>
                                           </li>
                                            <li className='py-3 border-t border-gray-200'>
                                               <a href='https://www.google.com/search?q=resultado+mega+sena' className='flex items-center'>
                                                   <SearchIcon className='h-4 mr-2 text-gray-400' />
                                                   <p className='lowercase hover:underline'>Resultado Mega Sena</p>
                                               </a>
                                           </li>
                                            <li className='py-3 border-y border-b-gray-200'>
                                               <a href='https://www.google.com/search?q=previsao+do+tempo' className='flex items-center'>
                                                   <SearchIcon className='h-4 mr-2 text-gray-400' />
                                                   <p className='lowercase hover:underline'>Previsão do tempo</p>
                                               </a>
                                           </li>
                                       </ul>
                                   </nav>
                                </div>
                            </div>
                        )
                    ) : (
                        <div className='w-full'>
                            <div>
                                <p className='text-[16px] text-center text-red-300'>{results.error.code} - {results.error.status}</p>
                            </div>
                            <div className='mt-3 lg:mt-0'>
                                <h2 className='text-[16px] md:text-[22px] text-gray-900 text-center'>Seu limite de requisições diárias foram excedidas, tente novamente mais tarde.</h2>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default SearchResults;