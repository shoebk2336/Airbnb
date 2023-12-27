

export const FetchData=async(props)=> {

    const url=props?`https://airbnb-gxtx.onrender.com/hotels?q=${props?.search}`:'https://airbnb-gxtx.onrender.com/hotels'
    
    const data = await fetch(url);
    const res = await data.json();
    console.log(res,'res')
    return res
}





