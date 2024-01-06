import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
import { Colors } from '../styles/Styles';
import FontFamily from '../styles/FontFamily';

const DynamicForm = ({ formData,onFormChange }) => {
  const [formValues, setFormValues] = useState({});
  const [showPassword,setShowPassword] = useState(false);

  const handleInputChange = (key, value) => {
    setFormValues({ ...formValues, [key]: value });
    onFormChange({ ...formValues, [key]: value });
  };
  const _togglePassword = () =>{
    setShowPassword(prev => !prev);
  }

  const renderFormElement = (element) => {
    const { type, label, placeholder } = element;

    switch (type) {
      case 'password':
        return (
          <View style={styles.inputPasswordContainer}>
            <TextInput
              style={styles.inputPassword}
              key={label}
              placeholder={placeholder}
              placeholderTextColor={Colors.gray200}
              onChangeText={(text) => handleInputChange(label, text)}
              secureTextEntry={!showPassword}
            />
            <Entypo name={showPassword?"eye-with-line":"eye"} size={20} onPress={_togglePassword} color={Colors.white}/>
          </View>
        );
      case 'email':
        return (
          <TextInput
            style={styles.input}
            key={label}
            placeholder={placeholder}
            placeholderTextColor={Colors.gray200}
            onChangeText={(text) => handleInputChange(label, text)}
            keyboardType="email-address"
          />
        );
      // Add more cases for other form element types

      default:
        return null;
    }
  };

  return (
    <View  style={styles.inputContainer}>
      {formData.map((element) => (
        <View key={element.label}>
          <Text style={styles.labelText}>{element.label}</Text>
          {renderFormElement(element)}
        </View>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer:{
    width:"80%"
  },
  input: {
    height: 40,
    borderColor: Colors.gray100,
    borderWidth: 1,
    borderRadius:5,
    marginBottom: 10,
    padding: 8,
    width:'100%',
    color:Colors.white,
    fontFamily:FontFamily.regular

  },
  inputPassword: {
    height: 40,
    padding: 8,
    width:'90%',
    color:Colors.white,
    fontFamily:FontFamily.regular
  },
  inputPasswordContainer:{
    height: 40,
    borderColor: Colors.gray100,
    borderWidth: 1,
    borderRadius:5,
    marginBottom: 10,
    width:'100%',
    flexDirection:'row',
    alignItems:'center'
  },
  labelText:{
    color:Colors.white,
    fontFamily:FontFamily.bold
  }
});


export default DynamicForm;
