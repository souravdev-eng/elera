import {View} from 'react-native';
import React from 'react';
import styles from './HomeScreen.style';
import CourseCard from '../../components/CourseCard/CourseCard';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <CourseCard
        title="Master the Coding Interview: Big Tech (FAANG) Interviews"
        image="https://img-b.udemycdn.com/course/750x422/3047192_6d78_8.jpg"
        price={300}
        originalPrice={700}
        category="DSA"
        rating={4.5}
        students={300}
      />
      <CourseCard
        title="Ultimate AWS Certified Solutions Architect Associate SAA-C03"
        image="https://img-b.udemycdn.com/course/750x422/2196488_8fc7_10.jpg"
        price={300}
        originalPrice={700}
        category="Cloud"
        rating={4.5}
        students={300}
      />
    </View>
  );
};

export default HomeScreen;
