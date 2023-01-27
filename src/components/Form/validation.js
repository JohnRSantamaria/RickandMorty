
const validation = ({username, password})=> {
  const errors = {};
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const regexp_password = /^[a-z0-9_-]{6,10}$/
  //Email Validations   
  if(!username) errors.username = 'enter an email';
  if(username.length > 35) errors.username = 'it is too long' 
  if(!regexEmail.test(username)) errors.username = 'Must be an Email';
  //
  if(!regexp_password.test(password)) errors.password = 'Must contain at least 1 number';
  
  return errors;
}

export default validation;