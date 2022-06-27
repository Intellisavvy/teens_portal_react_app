export const validateEmail = (val: string)=> {
    const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{3,}$/i;
    return val.match(mailRegex)
}

export const validateName = (val: string)=> {
    const nameRegex = '^[A-Z a-z]+$';
    return val.match(nameRegex)
}

export const validatePwd = (val: string)=> {
    const pwdRegex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})";
    return val.match(pwdRegex)
}