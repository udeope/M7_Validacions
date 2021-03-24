


const form = document.getElementById('register');

function registerValidate() {
	var acumErrores = 0;
	
	form.classList.remove('is-invalid');
	
    
	var inputEmail = document.getElementById('inputEmail');
	
    var inputName = document.forms["reg"]["inputName"];
	var inputEmail = document.forms["reg"]["inputEmail"];
	var inputPassword = document.forms["reg"]["inputPassword"];
	var inputConfirmPassword = document.forms["reg"]["inputConfirmPassword"];
	var inputProvince = document.forms["reg"]["inputProvince"];

    if(inputName.value == "") {
		inputName.classList.add("is-invalid");
		document.getElementById("errorName").textContent = "Campo obligatorio";
		acumErrores ++;
	}

	if(inputEmail.value == "") {
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "Campo obligatorio";
        acumErrores ++;
    }else if(!validar_email(inputEmail.value)){
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "No cumple el formato";
		acumErrores ++;
	}

    var lcl = /[a-z]/g;
	var ucl = /[A-Z]/g;
	var numbers = /[0-9]/g;

    if(inputPassword.value == "") {
		inputPassword.classList.add("is-invalid");
		document.getElementById("errorPassword").textContent = "Campo obligatorio";
		acumErrores ++;
	}else if(inputPassword.value.length < 8) {
		inputPassword.classList.add('is-invalid');
		document.getElementById('errorPassword').textContent = 'Minimo 8 caracteres';
		acumErrores ++; 
		} else if(!inputPassword.value.match(lcl)) {
			inputPassword.classList.add('is-invalid');
			document.getElementById('errorPassword').textContent = 'Minimo 1 minuscula';
			acumErrores ++; 
		} else if(!inputPassword.value.match(ucl)) {
			inputPassword.classList.add('is-invalid');
			document.getElementById('errorPassword').textContent = 'Minimo 1 mayuscula';
			acumErrores ++; 
		} else if(!inputPassword.value.match(numbers)) {
			inputPassword.classList.add('is-invalid');
			document.getElementById('errorPassword').textContent = 'Minimo 1 numero';
			acumErrores ++; 
		}
	
    if(inputConfirmPassword.value == "") {
		inputConfirmPassword.classList.add("is-invalid");
		document.getElementById("errorConfirmPassword").textContent = "Campo obligatorio";
		acumErrores ++;
	}

	if(inputPassword.value !== inputConfirmPassword.value) {
		inputConfirmPassword.classList.add("is-invalid");
		document.getElementById("errorConfirmPassword").textContent = "Contrasenas no coinciden";
		acumErrores ++;
	}

    if(inputProvince.value == "") {
		inputProvince.classList.add("is-invalid");
		document.getElementById("errorProvince").textContent = "Provincia es obligatoria";
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
    registerValidate();
}, true);

function validar_email(email) {
	var regex = /^([ña-zA-Z0-9_\.\-])+\@(([ña-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}
