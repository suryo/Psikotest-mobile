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
  {value: 0, label: 'Saya seorang pekerja keras'},
  {value: 1, label: 'saya bukan seorang pemurung'},
];

const data2 = [
  {value: 0, label: 'Saya suka bekerja lebih baik dari yang lain'},
  {
    value: 1,
    label: 'Saya suka menekuni pekerjaan yang saya lakukan sampai selesai',
  },
];

const data3 = [
  {
    value: 0,
    label:
      'saya suka memberi petunjuk kepada orang bagaimana melakukan sesuatu',
  },
  {value: 1, label: 'Saya ingin berbuat semaksimal mungkin'},
];

const data4 = [
  {value: 0, label: 'saya suka melakukan hal-hal yang lucu'},
  {value: 1, label: 'Saya suka memberitahukan orang apa yang harus dikerjakan'},
];

const data5 = [
  {value: 0, label: 'Saya suka bergabung dalam kelompok'},
  {value: 1, label: 'saya suka Jika diperhatikan oleh kelompok'},
];

const data6 = [
  {value: 0, label: 'saya suka membuat teman pribadi yang dekat'},
  {value: 1, label: 'saya suka Jika diperhatikan oleh kelompok'},
];

const data7 = [
  {value: 0, label: 'saya cepat berubah jika saya diperlukan'},
  {value: 1, label: 'Saya berusaha membuat teman-teman pribadi yang dekat'},
];

const data8 = [
  {value: 0, label: 'saya suka membalas jika saya disakiti'},
  {value: 1, label: 'Saya suka melakukan hal-hal yang baru dan berbeda'},
];

const data9 = [
  {value: 0, label: 'Saya ingin agar atasan menyukai saya'},
  {value: 1, label: 'saya suka memberitahu orang jika mereka salah'},
];

const data10 = [
  {
    value: 0,
    label: 'Saya suka mengikuti petunjuk-petunjuk yang diberikan kepada saya',
  },
  {value: 1, label: 'Saya suka mendukung pendapat atasan saya'},
];

const data11 = [
  {value: 0, label: 'Saya berusaha sangat keras'},
  {
    value: 1,
    label:
      'Saya seorang yang teratur titik Saya menaruh semua barang pada tempatnya',
  },
];

const data12 = [
  {
    value: 0,
    label: 'saya dapat membuat orang melakukan apa yang saya inginkan',
  },
  {value: 1, label: 'saya tidak mudah marah'},
];

const data13 = [
  {
    value: 0,
    label:
      'Saya suka memberitahukan kepada kelompok apa yang harus mereka kerjakan',
  },
  {value: 1, label: 'saya selalu menekuni suatu pekerjaan sampai selesai'},
];

const data14 = [
  {value: 0, label: 'saya ingin tampil menarik dan mendebarkan'},
  {value: 1, label: 'saya ingin menjadi orang yang sangat berhasil'},
];

const data15 = [
  {value: 0, label: 'Saya ingin sesuai dan diterima dalam kelompok'},
  {value: 1, label: 'Saya suka membantu orang dalam mengambil keputusan'},
];

const data16 = [
  {value: 0, label: 'saya cemas bila seseorang tidak menyukai saya'},
  {value: 1, label: 'Saya suka orang memperhatikan saya'},
];

const data17 = [
  {value: 0, label: 'Saya suka mencoba hal-hal baru'},
  {
    value: 1,
    label: 'saya lebih suka bekerja bersama orang lain daripada sendirian',
  },
];

const data18 = [
  {
    value: 0,
    label: 'saya kadang-kadang menyalahkan orang lain jika terjadi kesalahan',
  },
  {value: 1, label: 'saya merasa terganggu Jika ada yang tidak menyukai saya'},
];

const data19 = [
  {value: 0, label: 'Saya suka mendukung pendapat atasan saya'},
  {
    value: 1,
    label: 'saya Suka mencoba pekerjaan-pekerjaan yang baru dan berbeda',
  },
];

