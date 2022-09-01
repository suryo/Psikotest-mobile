import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';

const SignInHeader = props => {
  return (
    <View style={{marginTop: 40, marginBottom: 10}}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          style={{
            width: 200,
            height: 200,
            // resizeMode: 'cover',
          }}
          source={require('../images/logo-griya.png')}
        />
      </View>

      {/* <Text
        style={{
          marginTop: 20,
          fontSize: 28,
          // fontWeight: 'light',
          color: '#ffffff',
          textAlign: 'center',
        }}>
        {props.title}
      </Text> */}
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
