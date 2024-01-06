import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native';
import Loader from '../../components/Loader';
import Feather from 'react-native-vector-icons/Feather'
import { Colors } from '../../styles/Styles';
import FontFamily from '../../styles/FontFamily';
import NavigationStrings from '../../navigation/NavigationStrings';
import { GET_POSTS } from '../../config/urls';

const HomeScreen = ({navigation,route}) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await fetch(GET_POSTS);
        const data = await response.json();
        setPosts(data || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      finally{
        setLoading(false);
      }
    };

    fetchData();
  }, [route.params]);

  const renderPostItem = ({ item }) => (
    <View style={styles.postContainer}>
      <Text style={styles.postTitle}>{item.title}</Text>
      <Text style={styles.postBody}>{item.body}</Text>
    </View>
  );

  const renderListEmptyComponent = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>No posts available</Text>
    </View>
  );
  if(loading){
    return <Loader loading={loading}/>
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderPostItem}
        ListEmptyComponent={renderListEmptyComponent}
        showsVerticalScrollIndicator={false}
      />
      <Pressable style={styles.floatingButton} onPress={()=>navigation.navigate(NavigationStrings.ADD_POST_SCREEN)}>
        <Feather name="plus" size={20} color={Colors.white}/>
      </Pressable>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:5
  },
  floatingButton:{
    position:'absolute',
    backgroundColor:Colors.primary,
    bottom:25,
    right:25,
    padding:15,
    borderRadius:100
  },
  postContainer: {
    alignSelf:'center',
    width:"95%",
    padding: 10,
    marginBottom: 10,
    shadowColor: Colors.black,
    shadowOffset: {
    width: 0,
    height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginVertical:5,
    backgroundColor:Colors.white,
    borderRadius:8
  },
  postTitle: {
    fontSize: 16,
    fontFamily:FontFamily.bold,
    marginBottom: 5,
    color:Colors.black
  },
  postBody: {
    fontSize: 14,
    fontFamily:FontFamily.regular,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  emptyText: {
    fontSize: 16,
    color: Colors.gray300,
  },
});
