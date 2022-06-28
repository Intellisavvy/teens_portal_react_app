export const validateEmail = (val: string)=> {
    const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{3,}$/i;
    return val.match(mailRegex);
}
export const validateName = (val: string)=> {
    const name= "^[A-Za-z]+$";
    return val.match(name)
}
export const validatePwd = (val: string)=> {
    const password="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{7})";
    return val.match(password)
}