const data20 = [
  {
    value: 0,
    label:
      'Saya menyukai petunjuk-petunjuk terperinci dalam menyelesaikan pekerjaan',
  },
  {
    value: 1,
    label: 'bila saya terganggu oleh siapapun, saya akan memberitahukannya',
  },
];

const data21 = [
  {
    value: 0,
    label: 'Saya suka melaksanakan tugas setiap langkah dengan hati-hati',
  },
  {value: 1, label: 'saya selalu berusaha keras'},
];

const data22 = [
  {value: 0, label: 'saya benar-benar pemimpin yang baik'},
  {value: 1, label: 'saya dapat mengorganisir suatu pekerjaan dengan baik'},
];

const data23 = [
  {value: 0, label: 'saya mudah tersinggung'},
  {value: 1, label: 'saya lamban mengambil keputusan'},
];

const data24 = [
  {
    value: 0,
    label: 'bila saya berada dalam satu kelompok saya suka berdiam diri',
  },
  {value: 1, label: 'saya suka mengerjakan beberapa pekerjaan sekaligus'},
];

const data25 = [
  {value: 0, label: 'Saya sangat suka bila saya diundang'},
  {
    value: 1,
    label: 'Saya ingin lebih baik dari yang lain dalam mengerjakan sesuatu',
  },
];

const data26 = [
  {value: 0, label: 'Saya suka membuat teman-teman pribadi yang dekat'},
  {value: 1, label: 'saya suka  menasehati orang lain'},
];

const data27 = [
  {value: 0, label: 'Saya suka melakukan hal-hal baru dan berbeda'},
  {
    value: 1,
    label:
      'Saya suka menceritakan bagaimana saya berhasil dalam melakukan sesuatu',
  },
];

const data28 = [
  {value: 0, label: 'bila saya betul, saya suka mempertahankannya.'},
  {value: 1, label: 'saya suka ingin diterima dan diakui dalam suatu kelompok'},
];

const data29 = [
  {value: 0, label: 'saya menghindar menjadi orang yang berbeda'},
  {value: 1, label: 'Saya berusaha menjadi sangat dekat dengan orang'},
];

const data30 = [
  {
    value: 0,
    label: 'Saya senang memberitahukan bagaimana melakukan sesuatu pekerjaan',
  },
  {value: 1, label: 'saya mudah bosan'},
];

const data31 = [
  {value: 0, label: 'Saya bekerja keras'},
  {value: 1, label: 'saya banyak berpikir dan merencana '},
];

const data32 = [
  {value: 0, label: 'Saya memimpin kelompok'},
  {value: 1, label: 'detail (hal-hal kecil) menarik bagi saya'},
];

const data33 = [
  {value: 0, label: 'saya dapat mengambil keputusan secara mudah dan tepat'},
  {
    value: 1,
    label: 'saya menyimpan barang-barang saya secara rapi dan teratur',
  },
];

const data34 = [
  {value: 0, label: 'saya cepat dalam melaksanakan suatu pekerjaan'},
  {value: 1, label: 'saya tidak sering marah atau sedih'},
];

const data35 = [
  {value: 0, label: 'Saya ingin menjadi bagian dari kelompok'},
  {value: 1, label: 'saya hanya ingin melakukan satu pekerjaan pada satu saat'},
];

const data36 = [
  {value: 0, label: 'Saya berusaha membuat teman dekat'},
  {value: 1, label: 'Saya berusaha keras menjadi yang terbaik'},
];

const data37 = [
  {value: 0, label: 'Saya suka mode terbaru untuk pakaian atau mobil'},
  {value: 1, label: 'saya suka bertanggung jawab untuk kepentingan orang lain'},
];

const data38 = [
  {value: 0, label: 'Saya  menyukai perdebatan'},
  {value: 1, label: 'Saya suka mendapatkan perhatian'},
];

const data39 = [
  {value: 0, label: 'Saya suka mendukung orang-orang yang menjadi atasan saya'},
  {value: 1, label: 'Saya tertarik menjadi bagian dari kelompok'},
];

