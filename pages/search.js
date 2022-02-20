import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../components/Search/Header';
import Footer from '../components/Common/Footer';
import HeaderOptions from '../components/Search/HeaderOptions';
import SearchResults from '../components/Search/SearchResults';

const Search = ({ results }) => {
    const router = useRouter();

    return (
        <div className='flex flex-col min-h-[100vh]'>
            <Head>
                <title>{router.query.term} - Pesquisa Google</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <HeaderOptions />
            <SearchResults results={results} />
            <Footer />
        </div>
    );
}

export async function getServerSideProps(context) {
   const startIndex = context.query.start || '0';

   const data = await fetch(
       `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}&gl=br`
    ).then(response => response.json());

    return {
        props: {
            results: data,
        },
    };
}

export default Search;