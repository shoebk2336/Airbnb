

const Initial={
    Search:"",
    Date:[],
    ShowCalender:true,
    ShowGuestSelector:false,
    Guests:{},
    Api:[],
    Landing:[]
}

export const SearchReducer=(state=Initial,action)=>{
    const {type,payload}=action
    switch(type){
        case "SearchVal":return {...state,Search:payload}
        case "Date":return {...state,Date:payload}
        case "Calender":return{...state,ShowCalender:payload}
        case "Guest":return {...state,ShowGuestSelector:payload}
        case "GuestQty":return{...state,Guests:payload}
        case "Api":return ({...state,Api:payload})
        case "Landing":return ({...state,Landing:payload})

        default: return state
    }

}