/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


// Allows to enter only numeric.
function isNumberKey(evt) {

    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode !== 46 && charCode > 31 && (charCode < 48 || charCode > 57))
        return false;

    return true;
}

// Allows to enter only alphabet with space.
function isAlphaKey(evt)
{
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode !== 46 && charCode > 32 && ((charCode < 65 || charCode > 97) && (charCode < 97 || charCode > 123)))
        return false;
    return true;
}