import {format} from 'date-fns'

export const DateFormat=(InputDate)=>{
    
    const inputDate = new Date(InputDate);
    const formattedDate = format(inputDate, 'yyyy-MM-dd');
    return (formattedDate)
}