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

const getCategory = (setState, filter) =>{
    //Fetches a category object from firebase Cloud Firestore
    //The category object structure as follows: {banner, filter, name}
    //getCategory() will find the category using its filter instead of its id
    //"banner" is the message that will be displayed as the page header
    //"filter" is the identifier and determinates page URL
    //"name"   is the displayed name that any user will see at the navigation bar
    const db = getFirestore();
    const collQuery = query(collection(db, 'categories'), where("filter", "==",  filter));
    getDocs(collQuery)
        //Filter value is unique, then docs.lenght is equal to 1
        .then(resp => setState ( resp.docs[0].data().banner  ))
        .catch(error => console.log(error));
}

const getAllCategories = (setState) =>{
    //Fetches al category objects stored at firebase Cloud Firestore
    const db = getFirestore();
    const categoryColl = collection(db, 'categories');
    getDocs(categoryColl)
        .then(resp => setState ( resp.docs.map((doc) => ({ id: doc.id, ...doc.data() })) ))
        .catch(error => console.log(error));

}

export {
    getItem,
    getCollection,
    getCategory,
    getAllCategories,
}
