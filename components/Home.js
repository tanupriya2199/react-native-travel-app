import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

import activitiesData from '../assets/data/activitiesData';
import discoverCategoriesData from '../assets/data/discoverCategoriesData';
import discoverData from '../assets/data/discoverData';
import learnMoreData from '../assets/data/learnMoreData';
import person from '../assets/images/person.png';

import colors from '../assets/colors/colors';

const Home = ({navigation}) => {
  const renderDiscoverItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Details', {item: item});
        }}>
        <ImageBackground
          source={item.image}
          style={styles.discoverItem}
          imageStyle={styles.discoverItemImage}>
          <Text style={styles.discoverItemTitle}>{item.title}</Text>
          <View style={styles.discoverItemLocationWrapper}>
            <Entypo name="location-pin" size={18} color={colors.white} />
            <Text style={styles.discoverItemLocationText}>{item.location}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  const renderActivitiesItem = ({item}) => {
    return (
      <View style={styles.activityItemWrapper}>
        <Image
          style={styles.activityItemImage}
          source={item.image}
          size={30}
          color={colors.orange}
        />
        <Text style={styles.activityItemTitle}> {item.title}</Text>
      </View>
    );
  };

  const renderLearnMoreItem = ({item}) => {
    return (
      <ImageBackground
        style={styles.learnMoreItemImage}
        imageStyle={styles.imageStyle}
        source={item.image}>
        <Text style={styles.learnMoreItemTitle}>{item.title}</Text>
      </ImageBackground>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* header */}
        <SafeAreaView>
          <View style={styles.headerWrapper}>
            <Feather name="menu" size={32} style={styles.menuIcon} />
            <Image source={person} style={styles.profileImage} />
          </View>
        </SafeAreaView>

        {/* Discover Section */}
        <View style={styles.discoverWrapper}>
          <Text style={styles.sectionTitle}>Discover</Text>
          <View style={styles.discoverCategoryWrapper}>
            <Text style={[styles.discoverCategoryText, {color: colors.orange}]}>
              All
            </Text>
            <Text style={styles.discoverCategoryText}>Destinations</Text>
            <Text style={styles.discoverCategoryText}>Cities</Text>
            <Text style={styles.discoverCategoryText}>Experiences</Text>
          </View>

          <View style={styles.discoverItemWrapper}>
            <FlatList
              data={discoverData}
              renderItem={renderDiscoverItem}
              keyExtractor={item => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        {/*  activities*/}
        <View style={styles.actvitiesWrapper}>
          <Text style={styles.sectionTitle}>Activities</Text>
          <View style={styles.activitiesItemsWrapper}>
            <FlatList
              data={activitiesData}
              renderItem={renderActivitiesItem}
              keyExtractor={item => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        {/* Learn More Section */}
        <View style={styles.learnMoreWrapper}>
          <Text style={styles.sectionTitle}>Learn More</Text>
          <View style={styles.learnMoreItemsWrapper}>
            <FlatList
              data={learnMoreData}
              renderItem={renderLearnMoreItem}
              keyExtractor={item => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: colors.white,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  menuIcon: {},
  profileImage: {
    borderRadius: 10,
  },
  discoverWrapper: {
    paddingHorizontal: 10,
    marginTop: 20,
  },
  sectionTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 32,
  },
  discoverCategoryWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: 10,
  },
  discoverCategoryText: {
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    color: colors.grey,
  },
  discoverItemWrapper: {paddingVertical: 20, paddingHorizontal: 10},
  discoverItem: {
    width: 170,
    height: 250,
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginRight: 20,
  },
  discoverItemImage: {borderRadius: 20},
  discoverItemTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    color: colors.white,
  },
  discoverItemLocationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  discoverItemLocationText: {
    fontFamily: 'Lato-Bold',
    color: colors.white,
    marginLeft: 5,
  },
  actvitiesWrapper: {
    paddingHorizontal: 10,
    marginTop: 20,
    justifyContent: 'space-around',
  },
  activitiesItemsWrapper: {
    paddingVertical: 20,
  },
  activityItemWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 20,
  },
  activityItemImage: {
    width: 36,
  },
  activityItemTitle: {
    marginTop: 5,
    color: colors.grey,
    fontFamily: 'Lato-Bold',
    fontSize: 14,
  },
  learnMoreWrapper: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  learnMoreItemsWrapper: {},
  learnMoreItemWrapper: {
    marginRight: 20,
  },
  learnMoreItemImage: {
    width: 170,
    height: 180,
    justifyContent: 'flex-end',
    marginRight: 20,
  },
  imageStyle: {
    borderRadius: 20,
  },
  learnMoreItemTitle: {
    marginBottom: 20,
    marginLeft: 10,
    fontSize: 18,
    color: colors.grey,
    fontFamily: 'Lato-Bold',
  },
});

export default Home;
