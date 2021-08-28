import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import colors from '../assets/colors/colors';

const height = Dimensions.get('window').height;

const Details = ({navigation, route}) => {
  const {item} = route.params;

  return (
    <View style={styles.container}>
      <ImageBackground source={item.imageBig} style={styles.backgroundImage}>
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => navigation.goBack()}>
          <Entypo name="chevron-left" size={32} color={colors.white} />
        </TouchableOpacity>
        <View style={styles.titleWrapper}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <View style={styles.containerlocationWrapper}>
            <Entypo name="location-pin" size={18} color={colors.white} />
            <Text style={styles.locationTitle}>{item.location}</Text>
          </View>
        </View>
      </ImageBackground>

      <View style={styles.descriptionWrapper}>
        <View style={styles.heartWrapper}>
          <Entypo name="heart" size={32} color={colors.orange} />
        </View>
        <View style={styles.descriptionBoxWrapper}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.descriptionText}>{item.description}</Text>
          <View style={styles.infoWrapper}>
            <View style={styles.infoItem}>
              <Text style={styles.infoTitle}>Price</Text>
              <View style={styles.infoTextWrapper}>
                <Text style={styles.infoText}>$ {item.price}</Text>
                <Text style={styles.infoSubText}>/person</Text>
              </View>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoTitle}>RATING</Text>
              <View style={styles.infoTextWrapper}>
                <Text style={styles.infoText}>4.5</Text>
                <Text style={styles.infoSubText}>/5</Text>
              </View>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoTitle}>DURATION</Text>
              <View style={styles.infoTextWrapper}>
                <Text style={styles.infoText}>3</Text>
                <Text style={styles.infoSubText}> hours</Text>
              </View>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.bookNowButton}
          onPress={() => alert('you tour has booked')}>
          <Text style={styles.bookNowButtonText}>Book Now </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  backgroundImage: {
    height: height * 0.5,
    justifyContent: 'space-between',
  },
  descriptionWrapper: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: -20,
    borderRadius: 25,
  },
  backIcon: {
    marginLeft: 20,
    marginTop: 40,
  },
  titleWrapper: {
    marginBottom: 40,
    marginHorizontal: 20,
  },
  itemTitle: {
    fontSize: 32,
    fontFamily: 'Lato-Bold',
    width: '70%',
    color: colors.white,
  },
  containerlocationWrapper: {
    flexDirection: 'row',
    marginLeft: 5,
  },
  locationTitle: {
    fontFamily: 'Lato-Bold',
    color: colors.white,
    fontSize: 16,
  },
  heartWrapper: {
    position: 'absolute',
    right: 30,
    top: -30,
    width: 64,
    height: 64,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  descriptionBoxWrapper: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  descriptionTitle: {
    fontSize: 24,
    fontFamily: 'Lato-Bold',
  },
  descriptionText: {
    marginTop: 20,
    fontSize: 16,
    color: colors.darkGrey,
    fontFamily: 'Lato-Regular',
    height: 85,
  },
  infoWrapper: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoItem: {},
  infoTitle: {
    color: colors.grey,
  },
  infoTextWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  infoText: {
    color: colors.orange,
    fontFamily: 'Lato-Bold',
    fontSize: 24,
  },
  infoSubText: {
    color: colors.grey,
    fontFamily: 'Lato-Bold',
    fontSize: 16,
  },
  bookNowButton: {
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: colors.orange,
    marginTop: 30,
    borderRadius: 20,
  },
  bookNowButtonText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: 'Lato-Bold',
  },
});

export default Details;
