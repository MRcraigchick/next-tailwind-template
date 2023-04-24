import { validateEmail, validateText } from "@/util/validation";

const validators = {
  firstname: (val) => {
    const { required, len } = validateText(val, 1, Infinity);
    if (!required) return "Ce champ est obligatoire.";
    if (!len) return "Prenom Invalid.";
    return false;
  },
  lastname: (val) => {
    const { required, len } = validateText(val, 1, Infinity);
    if (!required) return "Ce champ est obligatoire.";
    if (!len) return "Nom Invalid.";
    return false;
  },
  message: (val) => {
    const { required, len } = validateText(val, 5, 150);
    if (!required) return "Ce champ est obligatoire.";
    if (!len) return "Minimum 5 et pas plus de 150 caractères";
    return false;
  },
  email: (val) => {
    const { required, matches } = validateEmail(val);
    if (!required) return "Ce champ est obligatoire.";
    if (!matches) return "Email Invalid.";
    return false;
  },
  checked: (val) => {
    if (!val) return "Vous devez cocher la case pour continuer";
    return false;
  },
};

export default validators;