const data40 = [
  {value: 0, label: 'saya suka mengikuti peraturan dengan hati-hati'},
  {value: 1, label: 'saya suka orang mengenal saya dengan baik'},
];

const data41 = [
  {value: 0, label: 'Saya benar-benar bekerja keras'},
  {value: 1, label: 'Saya mempunyai sifat bersahabat'},
];

const data42 = [
  {
    value: 0,
    label:
      'orang berpendapat bahwa saya benar-benar seorang pemimpin yang baik',
  },
  {value: 1, label: 'saya berpikir panjang dan berhati-hati'},
];

const data43 = [
  {value: 0, label: 'saya sering mengambil kesempatan'},
  {value: 1, label: 'saya senang mengurus hal-hal kecil'},
];

const data44 = [
  {value: 0, label: 'orang berpendapat bahwa saya bekerja cepat'},
  {value: 1, label: 'orang berpendapat bahwa saya rapi dan teratur'},
];

const data45 = [
  {value: 0, label: 'Saya senang berolahraga'},
  {value: 1, label: 'Saya mempunyai pribadi yang menyenangkan'},
];

const data46 = [
  {value: 0, label: 'Saya senang jika orang dekat dan bersahabat dengan saya'},
  {
    value: 1,
    label:
      'Saya selalu berusaha untuk menyelesaikan sesuatu yang telah saya mulai',
  },
];

const data47 = [
  {value: 0, label: 'saya senang bereksperimen dan mencoba hal-hal baru'},
  {value: 1, label: 'saya suka melaksanakan suatu pekerjaan sulit dengan baik'},
];

const data48 = [
  {value: 0, label: 'saya suka diperlakukan secara adil'},
  {
    value: 1,
    label: 'Saya suka memberitahu orang lain bagaimana melaksanakan sesuatu',
  },
];

const data49 = [
  {value: 0, label: 'Saya suka melakukan apa yang diharapkan dari saya'},
  {value: 1, label: 'saya suka memperoleh perhatian'},
];

const data50 = [
  {
    value: 0,
    label:
      'Saya suka petunjuk-petunjuk terperinci dalam melaksanakan suatu pekerjaan',
  },
  {value: 1, label: 'saya suka berada diantara orang-orang banyak'},
];

const data51 = [
  {
    value: 0,
    label: 'saya selalu Berusaha menyelesaikan pekerjaan secara sempurna',
  },
  {value: 1, label: 'orang Mengatakan bahwa saya tidak mengenal lelah'},
];

const data52 = [
  {value: 0, label: 'Saya tipe pemimpin'},
  {value: 1, label: 'saya mudah berteman'},
];

const data53 = [
  {value: 0, label: 'saya selalu berspekulasi'},
  {value: 1, label: 'saya banyak sekali berpikir'},
];

const data54 = [
  {value: 0, label: 'Saya bekerja dengan kecepatan yang teratur'},
  {value: 1, label: 'Saya senang bekerja dengan hal-hal kecil atau terperinci'},
];

const data55 = [
  {value: 0, label: 'Saya mempunyai banyak tenaga untuk berolahraga'},
  {
    value: 1,
    label: 'saya menyimpan barang-barang saya secara rapi dan teratur',
  },
];

const data56 = [
  {value: 0, label: 'saya dapat bergaul dengan baik terhadap semua orang'},
  {
    value: 1,
    label: 'saya seorang yang mempunyai pembawaan yang tenang (even tempered)',
  },
];

const data57 = [
  {
    value: 0,
    label:
      'aya ingin bertemu dengan orang-orang baru dan melakukan hal yang baru',
  },
  {
    value: 1,
    label: 'saya selalu ingin menyelesaikan pekerjaan yang telah saya mulai',
  },
];

const data58 = [
  {value: 0, label: 'Saya biasanya mempertahankan pendapat yang saya yakini'},
  {value: 1, label: 'Saya biasanya suka bekerja keras'},
];

