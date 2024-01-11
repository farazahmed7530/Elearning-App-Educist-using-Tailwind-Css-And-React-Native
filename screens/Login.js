import { View, Text,Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { faHeart, faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { HeartIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();

  const handle =  ()=>{
  
        navigation.navigate('Home');
      }
      const [isChecked, setIsChecked] = useState(false);

    return (
    
   <ScrollView className="flex-1 text-3xl">
      <View>      
   <View className='bg-white' >
   <View  className='mt-10 pt-4 pl-4 pr-4 pb mr-4 ml-4 text-lg bg-blue-300' >
   
   <Text style={{color:'#556ee6'}}className='text-lg font-bold mb-1'>Welcome Back!</Text>
  <View  className='flex-row'>
   <Text style={{color:'#556ee6'}} className='text-base mb-2'>
     Sign in to continue to 
     Educist
   </Text>
   <Image source={require('../image/desk.png')} style={{flex:1, width: 100, height: 100 }} resizeMode="cover" />

   </View>
   </View>
  
 

 
        <View className="flex-row "> 
      </View>
        <Text className="  text-lg font-bold ml-4 p-4">Username</Text>
        <TextInput
        placeholder='Enter username'
         className=" border bg-white mb-4 ml-8 mr-8 "style={{
            borderWidth: 1,        
            borderColor: 'rgba(0, 0, 0, 0.3)',            backgroundColor: 'white',

          }}></TextInput>
            
       <Text className="  text-lg font-bold ml-4 p-4">Password</Text>
       <TextInput
        placeholder='Enter username'
         className=" border bg-white mb-4 ml-8 mr-8 "style={{
            borderWidth: 1,        
            borderColor: 'rgba(0, 0, 0, 0.3)',            backgroundColor: 'white',

          }}></TextInput>
          <View>
            <TouchableOpacity className='ml-8'
      style={styles.checkboxContainer}
      onPress={() => setIsChecked(!isChecked)}
    >
      <View style={[styles.checkbox, isChecked && styles.checked]}>
        {isChecked && <Text style={styles.checkmark}>✓</Text>}
      </View>
      <Text style={styles.label}>Remember Me</Text>
    </TouchableOpacity>
    </View>
      
       <TouchableOpacity onPress={handle} className="pt-5" >
              <Text className=" text-white text-center font-bold text-lg p-2 bg-[#556ee6]	 px-3  border border-green-200 ml-8 mr-8">Sign in</Text>
          </TouchableOpacity>
          <TouchableOpacity  className="pt-5 mb-3" >
          <View className='flex-row justify-center' style={{ flex: 1, alignItems: 'center' }}>
          <FontAwesomeIcon className='' icon={faLock}  size={15} color="grey" />
          <Text className=" ml-4  text-lg font-bold  ">Forget your password?</Text>
          </View>
          </TouchableOpacity>
          
          </View>
          <View className='flex-row justify-center mt-10' style={{ flex: 1, alignItems: 'center' }} >
            <Text>© Fri Sep 15 2023. Crafted with  </Text> 
            <FontAwesomeIcon className='' icon={faHeart}  size={15} color="red" />

            <Text>  by Team Educist</Text>
</View>  
</View>       
 </ScrollView>
       
  )
  }
  const styles = StyleSheet.create({
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    checkbox: {
      width: 20,
      height: 20,
       
      borderColor: 'rgba(0, 0, 0, 0.2)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    checked: {
      backgroundColor: '#556ee6',
      borderColor: 'blue',
    },
    checkmark: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#fff',
    },
    label: {
      marginLeft: 8,
      fontSize: 16,
      color: '#333',
    },
  });