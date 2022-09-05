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

      timer: 480,
      prevState: 0,
    };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidUpdate() {}

  submitData = () => {};

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

  showConfirmDialogStart = () => {
    return Alert.alert(
      'Anda yakin Memulai Tes ini',
      'Tes Intelegensi Umum (Perhatikan lama waktu pengerjaan, setelah waktu habis maka soal akan tertutup dan jawaban tersimpan otomatis)',
      [
        {
          text: 'Yes',
          onPress: () => this.props.navigation.navigate('DrawerDar'),
        },
        {
          text: 'No',
        },
      ],
    );
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
              fontSize: 20,
              marginLeft: 40,
              marginTop: 5,
              textAlign: 'left',
            }}>
            INTRO TIU
          </Text>
          {/* </TouchableOpacity> */}
        </View>

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
            <Text
              style={{
                textAlign: 'justify',
                color: '#fff8fe',
                fontSize: 18,
              }}>
              Dihadapan anda terdapat soal-soal yang berbentuk gambar. Harap
              diperhatikan, pada bagian atas adalah soal dan dibagian bawahnya
              adalah pilihan jawaban. {'\n'}Contoh 1 : Bila gambar A dikecilkan,
              maka akan diperoleh gambar B. Sekarang, apabila gambar C diakukan
              hal yang serupa, jadi C dikecilkan, maka akan diperoleh
              gambar….???? {'\n'}Gambar 2, maka cara menjawabnya silahkan
              dilingkari gambar ke 2.
            </Text>
            <Image
              style={{
                //
                width: '100%',
                //height: 100,
                // borderRadius: 25,
                resizeMode: 'contain',
              }}
              source={require('../images/tiu/contohtiu.png')}
            />

            <TouchableOpacity
              style={{
                marginBottom: 40,
                backgroundColor: '#ffe7fa',
                paddingVertical: 15,
                marginHorizontal: 5,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 9,
                elevation: 2,
              }}
              onPress={this.showConfirmDialogStart}>
              <Text
                style={{color: '#6d0e5a', fontSize: 18, fontWeight: 'light'}}>
                MULAI
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

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
