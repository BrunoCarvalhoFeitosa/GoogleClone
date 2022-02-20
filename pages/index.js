import Head from 'next/head';
import Header from '../components/Home/Header';
import Form from '../components/Home/Form';
import Footer from '../components/Common/Footer';

const Home = () => {
  return (
    <div className='flex flex-col justify-center h-screen'>
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Form />
      <Footer />
    </div>
  );
}

export default Home;