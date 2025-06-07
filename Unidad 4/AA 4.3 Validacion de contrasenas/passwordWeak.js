
function isPasswordValid(password) {
  return password.length < 8;
}

module.exports = isPasswordValid;

// Esta versión es débil y solo valida la longitud mínima