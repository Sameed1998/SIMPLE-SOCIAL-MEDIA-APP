// AddPostScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { Colors } from '../../styles/Styles';
import FontFamily from '../../styles/FontFamily';
import NavigationStrings from '../../navigation/NavigationStrings';
import { showToast } from '../../utils/HelperFunctions';
import { ADD_POST } from '../../config/urls';

const AddPostScreen = ({ navigation }) => {
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostBody, setNewPostBody] = useState('');

  const addNewPost = () => {
    if(newPostTitle && newPostBody){
    fetch(ADD_POST, {
      method: 'POST',
      body: JSON.stringify({
        title: newPostTitle,
        body: newPostBody,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        navigation.navigate(NavigationStrings.HOME_SCREEN, { updatedPost: json });
      })
      .catch((error) => {
        console.error('Error adding new post:', error);
      });
    }
    else{
      showToast("Please Enter Title and Description")
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Post</Text>
      <TextInput
        style={styles.input}
        placeholder="Add Title"
        placeholderTextColor={Colors.gray200}
        value={newPostTitle}
        onChangeText={(text) => setNewPostTitle(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Add Description"
        placeholderTextColor={Colors.gray200}
        value={newPostBody}
        onChangeText={(text) => setNewPostBody(text)}
      />
      <Pressable style={styles.addButton} onPress={addNewPost}>
        <Text style={styles.addButtonText}>Add Post</Text>
      </Pressable>
    </View>
  );
};

export default AddPostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: FontFamily.bold,
    marginBottom: 20,
    color:Colors.primary
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    color:Colors.black,
    width: '100%',
  },
  addButton: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  addButtonText: {
    color: Colors.white,
    fontFamily: FontFamily.bold,
    fontSize: 16,
  },
});
