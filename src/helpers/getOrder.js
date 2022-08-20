
const getOrder = (setState, id) =>{
    //Fetches a single doc from the item collection
    //stored at firebase Cloud Firestore
    const db = getFirestore();
    const queryProduct = doc(db, 'orders', id);
    getDoc(queryProduct)
        .then(resp => setState ( { id: resp.id, ...resp.data() } ))
        .catch(error => console.log(error));
    return
}

export default getOrder
