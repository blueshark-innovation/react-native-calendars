import React from 'react';
import {Text, View} from 'react-native';
import styleConstructor from './style';
import PropTypes from 'prop-types';
import {Ionicons} from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {grey7, white} from "../../../../../src/theme";

const Dot = ({
  theme,
  isMarked,
  isDisabled,
  dotColor,
  isToday,
  isSelected,
  icon,
  iconColor,
  dayAfter
}) => {
  const style = styleConstructor(theme);
  const dotStyle = [style.dot];

  if (isMarked) {
    dotStyle.push(style.visibleDot);

    if (isDisabled) {
      dotStyle.push(style.disabledDot);
    }

    if (isSelected) {
      dotStyle.push(style.selectedDot);
    }

    if (dotColor) {
      dotStyle.push({backgroundColor: dotColor});
    }

    if (isToday) {
      dotStyle.push(style.todayDot);
    }

  }

  return (
    <View
      style={[
        dotStyle,
        {width: 0, height: 24, marginTop: -1, borderRadius: 0, backgroundColor: 'green'},
      ]}>
      <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: -1, width: 16,
            backgroundColor: 'transparent', marginLeft: -8}}>
        {icon && <View style={{marginRight: 2}}>
          <Ionicons name={icon} color={iconColor} size={16}/>
        </View>}
        {dayAfter > 0 && <View style={{marginTop: 0}}>
          <View style={{
            backgroundColor: grey7,
            width: 14,
            height: 14,
            borderRadius: 24,
            alignItems: "center",
            justifyContent: 'center'
          }}>
            <Text style={{fontSize: 10, color: 'white'}}>{dayAfter}</Text>
          </View>
        </View>}
      </View>

    </View>
  );
};

export default Dot;

Dot.propTypes = {
  theme: PropTypes.object,
  isMarked: PropTypes.bool,
  dotColor: PropTypes.string,
  isSelected: PropTypes.bool,
  isToday: PropTypes.bool,
  isDisabled: PropTypes.bool,
};
