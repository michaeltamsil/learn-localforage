import React from 'react';
import localforage from 'localforage';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

import Keranjang from './components/keranjang';
import Produk from './components/produk';


try {
  const fun = async () => {
    console.log('halo');
    const val = await localforage.getItem('keranjang');
    window.dataKeranjang = val;
  }
  fun()

}catch{
  console.error('belum bisa pakai localforage')
}

const store = createStore(reducers, applyMiddleware(thunk));


function App() {
  return (
    <Provider store={store}>
    
      <Produk/>
      <Keranjang/>

    
    </Provider>
  );
}

export default App;
