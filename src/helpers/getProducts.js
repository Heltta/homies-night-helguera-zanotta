import {collection, doc, getDoc, getDocs, getFirestore, query, where} from 'firebase/firestore'

const getItem = (setState, id) =>{
    //Fetches a single doc from the item collection
    //stored at firebase Cloud Firestore
    const db = getFirestore();
    const queryProduct = doc(db, 'items', id);
    getDoc(queryProduct)
        .then(resp => setState ( { id: resp.id, ...resp.data() } ))
        .catch(error => console.log(error));
    return
}

const getCollection = (setState, category) =>{
    //Fetches (and filter if necessary) a collection
    //stored at firebase Cloud Firestore
    const db = getFirestore();
    if(category===undefined){
        const itemColl = collection(db, 'items');
        getDocs(itemColl)
            .then(resp => setState ( resp.docs.map((doc) => ({ id: doc.id, ...doc.data() })) ))
            .catch(error => console.log(error));
    }else{
        const collQuery = query(collection(db, 'items'), where("category", "==",  category));
        getDocs(collQuery)
            .then(resp => setState ( resp.docs.map((doc) => ({ id: doc.id, ...doc.data() })) ))
            .catch(error => console.log(error));
    }
    return
}

export {
    getItem,
    getCollection,
}
