import '../styles/globals.css';
import Layout from '../components/layout';

export default function App({ Component, pageProps }) {
  return (
    <Layout title={Component.pageTitle} description={Component.pageDescription}>
      <Component {...pageProps} />
    </Layout>
  );
}
