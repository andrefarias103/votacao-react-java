
export function getDateFormat( date: Date): string {     
    const dateFormat = date.toLocaleString('pt-BR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false, 
    });
    const splitDate = dateFormat.split(', ');
    const partDate = splitDate[0].split('/');
    const partHour = splitDate[1].split(':');
    const dateFormatted = `${partDate[2]}-${partDate[1]}-${partDate[0]} ${partHour.join(':')}`;    
    return dateFormatted;
  }

  export function getDateFinal(date_initial: string, date_final: string): Date {    
    const dt_initial = new Date(date_initial);
    let dte_final: Date;
    if (date_final === undefined) {
      dte_final = new Date(dt_initial.setMinutes(dt_initial.getMinutes() + 1));        
    }
    else {
      dte_final = new Date(date_final);
    }    
    return dte_final;
  }

  // export function verifyDateActualIsMinorDateInitial(datetime_initial: string): boolean {

  //   const momentInitial = moment(datetime_initial, 'YYYY-MM-DD HH:mm:ss');
  //   console.log(`1: ${momentInitial}`);
  //   const momentActual = moment(Date.now());
  //   console.log(`1: ${momentActual}`);
  //   return momentActual.isBefore(momentInitial);

  // }