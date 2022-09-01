import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';

const SignInHeader = props => {
  return (
    <View style={{marginTop: 40, marginBottom: 10}}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          style={{
            width: 300,
            height: 52,
            // resizeMode: 'cover',
          }}
          source={require('../images/logo-light.png')}
        />
      </View>

      <Text
        style={{
          marginTop: 40,
          fontSize: 28,
          // fontWeight: 'light',
          color: '#f98441',
          textAlign: 'center',
        }}>
        {props.title}
      </Text>
      <Text
        style={{
          color: '#ffffff',
          textAlign: 'center',
          fontSize: 12,
        }}>
        {props.description}
      </Text>
    </View>
  );
};

export default SignInHeader;
