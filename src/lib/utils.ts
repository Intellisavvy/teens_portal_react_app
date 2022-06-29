export const validateEmail = (val: string)=> {
    const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{3,}$/i;
    return val.match(mailRegex);
}





