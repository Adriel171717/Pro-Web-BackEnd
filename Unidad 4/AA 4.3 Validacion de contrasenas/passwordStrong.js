
function isPasswordValid(password) {
  // Validar el tipo
  if (typeof password !== "string") return false;

  // Validar longitud minima
  if (password.length < 8) return false;

  // Reglas de seguridad
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[@#$%^&*()]/.test(password);
  const hasNoSpaces = !/\s/.test(password);

  // Palabras significativas para mi (Animal favorito, Apodo)
  const keywords = ["Jaguar", "Tito"];
  const lowerPass = password.toLowerCase();
  const hasKeyword = keywords.some(word => lowerPass.includes(word.toLowerCase()));

  // Retorna true si cumple con todos los requisitos
  return hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar && hasNoSpaces && hasKeyword;
}

module.exports = isPasswordValid;
