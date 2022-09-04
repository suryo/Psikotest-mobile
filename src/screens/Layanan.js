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
  Image,
} from 'react-native';
import {StackActions} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SignInHeader from '../components/SignInHeader';
import TextArea from '../components/TextArea';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseUrl = 'http://new.sidar.id';
// const baseUrl = 'http://localhost/sidar-new';
class Layanan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      datalogin: [],
      iduser: '',
    };
  }

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

            marginBottom: 5,
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
              fontWeight: 'bold',
              fontSize: 22,
              marginLeft: 20,
              marginTop: 0,
            }}>
            Layanan
          </Text>
          {/* </TouchableOpacity> */}
        </View>

        {/* <TextArea placeholder="Description" /> */}

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
            <Text
              style={{
                color: '#ffffff',
                textAlign: 'justify',
              }}>
              A. Layanan Psikotes Bidang Industri dan Organisasi
              {'\n'}
              {'\n'}Tujuan : {'\n'}Memperoleh gambaran secara konkrit tentang
              kualitas dan performa kerja serta loyalitas karyawan; dapat
              menempatkan SDM pada posisi pekerjaan yang sesuai dengan
              kompetensi serta minat yang dimiliki, sehingga dapat memberikan
              kontribusi besar pada perusahaan.{'\n'}
              {'\n'}Lingkup layanan : {'\n'}- Pemeriksaan Psikologi untuk
              seleksi calon karyawan. {'\n'}- Penelusuran potensi psikologi,
              sumberdaya manusia untuk optimasi penempatan karyawan. {'\n'}-
              Pemeriksaan psikologi evaluasi dan promosi karyawan ke jenjang
              yang lebih tinggi.
            </Text>
          </View>

          <View
            style={{
              backgroundColor: '#7030a0',
              padding: 25,
              marginLeft: 5,
              marginRight: 5,
              marginBottom: 20,
            }}>
            <Text
              style={{
                color: '#ffffff',
                textAlign: 'justify',
              }}>
              B. Layanan Psikotes Bidang Pendidikan
              {'\n'}
              {'\n'} Tujuan : {'\n'}mengetahui kondisi psikologis siswa
              berkaitan dengan : inteligensi, bakat, minat dan kepribadian
              sehingga dapat digunakan untuk membantu mengarahkan siswa untuk
              mengenyam pendidikan sesuai dengan kemampuan yang dimiliki dan
              sesuai dengan yang diinginkan. {'\n'}
              {'\n'}Lingkup layanan : {'\n'}- Psikotes berkaitan dengan
              pendidikan, karir, pemilihan jurusan di perguruan tinggi.
              {'\n'}- Tes kecerdasan, minat, bakat, dan kepribadian serta
              analisis potensinya.
            </Text>
          </View>

          <View
            style={{
              backgroundColor: '#7030a0',
              padding: 25,
              marginLeft: 5,
              marginRight: 5,
              marginBottom: 20,
            }}>
            <Text
              style={{
                color: '#ffffff',
                textAlign: 'justify',
              }}>
              C. Layanan Training
              {'\n'}
              {'\n'}Tujuan :{'\n'}Memberikan pelatihan guna meningkatkan
              kemampuan-kemampuan yang diperlukan oleh organisasi baik dalam
              bidang industri maupun bidang pendidikan yang telah disesuaikan
              dengan latar belakang permasalahan dan kebutuhan klien. {'\n'}
              {'\n'}
              Lingkup layanan : {'\n'}Leadership Training, Parenting Training,
              Team Building Training, Motivation Training
            </Text>
          </View>

          <View
            style={{
              backgroundColor: '#7030a0',
              padding: 25,
              marginLeft: 5,
              marginRight: 5,
              marginBottom: 20,
            }}>
            <Text
              style={{
                color: '#ffffff',
                textAlign: 'justify',
              }}>
              D. Layanan Konseling
              {'\n'}
              {'\n'}Tujuan :{'\n'}Melakukan intervensi psikologis dengan tujuan
              agar klien dapat menemukan insight dan kebermaknaan dari setiap
              solusi permasalahan hidupnya. {'\n'}
              {'\n'}
              Lingkup layanan : {'\n'}- Konseling Individu (masalah keluarga,
              pekerjaan, bebas nilai) {'\n'}- Konseling Perusahaan (Stress
              Kerja, pengembangan Sumber Daya Manusia {'\n'}- Konseling
              Perangkat Sekolah / Guru {'\n'}- Konseling Klasikal Siswa:
              membahas motivasi belajar, penentuan jurusan, serta cara belajar
              yang sesuai dengan siswa.
            </Text>
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
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default Layanan;