const data59 = [
  {value: 0, label: 'Saya suka saran-saran dari orang-orang yang saya kagumi'},
  {
    value: 1,
    label: 'Saya suka melayani orang-orang yang berwenang terhadap saya',
  },
];

const data60 = [
  {
    value: 0,
    label: 'saya biarkan diri saya banyak dipengaruhi oleh orang lain',
  },
  {value: 1, label: 'Saya suka jika mendapat banyak perhatian'},
];

const data61 = [
  {value: 0, label: 'Saya berusaha bekerja keras'},
  {value: 1, label: 'Saya mengerjakan sesuatu dengan cepat'},
];

const data62 = [
  {value: 0, label: 'apabila saya bicara, kelompok mendengarkan'},
  {value: 1, label: 'saya terampil dengan perkakas (alat-alat)'},
];

const data63 = [
  {value: 0, label: 'saya lambat dalam mendapatkan teman'},
  {value: 1, label: 'saya lambat dalam mengambil keputusan'},
];

const data64 = [
  {value: 0, label: 'Saya biasanya makan secara cepat'},
  {value: 1, label: 'Saya suka membaca'},
];

const data65 = [
  {value: 0, label: 'Saya suka pekerjaan dimana saya banyak bergerak'},
  {
    value: 1,
    label: 'Saya suka pekerjaan yang harus dilaksanakan secara hati-hati',
  },
];

const data66 = [
  {value: 0, label: 'saya membuat sebanyak mungkin teman'},
  {
    value: 1,
    label: 'apa yang telah saya simpan, akan mudah saya temukan kembali',
  },
];

const data67 = [
  {value: 0, label: 'saya merencanakan jauh-jauh sebelumnya'},
  {value: 1, label: 'saya selalu menyenangkan'},
];

const data68 = [
  {value: 0, label: 'saya mempertahan Dengan bangga nama baik saya'},
  {value: 1, label: 'saya terus menekuni suatu masalah sampai selesai'},
];

const data69 = [
  {value: 0, label: 'saya suka mendukung orang-orang yang saya kagumi'},
  {value: 1, label: 'Saya ingin sukses'},
];

const data70 = [
  {
    value: 0,
    label:
      'Saya suka orang lain yang membuat keputusan-keputusan untuk kelompok',
  },
  {value: 1, label: 'saya suka membuat keputusan-keputusan untuk kelompok'},
];

const data71 = [
  {value: 0, label: 'saya selaku berusaha bekerja keras'},
  {value: 1, label: 'saya mengambil keputusan secara cepat dan mudah'},
];

const data72 = [
  {value: 0, label: 'kelompok biasanya melakukan apa yang saya inginkan'},
  {value: 1, label: 'saya biasanya terburu-buru'},
];

const data73 = [
  {value: 0, label: 'saya sering merasa lelah'},
  {value: 1, label: 'Saya lambat menentukan sikap'},
];

const data74 = [
  {value: 0, label: 'saya bekerja cepat'},
  {value: 1, label: 'saya mudah berteman'},
];

const data75 = [
  {value: 0, label: 'Saya biasanya mempunyai Gairah dan tenaga'},
  {value: 1, label: 'saya banyak menghabiskan waktu dengan berpikir'},
];

const data76 = [
  {value: 0, label: 'saya sangat ramah terhadap orang'},
  {value: 1, label: 'Saya suka dengan pekerjaan yang memerlukan ketelitian'},
];

const data77 = [
  {value: 0, label: 'saya banyak berpikir dan merencana'},
  {value: 1, label: 'saya menyimpan segala sesuatu pada tempatnya'},
];

const data78 = [
  {value: 0, label: 'Saya suka pekerjaan yang menuntut hal-hal terperinci'},
  {value: 1, label: 'Saya tidak mudah marah'},
];

const data79 = [
  {value: 0, label: 'Saya suka mengikuti orang yang saya kagumi'},
  {
    value: 1,
    label: 'saya selalu menyelesaikan pekerjaan yang telah saya mulai',
  },
];

