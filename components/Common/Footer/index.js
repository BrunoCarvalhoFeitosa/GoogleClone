const Footer = () => {
    return (
        <footer className='bg-gray-100'>
            <div className='py-3 px-[40px] text-sm md:text-base text-gray-500'>
                <h5>Brasil</h5>
            </div>
            <div className='flex flex-col justify-between items-center py-3 px-[10px] md:px-[40px] border-t border-t-gray-200 md:flex-row'>
                <div className='mb-2 md:mb-0'>
                    <ul className="flex items-center space-x-5 text-gray-500">
                        <li className='text-sm md:text-base link'>
                            <a href='https://about.google/?utm_source=google-BR&utm_medium=referral&utm_campaign=hp-footer&fg=1'>
                                Sobre
                            </a>
                        </li>
                        <li className='text-sm md:text-base link'>
                            <a href='https://ads.google.com/intl/pt-BR_br/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1'>
                                Publicidade
                            </a>
                        </li>
                        <li className='text-sm md:text-base link'>
                            <a href='https://smallbusiness.withgoogle.com/intl/pt-BR_br/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google&utm_medium=ep&utm_campaign=google_hpbfooter&utm_content=google_hpbfooter&gmbsrc=ww-ww-et-gs-z-gmb-s-z-u~sb-g4sb_srvcs-u&c=BR#!/'>
                                Negócios
                            </a>
                        </li>
                        <li className='text-sm md:text-base link'>
                            <a href='https://www.google.com/search/howsearchworks/?fg=1'>
                                Como funciona a Pesquisa
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="flex items-center space-x-5 text-gray-500">
                        <li className='text-sm md:text-base link'>
                            <a href='https://policies.google.com/privacy?hl=pt-BR&fg=1'>
                                Privacidade
                            </a>
                        </li>
                        <li className='text-sm md:text-base link'>
                            <a href='https://policies.google.com/terms?hl=pt-BR&fg=1'>
                                Termos
                            </a>
                        </li>
                        <li className='text-sm md:text-base'>Configurações</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;