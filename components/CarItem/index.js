import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState } from 'react'
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity
} from 'react-native'
import styles from './styles';
import {
  faCog,
  faToolbox,
  faFan,
  faKey,
  faLock,
  faUnlockAlt
} from '@fortawesome/free-solid-svg-icons';
import Menu from '../Menu';


const CarItem = () => {

   const [lock, setLock] = useState(true);

   const clickedLock = () => {
     if(lock){
       setLock(false);
     } else {
       setLock(true);
     }
   }
 
  return (
    <View style={styles.carCont}>
      <ImageBackground
        source={require('../../assets/background.png')}
        style={styles.img}
      />
      {/* head */}
      <View style={styles.head}>
        <TouchableOpacity>
          <FontAwesomeIcon
            style={styles.icon}
            icon={faCog}
            size={25}
          />
        </TouchableOpacity>
        <Text style={styles.headTitle}>
          JunMobile
        </Text>

        <TouchableOpacity>
          <FontAwesomeIcon
            style={styles.icon}
            icon={faToolbox}
            size={25}
          />
        </TouchableOpacity>
      </View>

      {/* millage */}
      <View style={styles.batSection}>
        <Image
          style={styles.batImg}
          source={require('../../assets/battery.png')}
        />
        <Text style={styles.batText}>160 miles</Text>
      </View>

      {/* status */}

      <View style={styles.parking}>
        <Text style={styles.parkText}>Park on</Text>
      </View>

    <ScrollView>
      {/* controls icons */}
      <View style={styles.controller}>
        <TouchableOpacity>
          <View style={styles.controlBtn}>
            <FontAwesomeIcon
              style={styles.icon}
              icon={faFan}
              size={25}
            />
          </View>
        </TouchableOpacity>


        <TouchableOpacity>
          <View style={styles.controlBtn}>
            <FontAwesomeIcon
              style={styles.icon}
              icon={faKey}
              size={25}
            />
          </View>
        </TouchableOpacity>


        <TouchableOpacity
         onPress={clickedLock}
        >
          <View style={styles.controlBtn}>
            <FontAwesomeIcon
              style={styles.icon}
              icon={
                lock ? faLock : faUnlockAlt
              }
              size={25}
            />
          </View>
        </TouchableOpacity>

      </View>
      {/* menu off */}
      <Menu />
    </ScrollView>
    </View>
  )
}

export default CarItem;