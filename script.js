
$(document).on('submit','form#encrypt-form',function(){
  
  var message = $('#message-encrypt').val();
  var password = "utyjombor123"
  
  var ciphertext = CryptoJS.AES.encrypt(message, password)
                   .toString();
  
  $('#encrypted-output').val(ciphertext);
  
  return false;
});

$(document).on('submit','form#decrypt-form',function(){
  
  var encrypted = $('#message-decrypt').val();
  var password = "utyjombor123"
  var decrypted = CryptoJS.AES.decrypt(encrypted,password)
                  .toString(CryptoJS.enc.Utf8);
  
  $('#decrypted-output').val(decrypted); 
  
  return false;
});
