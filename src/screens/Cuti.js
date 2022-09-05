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

const data1 = [
  {label: 'Saya Menyukai Hal Hal Yang Berkaitan Dengan Otomotif', value: 1},
];

const data2 = [{label: 'Saya menyukai teka - teki', value: 1}];

const data3 = [{label: 'Saya bisa bekerja secara mandiri', value: 1}];

const data4 = [{label: 'Saya suka bekerja dalam tim', value: 1}];

const data5 = [
  {
    label:
      'Saya orang yang ambisius. Saya menetapkan tujuan untuk diri saya sendiri',
    value: 1,
  },
];

const data6 = [
  {
    label:
      'Saya suka mengatur tugas-tugas saya (seperti mengefile, mengatur meja dan kantor)',
    value: 1,
  },
];

const data7 = [{label: 'Saya suka merancang sesuatu', value: 1}];

const data8 = [
  {
    label: 'Saya suka membaca hal-hal yang berkaitan dengan seni dan musik',
    value: 1,
  },
];

const data9 = [{label: 'Saya suka mengikuti instruksi yang jelas', value: 1}];

const data10 = [
  {label: 'Saya suka membujuk atau mempengaruhi orang lain', value: 1},
];

const data11 = [{label: 'Saya suka melakukan eksperimen', value: 1}];

const data12 = [
  {
    label: 'Saya suka mengajar atau memberikan training kepada orang lain',
    value: 1,
  },
];

const data13 = [
  {
    label: 'Saya suka membantu orang lain untuk memecahkan masalah mereka',
    value: 1,
  },
];

const data14 = [{label: 'Saya suka merawat binatang', value: 1}];

const data15 = [
  {
    label:
      'Saya tidak keberatan untuk bekerja selama 8 jam setiap hari dikantor',
    value: 1,
  },
];

const data16 = [{label: 'Saya suka menjual barang', value: 1}];

const data17 = [{label: 'Saya suka menulis kreatif', value: 1}];

const data18 = [
  {
    label: 'Saya menyukai hal-hal yang berhubungan dengan ilmu pengetahuan',
    value: 1,
  },
];

const data19 = [
  {label: 'Saya cepat dalam mengambil tanggung jawab baru', value: 1},
];

const data20 = [
  {
    label: 'Saya menyukai hal-hal yang berkaitan dengan penyembuhan orang',
    value: 1,
  },
];

const data21 = [
  {
    label: 'Saya tertarik untuk mencari tahu bagaimana cara kerja sesuatu',
    value: 1,
  },
];

const data22 = [{label: 'Saya suka merakit dan merangkai sesuatu', value: 1}];

const data23 = [{label: 'Saya orang yang kreatif', value: 1}];

const data24 = [{label: 'Saya suka memperhatikan hal-hal detail', value: 1}];

const data25 = [
  {label: 'Saya suka melakukan mengefile dokumen atau mengetik', value: 1},
];

const data26 = [
  {label: 'Saya suka menganalisis sesuatu (masalah / situasi)', value: 1},
];

const data27 = [
  {label: 'Saya suka memainkan alat musik atau bernyanyi', value: 1},
];

const data28 = [{label: 'Saya suka mempelajari budaya lain', value: 1}];

const data29 = [
  {label: 'Saya ingin memulai bisnis (membuka usaha sendiri)', value: 1},
];

const data30 = [{label: 'Saya suka memasak', value: 1}];

const data31 = [
  {label: 'Saya suka bermain akting dalam suatu drama', value: 1},
];

const data32 = [{label: 'Saya orang yang praktis', value: 1}];

const data33 = [
  {label: 'Saya suka bekerja dengan angka atau grafik', value: 1},
];

const data34 = [{label: 'Saya suka mendiskusikan isu-isu', value: 1}];

const data35 = [
  {
    label:
      'Saya pandai menyimpan catatan yang berhubungan dengan pekerjaan saya',
    value: 1,
  },
];

const data36 = [{label: 'Saya suka memimpin', value: 1}];

const data37 = [{label: 'Saya suka bekerja di luar ruangan', value: 1}];

const data38 = [{label: 'Saya suka bekerja di dalam ruangan', value: 1}];

const data39 = [{label: 'Saya pandai matematika', value: 1}];

const data40 = [{label: 'Saya suka menolong orang', value: 1}];

const data41 = [{label: 'Saya suka menggambar', value: 1}];

