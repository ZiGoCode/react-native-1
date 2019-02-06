import React, { Component } from 'react';
import colors from '../styles/colors/index'

import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import RoundedButton from '../components/buttons/RoundedButton'


export default class LoggedOut extends Component {
    onFacebookPass() {
        alert('Facebook button pressed');
    }
    onCreateAccountPass() {
        alert('Create Account button pressed');
    }
    onMoreOptionsPress() {
        alert('More options button pressed')
    }
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.welcomeWrapper}>
                    <Image
                        source={require('../img/airbnb-logo.png')}
                        style={styles.logo}
                    />
                    <Text style={styles.welcomeText}>Welcome to Airbnb.</Text>
                    <RoundedButton
                        taxt="Continue with Facebook"
                        textColor={colors.green01}
                        background={colors.white}
                        icon={<Icon name="facebook" size={20} style={styles.facebookButtonIcon} />}
                        handleOnPress={this.onFacebookPass}
                    />
                    <RoundedButton
                        taxt="Create Account"
                        textColor={colors.white}
                        handleOnPress={this.onCreateAccountPass}
                    />
                    <TouchableHighlight
                        style={styles.moreOptionsButton}
                        onPress={this.onMoreOptionsPress}
                    >
                        <Text style={styles.moreOptionsButtonText}>More options</Text>
                    </TouchableHighlight>
                    <View style={styles.termsAndCondittions}>
                        <Text style={styles.termsText}>
                            By tapping Continue, Create Account or More
                        </Text>
                        <Text style={styles.termsText}> options,</Text>
                        <Text style={styles.termsText}>I agree to Airbnb's </Text>
                        <TouchableHighlight style={styles.linkButton}>
                            <Text style={styles.termsText}>
                                Terms of Service
                            </Text>
                        </TouchableHighlight>
                        <Text style={styles.termsText}>, </Text>
                        <TouchableHighlight style={styles.linkButton}>
                            <Text style={styles.termsText}>
                                Payments Terms of Service
                            </Text>
                        </TouchableHighlight>
                        <Text style={styles.termsText}>, </Text>
                        <TouchableHighlight style={styles.linkButton}>
                            <Text style={styles.termsText}>
                                Privacy Policy
                            </Text>
                        </TouchableHighlight>
                        <Text style={styles.termsText}>, and</Text>
                        <TouchableHighlight style={styles.linkButton}>
                            <Text style={styles.termsText}>
                                Nondiscrimination Policy
                            </Text>
                        </TouchableHighlight>
                        <Text style={styles.termsText}>.</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        display: 'flex',
        backgroundColor: colors.green01,
    },
    welcomeWrapper: {
        flex: 1,
        display: 'flex',
        marginTop: 30,
        padding: 20,
    },
    welcomeText: {
        fontSize: 30,
        color: colors.white,
        fontWeight: '200',
        marginBottom: 40,
    },
    logo: {
        width: 50,
        height: 50,
        marginTop: 50,
        marginBottom: 40,
    },
    facebookButtonIcon: {
        color: colors.green01,
        position: 'relative',
        left: 20,
        top: 4,
        zIndex: 8,
    },
    moreOptionsButton: {
        marginTop: 10,
    },
    moreOptionsButtonText: {
        color: colors.white,
        fontSize: 16,
    },
    termsAndCondittions: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
        marginTop: 30,
    },
    termsText: {
        color: colors.white,
        fontSize: 14,
        fontWeight: '300'
    },
    linkButton: {
        borderBottomWidth: 1,
        borderBottomColor: colors.white,
    }
})

