import React from 'react';
import { Toaster } from 'react-hot-toast';

// import { Toaster } from 'react-hot-toast/dist/components/toaster';

import { Layout } from '../components';
import '../styles/globals.css';
import { StateContext } from '../context/StateContext';

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}

export default MyApp