const data80 = [
  {value: 0, label: 'Saya suka petunjuk yang jelas'},
  {value: 1, label: 'Saya suka bekerja keras'},
];

const data81 = [
  {value: 0, label: 'saya mengejar apa yang saya inginkan'},
  {value: 1, label: 'saya seorang pemimpin yang baik'},
];

const data82 = [
  {
    value: 0,
    label:
      'saya dapat membuat orang lain bekerja sesuai dengan yang saya inginkan',
  },
  {value: 1, label: 'saya seorang yang bertipe santai tapi beruntung'},
];

const data83 = [
  {value: 0, label: 'saya mengambil keputusan secara tepat'},
  {value: 1, label: 'Saya ingin berbuat semaksimal mungkin'},
];

const data84 = [
  {value: 0, label: 'saya biasanya bekerja cepat'},
  {value: 1, label: 'Saya suka berolahraga secara teratur'},
];

const data85 = [
  {value: 0, label: 'Saya tidak suka bertemu orang'},
  {value: 1, label: 'saya cepat merasa lelah'},
];

const data86 = [
  {value: 0, label: 'Saya membuat banyak sekali teman'},
  {value: 1, label: 'saya banyak menghabiskan waktu dengan berpikir'},
];

const data87 = [
  {value: 0, label: 'Saya suka bekerja dengan teori'},
  {value: 1, label: 'Saya suka bekerja dengan hal-hal terperinci'},
];

const data88 = [
  {
    value: 0,
    label: 'saya dapat menikmati hal-hal atau pekerjaan yang terperinci',
  },
  {value: 1, label: 'Saya suka mengorganisir pekerjaan saya'},
];

const data89 = [
  {value: 0, label: 'Saya menaruh barang pada tempatnya'},
  {value: 1, label: 'Saya selalu menyenangkan'},
];

const data90 = [
  {value: 0, label: 'Saya suka diberitahu tentang apa yang saya perlu lakukan'},
  {value: 1, label: 'saya harus menyelesaikan apa yang saya mulai'},
];

