/**
 * For the brave souls who get this far: You are the chosen ones,
 * the valiant knights of programming who toil away, without rest,
 * fixing our most awful code. To you, true saviors, kings of men,
 * I say this: never gonna give you up, never gonna let you down,
 * never gonna run around and desert you. Never gonna make you cry,
 * never gonna say goodbye. Never gonna tell a lie and hurt you.
 */

/**
 * author : Suryo Atmojo <suryoatm@gmail.com>
 * project : INDRACO-SIDAR
 * Start-date : 23-07-2022
 */

import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
  StyleSheet,
  ScrollView,
  Alert,
  Image,
} from 'react-native';
import {StackActions} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SignInHeader from '../components/SignInHeader';
import TextArea from '../components/TextArea';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SelectDropdown from 'react-native-select-dropdown';
import RadioButtonRN from 'radio-buttons-react-native';
const baseUrl = 'http://tes.psikologiuwp.com';
import CountDown from 'react-native-countdown-component';
const data1 = [
  {
    label: 'gambar 1',
    value: 1,
  },
  {
    label: 'gambar 2',
    value: 2,
  },
  {
    label: 'gambar 3',
    value: 3,
  },
  {
    label: 'gambar 4',
    value: 4,
  },
  {
    label: 'gambar 5',
    value: 5,
  },
];
const data2 = [
  {
    label: 'gambar 1',
    value: 1,
  },
  {
    label: 'gambar 2',
    value: 2,
  },
  {
    label: 'gambar 3',
    value: 3,
  },
  {
    label: 'gambar 4',
    value: 4,
  },
  {
    label: 'gambar 5',
    value: 5,
  },
];
const data3 = [
  {
    label: 'gambar 1',
    value: 1,
  },
  {
    label: 'gambar 2',
    value: 2,
  },
  {
    label: 'gambar 3',
    value: 3,
  },
  {
    label: 'gambar 4',
    value: 4,
  },
  {
    label: 'gambar 5',
    value: 5,
  },
];
const data4 = [
  {
    label: 'gambar 1',
    value: 1,
  },
  {
    label: 'gambar 2',
    value: 2,
  },
  {
    label: 'gambar 3',
    value: 3,
  },
  {
    label: 'gambar 4',
    value: 4,
  },
  {
    label: 'gambar 5',
    value: 5,
  },
];
const data5 = [
  {
    label: 'gambar 1',
    value: 1,
  },
  {
    label: 'gambar 2',
    value: 2,
  },
  {
    label: 'gambar 3',
    value: 3,
  },
  {
    label: 'gambar 4',
    value: 4,
  },
  {
    label: 'gambar 5',
    value: 5,
  },
];
const data6 = [
  {
    label: 'gambar 1',
    value: 1,
  },
  {
    label: 'gambar 2',
    value: 2,
  },
  {
    label: 'gambar 3',
    value: 3,
  },
  {
    label: 'gambar 4',
    value: 4,
  },
  {
    label: 'gambar 5',
    value: 5,
  },
];
const data7 = [
  {
    label: 'gambar 1',
    value: 1,
  },
  {
    label: 'gambar 2',
    value: 2,
  },
  {
    label: 'gambar 3',
    value: 3,
  },
  {
    label: 'gambar 4',
    value: 4,
  },
  {
    label: 'gambar 5',
    value: 5,
  },
];
const data8 = [
  {
    label: 'gambar 1',
    value: 1,
  },
  {
    label: 'gambar 2',
    value: 2,
  },
  {
    label: 'gambar 3',
    value: 3,
  },
  {
    label: 'gambar 4',
    value: 4,
  },
  {
    label: 'gambar 5',
    value: 5,
  },
];
const data9 = [
  {
    label: 'gambar 1',
    value: 1,
  },
  {
    label: 'gambar 2',
    value: 2,
  },
  {
    label: 'gambar 3',
    value: 3,
  },
  {
    label: 'gambar 4',
    value: 4,
  },
  {
    label: 'gambar 5',
    value: 5,
  },
];
const data10 = [
  {
    label: 'gambar 1',
    value: 1,
  },
  {
    label: 'gambar 2',
    value: 2,
  },
  {
    label: 'gambar 3',
    value: 3,
  },
  {
    label: 'gambar 4',
    value: 4,
  },
  {
    label: 'gambar 5',
    value: 5,
  },
];
const data11 = [
  {
    label: 'gambar 1',
    value: 1,
  },
  {
    label: 'gambar 2',
    value: 2,
  },
  {
    label: 'gambar 3',
    value: 3,
  },
  {
    label: 'gambar 4',
    value: 4,
  },
  {
    label: 'gambar 5',
    value: 5,
  },
];
const data12 = [
  {
    label: 'gambar 1',
    value: 1,
  },
  {
    label: 'gambar 2',
    value: 2,
  },
  {
    label: 'gambar 3',
    value: 3,
  },
  {
    label: 'gambar 4',
    value: 4,
  },
  {
    label: 'gambar 5',
    value: 5,
  },
];
const data13 = [
  {
    label: 'gambar 1',
    value: 1,
  },
  {
    label: 'gambar 2',
    value: 2,
  },
  {
    label: 'gambar 3',
    value: 3,
  },
  {
    label: 'gambar 4',
    value: 4,
  },
  {
    label: 'gambar 5',
    value: 5,
  },
];
const data14 = [
  {
    label: 'gambar 1',
    value: 1,
  },
  {
    label: 'gambar 2',
    value: 2,
  },
  {
    label: 'gambar 3',
    value: 3,
  },
  {
    label: 'gambar 4',
    value: 4,
  },
  {
    label: 'gambar 5',
    value: 5,
  },
];
const data15 = [
  {
    label: 'gambar 1',
    value: 1,
  },
  {
    label: 'gambar 2',
    value: 2,
  },
  {
    label: 'gambar 3',
    value: 3,
  },
  {
    label: 'gambar 4',
    value: 4,
  },
  {
    label: 'gambar 5',
    value: 5,
  },
];
const data16 = [
  {
    label: 'gambar 1',
    value: 1,
  },
  {
    label: 'gambar 2',
    value: 2,
  },
  {
    label: 'gambar 3',
    value: 3,
  },
  {
    label: 'gambar 4',
    value: 4,
  },
  {
    label: 'gambar 5',
    value: 5,
  },
];
const data17 = [
  {
    label: 'gambar 1',
    value: 1,
  },
  {
    label: 'gambar 2',
    value: 2,
  },
  {
    label: 'gambar 3',
    value: 3,
  },
  {
    label: 'gambar 4',
    value: 4,
  },
  {
    label: 'gambar 5',
    value: 5,
  },
];
const data18 = [
  {
    label: 'gambar 1',
    value: 1,
  },
  {
    label: 'gambar 2',
    value: 2,
  },
  {
    label: 'gambar 3',
    value: 3,
  },
  {
    label: 'gambar 4',
    value: 4,
  },
  {
    label: 'gambar 5',
    value: 5,
  },
];
const data19 = [
  {
    label: 'gambar 1',
    value: 1,
  },
  {
    label: 'gambar 2',
    value: 2,
  },
  {
    label: 'gambar 3',
    value: 3,
  },
  {
    label: 'gambar 4',
    value: 4,
  },
  {
    label: 'gambar 5',
    value: 5,
  },
];
const data20 = [
  {
    label: 'gambar 1',
    value: 1,
  },
  {
    label: 'gambar 2',
    value: 2,
  },
  {
    label: 'gambar 3',
    value: 3,
  },
  {
    label: 'gambar 4',
    value: 4,
  },
  {
    label: 'gambar 5',
    value: 5,
  },
];
const data21 = [
  {
    label: 'gambar 1',
    value: 1,
  },
  {
    label: 'gambar 2',
    value: 2,
  },
  {
    label: 'gambar 3',
    value: 3,
  },
  {
    label: 'gambar 4',
    value: 4,
  },
  {
    label: 'gambar 5',
    value: 5,
  },
];
const data22 = [
  {
    label: 'gambar 1',
    value: 1,
  },
  {
    label: 'gambar 2',
    value: 2,
  },
  {
    label: 'gambar 3',
    value: 3,
  },
  {
    label: 'gambar 4',
    value: 4,
  },
  {
    label: 'gambar 5',
    value: 5,
  },
];
const data23 = [
  {
    label: 'gambar 1',
    value: 1,
  },
  {
    label: 'gambar 2',
    value: 2,
  },
  {
    label: 'gambar 3',
    value: 3,
  },
  {
    label: 'gambar 4',
    value: 4,
  },
  {
    label: 'gambar 5',
    value: 5,
  },
];
const data24 = [
  {
    label: 'gambar 1',
    value: 1,
  },
  {
    label: 'gambar 2',
    value: 2,
  },
  {
    label: 'gambar 3',
    value: 3,
  },
  {
    label: 'gambar 4',
    value: 4,
  },
  {
    label: 'gambar 5',
    value: 5,
  },
];
const data25 = [
  {
    label: 'gambar 1',
    value: 1,
  },
  {
    label: 'gambar 2',
    value: 2,
  },
  {
    label: 'gambar 3',
    value: 3,
  },
  {
    label: 'gambar 4',
    value: 4,
  },
  {
    label: 'gambar 5',
    value: 5,
  },
];
const data26 = [
  {
    label: 'gambar 1',
    value: 1,
  },
  {
    label: 'gambar 2',
    value: 2,
  },
  {
    label: 'gambar 3',
    value: 3,
  },
  {
    label: 'gambar 4',
    value: 4,
  },
  {
    label: 'gambar 5',
    value: 5,
  },
];
const data27 = [
  {
    label: 'gambar 1',
    value: 1,
  },
  {
    label: 'gambar 2',
    value: 2,
  },
  {
    label: 'gambar 3',
    value: 3,
  },
  {
    label: 'gambar 4',
    value: 4,
  },
  {
    label: 'gambar 5',
    value: 5,
  },
];
const data28 = [
  {
    label: 'gambar 1',
    value: 1,
  },
  {
    label: 'gambar 2',
    value: 2,
  },
  {
    label: 'gambar 3',
    value: 3,
  },
  {
    label: 'gambar 4',
    value: 4,
  },
  {
    label: 'gambar 5',
    value: 5,
  },
];
const data29 = [
  {
    label: 'gambar 1',
    value: 1,
  },
  {
    label: 'gambar 2',
    value: 2,
  },
  {
    label: 'gambar 3',
    value: 3,
  },
  {
    label: 'gambar 4',
    value: 4,
  },
  {
    label: 'gambar 5',
    value: 5,
  },
];
const data30 = [
  {
    label: 'gambar 1',
    value: 1,
  },
  {
    label: 'gambar 2',
    value: 2,
  },
  {
    label: 'gambar 3',
    value: 3,
  },
  {
    label: 'gambar 4',
    value: 4,
  },
  {
    label: 'gambar 5',
    value: 5,
  },
];

