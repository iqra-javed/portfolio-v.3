function copyToClipBoard() {
    /* Get the text field */
    var copyText = document.getElementById("email");
  
    /* Select the text field */
    copyText.select();
  
    /* Copy the text inside the text field */
    document.execCommand("copy"); 
  }