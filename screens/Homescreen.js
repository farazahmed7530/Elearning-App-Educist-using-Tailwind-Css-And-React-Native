// Homescreen.js
import React from 'react';
import { View, Text,Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {ArrowDownTrayIcon, Bars3CenterLeftIcon, BellIcon, Cog6ToothIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowDown, faArrowUp, faLitecoinSign } from '@fortawesome/free-solid-svg-icons';
import { ScrollView } from 'react-native-gesture-handler';
export default function Homescreen() {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
   
   <View className='mx-2 mt-4 bg-white'  >
     <ScrollView> 
      <TouchableOpacity onPress={openDrawer}>
      <View className="flex-row justify-between items-center px-4">
      <View className='pr-20 mr-20'>
      <Bars3CenterLeftIcon color={'#555b6d'} size="30" />

    </View>
    <MagnifyingGlassIcon  color={'#555b6d'} size="30" />

            <BellIcon color={'#555b6d'} size="30" />
            <Cog6ToothIcon color={'#555b6d'} size="30" />
                        </View>
      </TouchableOpacity>
   
      <View className='mt-4'>
      <Text  className='text-lg text-black' >Dashboard</Text>
      </View>
      <View  className='mt-10 ml-1 text-lg bg-white' >
   
      <Text style={{color:'#556ee6'}}className='text-lg font-bold mb-1'>Welcome Back!</Text>
      <Text className='text-base mb-2'>
        Educist Admin Panel Dashboard
      </Text>

      <View className='flex-row items-center ml-2  '>
        <Text className='text-lg text-[#556ee6] mr-2'>•</Text>
        <Text className='text-sm'>
          We provide best Services to our Clients.
        </Text>
      </View>

      <View className='flex-row items-center ml-2 '>
        <Text className='text-lg mr-2 text-[#556ee6] mb-5'>•</Text>
        <Text className='text-sm'>
          We provide best Test Management System to our Clients.
        </Text>
      </View>

      <View className='flex-row items-center '>
        <Text className='text-lg ml-2 text-[#556ee6] mr-2'>•</Text>
        <Text className='text-sm'>
          We provide best Preparation System to our Clients.
        </Text>
      </View>
      <View style={{ width: '100%', aspectRatio: 16 / 9 }}>
  <Image source={require('../image/dash.png')} style={{ flex: 1, width: undefined, height: undefined }} resizeMode="cover" />
</View>

    </View>
    <View  className='mt-10 ml-1 text-lg bg-white' >
    <View className='flex-row'>
      <FontAwesomeIcon icon={['fab', 'bitcoin']} size={30} color="orange" />
   <View>
      
    </View> 
   <Text style={{color:'#556ee6'}} className='text-lg font-bold ml-4 mb-1'>Subscribers</Text>
   </View>

   
   <Text  className='text-lg text-black mt-6'>15</Text>
   <View className='flex-row'>
   <Text  className='text-lg mr-4 mb-5'>+ 0.0012 ( 0.2 %)</Text>
   <View className='mt-2'>
   <FontAwesomeIcon icon={faArrowUp}  size={15} color="#008a00" />
   </View></View>



 </View>   
 <View  className='mt-10 ml-1 text-lg bg-white' >
    <View className='flex-row'>
      <FontAwesomeIcon icon={['fab', 'ethereum']} size={30} color="#1f89e5" />
   <View>
      
    </View> 
   <Text style={{color:'#556ee6'}} className='text-lg font-bold ml-4 mb-1'>Visitors</Text>
   </View>

   
   <Text  className='text-lg text-black mt-6'>15</Text>
   <View className='flex-row'>
   <Text  className='text-lg mr-4 mb-5'>- 0.0012 ( 0.2 %)</Text>
   <View className='mt-2'>
   <FontAwesomeIcon icon={faArrowDown}  size={15} color="#db3700" />
   </View></View>



 </View>   
 <View  className='mt-10 ml-1 text-lg bg-white' >
    <View className='flex-row'>
      <FontAwesomeIcon icon={faLitecoinSign}   size={30} color="blue" />
   <View>
      
    </View> 
   <Text style={{color:'#556ee6'}} className='text-lg font-bold ml-4 mb-1'>Admin</Text>
   </View>

   
   <Text  className='text-lg text-black mt-6'>15</Text>
   <View className='flex-row'>
   <Text  className='text-lg mr-4 mb-5'>+ 0.0012 ( 0.2 %)</Text>
   <View className='mt-2'>
   <FontAwesomeIcon icon={faArrowUp}  size={15} color="#008a00" />
   </View></View>



 </View>   
 </ScrollView>
      </View>
    
  
  );
}
