const generatePassword = (
  length: number,
  includeLowercase: boolean,
  includeUppercase: boolean,
  includeNumbers: boolean,
  includeSymbols: boolean,
  noSimilarCharacters: boolean,
  noDuplicateCharacters: boolean,
  noSequentialCharacters: boolean
): string => {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_-+=<>?/|";
  let characters = "";

  if (includeLowercase) characters += lowercase;
  if (includeUppercase) characters += uppercase;
  if (includeNumbers) characters += numbers;
  if (includeSymbols) characters += symbols;

  if (noSimilarCharacters) {
    characters = characters.replace(/[il1Lo0O]/g, "");
  }

  let generatedPassword = "";
  const usedCharacters = new Set<string>();

  for (let i = 0; i < length; i++) {
    let char: string;
    do {
      char = characters.charAt(Math.floor(Math.random() * characters.length));
    } while (
      (noDuplicateCharacters && usedCharacters.has(char)) ||
      (noSequentialCharacters && generatedPassword.slice(-2).includes(char))
    );

    generatedPassword += char;
    usedCharacters.add(char);
  }

  return generatedPassword;
};

export default generatePassword;
