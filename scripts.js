$(document).ready(function() {
    // Function to validate password
    function validatePassword(password) {
        var regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        var isValid = regex.test(password);
        console.log("Password validation result:", isValid); // Debugging line
        return isValid;
    }
    

    $('#signInForm').submit(function(event) {
        event.preventDefault(); // Prevent form submission
        var password = $('#password').val();
        console.log("Password:", password); // Debugging line
        if (!validatePassword(password)) {
            alert('Password must be at least 8 characters long and contain at least one letter, one number, and one special character.');
        } else {
            alert('Password is valid.');
        }
    });
    
    // Example of adding similar validation to the SignUp form
    // $('#signUpForm').submit(function(event) {
    //     event.preventDefault(); // Prevent form submission

    //     var name = $('#name').val();
    //     var email = $('#email').val();
    //     var phone = $('#phone').val();
    //     var password = $('#password').val();
    //     var confirmPassword = $('#confirmPassword').val();

    //     // Basic validation
    //     if (name === '' || email === '' || phone === '' || password === '' || confirmPassword === '') {
    //         alert('Please fill in all fields.');
    //     } else if (password !== confirmPassword) {
    //         alert('Passwords do not match.');
    //     } else if (!validatePassword(password)) {
    //         alert('Password must be at least 8 characters long and contain at least one letter, one number, and one special character.');
    //     } else {
    //         // Additional validation can be added here
    //         alert('Sign Up successful!');
    //     }
    // });
});