// const dateDropdownRef = useRef();
// const baseUrl = 'http://localhost/sidar-new';
class Papi extends Component {
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
      jwb43: '',
      jwb44: '',
      jwb45: '',
      jwb46: '',
      jwb47: '',
      jwb48: '',
      jwb49: '',
      jwb50: '',
      jwb51: '',
      jwb52: '',
      jwb53: '',
      jwb54: '',
      jwb55: '',
      jwb56: '',
      jwb57: '',
      jwb58: '',
      jwb59: '',
      jwb60: '',
      jwb61: '',
      jwb62: '',
      jwb63: '',
      jwb64: '',
      jwb65: '',
      jwb66: '',
      jwb67: '',
      jwb68: '',
      jwb69: '',
      jwb70: '',
      jwb71: '',
      jwb72: '',
      jwb73: '',
      jwb74: '',
      jwb75: '',
      jwb76: '',
      jwb77: '',
      jwb78: '',
      jwb79: '',
      jwb80: '',
      jwb81: '',
      jwb82: '',
      jwb83: '',
      jwb84: '',
      jwb85: '',
      jwb86: '',
      jwb87: '',
      jwb88: '',
      jwb89: '',
      jwb90: '',
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
    bodyFormData.append('jwb31', this.state.jwb31);
    bodyFormData.append('jwb32', this.state.jwb32);
    bodyFormData.append('jwb33', this.state.jwb33);
    bodyFormData.append('jwb34', this.state.jwb34);
    bodyFormData.append('jwb35', this.state.jwb35);
    bodyFormData.append('jwb36', this.state.jwb36);
    bodyFormData.append('jwb37', this.state.jwb37);
    bodyFormData.append('jwb38', this.state.jwb38);
    bodyFormData.append('jwb39', this.state.jwb39);
    bodyFormData.append('jwb40', this.state.jwb40);
    bodyFormData.append('jwb41', this.state.jwb41);
    bodyFormData.append('jwb42', this.state.jwb42);
    bodyFormData.append('jwb43', this.state.jwb43);
    bodyFormData.append('jwb44', this.state.jwb44);
    bodyFormData.append('jwb45', this.state.jwb45);
    bodyFormData.append('jwb46', this.state.jwb46);
    bodyFormData.append('jwb47', this.state.jwb47);
    bodyFormData.append('jwb48', this.state.jwb48);
    bodyFormData.append('jwb49', this.state.jwb49);
    bodyFormData.append('jwb50', this.state.jwb50);
    bodyFormData.append('jwb51', this.state.jwb51);
    bodyFormData.append('jwb52', this.state.jwb52);
    bodyFormData.append('jwb53', this.state.jwb53);
    bodyFormData.append('jwb54', this.state.jwb54);
    bodyFormData.append('jwb55', this.state.jwb55);
    bodyFormData.append('jwb56', this.state.jwb56);
    bodyFormData.append('jwb57', this.state.jwb57);
    bodyFormData.append('jwb58', this.state.jwb58);
    bodyFormData.append('jwb59', this.state.jwb59);
    bodyFormData.append('jwb60', this.state.jwb60);
    bodyFormData.append('jwb61', this.state.jwb61);
    bodyFormData.append('jwb62', this.state.jwb62);
    bodyFormData.append('jwb63', this.state.jwb63);
    bodyFormData.append('jwb64', this.state.jwb64);
    bodyFormData.append('jwb65', this.state.jwb65);
    bodyFormData.append('jwb66', this.state.jwb66);
    bodyFormData.append('jwb67', this.state.jwb67);
    bodyFormData.append('jwb68', this.state.jwb68);
    bodyFormData.append('jwb69', this.state.jwb69);
    bodyFormData.append('jwb70', this.state.jwb70);
    bodyFormData.append('jwb71', this.state.jwb71);
    bodyFormData.append('jwb72', this.state.jwb72);
    bodyFormData.append('jwb73', this.state.jwb73);
    bodyFormData.append('jwb74', this.state.jwb74);
    bodyFormData.append('jwb75', this.state.jwb75);
    bodyFormData.append('jwb76', this.state.jwb76);
    bodyFormData.append('jwb77', this.state.jwb77);
    bodyFormData.append('jwb78', this.state.jwb78);
    bodyFormData.append('jwb79', this.state.jwb79);
    bodyFormData.append('jwb80', this.state.jwb80);
    bodyFormData.append('jwb81', this.state.jwb81);
    bodyFormData.append('jwb82', this.state.jwb82);
    bodyFormData.append('jwb83', this.state.jwb83);
    bodyFormData.append('jwb84', this.state.jwb84);
    bodyFormData.append('jwb85', this.state.jwb85);
    bodyFormData.append('jwb86', this.state.jwb86);
    bodyFormData.append('jwb87', this.state.jwb87);
    bodyFormData.append('jwb88', this.state.jwb88);
    bodyFormData.append('jwb89', this.state.jwb89);
    bodyFormData.append('jwb90', this.state.jwb90);

