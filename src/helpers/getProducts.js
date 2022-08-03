
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
