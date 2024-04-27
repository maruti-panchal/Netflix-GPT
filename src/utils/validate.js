export const validate = (email, password, name) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  const isNameValid = /^[a-zA-Z]+$/.test(name);
  if (!isNameValid) {
    return "Name Must be Alphabates";
  }
  if (!isEmailValid) {
    return "Email Id is not Valid";
  }
  if (!isPasswordValid) {
    return "Password is not Valid";
  }
  return null;
};
