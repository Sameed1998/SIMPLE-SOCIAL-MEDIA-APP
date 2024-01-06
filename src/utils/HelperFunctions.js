import Toast from 'react-native-simple-toast';

 export const showToast = (message) =>{
    Toast.show(message,Toast.SHORT);
}

export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      showToast("Please enter a valid email address.");
      return false;
    }
    return true;
  };

export const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!passwordRegex.test(password)) {
    showToast("Password must be at least 8 characters long and contain at least one letter and one number.");
      return false;
    }
    return true;
  };

  