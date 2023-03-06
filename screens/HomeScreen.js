import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView ,TouchableOpacity } from 'react-native';
import CustomListItem from '../components/CustomListItem';
import { Avatar } from 'react-native-elements';
import{auth ,db} from '../firebase';




const HomeScreen = ({navigation}) => {
    const signOutUser = () =>{
        auth.signOut().then(() => {
            navigation.replace("Login");
        });
    }
  useLayoutEffect(() => {
    navigation.setOptions({
          title: "ASH",
          headerStyle: {backgroundColor: "#3B3486"},
          headerTitleStyle:{ color : "#FCFDF2"},
          headerTintColor: "black",
          headerLeft:() => 
          <View style ={{ marginLeft:1}}>
            <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
            <Avatar rounded source = {{ uri: auth?.currentUser?.photoURL }} />
            </TouchableOpacity>
            
          </View>

         });
  },[]);

    return (
        <SafeAreaView>
            <ScrollView>
                <CustomListItem/>
            </ScrollView>
           
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
