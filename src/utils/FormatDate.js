

export function FormatDate(date){

    return new Date(date).toLocaleDateString('pt-BR', {


        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
       
   })

}
