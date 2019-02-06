import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';
import colors from '../../styles/colors'


export default class RoundedButton extends Component {
    render() {
        const { taxt, textColor, background, icon, handleOnPress } = this.props;
        const backgroundColor = background || 'transparent';
        const color = textColor || colors.black;
        return (
            <TouchableHighlight
                style={[{ backgroundColor }, styles.wrapper]}
                onPress={handleOnPress}
            >
                <View style={styles.buttonTextWrapper}>
                    {icon}
                    <Text
                        style={[{ color }, styles.buttonText]}>
                        {taxt}
                    </Text>
                </View>
            </TouchableHighlight>
        )
    }
}

RoundedButton.propTypes = {
    taxt: PropTypes.string.isRequired,
    textColor: PropTypes.string,
    background: PropTypes.string,
    icon: PropTypes.object,
    handleOnPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        padding: 15,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: colors.white,
        marginBottom: 15,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 20,
        width: '100%',
        textAlign: 'center',
    },
    buttonTextWrapper:{
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
});