

export const FetchData=async(props)=> {

    const url=props?`http://localhost:3004/hotels?q=${props?.search}`:'http://localhost:3004/hotels'
    
    const data = await fetch(url);
    const res = await data.json();
    console.log(res,'res')
    return res
}





