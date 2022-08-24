import { 
    getDoc,
    getFirestore,
    doc,
} from "firebase/firestore";

const getOrder = (setState, id) =>{
    //Fetches a single doc from the orders collection
    //stored at firebase Cloud Firestore
    //Returns the document with the corresponding id
    //or null if no document with that id exists in the collection
    //Preconditions: id is not undefined, null, nor an empty string.
    const db = getFirestore();
    const queryProduct = doc(db, 'orders', id);
    getDoc(queryProduct)
        .then(resp => {
            //If doc doesn't exist, then set id to null
            (resp.exists())? 
                (setState ( { id: resp.id, ...resp.data() } ))
                :
                (setState ( null ))
            
    })
        .catch(error => console.log(error));
    return
}

export default getOrder