// const dateDropdownRef = useRef();
// const baseUrl = 'http://localhost/sidar-new';
class Dar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      datalogin: [],
      iduser: '',

      id: '',
      // id_user: '',
      namakaryawan: '',
      nodar: '',
      ke: '',
      namacc1: '',
      namacc2: '',
      namacc3: '',
      namacc4: '',
      namacc5: '',
      ke2: '',
      ke3: '',
      ke4: '',
      ke5: '',
      sudahbaca: '',
      tanggaldar: '',
      tanggal: '',
      jam: '11:51',
      status: '',
      colorstatus: '',
      activity: 'tanggal 27 ini dari mobile',
      result: 'tanggal 27 ini dari mobile',
      plan: 'tanggal 27 ini dari mobile',
      tag: '',
      file: '',
      periodetanggaldar: [],

      //state post
      jwb1: '',
      jwb2: '',
      jwb3: '',
      jwb4: '',
      jwb5: '',
      jwb6: '',
      jwb7: '',
      jwb8: '',
      jwb9: '',
      jwb10: '',
      jwb11: '',
      jwb12: '',
      jwb13: '',
      jwb14: '',
      jwb15: '',
      jwb16: '',
      jwb17: '',
      jwb18: '',
      jwb19: '',
      jwb20: '',
      jwb21: '',
      jwb22: '',
      jwb23: '',
      jwb24: '',
      jwb25: '',
      jwb26: '',
      jwb27: '',
      jwb28: '',
      jwb29: '',
      jwb30: '',

      timetosave: 0,
    };
  }

  componentDidMount() {
    // this.unsubsribe = this.props.navigation.addListener('focus', () => {
    // this.interval = setInterval(
    //   () => this.setState(prevState => ({timer: prevState.timer - 1})),
    //   1000,
    // );
    AsyncStorage.getItem('@storage_Key').then(value => {
      console.log('coba get value token');
      console.log(value);
      this.setState({token: value});
      tokens = value;

      axios({
        method: 'get',
        url: `${baseUrl}/api/user/profile`,
        headers: {
          'X-Api-Key': '0ED40DE05125623C8753B6D3196C18DE',
          // 'X-Token':
          //   'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImlkIjoiMSJ9LCJpYXQiOjE2NTk0MjA3MDIsImV4cCI6MTY1OTUwNzEwMn0.rMxjxCy1sBDujijf2aEl1DMEKQJXicMW0itDO_mwnLY',
          'X-Token': value,
        },
      })
        .then(responseprofile => {
          console.log('ini profile user');
          console.log(responseprofile.data);
          console.log(responseprofile.data.tglhariini);
          console.log(responseprofile.data.statusdar);
          console.log(responseprofile.data.periodetanggaldar);
          console.log('ini axios di dlam sync');
          console.log(responseprofile.data.data.user.id_karyawan);
          console.log(this.state.token);

          // if (responseprofile.data.periodetanggaldar.length === 0) {
          //   console.log('periode tanggal dar kosong');
          //   this.setState({tanggaldar: responseprofile.data.tglhariini});
          // } else {
          //   this.setState({
          //     tanggaldar: responseprofile.data.periodetanggaldar[0],
          //   });
          // }
          this.setState({
            status: responseprofile.data.statusdar,
            periodetanggaldar: responseprofile.data.periodetanggaldar,
            datalogin: responseprofile.data.data.user,
            iduser: responseprofile.data.data.user.id_karyawan,
            tanggal: responseprofile.data.tglhariini,
            // tanggaldar: responseprofile.data.periodetanggaldar[0],
          });
          let iduser = responseprofile.data.data.user.id_karyawan;
          console.log('id_user');
          console.log(iduser);
          console.log(this.state.tanggaldar);
          //ambild data di server bisa dilakukan disini
          // axios({
          //   method: 'get',
          //   url: `${baseUrl}/api/sidar_dar/detail?option=2&iduser=${iduser}`,
          //   headers: {
          //     'X-Api-Key': '0ED40DE05125623C8753B6D3196C18DE',
          //     'X-Token': this.state.token,
          //   },
          // })
          //   .then(response => {
          //     this.setState({dar: response.data.data.sidar_dar});
          //   })
          //   .catch(function (err) {
          //     console.log(err);
          //   });
        })
        .catch(function (err) {
          console.log(err);
        });
    });
  }

  componentWillUnmount() {}

  componentDidUpdate() {}

  timetosubmitData = () => {
    console.log('submit bin simpan');
    this.setState({timetosave: 1});
    alert('finished');
  };

  submitData = () => {
    alert('finished');
    console.log('tombol simpan mengirimkan data');
    console.log('ini jawab');
    console.log(this.state.jwb1);
    console.log(this.state.jwb2);
    var bodyFormData = new FormData();
    bodyFormData.append('no_pendaftaran', this.state.iduser);
    bodyFormData.append('jwb1', this.state.jwb1);
    bodyFormData.append('jwb2', this.state.jwb2);
    bodyFormData.append('jwb3', this.state.jwb3);
    bodyFormData.append('jwb4', this.state.jwb4);
    bodyFormData.append('jwb5', this.state.jwb5);
    bodyFormData.append('jwb6', this.state.jwb6);
    bodyFormData.append('jwb7', this.state.jwb7);
    bodyFormData.append('jwb8', this.state.jwb8);
    bodyFormData.append('jwb9', this.state.jwb9);
    bodyFormData.append('jwb10', this.state.jwb10);
    bodyFormData.append('jwb11', this.state.jwb11);
    bodyFormData.append('jwb12', this.state.jwb12);
    bodyFormData.append('jwb13', this.state.jwb13);
    bodyFormData.append('jwb14', this.state.jwb14);
    bodyFormData.append('jwb15', this.state.jwb15);
    bodyFormData.append('jwb16', this.state.jwb16);
    bodyFormData.append('jwb17', this.state.jwb17);
    bodyFormData.append('jwb18', this.state.jwb18);
    bodyFormData.append('jwb19', this.state.jwb19);
    bodyFormData.append('jwb20', this.state.jwb20);
    bodyFormData.append('jwb21', this.state.jwb21);
    bodyFormData.append('jwb22', this.state.jwb22);
    bodyFormData.append('jwb23', this.state.jwb23);
    bodyFormData.append('jwb24', this.state.jwb24);
    bodyFormData.append('jwb25', this.state.jwb25);
    bodyFormData.append('jwb26', this.state.jwb26);
    bodyFormData.append('jwb27', this.state.jwb27);
    bodyFormData.append('jwb28', this.state.jwb28);
    bodyFormData.append('jwb29', this.state.jwb29);
    bodyFormData.append('jwb30', this.state.jwb30);

    axios({
      method: 'post',
      url: `${baseUrl}/api/tiu_models/add`,
      data: bodyFormData,
      headers: {
        'Content-Type': 'multipart/form-data',
        'X-Api-Key': '0ED40DE05125623C8753B6D3196C18DE',
        'X-Token': this.state.token,
      },
    })
      .then(response => {
        if (response.data.status == true) {
          this.props.navigation.dispatch(
            StackActions.replace('HomeScreen', {}),
          );
        } else {
          alert('periksa kembali inputan  anda');
        }
      })
      .catch(function (err) {
        console.log(err);
        alert('periksa kembali inputan anda');
      });
  };

  logout = async () => {
    console.log('logout');
    try {
      AsyncStorage.removeItem('@storage_Key');
      try {
        this.props.navigation.navigate('Login');
      } catch (error) {
        console.error(error);
      }
    } catch (e) {}
  };

  showConfirmDialog = () => {
    return Alert.alert('Are your sure?', 'Logout', [
      {
        text: 'Yes',
        onPress: () => {
          this.logout();
        },
      },
      {
        text: 'No',
      },
    ]);
  };

  render() {
    return (
      <View style={{backgroundColor: '#fff8fe', flex: 1}}>
        <View
          style={{
            marginTop: 30,
            padding: 10,
            backgroundColor: '#5b0b4b',
            display: 'flex',
            flexDirection: 'row',
            paddingVertical: 10,

            // borderBottomRightRadius: 12,
            // borderBottomLeftRadius: 12,
          }}>
          <TouchableOpacity
            style={{
              borderRadius: 5,
              padding: 1,
            }}
            onPress={() => this.props.navigation.toggleDrawer()}>
            <Icon name="bars" size={30} color="#ffe7fa" />
          </TouchableOpacity>

          <Text
            style={{
              color: '#ffe7fa',
              fontSize: 12,
              marginLeft: 20,
              marginTop: 5,
            }}>
            Hi, {this.state.datalogin.username}
            {/* - {this.state.iduser} */}
            {'\n'}Anda terakhir login pada, {this.state.datalogin.last_login}
            {/* {'\n'}status absen masuk, {this.state.statusabsenmasuk}
            {'\n'}status absen keluar, {this.state.statusabsenkeluar} */}
            {/* token, {this.state.token} */}
          </Text>
          <Text
            style={{
              color: '#ffe7fa',
              fontSize: 20,
              marginLeft: 40,
              marginTop: 5,
              textAlign: 'left',
            }}>
            TIU
          </Text>
          {/* </TouchableOpacity> */}
        </View>
        {this.state.timetosave == 0 ? (
          <ScrollView style={{flexDirection: 'column', marginBottom: 20}}>
            <View
              style={{
                marginHorizontal: 5,
                // marginBottom: 10,
                marginTop: 5,
                padding: 10,
                backgroundColor: '#5b0b4b',
                paddingVertical: 10,
                // borderTopRightRadius: 12,
                // borderTopLeftRadius: 12,
                // borderBottomRightRadius: 12,
                // borderBottomLeftRadius: 12,
              }}>
              <CountDown
                until={480}
                onFinish={this.timetosubmitData}
                onPress={() => alert('hello')}
                size={40}
              />
            </View>

            <View
              style={{
                marginHorizontal: 5,
                marginBottom: 10,
                marginTop: 5,
                padding: 10,
                backgroundColor: '#5b0b4b',
                paddingVertical: 10,
                borderTopRightRadius: 12,
                borderTopLeftRadius: 12,
                borderBottomRightRadius: 12,
                borderBottomLeftRadius: 12,
              }}>
              <Text
                style={{
                  color: '#fff8fe',
                  fontSize: 18,
                }}>
                Soal 1
              </Text>

              <Image
                style={{
                  width: '100%',
                  height: 100,
                  // borderRadius: 25,
                  resizeMode: 'contain',
                }}
                source={require('../images/tiu/tiu1.png')}
              />
              <RadioButtonRN
                data={data1}
                selectedBtn={e => this.setState({jwb1: e.value})}
                icon={<Icon name="check-circle" size={25} color="#2c9dd1" />}
              />
            </View>
            <View
              style={{
                marginHorizontal: 5,
                marginBottom: 10,
                marginTop: 5,
                padding: 10,
                backgroundColor: '#5b0b4b',
                paddingVertical: 10,
                borderTopRightRadius: 12,
                borderTopLeftRadius: 12,
                borderBottomRightRadius: 12,
                borderBottomLeftRadius: 12,
              }}>
              <Text
                style={{
                  color: '#fff8fe',
                  fontSize: 18,
                }}>
                Soal 2
              </Text>

              <Image
                style={{
                  width: '100%',
                  height: 100,
                  // borderRadius: 25,
                  resizeMode: 'contain',
                }}
                source={require('../images/tiu/tiu2.png')}
              />
              <RadioButtonRN
                data={data1}
                selectedBtn={e => this.setState({jwb2: e.value})}
                icon={<Icon name="check-circle" size={25} color="#2c9dd1" />}
              />
            </View>
            <View
              style={{
                marginHorizontal: 5,
                marginBottom: 10,
                marginTop: 5,
                padding: 10,
                backgroundColor: '#5b0b4b',
                paddingVertical: 10,
                borderTopRightRadius: 12,
                borderTopLeftRadius: 12,
                borderBottomRightRadius: 12,
                borderBottomLeftRadius: 12,
              }}>
              <Text
                style={{
                  color: '#fff8fe',
                  fontSize: 18,
                }}>
                Soal 3
              </Text>

              <Image
                style={{
                  width: '100%',
                  height: 100,
                  // borderRadius: 25,
                  resizeMode: 'contain',
                }}
                source={require('../images/tiu/tiu3.png')}
              />
              <RadioButtonRN
                data={data3}
                selectedBtn={e => this.setState({jwb3: e.value})}
                icon={<Icon name="check-circle" size={25} color="#2c9dd1" />}
              />
            </View>
            <View
              style={{
                marginHorizontal: 5,
                marginBottom: 10,
                marginTop: 5,
                padding: 10,
                backgroundColor: '#5b0b4b',
                paddingVertical: 10,
                borderTopRightRadius: 12,
                borderTopLeftRadius: 12,
                borderBottomRightRadius: 12,
                borderBottomLeftRadius: 12,
              }}>
              <Text
                style={{
                  color: '#fff8fe',
                  fontSize: 18,
                }}>
                Soal 4
              </Text>

              <Image
                style={{
                  width: '100%',
                  height: 100,
                  // borderRadius: 25,
                  resizeMode: 'contain',
                }}
                source={require('../images/tiu/tiu4.png')}
              />
              <RadioButtonRN
                data={data4}
                selectedBtn={e => this.setState({jwb4: e.value})}
                icon={<Icon name="check-circle" size={25} color="#2c9dd1" />}
              />
            </View>
            <View
              style={{
                marginHorizontal: 5,
                marginBottom: 10,
                marginTop: 5,
                padding: 10,
                backgroundColor: '#5b0b4b',
                paddingVertical: 10,
                borderTopRightRadius: 12,
                borderTopLeftRadius: 12,
                borderBottomRightRadius: 12,
                borderBottomLeftRadius: 12,
              }}>
              <Text
                style={{
                  color: '#fff8fe',
                  fontSize: 18,
                }}>
                Soal 5
              </Text>

              <Image
                style={{
                  width: '100%',
                  height: 100,
                  // borderRadius: 25,
                  resizeMode: 'contain',
                }}
                source={require('../images/tiu/tiu5.png')}
              />
              <RadioButtonRN
                data={data5}
                selectedBtn={e => this.setState({jwb5: e.value})}
                icon={<Icon name="check-circle" size={25} color="#2c9dd1" />}
              />
            </View>
            <View
              style={{
                marginHorizontal: 5,
                marginBottom: 10,
                marginTop: 5,
                padding: 10,
                backgroundColor: '#5b0b4b',
                paddingVertical: 10,
                borderTopRightRadius: 12,
                borderTopLeftRadius: 12,
                borderBottomRightRadius: 12,
                borderBottomLeftRadius: 12,
              }}>
              <Text
                style={{
                  color: '#fff8fe',
                  fontSize: 18,
                }}>
                Soal 6
              </Text>

              <Image
                style={{
                  width: '100%',
                  height: 100,
                  // borderRadius: 25,
                  resizeMode: 'contain',
                }}
                source={require('../images/tiu/tiu6.png')}
              />
              <RadioButtonRN
                data={data6}
                selectedBtn={e => this.setState({jwb6: e.value})}
                icon={<Icon name="check-circle" size={25} color="#2c9dd1" />}
              />
            </View>
            <View
              style={{
                marginHorizontal: 5,
                marginBottom: 10,
                marginTop: 5,
                padding: 10,
                backgroundColor: '#5b0b4b',
                paddingVertical: 10,
                borderTopRightRadius: 12,
                borderTopLeftRadius: 12,
                borderBottomRightRadius: 12,
                borderBottomLeftRadius: 12,
              }}>
              <Text
                style={{
                  color: '#fff8fe',
                  fontSize: 18,
                }}>
                Soal 7
              </Text>

              <Image
                style={{
                  width: '100%',
                  height: 100,
                  // borderRadius: 25,
                  resizeMode: 'contain',
                }}
                source={require('../images/tiu/tiu7.png')}
              />
              <RadioButtonRN
                data={data7}
                selectedBtn={e => this.setState({jwb7: e.value})}
                icon={<Icon name="check-circle" size={25} color="#2c9dd1" />}
              />
            </View>
            <View
              style={{
                marginHorizontal: 5,
                marginBottom: 10,
                marginTop: 5,
                padding: 10,
                backgroundColor: '#5b0b4b',
                paddingVertical: 10,
                borderTopRightRadius: 12,
                borderTopLeftRadius: 12,
                borderBottomRightRadius: 12,
                borderBottomLeftRadius: 12,
              }}>
              <Text
                style={{
                  color: '#fff8fe',
                  fontSize: 18,
                }}>
                Soal 8
              </Text>

              <Image
                style={{
                  width: '100%',
                  height: 100,
                  // borderRadius: 25,
                  resizeMode: 'contain',
                }}
                source={require('../images/tiu/tiu8.png')}
              />
              <RadioButtonRN
                data={data8}
                selectedBtn={e => this.setState({jwb8: e.value})}
                icon={<Icon name="check-circle" size={25} color="#2c9dd1" />}
              />
            </View>
            <View
              style={{
                marginHorizontal: 5,
                marginBottom: 10,
                marginTop: 5,
                padding: 10,
                backgroundColor: '#5b0b4b',
                paddingVertical: 10,
                borderTopRightRadius: 12,
                borderTopLeftRadius: 12,
                borderBottomRightRadius: 12,
                borderBottomLeftRadius: 12,
              }}>
              <Text
                style={{
                  color: '#fff8fe',
                  fontSize: 18,
                }}>
                Soal 9
              </Text>

              <Image
                style={{
                  width: '100%',
                  height: 100,
                  // borderRadius: 25,
                  resizeMode: 'contain',
                }}
                source={require('../images/tiu/tiu9.png')}
              />
              <RadioButtonRN
                data={data9}
                selectedBtn={e => this.setState({jwb9: e.value})}
                icon={<Icon name="check-circle" size={25} color="#2c9dd1" />}
              />
            </View>
            <View
              style={{
                marginHorizontal: 5,
                marginBottom: 10,
                marginTop: 5,
                padding: 10,
                backgroundColor: '#5b0b4b',
                paddingVertical: 10,
                borderTopRightRadius: 12,
                borderTopLeftRadius: 12,
                borderBottomRightRadius: 12,
                borderBottomLeftRadius: 12,
              }}>
              <Text
                style={{
                  color: '#fff8fe',
                  fontSize: 18,
                }}>
                Soal 10
              </Text>

              <Image
                style={{
                  width: '100%',
                  height: 100,
                  // borderRadius: 25,
                  resizeMode: 'contain',
                }}
                source={require('../images/tiu/tiu10.png')}
              />
              <RadioButtonRN
                data={data10}
                selectedBtn={e => this.setState({jwb10: e.value})}
                icon={<Icon name="check-circle" size={25} color="#2c9dd1" />}
              />
            </View>

            <View
              style={{
                marginHorizontal: 5,
                marginBottom: 10,
                marginTop: 5,
                padding: 10,
                backgroundColor: '#5b0b4b',
                paddingVertical: 10,
                borderTopRightRadius: 12,
                borderTopLeftRadius: 12,
                borderBottomRightRadius: 12,
                borderBottomLeftRadius: 12,
              }}>
              <Text
                style={{
                  color: '#fff8fe',
                  fontSize: 18,
                }}>
                Soal 11
              </Text>

              <Image
                style={{
                  width: '100%',
                  height: 100,
                  // borderRadius: 25,
                  resizeMode: 'contain',
                }}
                source={require('../images/tiu/tiu11.png')}
              />
              <RadioButtonRN
                data={data11}
                selectedBtn={e => this.setState({jwb11: e.value})}
                icon={<Icon name="check-circle" size={25} color="#2c9dd1" />}
              />
            </View>
            <View
              style={{
                marginHorizontal: 5,
                marginBottom: 10,
                marginTop: 5,
                padding: 10,
                backgroundColor: '#5b0b4b',
                paddingVertical: 10,
                borderTopRightRadius: 12,
                borderTopLeftRadius: 12,
                borderBottomRightRadius: 12,
                borderBottomLeftRadius: 12,
              }}>
              <Text
                style={{
                  color: '#fff8fe',
                  fontSize: 18,
                }}>
                Soal 12
              </Text>

              <Image
                style={{
                  width: '100%',
                  height: 100,
                  // borderRadius: 25,
                  resizeMode: 'contain',
                }}
                source={require('../images/tiu/tiu12.png')}
              />
              <RadioButtonRN
                data={data12}
                selectedBtn={e => this.setState({jwb12: e.value})}
                icon={<Icon name="check-circle" size={25} color="#2c9dd1" />}
              />
            </View>
            <View
              style={{
                marginHorizontal: 5,
                marginBottom: 10,
                marginTop: 5,
                padding: 10,
                backgroundColor: '#5b0b4b',
                paddingVertical: 10,
                borderTopRightRadius: 12,
                borderTopLeftRadius: 12,
                borderBottomRightRadius: 12,
                borderBottomLeftRadius: 12,
              }}>
              <Text
                style={{
                  color: '#fff8fe',
                  fontSize: 18,
                }}>
                Soal 13
              </Text>

              <Image
                style={{
                  width: '100%',
                  height: 100,
                  // borderRadius: 25,
                  resizeMode: 'contain',
                }}
                source={require('../images/tiu/tiu13.png')}
              />
              <RadioButtonRN
                data={data13}
                selectedBtn={e => this.setState({jwb13: e.value})}
                icon={<Icon name="check-circle" size={25} color="#2c9dd1" />}
              />
            </View>
            <View
              style={{
                marginHorizontal: 5,
                marginBottom: 10,
                marginTop: 5,
                padding: 10,
                backgroundColor: '#5b0b4b',
                paddingVertical: 10,
                borderTopRightRadius: 12,
                borderTopLeftRadius: 12,
                borderBottomRightRadius: 12,
                borderBottomLeftRadius: 12,
              }}>
              <Text
                style={{
                  color: '#fff8fe',
                  fontSize: 18,
                }}>
                Soal 14
              </Text>

              <Image
                style={{
                  width: '100%',
                  height: 100,
                  // borderRadius: 25,
                  resizeMode: 'contain',
                }}
                source={require('../images/tiu/tiu14.png')}
              />
              <RadioButtonRN
                data={data14}
                selectedBtn={e => this.setState({jwb14: e.value})}
                icon={<Icon name="check-circle" size={25} color="#2c9dd1" />}
              />
            </View>
            <View
              style={{
                marginHorizontal: 5,
                marginBottom: 10,
                marginTop: 5,
                padding: 10,
                backgroundColor: '#5b0b4b',
                paddingVertical: 10,
                borderTopRightRadius: 12,
                borderTopLeftRadius: 12,
                borderBottomRightRadius: 12,
                borderBottomLeftRadius: 12,
              }}>
              <Text
                style={{
                  color: '#fff8fe',
                  fontSize: 18,
                }}>
                Soal 15
              </Text>

              <Image
                style={{
                  width: '100%',
                  height: 100,
                  // borderRadius: 25,
                  resizeMode: 'contain',
                }}
                source={require('../images/tiu/tiu15.png')}
              />
              <RadioButtonRN
                data={data15}
                selectedBtn={e => this.setState({jwb15: e.value})}
                icon={<Icon name="check-circle" size={25} color="#2c9dd1" />}
              />
            </View>
            <View
              style={{
                marginHorizontal: 5,
                marginBottom: 10,
                marginTop: 5,
                padding: 10,
                backgroundColor: '#5b0b4b',
                paddingVertical: 10,
                borderTopRightRadius: 12,
                borderTopLeftRadius: 12,
                borderBottomRightRadius: 12,
                borderBottomLeftRadius: 12,
              }}>
              <Text
                style={{
                  color: '#fff8fe',
                  fontSize: 18,
                }}>
                Soal 16
              </Text>

              <Image
                style={{
                  width: '100%',
                  height: 100,
                  // borderRadius: 25,
                  resizeMode: 'contain',
                }}
                source={require('../images/tiu/tiu16.png')}
              />
              <RadioButtonRN
                data={data16}
                selectedBtn={e => this.setState({jwb16: e.value})}
                icon={<Icon name="check-circle" size={25} color="#2c9dd1" />}
              />
            </View>
            <View
              style={{
                marginHorizontal: 5,
                marginBottom: 10,
                marginTop: 5,
                padding: 10,
                backgroundColor: '#5b0b4b',
                paddingVertical: 10,
                borderTopRightRadius: 12,
                borderTopLeftRadius: 12,
                borderBottomRightRadius: 12,
                borderBottomLeftRadius: 12,
              }}>
              <Text
                style={{
                  color: '#fff8fe',
                  fontSize: 18,
                }}>
                Soal 17
              </Text>

              <Image
                style={{
                  width: '100%',
                  height: 100,
                  // borderRadius: 25,
                  resizeMode: 'contain',
                }}
                source={require('../images/tiu/tiu17.png')}
              />
              <RadioButtonRN
                data={data17}
                selectedBtn={e => this.setState({jwb17: e.value})}
                icon={<Icon name="check-circle" size={25} color="#2c9dd1" />}
              />
            </View>
            <View
              style={{
                marginHorizontal: 5,
                marginBottom: 10,
                marginTop: 5,
                padding: 10,
                backgroundColor: '#5b0b4b',
                paddingVertical: 10,
                borderTopRightRadius: 12,
                borderTopLeftRadius: 12,
                borderBottomRightRadius: 12,
                borderBottomLeftRadius: 12,
              }}>
              <Text
                style={{
                  color: '#fff8fe',
                  fontSize: 18,
                }}>
                Soal 18
              </Text>

              <Image
                style={{
                  width: '100%',
                  height: 100,
                  // borderRadius: 25,
                  resizeMode: 'contain',
                }}
                source={require('../images/tiu/tiu18.png')}
              />
              <RadioButtonRN
                data={data1}
                selectedBtn={e => this.setState({jwb18: e.value})}
                icon={<Icon name="check-circle" size={25} color="#2c9dd1" />}
              />
            </View>
            <View
              style={{
                marginHorizontal: 5,
                marginBottom: 10,
                marginTop: 5,
                padding: 10,
                backgroundColor: '#5b0b4b',
                paddingVertical: 10,
                borderTopRightRadius: 12,
                borderTopLeftRadius: 12,
                borderBottomRightRadius: 12,
                borderBottomLeftRadius: 12,
              }}>
              <Text
                style={{
                  color: '#fff8fe',
                  fontSize: 18,
                }}>
                Soal 19
              </Text>

              <Image
                style={{
                  width: '100%',
                  height: 100,
                  // borderRadius: 25,
                  resizeMode: 'contain',
                }}
                source={require('../images/tiu/tiu19.png')}
              />
              <RadioButtonRN
                data={data19}
                selectedBtn={e => this.setState({jwb19: e.value})}
                icon={<Icon name="check-circle" size={25} color="#2c9dd1" />}
              />
            </View>
            <View
              style={{
                marginHorizontal: 5,
                marginBottom: 10,
                marginTop: 5,
                padding: 10,
                backgroundColor: '#5b0b4b',
                paddingVertical: 10,
                borderTopRightRadius: 12,
                borderTopLeftRadius: 12,
                borderBottomRightRadius: 12,
                borderBottomLeftRadius: 12,
              }}>
              <Text
                style={{
                  color: '#fff8fe',
                  fontSize: 18,
                }}>
                Soal 20
              </Text>

              <Image
                style={{
                  width: '100%',
                  height: 100,
                  // borderRadius: 25,
                  resizeMode: 'contain',
                }}
                source={require('../images/tiu/tiu20.png')}
              />
              <RadioButtonRN
                data={data20}
                selectedBtn={e => this.setState({jwb20: e.value})}
                icon={<Icon name="check-circle" size={25} color="#2c9dd1" />}
              />
            </View>

            <View
              style={{
                marginHorizontal: 5,
                marginBottom: 10,
                marginTop: 5,
                padding: 10,
                backgroundColor: '#5b0b4b',
                paddingVertical: 10,
                borderTopRightRadius: 12,
                borderTopLeftRadius: 12,
                borderBottomRightRadius: 12,
                borderBottomLeftRadius: 12,
              }}>
              <Text
                style={{
                  color: '#fff8fe',
                  fontSize: 18,
                }}>
                Soal 21
              </Text>

              <Image
                style={{
                  width: '100%',
                  height: 100,
                  // borderRadius: 25,
                  resizeMode: 'contain',
                }}
                source={require('../images/tiu/tiu21.png')}
              />
              <RadioButtonRN
                data={data21}
                selectedBtn={e => this.setState({jwb21: e.value})}
                icon={<Icon name="check-circle" size={25} color="#2c9dd1" />}
              />
            </View>
            <View
              style={{
                marginHorizontal: 5,
                marginBottom: 10,
                marginTop: 5,
                padding: 10,
                backgroundColor: '#5b0b4b',
                paddingVertical: 10,
                borderTopRightRadius: 12,
                borderTopLeftRadius: 12,
                borderBottomRightRadius: 12,
                borderBottomLeftRadius: 12,
              }}>
              <Text
                style={{
                  color: '#fff8fe',
                  fontSize: 18,
                }}>
                Soal 22
              </Text>

              <Image
                style={{
                  width: '100%',
                  height: 100,
                  // borderRadius: 25,
                  resizeMode: 'contain',
                }}
                source={require('../images/tiu/tiu22.png')}
              />
              <RadioButtonRN
                data={data21}
                selectedBtn={e => this.setState({jwb22: e.value})}
                icon={<Icon name="check-circle" size={25} color="#2c9dd1" />}
              />
            </View>
            <View
              style={{
                marginHorizontal: 5,
                marginBottom: 10,
                marginTop: 5,
                padding: 10,
                backgroundColor: '#5b0b4b',
                paddingVertical: 10,
                borderTopRightRadius: 12,
                borderTopLeftRadius: 12,
                borderBottomRightRadius: 12,
                borderBottomLeftRadius: 12,
              }}>
              <Text
                style={{
                  color: '#fff8fe',
                  fontSize: 18,
                }}>
                Soal 23
              </Text>

              <Image
                style={{
                  width: '100%',
                  height: 100,
                  // borderRadius: 25,
                  resizeMode: 'contain',
                }}
                source={require('../images/tiu/tiu23.png')}
              />
              <RadioButtonRN
                data={data23}
                selectedBtn={e => this.setState({jwb23: e.value})}
                icon={<Icon name="check-circle" size={25} color="#2c9dd1" />}
              />
            </View>
            <View
              style={{
                marginHorizontal: 5,
                marginBottom: 10,
                marginTop: 5,
                padding: 10,
                backgroundColor: '#5b0b4b',
                paddingVertical: 10,
                borderTopRightRadius: 12,
                borderTopLeftRadius: 12,
                borderBottomRightRadius: 12,
                borderBottomLeftRadius: 12,
              }}>
              <Text
                style={{
                  color: '#fff8fe',
                  fontSize: 18,
                }}>
                Soal 24
              </Text>

              <Image
                style={{
                  width: '100%',
                  height: 100,
                  // borderRadius: 25,
                  resizeMode: 'contain',
                }}
                source={require('../images/tiu/tiu24.png')}
              />
              <RadioButtonRN
                data={data24}
                selectedBtn={e => this.setState({jwb24: e.value})}
                icon={<Icon name="check-circle" size={25} color="#2c9dd1" />}
              />
            </View>
            <View
              style={{
                marginHorizontal: 5,
                marginBottom: 10,
                marginTop: 5,
                padding: 10,
                backgroundColor: '#5b0b4b',
                paddingVertical: 10,
                borderTopRightRadius: 12,
                borderTopLeftRadius: 12,
                borderBottomRightRadius: 12,
                borderBottomLeftRadius: 12,
              }}>
              <Text
                style={{
                  color: '#fff8fe',
                  fontSize: 18,
                }}>
                Soal 25
              </Text>

              <Image
                style={{
                  width: '100%',
                  height: 100,
                  // borderRadius: 25,
                  resizeMode: 'contain',
                }}
                source={require('../images/tiu/tiu25.png')}
              />
              <RadioButtonRN
                data={data25}
                selectedBtn={e => this.setState({jwb25: e.value})}
                icon={<Icon name="check-circle" size={25} color="#2c9dd1" />}
              />
            </View>
            <View
              style={{
                marginHorizontal: 5,
                marginBottom: 10,
                marginTop: 5,
                padding: 10,
                backgroundColor: '#5b0b4b',
                paddingVertical: 10,
                borderTopRightRadius: 12,
                borderTopLeftRadius: 12,
                borderBottomRightRadius: 12,
                borderBottomLeftRadius: 12,
              }}>
              <Text
                style={{
                  color: '#fff8fe',
                  fontSize: 18,
                }}>
                Soal 26
              </Text>

              <Image
                style={{
                  width: '100%',
                  height: 100,
                  // borderRadius: 25,
                  resizeMode: 'contain',
                }}
                source={require('../images/tiu/tiu26.png')}
              />
              <RadioButtonRN
                data={data26}
                selectedBtn={e => this.setState({jwb26: e.value})}
                icon={<Icon name="check-circle" size={25} color="#2c9dd1" />}
              />
            </View>
            <View
              style={{
                marginHorizontal: 5,
                marginBottom: 10,
                marginTop: 5,
                padding: 10,
                backgroundColor: '#5b0b4b',
                paddingVertical: 10,
                borderTopRightRadius: 12,
                borderTopLeftRadius: 12,
                borderBottomRightRadius: 12,
                borderBottomLeftRadius: 12,
              }}>
              <Text
                style={{
                  color: '#fff8fe',
                  fontSize: 18,
                }}>
                Soal 27
              </Text>

              <Image
                style={{
                  width: '100%',
                  height: 100,
                  // borderRadius: 25,
                  resizeMode: 'contain',
                }}
                source={require('../images/tiu/tiu27.png')}
              />
              <RadioButtonRN
                data={data27}
                selectedBtn={e => this.setState({jwb27: e.value})}
                icon={<Icon name="check-circle" size={25} color="#2c9dd1" />}
              />
            </View>
            <View
              style={{
                marginHorizontal: 5,
                marginBottom: 10,
                marginTop: 5,
                padding: 10,
                backgroundColor: '#5b0b4b',
                paddingVertical: 10,
                borderTopRightRadius: 12,
                borderTopLeftRadius: 12,
                borderBottomRightRadius: 12,
                borderBottomLeftRadius: 12,
              }}>
              <Text
                style={{
                  color: '#fff8fe',
                  fontSize: 18,
                }}>
                Soal 28
              </Text>

              <Image
                style={{
                  width: '100%',
                  height: 100,
                  // borderRadius: 25,
                  resizeMode: 'contain',
                }}
                source={require('../images/tiu/tiu28.png')}
              />
              <RadioButtonRN
                data={data28}
                selectedBtn={e => this.setState({jwb28: e.value})}
                icon={<Icon name="check-circle" size={25} color="#2c9dd1" />}
              />
            </View>
            <View
              style={{
                marginHorizontal: 5,
                marginBottom: 10,
                marginTop: 5,
                padding: 10,
                backgroundColor: '#5b0b4b',
                paddingVertical: 10,
                borderTopRightRadius: 12,
                borderTopLeftRadius: 12,
                borderBottomRightRadius: 12,
                borderBottomLeftRadius: 12,
              }}>
              <Text
                style={{
                  color: '#fff8fe',
                  fontSize: 18,
                }}>
                Soal 29
              </Text>

              <Image
                style={{
                  width: '100%',
                  height: 100,
                  // borderRadius: 25,
                  resizeMode: 'contain',
                }}
                source={require('../images/tiu/tiu29.png')}
              />
              <RadioButtonRN
                data={data29}
                selectedBtn={e => this.setState({jwb29: e.value})}
                icon={<Icon name="check-circle" size={25} color="#2c9dd1" />}
              />
            </View>
            <View
              style={{
                marginHorizontal: 5,
                marginBottom: 10,
                marginTop: 5,
                padding: 10,
                backgroundColor: '#5b0b4b',
                paddingVertical: 10,
                borderTopRightRadius: 12,
                borderTopLeftRadius: 12,
                borderBottomRightRadius: 12,
                borderBottomLeftRadius: 12,
              }}>
              <Text
                style={{
                  color: '#fff8fe',
                  fontSize: 18,
                }}>
                Soal 30
              </Text>

              <Image
                style={{
                  width: '100%',
                  height: 100,
                  // borderRadius: 25,
                  resizeMode: 'contain',
                }}
                source={require('../images/tiu/tiu30.png')}
              />
              <RadioButtonRN
                data={data30}
                selectedBtn={e => this.setState({jwb30: e.value})}
                icon={<Icon name="check-circle" size={25} color="#2c9dd1" />}
              />
            </View>

            <TouchableOpacity
              style={{
                marginBottom: 40,
                backgroundColor: '#6d0e5a',
                paddingVertical: 15,
                marginHorizontal: 5,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 9,
                elevation: 2,
              }}
              onPress={this.submitData}>
              <Text
                style={{color: '#FFFFFF', fontSize: 18, fontWeight: 'light'}}>
                SIMPAN
              </Text>
            </TouchableOpacity>
          </ScrollView>
        ) : (
          <ScrollView style={{flexDirection: 'column', marginBottom: 20}}>
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
            <View
              style={{
                backgroundColor: '#7030a0',
                padding: 25,
                marginLeft: 5,
                marginRight: 5,
                marginBottom: 20,
              }}>
              <Text>
                Waktu Telah Habis, Silahkan tekan tombol simpan dibawah ini
              </Text>
            </View>
            <View>
              <TouchableOpacity
                style={{
                  marginBottom: 40,
                  backgroundColor: '#6d0e5a',
                  paddingVertical: 15,
                  marginHorizontal: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 9,
                  elevation: 2,
                }}
                onPress={this.submitData}>
                <Text
                  style={{color: '#FFFFFF', fontSize: 18, fontWeight: 'light'}}>
                  SIMPAN
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        )}

        <View
          style={{
            backgroundColor: '#6d0e5a',
            flexDirection: 'row',
            paddingVertical: 10,
            borderTopRightRadius: 12,
            borderTopLeftRadius: 12,
          }}>
          {/* Home */}
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => this.props.navigation.navigate('DrawerHome')}>
            <Icon name="home" size={25} color="#ffffff" />
            <Text
              style={{
                color: '#ffffff',
                fontsize: 9,
              }}>
              Home
            </Text>
          </TouchableOpacity>
          {/* DAR */}
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() =>
              this.props.navigation.navigate('DrawerIntrotiu', {
                data: this.state.datalogin,
                token: this.state.token,
              })
            }>
            <Icon name="book" size={20} color="#ffffff" />
            <Text
              style={{
                color: '#ffffff',
                fontsize: 9,
              }}>
              TIU
            </Text>
          </TouchableOpacity>
          {/* Laporan */}
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() =>
              this.props.navigation.navigate('DrawerLaporanDar', {
                data: this.state.datalogin,
                token: this.state.token,
              })
            }>
            <Icon name="book" size={20} color="#ffffff" />
            <Text
              style={{
                color: '#ffffff',
                fontsize: 9,
              }}>
              PAPI
            </Text>
          </TouchableOpacity>

          {/* Cuti */}
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() =>
              this.props.navigation.navigate('DrawerCuti', {
                data: this.state.datalogin,
                token: this.state.token,
              })
            }>
            <Icon name="book" size={20} color="#ffffff" />
            <Text
              style={{
                color: '#ffffff',
                fontsize: 9,
              }}>
              RIASEC
            </Text>
          </TouchableOpacity>

          {/* Logout */}
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={this.showConfirmDialog}>
            <Icon name="sign-out-alt" size={20} color="#ffffff" />
            <Text
              style={{
                color: '#ffffff',
                fontsize: 9,
              }}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textAreaContainer: {
    borderColor: '#c5c5c5',
    backgroundColor: '#000000',
    borderWidth: 1,
    padding: 5,
  },
  textArea: {
    height: 150,
    justifyContent: 'flex-start',
    color: '#393939',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default Dar;
