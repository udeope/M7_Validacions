const form = document.getElementById('idForm');

function cercaValidate() {
    var acumErrores = 0;

    form.classList.remove('is-invalid');

    var inputCerca = document.forms['myForm']['inputCerca'];

    var inputCerca = document.getElementById('inputCerca');

    if(inputCerca.value == '') {
        inputCerca.classList.add("is-invalid");
		document.getElementById("errorCerca").textContent = "Campo obligatorio";
        acumErrores ++;
    } else if(inputCerca.value.length < 4) {
        inputCerca.classList.add("is-invalid");
		document.getElementById("errorCerca").textContent = "Minimo 4 caracteres";
        acumErrores ++;
    }

    if (acumErrores > 0){
        return false;
    }else{
		return true;
	}
}

form.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
    cercaValidate();
}, true);