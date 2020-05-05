import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Item from './Item';

const Index = () => {
    const [data, setData] = useState([])

    useEffect( () => {
        const getProduct = async () => {
            const response = await axios.get('http://localhost:3000/produk');
            console.log(response);
            setData(response.data);

        }
        getProduct();
    }, [])
    

    return (
        <div>
            <h1>Produk</h1>
            daftar produk
            {data.map( item => {
                return (
                    <Item key={item.id} data={item} />
                )
            })}
        </div>
    )
}

export default Index;