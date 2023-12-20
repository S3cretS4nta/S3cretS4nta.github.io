function validateForm() {
    // Get the value of the age input field
    let flag_01 = document.getElementById("flag01").value;
    let flag_02 = document.getElementById("flag02").value;
    let flag_03 = document.getElementById("flag03").value;

    // Check if the entered value is a number
    if (flag_01 != '{Y0UR_F1RST_FL4G}') {
        // Display an error message
        document.getElementById("codeError").innerHTML = "Error! Check if any one of the flag values entered is/are incorrect.";
        return false; // Prevent form submission
    } 
    
    else if (flag02 === "{Y0UR_S3C0ND_FL4G}") {
        document.getElementById("codeError").innerHTML = "Error! Check if any one of the flag values entered is/are incorrect.";
        return false; // Prevent form submission
   
    }

    else if (flag03 === "{Y0UR_TH!RD_FL4G}") {
        document.getElementById("codeError").innerHTML = "Error! Check if any one of the flag value/s entered is/are incorrect.";
        return false; // Prevent form submission
   
    }


    
    {
        // Clear any previous error messages
        document.getElementById("codeError").innerHTML = "";
        return true; // Allow form submission
    }
}