import React, { useEffect, useState }  from 'react';
import { connect } from 'react-redux';
import localforage from 'localforage';
import axios from 'axios';

const Index = (props) => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        localforage.getItem('keranjang')
            .then( (data) => {
                setData(data || [])
            }
                )
    },  [])

    const checkout = () => {

        axios.post('http://localhost:3000/keranjang', { pembelian : data })
            .then((response) => {

                setData([]);
                localforage.setItem('keranjang', []);
            })
    }

    return (
        <div>
            <h1>Keranjang</h1>
            <div>
                {data.map( (item) => {
                    return (
                        <div>
                            barang dengan id {item.id} dengan jumlah {item.jumlah}
                        </div>
                    )
                })}
                <button onClick={checkout}>check out</button>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        data: state.keranjang
    }
}

export default connect(mapStateToProps)(Index);