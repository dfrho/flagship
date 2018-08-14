import React, { Component } from 'react';
import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableHighlight,
  View,
  ViewStyle
} from 'react-native';
import { border, fontSize, palette } from '../styles/variables';

const arrowImg = require('../../assets/images/arrow.png');

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingBottom: 16,
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: border.width,
    borderBottomColor: border.color,
    height: 95
  },
  arrow: {
    width: 15,
    height: 15,
    paddingRight: 10,
    transform: [{ rotate: '180deg' }]
  },
  title: {
    fontSize: fontSize.base,
    fontWeight: '500',
    color: palette.onBackground,
    paddingLeft: 25
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  categoryImage: {
    height: 64,
    width: 63
  }
});

interface CategoryImage {
  uri?: string;
}

export interface PSRowProps {
  onPress: () => void;
  title: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  showImage?: boolean;
  renderImage?: () => JSX.Element;
  categoryImage?: CategoryImage;
}

export default class PSRow extends Component<PSRowProps> {
  renderImage(): JSX.Element {
    if (this.props.renderImage) {
      return this.props.renderImage();
    }

    return (
      <Image source={arrowImg} style={styles.arrow} resizeMode='contain' />
    );
  }

  render(): JSX.Element {
    const { categoryImage, onPress, showImage, style, textStyle, title } = this.props;

    return (
      <TouchableHighlight onPress={onPress} underlayColor={palette.surface}>
        <View style={[styles.container, style]}>

          <View style={styles.cardContainer}>
            {categoryImage && categoryImage.uri &&
              < Image source={categoryImage} style={styles.categoryImage} />}
            <Text style={[styles.title, textStyle]}>{title}</Text>
          </View>
          {showImage && this.renderImage()}
        </View>
      </TouchableHighlight>
    );
  }
}
