import { Image, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import DynamicForm from '../../components/DynamicForm'
import formData from '../../utils/form-data.json';
import { Colors } from '../../styles/Styles';
import CustomButton from '../../components/CustomButton';
import { showToast, validateEmail, validatePassword } from '../../utils/HelperFunctions';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/reducers/AuthReducer';
import ImagePath from '../../constants/imagePath';

const AuthScreen = () => {

    const [formValues, setFormValues] = useState({});

    const dispatch =useDispatch();

  const _handleFormChange = (newFormValues) => {
    setFormValues(newFormValues);
  };
  const _handleLogin = () => {
    if (validateEmail(formValues?.Email) && validatePassword(formValues?.Password)) {
    dispatch(login(formValues))
    showToast('Login Successful');
    }
  }

  

  return (
    <View style={styles.container}>
      <Image resizeMode='contain' source={ImagePath.ic_logo} style={styles.logoStyles}/>
      <DynamicForm formData={formData} onFormChange={_handleFormChange}/>
      <CustomButton btnStyles={styles.buttonStyle} onPress={_handleLogin}>Login</CustomButton>
    </View>
  )
}

export default AuthScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.primary,
        alignItems:'center',
        justifyContent:'center'
    },
    buttonStyle:{
        width:"80%"
    },
    logoStyles:{
      width:"80%",
      height:"10%",
      padding:20,
      marginBottom:10
    }
})