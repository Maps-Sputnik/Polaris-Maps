import React from 'react';
import { Text, View, Dimensions, TouchableOpacity } from 'react-native';
import StyledIcon from '@components/Atoms/StyledIcon';
import FastImage from 'react-native-fast-image';
import { SIZES as sizes } from '@constants';
import styles from './styles';

const MemoizedItem = () => {
  const { height, width } = Dimensions.get('screen');

  return (
    <TouchableOpacity style={styles.notItem(width, height)}>
      <View style={styles.imgCon}>
        <View
          style={[
            styles.row,
            {
              justifyContent: 'space-between',
              marginVertical: 5,
            },
          ]}
        >
          <Text style={styles.brandTxt}>Appname</Text>
        </View>
        <FastImage
          source={require('@assets/Images/image.jpg')}
          style={styles.notImg(width, height)}
        />
      </View>
      <View style={styles.bodyCon}>
        <Text style={styles.titleTxt}>Some text</Text>
        <Text style={styles.secondaryTxt}>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Text>
      </View>
      <View style={styles.viewCon}>
        <StyledIcon name="ri-eye-line" color="black" size={sizes.icon * 0.4} />
        <Text style={styles.viewCount}>1k+</Text>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(MemoizedItem);
