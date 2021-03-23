$.validator.setDefaults( {
    submitHandler: function () {
        alert( "Correcto!" );
    }
} );

$( document ).ready( function () {
    $( "#signupForm" ).validate( {
        rules: {
            firstname: "required",
            lastname: "required",
            username: {
                required: true,
                minlength: 2
            },
            password: {
                required: true,
                minlength: 5
            },
            confirm_password: {
                required: true,
                minlength: 5,
                equalTo: "#password"
            },
            email: {
                required: true,
                email: true
            },
            agree: "required"
        },
        messages: {
            firstname: "Introduce tu nombre",
            lastname: "Introduce tu apellido",
            username: {
                required: "Introduce un nick",
                minlength: "Minimo 2 caracteres"
            },
            password: {
                required: "Introduce una contrasena",
                minlength: "Minimo 5 caracteres"
            },
            confirm_password: {
                required: "Introduce una contrasena",
                minlength: "Minimo 5 caracteres",
                equalTo: "Contrasenas no coinciden"
            },
            email: "Introduce email",
            agree: "Acepta nuestras politicas"
        },
        errorElement: "em",
        errorPlacement: function ( error, element ) {
            // Anadir clase invalid-feedback
            error.addClass( "invalid-feedback" );

            if ( element.prop( "type" ) === "checkbox" ) {
                error.insertAfter( element.next( "label" ) );
            } else {
                error.insertAfter( element );
            }
        },
        highlight: function ( element, errorClass, validClass ) {
            $( element ).addClass( "is-invalid" ).removeClass( "is-valid" );
        },
        unhighlight: function (element, errorClass, validClass) {
            $( element ).addClass( "is-valid" ).removeClass( "is-invalid" );
        }
    } );

} );