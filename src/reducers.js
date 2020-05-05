import localforage from 'localforage'

const initialState = {
    keranjang: localforage.getItem('keranjang')
}


const reducers = (state = initialState, action) => {
    switch (action.type) {
        default: return state;
    }
}


export default reducers;