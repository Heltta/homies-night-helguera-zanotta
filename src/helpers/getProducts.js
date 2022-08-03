import { doc, getDoc, getFirestore} from 'firebase/firestore'

// const queryProduct = doc(db, 'items', '6jcpup3VRhNlVKPMQ8if');
// getDoc(queryProduct)
//     .then(resp => setBoardGame( { id: resp.id, ...resp.data() } ))
//     .catch(error => console.log(error)
const getItem = (setState) =>{
    //Fetches a single firebase doc from
    //the item collection
    const db = getFirestore();
    //Example id wich corresponds to the game "Spyfall"
    const id = '6jcpup3VRhNlVKPMQ8if';
    const queryProduct = doc(db, 'items', id);
    getDoc(queryProduct)
        .then(resp => setState ( { id: resp.id, ...resp.data() } ))
        .catch(error => console.log(error));
    return
}

const getProducts = (setState) =>{
    try{
        setTimeout(
            ()=>fetch('/resources/tabletopGames.json')
                .then((resp)=> resp.json())
                .then((dataParse) => {
                    setState(dataParse);
            }),
            250
        )

    }catch(error){
        console.log(error);
    };
}

export default getProducts
export {
    getItem,
    getProducts,
}
