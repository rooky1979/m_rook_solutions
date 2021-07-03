import Layout from '../components/Layout';
import '../styles/globals.css';
import { motion } from 'framer-motion';

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <motion.div
        key={router.route}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Component {...pageProps} />
      </motion.div>
    </Layout>
  );
}

export default MyApp;
