import React from "react";
import { TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
//Formik
import { Formik} from "formik";
import{
    StyleContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    StyledButton,
    ButtonText,
    Colors

} from './../components/styles'

import { View } from "react-native";

//icons
import{Octicons} from "@expo/vector-icons";


//colors
const{brand, darkLight} = Colors;
const Login = () =>{
    return(
        <StyleContainer>
            <StatusBar style="dark"></StatusBar>
            <InnerContainer>
                <PageLogo resizeMode = "cover" source ={require('./../assets/img/logo.png')} />

                
                <Formik
                    initialValues={{email:'', password: '' }}
                    onSubmit={(values) => {
                        console.log(values);

                    }}
                >
                    {({handleChange, handleBlur, handleSubmit, values}) => <StyledFormArea>
                        <MyTextInput 
                        label= "Email Address"
                        icon = "mail"
                        placeholder = "abc@gmail.com"
                        placeholderTextColor ={darkLight}
                        onChangeText = {handleChange('email')}
                        onBlur = {handleBlur('email')}
                        values={values.email}
                        keyboardType="email-address"
                        />

                    </StyledFormArea>}
                    </Formik>
            </InnerContainer>
            </StyleContainer>
        

    );
};

// const MyTextInput = (label, icon, ...props) => {
//     return(
//         <View>
//                 <LeftIcon>
//                     < Octicons name={icon} size={30} color={brand
//                     } />
//                 </LeftIcon>
//                 <StyledInputLabel>{label}</StyledInputLabel>
//                 <StyledTextInput>{...props}</StyledTextInput>
//         </View>
//     )

// }

export default Login;