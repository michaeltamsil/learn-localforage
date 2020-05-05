import localforage from 'localforage';

export const beli = (idBarang) => {
    return dispatch => {
        const run = async () => {
            let data = await localforage.getItem('keranjang');
            data = data || [];
            const barangSudahAda = data.find(item => {
                return item.id == idBarang;
            });

            if (barangSudahAda){
                data = data.map (item => {
                    if (item.id == idBarang){
                        item.jumlah += 1
                    }
                    return item;
                })
            }else {
                data.push({
                    id: idBarang,
                    jumlah : 1
                })
            }
            
            await localforage.setItem('keranjang', data);
            dispatch({ type: 'BELI', data })
        }
        
        run();

        
    }


}