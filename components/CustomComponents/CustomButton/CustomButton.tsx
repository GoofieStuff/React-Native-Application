import React from 'react';
import {Pressable, Text} from 'react-native';
import {Spinner} from '@/components/ui/spinner';
import PropTypes from 'prop-types';
import {styleMerge} from '@/utilities/Styling';

const CustomButton = ({
  buttonText = 'Proceed',
  buttonStyle = '',
  textStyle = '',
  onPress = () => {},
  icon: IconComponent = null,   
  loading = false,
  disabled = false,
  capitalised = true,
  spinnerSize=null,
  spinnerColour='',
}) => {
  return (
    <Pressable
      disabled={disabled || loading}
      onPress={onPress}
      className={styleMerge(
        'group flex-row items-center justify-evenly bg-primary-700  rounded-lg active:opacity-80 py-1 px-2',
        (disabled || loading) ? 'opacity-50' : '',
        buttonStyle,
      )}
    >
      {loading && (
        <Spinner size={spinnerSize || 30} color={spinnerColour || 'white'}  />
      )}
 
      {!loading && IconComponent && (typeof(IconComponent) === 'function' ? (<IconComponent />) : IconComponent)}

      {!loading && buttonText && (
        <Text
          className={styleMerge('text-white font-semibold', textStyle)}
        >
          {capitalised ? buttonText.toUpperCase() : buttonText}
        </Text>
      )}
    </Pressable>
  );
};

CustomButton.propTypes = {
  buttonText: PropTypes.string,
  buttonStyle: PropTypes.string,
  textStyle: PropTypes.string,
  onPress: PropTypes.func,
  icon: PropTypes.func,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  capitalised: PropTypes.bool,
  spinnerSize: PropTypes.number,
  spinnerColour: PropTypes.string,   
};

export {CustomButton};
