import React, { Component } from 'react';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from 'react-native-google-signin';

import {
    StatusBar, View, Text,
    KeyboardAvoidingView, TextInput, TouchableHighlight,
    Image, TouchableOpacity,
} from 'react-native';
import { loginStyles } from '../styles/Loginstyles';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: false,
            email_format_error: false,
            paswd: false,
            userInfo: null,
            getLoginStatus: true,
            paswd_length_error:false,
        }
    }
    async componentDidMount() {
        //this.getAllRanking();
        this._unsubscribe = this.props.navigation.addListener('focus', () => {
            this.foucsComponentMount();
        });

    }
    foucsComponentMount=async()=>
    {
       
        this.textInput.clear();
        this.textInput1.clear();
        this.setState({email:false,paswd:false});
         // GoogleSignin.configure({
        //     // Mandatory method to call before calling signIn()
        //     scopes: ['https://www.googleapis.com/auth/drive.readonly'],
            
        //     webClientId: '321032157602-o4d07coe89bked0js7r8hpb7ass3sqdi.apps.googleusercontent.com',
        // });
    }
  
    componentWillUnmount() {
        this._unsubscribe();
    }
    // _isSignedIn = async () => {
    //     const isSignedIn = await GoogleSignin.isSignedIn();
    //     if (isSignedIn) {
    //         alert('User is already signed in');
    //         // Set User Info if user is already signed in
    //         this._getCurrentUserInfo();
    //     } else {
    //         console.log('Please Login');
    //     }
    //     setGettingLoginStatus(false);
    // };
    // _getCurrentUserInfo = async () => {
    //     try {
    //         let info = await GoogleSignin.signInSilently();
    //         console.log('User Info --> ', info);
    //         this.setState({ userInfo: info });
    //     } catch (error) {
    //         if (error.code === statusCodes.SIGN_IN_REQUIRED) {
    //             alert('User has not signed in yet');
    //             console.log('User has not signed in yet');
    //         } else {
    //             alert("Unable to get user's info");
    //             console.log("Unable to get user's info");
    //         }
    //     }
    // };
    // _signIn = async () => {
    //     console.log("In Sig in");
    //     // It will prompt google Signin Widget
    //     try {
    //         await GoogleSignin.hasPlayServices({
    //             // Check if device has Google Play Services installed
    //             // Always resolves to true on iOS
    //             showPlayServicesUpdateDialog: true,
    //         });
    //         const userInfo = await GoogleSignin.signIn();
    //         console.log('User Info --> ', userInfo);
    //         this.setState({ userInfo: userInfo });
    //     }
    //      catch (error) {
    //         console.log('Message', JSON.stringify(error));
    //         if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    //             alert('User Cancelled the Login Flow');
    //         } else if (error.code === statusCodes.IN_PROGRESS) {
    //             alert('Signing In');
    //         } else if (
    //             error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE
    //         ) {
    //             alert('Play Services Not Available or Outdated');
    //         } else {
    //             alert(error.message);
    //         }
    //     }
    // }
    // _signOut = async () => {
    //     this.setState({ getLoginStatus: true });
    //     // Remove user session from the device.
    //     try {
    //         await GoogleSignin.revokeAccess();
    //         await GoogleSignin.signOut();
    //         // Removing user Info
    //         setUserInfo(null);
    //     } catch (error) {
    //         console.error(error);
    //     }
    //     this.setState({ getLoginStatus: false });
    // };

    handleChange(value, fieldName) {
        if (fieldName == "email") {
            let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (value.length == 0 || reg.test(value) === false) {
                if (reg.test(value) === false) {
                    this.setState({ email_format_error: true });
                }
                this.setState({ email: false });
            }
            else {
                
                this.setState({ email: true,email_format_error:false });
            }
        }
        else if (fieldName == "paswd") {
           
            if ( value.length < 4) {

                this.setState({ paswd: false,paswd_length_error:true });
            }
            else {
                this.setState({ paswd: true,paswd_length_error:false });
            }
        }
    }
    render() {
        return (

            <View style={loginStyles.mainContainer}>
                <StatusBar barStyle="light-content"
                    translucent
                    backgroundColor="#B02E46" />
                <View style={loginStyles.headerContainer}>
                    <Text style={loginStyles.SignInText}>Sign In</Text>
                </View>
                <View style={loginStyles.bodyContainer}>
                    <View style={loginStyles.bodyInnerContainer}>
                        <View style={loginStyles.inputFieldContainer}>

                            <Text style={loginStyles.inputFieldContainerLabel}>Email</Text>

                            <View style={loginStyles.inputFieldContainerIcon1}>
                                <MaterialIcons name='email' size={16} color='#8E9297' />
                            </View>
                            <TextInput
                                ref={input => { this.textInput = input }}
                                style={loginStyles.textarea}
                                placeholderTextColor='white'
                                onChangeText={(e) => this.handleChange(e, "email")}
                                autoCapitalize='none'
                                keyboardType='email-address'
                            >
                            </TextInput>
                            {
                                this.state.email_format_error ?
                                    (
                                        <Text style={loginStyles.mailErrorText}>Invalid Email</Text>
                                    ) :
                                    (
                                        null
                                    )
                            }
                        </View>
                        <View style={loginStyles.inputFieldContainer}>

                            <Text style={loginStyles.inputFieldContainerLabel1}>password</Text>
                            <View style={loginStyles.inputFieldContainerIcon1}>
                                <Image source={require('../assets/images/Lock.png')}
                                    style={loginStyles.emailImage} />
                            </View>

                            <TextInput
                                  ref={input => { this.textInput1 = input }}
                                style={loginStyles.textarea}
                                placeholderTextColor='white'
                                secureTextEntry={true}
                                autoCapitalize='none'
                                keyboardType='visible-password'
                                onChangeText={(e) => this.handleChange(e, "paswd")}
                            >
                            </TextInput>
                            {
                                this.state.paswd_length_error ?
                                    (
                                        <Text style={loginStyles.mailErrorText}>Password length should more than 3</Text>
                                    ) :
                                    (
                                        null
                                    )
                            }

                        </View>
                        <View style={loginStyles.forgetPaswordContainer}>
                            <Text style={loginStyles.fgText}>Forgot password?</Text>
                        </View>

                        <View style={loginStyles.IconContainer}>
                            {
                                this.state.email && this.state.paswd ?
                                    (
                                        <View style={loginStyles.InnerIconView}>
                                            <TouchableOpacity
                                                onPress={() => this.props.navigation.navigate('HomeScreen')}>
                                                <AntDesign name='arrowright' size={25} color='white' />
                                            </TouchableOpacity>
                                        </View>
                                    ) :
                                    (
                                        <View style={loginStyles.InnerIconView1}>
                                            <TouchableOpacity
                                            >
                                                <AntDesign name='arrowright' size={25} color='white' />
                                            </TouchableOpacity>
                                        </View>
                                    )
                            }


                        </View>

                    </View>
                </View>
                <View style={loginStyles.bottomContainer}>
                    <View style={loginStyles.upperTextContainer}>
                        <Text style={loginStyles.upperText}>or Sign in With</Text>
                    </View>
                    <TouchableHighlight 
                     // onPress={this._signIn()}
                     >
                        <View style={loginStyles.GmailContainer}>
                            <AntDesign name='google' size={22} color='green' />
                            <Text style={loginStyles.googleContainerText}>Sign with Google</Text>
                            <View>

                            </View>
                        </View>
                    </TouchableHighlight>

                    <View style={loginStyles.ClickContainer}>
                        <Text style={loginStyles.ClickText}>Don't have an account? </Text>
                        <TouchableHighlight>
                            <Text style={loginStyles.ClickText}> Click here</Text>
                        </TouchableHighlight>
                    </View>
                    {/* {
                        this.state.userInfo === null ?
                            (
                                <GoogleSigninButton
                                    style={{ width: 312, height: 60,borderRadius:10 }}
                                    size={GoogleSigninButton.Size.Wide}
                                    color={GoogleSigninButton.Color.Light}
                                    // onPress={this._signIn()}
                                />
                            ) :
                            (
                               null
                            )
                    } */}
                </View>

            </View>
        );
    }
}
