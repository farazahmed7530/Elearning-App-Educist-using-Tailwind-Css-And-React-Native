import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { HomeIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native'; // Import the navigation hook

export default function DrawerContent() {
  const navigation = useNavigation();

  const navigateToDashboard = () => {
    navigation.navigate('Dashboard');
  };

  const navigateToDataEntry = () => {
    navigation.navigate('DataEntry');
  };

  const navigateToCategory = () => {
    navigation.navigate('Category');
  };

  const navigateToUniversity = () => {
    navigation.navigate('University');
  };

  const navigateToEntryTest = () => {
    navigation.navigate('EntryTest');
  };

  const navigateToAddAnnouncements = () => {
    navigation.navigate('AddAnnouncements');
  };

  const navigateToUserManagement = () => {
    navigation.navigate('UserManagement');
  };

  return (
    <View style={{ backgroundColor: '#333' }}>
      <Text style={{ color: '#6a7187' }}>MENU</Text>
      <View className="flex-row justify-between items-center ml-1 mr-40 mt-4">
        <HomeIcon className='ml-4' color={'#6a7187'} size="30" />
        <TouchableOpacity onPress={navigateToDashboard}>
          <Text style={{ color: '#6a7187' }}>Dashboards</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ color: '#6a7187' }}>SERVICES</Text>
      <View className="flex-row justify-between items-center ml-1 mr-40 mt-4">
        <HomeIcon className='ml-4' color={'#6a7187'} size="30" />
        <TouchableOpacity onPress={navigateToDataEntry}>
          <Text style={{ color: '#6a7187' }}>Data Entry</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-between items-center ml-1 mr-40 mt-4">
        <HomeIcon className='ml-4' color={'#6a7187'} size="30" />
        <TouchableOpacity onPress={navigateToCategory}>
          <Text style={{ color: '#6a7187' }}>Category</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-between items-center ml-1 mr-40 mt-4">
        <HomeIcon className='ml-4' color={'#6a7187'} size="30" />
        <TouchableOpacity onPress={navigateToUniversity}>
          <Text style={{ color: '#6a7187' }}>University</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-between items-center ml-1 mr-40 mt-4">
        <HomeIcon className='ml-4' color={'#6a7187'} size="30" />
        <TouchableOpacity onPress={navigateToEntryTest}>
          <Text style={{ color: '#6a7187' }}>Entry Test</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-between items-center ml-1 mr-40 mt-4">
        <HomeIcon className='ml-4' color={'#6a7187'} size="30" />
        <TouchableOpacity onPress={navigateToAddAnnouncements}>
          <Text style={{ color: '#6a7187' }}>Add Announcements</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-between items-center ml-1 mr-40 mt-4">
        <HomeIcon className='ml-4' color={'#6a7187'} size="30" />
        <TouchableOpacity onPress={navigateToUserManagement}>
          <Text style={{ color: '#6a7187' }}>User Management</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