const data42 = [{label: 'Saya suka berpidato', value: 1}];

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
      jwb31: '',
      jwb32: '',
      jwb33: '',
      jwb34: '',
      jwb35: '',
      jwb36: '',
      jwb37: '',
      jwb38: '',
      jwb39: '',
      jwb40: '',
      jwb41: '',
      jwb42: '',
    };
  }

  componentDidMount() {
    // this.unsubsribe = this.props.navigation.addListener('focus', () => {

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

    // console.log('hello world');
    // console.log(this.props.route.params.token);
    // console.log(this.props.route.params.data);
    // this.setState({
    //   datalogin: this.props.route.params.data,
    //   token: this.props.route.params.token,
    // });

    // console.log(this.state.token);
    // let iduser = 770;
    //ambild data di server bisa dilakukan disini

    // });
  }

  componentWillUnmount() {
    // this.unsubsribe();
  }

  submitData = () => {
    console.log('tombol simpan mengirimkan data');
    console.log('ini jawab');
    console.log(this.state.jwb1);
    console.log(this.state.jwb2);
    var bodyFormData = new FormData();
    // bodyFormData.append('id', this.state.id);
    // bodyFormData.append('id_user', this.state.iduser);
    // bodyFormData.append('namakaryawan', this.state.namakaryawan);
    // bodyFormData.append('nodar', this.state.nodar);
    // bodyFormData.append('ke', this.state.ke);
    // bodyFormData.append('namacc1', this.state.namacc1);
    // bodyFormData.append('namacc2', this.state.namacc2);
    // bodyFormData.append('namacc3', this.state.namacc3);
    // bodyFormData.append('namacc4', this.state.namacc4);
    // bodyFormData.append('namacc5', this.state.namacc5);
    // bodyFormData.append('ke2', this.state.ke2);
    // bodyFormData.append('ke3', this.state.ke3);
    // bodyFormData.append('ke4', this.state.ke4);
    // bodyFormData.append('ke5', this.state.ke5);
    bodyFormData.append('no_pendaftaran', this.state.iduser);
    bodyFormData.append('jawab1', this.state.jwb1);
    bodyFormData.append('jawab2', this.state.jwb2);
    bodyFormData.append('jawab3', this.state.jwb3);
    bodyFormData.append('jawab4', this.state.jwb4);
    bodyFormData.append('jawab5', this.state.jwb5);
    bodyFormData.append('jawab6', this.state.jwb6);
    bodyFormData.append('jawab7', this.state.jwb7);
    bodyFormData.append('jawab8', this.state.jwb8);
    bodyFormData.append('jawab9', this.state.jwb9);
    bodyFormData.append('jawab10', this.state.jwb10);
    bodyFormData.append('jawab11', this.state.jwb11);
    bodyFormData.append('jawab12', this.state.jwb12);
    bodyFormData.append('jawab13', this.state.jwb13);
    bodyFormData.append('jawab14', this.state.jwb14);
    bodyFormData.append('jawab15', this.state.jwb15);
    bodyFormData.append('jawab16', this.state.jwb16);
    bodyFormData.append('jawab17', this.state.jwb17);
    bodyFormData.append('jawab18', this.state.jwb18);
    bodyFormData.append('jawab19', this.state.jwb19);
    bodyFormData.append('jawab20', this.state.jwb20);
    bodyFormData.append('jawab21', this.state.jwb21);
    bodyFormData.append('jawab22', this.state.jwb22);
    bodyFormData.append('jawab23', this.state.jwb23);
    bodyFormData.append('jawab24', this.state.jwb24);
    bodyFormData.append('jawab25', this.state.jwb25);
    bodyFormData.append('jawab26', this.state.jwb26);
    bodyFormData.append('jawab27', this.state.jwb27);
    bodyFormData.append('jawab28', this.state.jwb28);
    bodyFormData.append('jawab29', this.state.jwb29);
    bodyFormData.append('jawab30', this.state.jwb30);
    bodyFormData.append('jawab31', this.state.jwb31);
    bodyFormData.append('jawab32', this.state.jwb32);
    bodyFormData.append('jawab33', this.state.jwb33);
    bodyFormData.append('jawab34', this.state.jwb34);
    bodyFormData.append('jawab35', this.state.jwb35);
    bodyFormData.append('jawab36', this.state.jwb36);
    bodyFormData.append('jawab37', this.state.jwb37);
    bodyFormData.append('jawab38', this.state.jwb38);
    bodyFormData.append('jawab39', this.state.jwb39);
    bodyFormData.append('jawab40', this.state.jwb40);
    bodyFormData.append('jawab41', this.state.jwb41);
    bodyFormData.append('jawab42', this.state.jwb42);
    // bodyFormData.append('sudahbaca', this.state.sudahbaca);
    // bodyFormData.append('tanggaldar', this.state.tanggaldar);
    // bodyFormData.append('tanggal', this.state.tanggal);
    // bodyFormData.append('jam', this.state.jam);
    // bodyFormData.append('status', this.state.status);
    // bodyFormData.append('colorstatus', this.state.colorstatus);
    // bodyFormData.append('activity', this.state.activity);
    // bodyFormData.append('result', this.state.result);
    // bodyFormData.append('plan', this.state.plan);
    // bodyFormData.append('tag', this.state.tag);
    // bodyFormData.append('file', this.state.file);
    axios({
      method: 'post',
      url: `${baseUrl}/api/riasec_models/add`,
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
            <Icon name="bars" size={30} color="#" />
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
            RIASEC
          </Text>
          {/* </TouchableOpacity> */}
        </View>

        <ScrollView style={{flexDirection: 'column', marginBottom: 20}}>
          <View
            style={{
              marginHorizontal: 5,
              marginBottom: 10,
              marginTop: 5,
              padding: 10,
              backgroundColor: '#6d0e5a',
              paddingVertical: 10,
              borderTopRightRadius: 12,
              borderTopLeftRadius: 12,
              borderBottomRightRadius: 12,
              borderBottomLeftRadius: 12,
            }}>
            <Text>1.</Text>
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
              backgroundColor: '#6d0e5a',
              paddingVertical: 10,
              borderTopRightRadius: 12,
              borderTopLeftRadius: 12,
              borderBottomRightRadius: 12,
              borderBottomLeftRadius: 12,
            }}>
            <Text>2 .</Text>
            <RadioButtonRN
              data={data2}
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
              backgroundColor: '#6d0e5a',
              paddingVertical: 10,
              borderTopRightRadius: 12,
              borderTopLeftRadius: 12,
              borderBottomRightRadius: 12,
              borderBottomLeftRadius: 12,
            }}>
            <Text>3 .</Text>
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
              backgroundColor: '#6d0e5a',
              paddingVertical: 10,
              borderTopRightRadius: 12,
              borderTopLeftRadius: 12,
              borderBottomRightRadius: 12,
              borderBottomLeftRadius: 12,
            }}>
            <Text>4 .</Text>
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
              backgroundColor: '#6d0e5a',
              paddingVertical: 10,
              borderTopRightRadius: 12,
              borderTopLeftRadius: 12,
              borderBottomRightRadius: 12,
              borderBottomLeftRadius: 12,
            }}>
            <Text>5 .</Text>
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
              backgroundColor: '#6d0e5a',
              paddingVertical: 10,
              borderTopRightRadius: 12,
              borderTopLeftRadius: 12,
              borderBottomRightRadius: 12,
              borderBottomLeftRadius: 12,
            }}>
            <Text>6 .</Text>
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
              backgroundColor: '#6d0e5a',
              paddingVertical: 10,
              borderTopRightRadius: 12,
              borderTopLeftRadius: 12,
              borderBottomRightRadius: 12,
              borderBottomLeftRadius: 12,
            }}>
            <Text>7 .</Text>
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
              backgroundColor: '#6d0e5a',
              paddingVertical: 10,
              borderTopRightRadius: 12,
              borderTopLeftRadius: 12,
              borderBottomRightRadius: 12,
              borderBottomLeftRadius: 12,
            }}>
            <Text>8 .</Text>
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
              backgroundColor: '#6d0e5a',
              paddingVertical: 10,
              borderTopRightRadius: 12,
              borderTopLeftRadius: 12,
              borderBottomRightRadius: 12,
              borderBottomLeftRadius: 12,
            }}>
            <Text>9 .</Text>
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
              backgroundColor: '#6d0e5a',
              paddingVertical: 10,
              borderTopRightRadius: 12,
              borderTopLeftRadius: 12,
              borderBottomRightRadius: 12,
              borderBottomLeftRadius: 12,
            }}>
            <Text>10 .</Text>
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
              backgroundColor: '#6d0e5a',
              paddingVertical: 10,
              borderTopRightRadius: 12,
              borderTopLeftRadius: 12,
              borderBottomRightRadius: 12,
              borderBottomLeftRadius: 12,
            }}>
            <Text>11 .</Text>
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
              backgroundColor: '#6d0e5a',
              paddingVertical: 10,
              borderTopRightRadius: 12,
              borderTopLeftRadius: 12,
              borderBottomRightRadius: 12,
              borderBottomLeftRadius: 12,
            }}>
            <Text>12 .</Text>
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
              backgroundColor: '#6d0e5a',
              paddingVertical: 10,
              borderTopRightRadius: 12,
              borderTopLeftRadius: 12,
              borderBottomRightRadius: 12,
              borderBottomLeftRadius: 12,
            }}>
            <Text>13 .</Text>
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
              backgroundColor: '#6d0e5a',
              paddingVertical: 10,
              borderTopRightRadius: 12,
              borderTopLeftRadius: 12,
              borderBottomRightRadius: 12,
              borderBottomLeftRadius: 12,
            }}>
            <Text>14 .</Text>
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
              backgroundColor: '#6d0e5a',
              paddingVertical: 10,
              borderTopRightRadius: 12,
              borderTopLeftRadius: 12,
              borderBottomRightRadius: 12,
              borderBottomLeftRadius: 12,
            }}>
            <Text>15 .</Text>
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
              backgroundColor: '#6d0e5a',
              paddingVertical: 10,
              borderTopRightRadius: 12,
              borderTopLeftRadius: 12,
              borderBottomRightRadius: 12,
              borderBottomLeftRadius: 12,
            }}>
            <Text>16 .</Text>
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
              backgroundColor: '#6d0e5a',
              paddingVertical: 10,
              borderTopRightRadius: 12,
              borderTopLeftRadius: 12,
              borderBottomRightRadius: 12,
              borderBottomLeftRadius: 12,
            }}>
            <Text>17 .</Text>
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
              backgroundColor: '#6d0e5a',
              paddingVertical: 10,
              borderTopRightRadius: 12,
              borderTopLeftRadius: 12,
              borderBottomRightRadius: 12,
              borderBottomLeftRadius: 12,
            }}>
            <Text>18 .</Text>
            <RadioButtonRN
              data={data18}
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
              backgroundColor: '#6d0e5a',
              paddingVertical: 10,
              borderTopRightRadius: 12,
              borderTopLeftRadius: 12,
              borderBottomRightRadius: 12,
              borderBottomLeftRadius: 12,
            }}>
            <Text>19 .</Text>
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
              backgroundColor: '#6d0e5a',
              paddingVertical: 10,
              borderTopRightRadius: 12,
              borderTopLeftRadius: 12,
              borderBottomRightRadius: 12,
              borderBottomLeftRadius: 12,
            }}>
            <Text>20 .</Text>
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
              backgroundColor: '#6d0e5a',
              paddingVertical: 10,
              borderTopRightRadius: 12,
              borderTopLeftRadius: 12,
              borderBottomRightRadius: 12,
              borderBottomLeftRadius: 12,
            }}>
            <Text>21 .</Text>
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
              backgroundColor: '#6d0e5a',
              paddingVertical: 10,
              borderTopRightRadius: 12,
              borderTopLeftRadius: 12,
              borderBottomRightRadius: 12,
              borderBottomLeftRadius: 12,
            }}>
            <Text>22 .</Text>
            <RadioButtonRN
              data={data22}
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
              backgroundColor: '#6d0e5a',
              paddingVertical: 10,
              borderTopRightRadius: 12,
              borderTopLeftRadius: 12,
              borderBottomRightRadius: 12,
              borderBottomLeftRadius: 12,
            }}>
            <Text>23 .</Text>
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
              backgroundColor: '#6d0e5a',
              paddingVertical: 10,
              borderTopRightRadius: 12,
              borderTopLeftRadius: 12,
              borderBottomRightRadius: 12,
              borderBottomLeftRadius: 12,
            }}>
            <Text>24 .</Text>
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
              backgroundColor: '#6d0e5a',
              paddingVertical: 10,
              borderTopRightRadius: 12,
              borderTopLeftRadius: 12,
              borderBottomRightRadius: 12,
              borderBottomLeftRadius: 12,
            }}>
            <Text>25 .</Text>
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
              backgroundColor: '#6d0e5a',
              paddingVertical: 10,
              borderTopRightRadius: 12,
              borderTopLeftRadius: 12,
              borderBottomRightRadius: 12,
              borderBottomLeftRadius: 12,
            }}>
            <Text>26 .</Text>
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
              backgroundColor: '#6d0e5a',
              paddingVertical: 10,
              borderTopRightRadius: 12,
              borderTopLeftRadius: 12,
              borderBottomRightRadius: 12,
              borderBottomLeftRadius: 12,
            }}>
            <Text>27 .</Text>
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
              backgroundColor: '#6d0e5a',
              paddingVertical: 10,
              borderTopRightRadius: 12,
              borderTopLeftRadius: 12,
              borderBottomRightRadius: 12,
              borderBottomLeftRadius: 12,
            }}>
            <Text>28 .</Text>
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
              backgroundColor: '#6d0e5a',
              paddingVertical: 10,
              borderTopRightRadius: 12,
              borderTopLeftRadius: 12,
              borderBottomRightRadius: 12,
              borderBottomLeftRadius: 12,
            }}>
            <Text>29 .</Text>
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
              backgroundColor: '#6d0e5a',
              paddingVertical: 10,
              borderTopRightRadius: 12,
              borderTopLeftRadius: 12,
              borderBottomRightRadius: 12,
              borderBottomLeftRadius: 12,
            }}>
            <Text>30 .</Text>
            <RadioButtonRN
              data={data30}
              selectedBtn={e => this.setState({jwb30: e.value})}
              icon={<Icon name="check-circle" size={25} color="#2c9dd1" />}
            />
          </View>

          <View
            style={{
              marginHorizontal: 5,
              marginBottom: 10,
              marginTop: 5,
              padding: 10,
              backgroundColor: '#6d0e5a',
              paddingVertical: 10,
              borderTopRightRadius: 12,
              borderTopLeftRadius: 12,
              borderBottomRightRadius: 12,
              borderBottomLeftRadius: 12,
            }}>
            <Text>31 .</Text>
            <RadioButtonRN
              data={data31}
              selectedBtn={e => this.setState({jwb31: e.value})}
              icon={<Icon name="check-circle" size={25} color="#2c9dd1" />}
            />
          </View>

          <View
            style={{
              marginHorizontal: 5,
              marginBottom: 10,
              marginTop: 5,
              padding: 10,
              backgroundColor: '#6d0e5a',
              paddingVertical: 10,
              borderTopRightRadius: 12,
              borderTopLeftRadius: 12,
              borderBottomRightRadius: 12,
              borderBottomLeftRadius: 12,
            }}>
            <Text>32 .</Text>
            <RadioButtonRN
              data={data32}
              selectedBtn={e => this.setState({jwb32: e.value})}
              icon={<Icon name="check-circle" size={25} color="#2c9dd1" />}
            />
          </View>

          <View
            style={{
              marginHorizontal: 5,
              marginBottom: 10,
              marginTop: 5,
              padding: 10,
              backgroundColor: '#6d0e5a',
              paddingVertical: 10,
              borderTopRightRadius: 12,
              borderTopLeftRadius: 12,
              borderBottomRightRadius: 12,
              borderBottomLeftRadius: 12,
            }}>
            <Text>33 .</Text>
            <RadioButtonRN
              data={data33}
              selectedBtn={e => this.setState({jwb33: e.value})}
              icon={<Icon name="check-circle" size={25} color="#2c9dd1" />}
            />
          </View>

          <View
            style={{
              marginHorizontal: 5,
              marginBottom: 10,
              marginTop: 5,
              padding: 10,
              backgroundColor: '#6d0e5a',
              paddingVertical: 10,
              borderTopRightRadius: 12,
              borderTopLeftRadius: 12,
              borderBottomRightRadius: 12,
              borderBottomLeftRadius: 12,
            }}>
            <Text>34 .</Text>
            <RadioButtonRN
              data={data34}
              selectedBtn={e => this.setState({jwb34: e.value})}
              icon={<Icon name="check-circle" size={25} color="#2c9dd1" />}
            />
          </View>

          <View
            style={{
              marginHorizontal: 5,
              marginBottom: 10,
              marginTop: 5,
              padding: 10,
              backgroundColor: '#6d0e5a',
              paddingVertical: 10,
              borderTopRightRadius: 12,
              borderTopLeftRadius: 12,
              borderBottomRightRadius: 12,
              borderBottomLeftRadius: 12,
            }}>
            <Text>35 .</Text>
            <RadioButtonRN
              data={data35}
              selectedBtn={e => this.setState({jwb35: e.value})}
              icon={<Icon name="check-circle" size={25} color="#2c9dd1" />}
            />
          </View>

          <View
            style={{
              marginHorizontal: 5,
              marginBottom: 10,
              marginTop: 5,
              padding: 10,
              backgroundColor: '#6d0e5a',
              paddingVertical: 10,
              borderTopRightRadius: 12,
              borderTopLeftRadius: 12,
              borderBottomRightRadius: 12,
              borderBottomLeftRadius: 12,
            }}>
            <Text>36 .</Text>
            <RadioButtonRN
              data={data36}
              selectedBtn={e => this.setState({jwb36: e.value})}
              icon={<Icon name="check-circle" size={25} color="#2c9dd1" />}
            />
          </View>

          <View
            style={{
              marginHorizontal: 5,
              marginBottom: 10,
              marginTop: 5,
              padding: 10,
              backgroundColor: '#6d0e5a',
              paddingVertical: 10,
              borderTopRightRadius: 12,
              borderTopLeftRadius: 12,
              borderBottomRightRadius: 12,
              borderBottomLeftRadius: 12,
            }}>
            <Text>37 .</Text>
            <RadioButtonRN
              data={data37}
              selectedBtn={e => this.setState({jwb37: e.value})}
              icon={<Icon name="check-circle" size={25} color="#2c9dd1" />}
            />
          </View>

          <View
            style={{
              marginHorizontal: 5,
              marginBottom: 10,
              marginTop: 5,
              padding: 10,
              backgroundColor: '#6d0e5a',
              paddingVertical: 10,
              borderTopRightRadius: 12,
              borderTopLeftRadius: 12,
              borderBottomRightRadius: 12,
              borderBottomLeftRadius: 12,
            }}>
            <Text>38 .</Text>
            <RadioButtonRN
              data={data38}
              selectedBtn={e => this.setState({jwb38: e.value})}
              icon={<Icon name="check-circle" size={25} color="#2c9dd1" />}
            />
          </View>

          <View
            style={{
              marginHorizontal: 5,
              marginBottom: 10,
              marginTop: 5,
              padding: 10,
              backgroundColor: '#6d0e5a',
              paddingVertical: 10,
              borderTopRightRadius: 12,
              borderTopLeftRadius: 12,
              borderBottomRightRadius: 12,
              borderBottomLeftRadius: 12,
            }}>
            <Text>39 .</Text>
            <RadioButtonRN
              data={data39}
              selectedBtn={e => this.setState({jwb39: e.value})}
              icon={<Icon name="check-circle" size={25} color="#2c9dd1" />}
            />
          </View>

          <View
            style={{
              marginHorizontal: 5,
              marginBottom: 10,
              marginTop: 5,
              padding: 10,
              backgroundColor: '#6d0e5a',
              paddingVertical: 10,
              borderTopRightRadius: 12,
              borderTopLeftRadius: 12,
              borderBottomRightRadius: 12,
              borderBottomLeftRadius: 12,
            }}>
            <Text>40 .</Text>
            <RadioButtonRN
              data={data40}
              selectedBtn={e => this.setState({jwb40: e.value})}
              icon={<Icon name="check-circle" size={25} color="#2c9dd1" />}
            />
          </View>

          <View
            style={{
              marginHorizontal: 5,
              marginBottom: 10,
              marginTop: 5,
              padding: 10,
              backgroundColor: '#6d0e5a',
              paddingVertical: 10,
              borderTopRightRadius: 12,
              borderTopLeftRadius: 12,
              borderBottomRightRadius: 12,
              borderBottomLeftRadius: 12,
            }}>
            <Text>41 .</Text>
            <RadioButtonRN
              data={data41}
              selectedBtn={e => this.setState({jwb41: e.value})}
              icon={<Icon name="check-circle" size={25} color="#2c9dd1" />}
            />
          </View>

          <View
            style={{
              marginHorizontal: 5,
              marginBottom: 10,
              marginTop: 5,
              padding: 10,
              backgroundColor: '#6d0e5a',
              paddingVertical: 10,
              borderTopRightRadius: 12,
              borderTopLeftRadius: 12,
              borderBottomRightRadius: 12,
              borderBottomLeftRadius: 12,
            }}>
            <Text>42 .</Text>
            <RadioButtonRN
              data={data42}
              selectedBtn={e => this.setState({jwb42: e.value})}
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
            <Text style={{color: '#FFFFFF', fontSize: 18, fontWeight: 'light'}}>
              SIMPAN
            </Text>
          </TouchableOpacity>
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
          {/* DAR / TIU */}
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() =>
              this.props.navigation.navigate('DrawerDar', {
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
          {/* Laporan PAPI*/}
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

          {/* Cuti RIASEC*/}
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
