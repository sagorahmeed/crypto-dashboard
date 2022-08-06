export function capitalize(word = ""){
  return word.charAt(0).toUpperCase() + word.toLocaleLowerCase().slice(1);
}
export function textConstantConvert(word = '', conversionType = 'textToConstant') {
  if(conversionType === 'textToConstant'){
    return word.toUpperCase().split(" ").join("_")
  }
  const capitalizeWord = capitalize(word)
  return capitalizeWord.split('_').join(' ')
}

export function isEmptyObject(object = {}){
  return !Object.keys(object).length
}


export const convertTime12to24 = (time12h) => {
  const [time, modifier] = time12h?.split(' ');

  let [hours, minutes] = time.split(':');

  if (hours === '12') {
    hours = '00';
  }

  if (modifier === 'PM') {
    hours = parseInt(hours, 10) + 12;
  }

  return `${hours}:${minutes}`;
}


function fomartTimeShow(h) {
  var h = h % 12 || 12;
  return (h < 10 ? "0" + h : h)  ;
}
 

export const timeString12hrConverter=(timeString)=>{
  const timeString12hr = new Date('1970-01-01T' + timeString + 'Z')
  .toLocaleTimeString('en-US',
    {timeZone:'UTC',hour12:true,hour:'2-digit',minute:'numeric'}
  );
  

  return timeString12hr;

}

 