    // bodyFormData.append('ke3', this.state.ke3);
    // bodyFormData.append('ke4', this.state.ke4);
    // bodyFormData.append('ke5', this.state.ke5);
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
      url: `${baseUrl}/api/papi_models/add`,
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
            PAPI
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
            <Text>2.</Text>
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
            <Text>3.</Text>
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
            <Text>4.</Text>
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
            <Text>5.</Text>
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
            <Text>6.</Text>
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
            <Text>7.</Text>
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
            <Text>8.</Text>
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
            <Text>9.</Text>
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
            <Text>10.</Text>
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
            <Text>11.</Text>
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
            <Text>12.</Text>
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
            <Text>13.</Text>
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
            <Text>14.</Text>
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
            <Text>15.</Text>
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
            <Text>16.</Text>
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
            <Text>17.</Text>
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
            <Text>18.</Text>
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
            <Text>19.</Text>
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
            <Text>20.</Text>
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
            <Text>21.</Text>
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
            <Text>22.</Text>
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
            <Text>23.</Text>
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
            <Text>24.</Text>
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
            <Text>25.</Text>
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
            <Text>26.</Text>
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
            <Text>27.</Text>
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
            <Text>28.</Text>
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
            <Text>29.</Text>
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
            <Text>30.</Text>
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
            <Text>31.</Text>
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
            <Text>32.</Text>
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
            <Text>33.</Text>
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
            <Text>34.</Text>
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
            <Text>35.</Text>
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
            <Text>36.</Text>
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
            <Text>37.</Text>
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
            <Text>38.</Text>
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
            <Text>39.</Text>
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
            <Text>40.</Text>
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
            <Text>41.</Text>
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
            <Text>42.</Text>
            <RadioButtonRN
              data={data42}
              selectedBtn={e => this.setState({jwb42: e.value})}
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
            <Text>43.</Text>
            <RadioButtonRN
              data={data43}
              selectedBtn={e => this.setState({jwb43: e.value})}
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
            <Text>44.</Text>
            <RadioButtonRN
              data={data44}
              selectedBtn={e => this.setState({jwb44: e.value})}
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
            <Text>45.</Text>
            <RadioButtonRN
              data={data45}
              selectedBtn={e => this.setState({jwb45: e.value})}
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
            <Text>46.</Text>
            <RadioButtonRN
              data={data46}
              selectedBtn={e => this.setState({jwb46: e.value})}
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
            <Text>47.</Text>
            <RadioButtonRN
              data={data47}
              selectedBtn={e => this.setState({jwb47: e.value})}
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
            <Text>48.</Text>
            <RadioButtonRN
              data={data48}
              selectedBtn={e => this.setState({jwb48: e.value})}
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
            <Text>49.</Text>
            <RadioButtonRN
              data={data49}
              selectedBtn={e => this.setState({jwb49: e.value})}
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
            <Text>50.</Text>
            <RadioButtonRN
              data={data50}
              selectedBtn={e => this.setState({jwb50: e.value})}
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
            <Text>51.</Text>
            <RadioButtonRN
              data={data51}
              selectedBtn={e => this.setState({jwb51: e.value})}
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
            <Text>52.</Text>
            <RadioButtonRN
              data={data52}
              selectedBtn={e => this.setState({jwb52: e.value})}
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
            <Text>53.</Text>
            <RadioButtonRN
              data={data53}
              selectedBtn={e => this.setState({jwb53: e.value})}
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
            <Text>54.</Text>
            <RadioButtonRN
              data={data54}
              selectedBtn={e => this.setState({jwb54: e.value})}
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
            <Text>55.</Text>
            <RadioButtonRN
              data={data55}
              selectedBtn={e => this.setState({jwb55: e.value})}
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
            <Text>56.</Text>
            <RadioButtonRN
              data={data56}
              selectedBtn={e => this.setState({jwb56: e.value})}
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
            <Text>57.</Text>
            <RadioButtonRN
              data={data57}
              selectedBtn={e => this.setState({jwb57: e.value})}
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
            <Text>58.</Text>
            <RadioButtonRN
              data={data58}
              selectedBtn={e => this.setState({jwb58: e.value})}
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
            <Text>59.</Text>
            <RadioButtonRN
              data={data59}
              selectedBtn={e => this.setState({jwb59: e.value})}
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
            <Text>60.</Text>
            <RadioButtonRN
              data={data60}
              selectedBtn={e => this.setState({jwb60: e.value})}
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
            <Text>61.</Text>
            <RadioButtonRN
              data={data61}
              selectedBtn={e => this.setState({jwb61: e.value})}
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
            <Text>62.</Text>
            <RadioButtonRN
              data={data62}
              selectedBtn={e => this.setState({jwb62: e.value})}
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
            <Text>63.</Text>
            <RadioButtonRN
              data={data63}
              selectedBtn={e => this.setState({jwb63: e.value})}
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
            <Text>64.</Text>
            <RadioButtonRN
              data={data64}
              selectedBtn={e => this.setState({jwb64: e.value})}
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
            <Text>65.</Text>
            <RadioButtonRN
              data={data65}
              selectedBtn={e => this.setState({jwb65: e.value})}
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
            <Text>66.</Text>
            <RadioButtonRN
              data={data66}
              selectedBtn={e => this.setState({jwb66: e.value})}
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
            <Text>67.</Text>
            <RadioButtonRN
              data={data67}
              selectedBtn={e => this.setState({jwb67: e.value})}
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
            <Text>68.</Text>
            <RadioButtonRN
              data={data68}
              selectedBtn={e => this.setState({jwb68: e.value})}
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
            <Text>69.</Text>
            <RadioButtonRN
              data={data69}
              selectedBtn={e => this.setState({jwb69: e.value})}
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
            <Text>70.</Text>
            <RadioButtonRN
              data={data70}
              selectedBtn={e => this.setState({jwb70: e.value})}
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
            <Text>71.</Text>
            <RadioButtonRN
              data={data71}
              selectedBtn={e => this.setState({jwb71: e.value})}
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
            <Text>72.</Text>
            <RadioButtonRN
              data={data72}
              selectedBtn={e => this.setState({jwb72: e.value})}
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
            <Text>73.</Text>
            <RadioButtonRN
              data={data73}
              selectedBtn={e => this.setState({jwb73: e.value})}
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
            <Text>74.</Text>
            <RadioButtonRN
              data={data74}
              selectedBtn={e => this.setState({jwb74: e.value})}
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
            <Text>75.</Text>
            <RadioButtonRN
              data={data75}
              selectedBtn={e => this.setState({jwb75: e.value})}
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
            <Text>76.</Text>
            <RadioButtonRN
              data={data76}
              selectedBtn={e => this.setState({jwb76: e.value})}
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
            <Text>77.</Text>
            <RadioButtonRN
              data={data77}
              selectedBtn={e => this.setState({jwb77: e.value})}
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
            <Text>78.</Text>
            <RadioButtonRN
              data={data78}
              selectedBtn={e => this.setState({jwb78: e.value})}
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
            <Text>79.</Text>
            <RadioButtonRN
              data={data79}
              selectedBtn={e => this.setState({jwb79: e.value})}
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
            <Text>80.</Text>
            <RadioButtonRN
              data={data80}
              selectedBtn={e => this.setState({jwb80: e.value})}
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
            <Text>81.</Text>
            <RadioButtonRN
              data={data81}
              selectedBtn={e => this.setState({jwb81: e.value})}
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
            <Text>82.</Text>
            <RadioButtonRN
              data={data82}
              selectedBtn={e => this.setState({jwb82: e.value})}
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
            <Text>83.</Text>
            <RadioButtonRN
              data={data83}
              selectedBtn={e => this.setState({jwb83: e.value})}
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
            <Text>84.</Text>
            <RadioButtonRN
              data={data84}
              selectedBtn={e => this.setState({jwb84: e.value})}
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
            <Text>85.</Text>
            <RadioButtonRN
              data={data85}
              selectedBtn={e => this.setState({jwb85: e.value})}
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
            <Text>86.</Text>
            <RadioButtonRN
              data={data86}
              selectedBtn={e => this.setState({jwb86: e.value})}
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
            <Text>87.</Text>
            <RadioButtonRN
              data={data87}
              selectedBtn={e => this.setState({jwb87: e.value})}
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
            <Text>88.</Text>
            <RadioButtonRN
              data={data88}
              selectedBtn={e => this.setState({jwb88: e.value})}
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
            <Text>89.</Text>
            <RadioButtonRN
              data={data89}
              selectedBtn={e => this.setState({jwb89: e.value})}
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
            <Text>90.</Text>
            <RadioButtonRN
              data={data90}
              selectedBtn={e => this.setState({jwb90: e.value})}
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

export default Papi;
