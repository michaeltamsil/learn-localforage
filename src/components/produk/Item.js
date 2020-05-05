import React from 'react';
import { connect } from 'react-redux';

import { beli } from './../../actioncreator'

const Item = (props) => {
    const { data } = props;

    const beli = () => {
        props.beli (data.id);
        console.log(`saya beli ${data.nama}`)
    }
    return (
        <div>
            <div><img src={data.imgUrl}/></div>
            <div>{data.nama}</div>
            <div>{data.harga} <button onClick={beli}>Beli</button></div>
        </div>
    )
}

const mapDispatchToProps = { beli }

export default connect(null, mapDispatchToProps)(Item);
