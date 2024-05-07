const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      return "Enter a valid email address."; 
    } else {
      return ""; 
    }
};
  
export default validateEmail;