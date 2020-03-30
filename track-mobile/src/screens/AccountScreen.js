import React, { Fragment, useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import { FontAwesome } from '@expo/vector-icons';

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Fragment>
        <Text style={{ fontSize: 48 }}>Account Screen</Text>
        <Spacer>
          <Button title='Sign Out' onPress={signout} />
        </Spacer>
      </Fragment>
    </SafeAreaView>
  );
};

AccountScreen.navigationOptions = {
  title: 'Account',
  tabBarIcon: <FontAwesome name='gear' size={20} />
};

export default AccountScreen;

const styles = StyleSheet.create({});
