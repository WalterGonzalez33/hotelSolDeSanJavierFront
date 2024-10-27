
const formatDate = (date) => {
  const newDate = date.split('/').reverse().join('-')
  return newDate
}
export const validationDate = (startDate, endDate) => {
    const dateRegex1 = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
  const dateRegex2 = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
  let isValidFormat = false;

  if(dateRegex1.test(startDate) === false || dateRegex1.test(endDate) === false){
    if(dateRegex2.test(startDate) === true || dateRegex2.test(endDate) === true){
        isValidFormat = true;
    }
    return {valid: false, msj: 'el formato de fecha es incorrecto'};
  }

  if(isValidFormat){
    const newStartDate = new Date(formatDate(startDate))
    const newEndDate = new Date(formatDate(endDate))
    
    if(newEndDate < newStartDate){
        return {valid: false, msj: 'La fecha de salida no puede ser antes de la entrada'};
    }
  
    return {valid: true, msj: 'fechas verificadas correctamente'};
  }else{
    const newStartDate = new Date(startDate)
    const newEndDate = new Date(endDate)
    
    if(newEndDate < newStartDate){
        return {valid: false, msj: 'La fecha de salida no puede ser antes de la entrada'};
    }
  
    return {valid: true, msj: 'fechas verificadas correctamente'};
  }
}

