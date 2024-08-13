import React, {FC} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './CourseCard.styles';

interface CourseCardProps {
  title: string;
  image: string;
  price: number;
  originalPrice: number;
  category: string;
  rating: number;
  students: number;
}

const CourseCard: FC<CourseCardProps> = ({
  title,
  image,
  price,
  originalPrice,
  category,
  rating,
  students,
}) => {
  console.log(category);
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      <View style={styles.flex}>
        <View>
          <Image style={styles.image} source={{uri: image}} />
        </View>
        <View>
          <View style={styles.labelContainer}>
            <View style={styles.labelView}>
              <Text style={styles.labelText}>{category}</Text>
            </View>
          </View>

          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>

          <View style={styles.priceContainer}>
            <Text style={styles.price}>${price}</Text>
            <Text style={styles.orgPrice}>${originalPrice}</Text>
          </View>
          <View>
            <Text>
              {rating} | {students} students
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CourseCard;
