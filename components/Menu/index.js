import React from 'react'
import { 
    View,
    Text,
    ImageBackground,
    Image,
    TouchableOpacity
} from 'react-native';
import styles from './styles';
import { 
    faMusic, 
    faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import items from './items';

const Menu = () => {
  return (
    <View style={styles.item}>
        {items.map((item) => (
            <TouchableOpacity
             key={item.id}
            >
            <View style={styles.row}>
               <FontAwesomeIcon
                 style={styles.icon}
                icon={ item.icon }
                size={25}
                />
                <View style={styles.menuBox}>
                    <Text style={styles.menuTxt}>
                        {item.title}
                    </Text>
                    {item.subTitle && (
                        <Text style={styles.subTitle}>
                            {item.subTitle}
                        </Text>
                    )}
                </View>
                <FontAwesomeIcon
                 style={styles.arrow}
                icon={ faChevronRight }
                size={25}
                />
            </View>
         </TouchableOpacity>
        ))}
    </View>
  )
}

export default Menu;