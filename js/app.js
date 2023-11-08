function displayDate(){
    const dateNow = new Date();  // fecha de hoy
    const formDate = "La fecha de hoy es: " + dateNow.toLocaleString();
    alert(formDate);
    return formDate;
}