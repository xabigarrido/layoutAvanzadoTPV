// import React from "react";
// import { Text, View, TextInput, Button } from "react-native";
// import { MiVentana } from "../components/MiVentana";
// import { Box, MiInput, TextBig } from "../components/Utils";
// import { auth, db } from "../firebaseConfig";
// import { Formik } from "formik";
// import * as Yup from "yup";
// import CustomButton from "../components/CustomButton";

// const validationSchema = Yup.object().shape({
//   email: Yup.string()
//     .min(3, "Debe tener al menos 3 caracteres")
//     .required("El nombre es obligatorio"),
//   password: Yup.string()
//     .min(3, "Debe tener al menos 3 caracteres")
//     .required("La contraseña es obligatoria"),
// });

// const LoginScreen = () => {
//   return (
//     <MiVentana>
//       <View className="flex-1 justify-center items-center">
//         <Box>
//           <Formik
//             initialValues={{ password: "", email: "" }}
//             onSubmit={(values) => console.log(values)}
//             validationSchema={validationSchema}
//           >
//             {({
//               handleChange,
//               handleBlur,
//               handleSubmit,
//               values,
//               errors,
//               touched,
//             }) => (
//               <View>
//                 <TextBig addClass={"mb-2"}>Iniciar sesion</TextBig>
//                 <MiInput
//                   onChangeText={handleChange("email")}
//                   onBlur={handleBlur("email")}
//                   value={values.email}
//                   placeholder="Direccion de correo"
//                   addClass="bg-white w-[100%] mb-2"
//                 />
//                 {errors.email && (
//                   <Text className="text-red-500 mb-2 mt-2">{errors.email}</Text>
//                 )}
//                 <MiInput
//                   onChangeText={handleChange("password")}
//                   onBlur={handleBlur("password")}
//                   value={values.password}
//                   type="password"
//                   placeholder="Escribe su contraseña"
//                   addClass="bg-white w-[100%]"
//                 />
//                 {errors.password && (
//                   <Text className="text-red-500 mb-2 mt-2">
//                     {errors.password}
//                   </Text>
//                 )}
//                 <CustomButton
//                   onPress={handleSubmit}
//                   texto={"Ingresar"}
//                   color={"bg-buttonPrimary mt-2"}
//                 />
//               </View>
//             )}
//           </Formik>
//         </Box>
//       </View>
//     </MiVentana>
//   );
// };

// export default LoginScreen;

// import React from "react";
// import { Text, View, TextInput } from "react-native";
// import { MiVentana } from "../components/MiVentana";
// import { Formik } from "formik";
// import * as Yup from "yup"; // Si deseas agregar validación
// import { Box, MiInput, TextBig, TextSmall } from "../components/Utils";
// import CustomButton from "../components/CustomButton";

// // Validación simple con Yup
// const validationSchema = Yup.object().shape({
//   email: Yup.string().email("Correo inválido").required("Correo requerido"),
// });

// const LoginScreen = () => {
//   const handlerSubmit = (values, actions) => {
//     console.log(values); // Verifica los valores enviados
//     actions.resetForm(); // Esto limpiará los campos
//   };

//   return (
//     <MiVentana>
//       <View className="flex-1 justify-center items-center">
//         <Box>
//           <TextBig addClass={"mb-5"}>Iniciar Sesión</TextBig>
//           <Formik
//             initialValues={{ email: "", password: "" }}
//             onSubmit={handlerSubmit}
//             validationSchema={validationSchema} // Aplicamos la validación
//           >
//             {({
//               handleChange,
//               handleBlur,
//               handleSubmit,
//               values,
//               touched,
//               errors,
//             }) => (
//               <View>
//                 <TextSmall>Correo electrónico:</TextSmall>
//                 <MiInput
//                   addClass={"w-full"}
//                   placeholder="Introduce tu correo"
//                   onChangeText={handleChange("email")}
//                   onBlur={handleBlur("email")}
//                   value={values.email} // Asegúrate de que esté correctamente controlado
//                 />
//                 {touched.email && errors.email && (
//                   <Text className="mb-2">{errors.email}</Text> // Mostramos el error
//                 )}
//                 <TextInput className="bg-white" />

//                 <CustomButton
//                   texto="Ingresar"
//                   color="bg-blue-500 mt-5"
//                   onPress={handleSubmit} // Esto dispara el submit
//                 />
//               </View>
//             )}
//           </Formik>
//         </Box>
//       </View>
//     </MiVentana>
//   );
// };

// export default LoginScreen;

// import React, { useRef } from "react";
// import {
//   Text,
//   View,
//   KeyboardAvoidingView,
//   Platform,
//   ScrollView,
// } from "react-native";
// import { MiVentana } from "../components/MiVentana";
// import { Box, MiInput, TextBig } from "../components/Utils";
// import { Formik } from "formik";
// import * as Yup from "yup";
// import CustomButton from "../components/CustomButton";

// const LoginScreen = () => {
//   const passwordRef = useRef();
//   const validationSchema = Yup.object().shape({
//     email: Yup.string().email("Correo invalido").required("Campo requerido"),
//     password: Yup.string().min(4, "Minimo  de 4").required("Campo requerido"),
//   });
//   const handlerSubmit = (values, actions) => {
//     console.log(values);
//     actions.resetForm();
//   };
//   return (
//     <MiVentana>
//       <KeyboardAvoidingView
//         style={{ flex: 1 }}
//         behavior={Platform.OS === "ios" ? "padding" : "height"}
//         keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0} // Ajusta este valor para probar en iOS
//       >
//         <View className="flex-1 justify-center items-center">
//           <Box>
//             <TextBig addClass={"mb-4"}>Iniciar sesion</TextBig>
//             <Formik
//               initialValues={{ email: "", password: "" }}
//               onSubmit={handlerSubmit}
//               validationSchema={validationSchema}
//             >
//               {({
//                 handleChange,
//                 handleBlur,
//                 handleSubmit,
//                 values,
//                 errors,
//                 touched,
//               }) => (
//                 <View>
//                   <MiInput
//                     addClass={"w-full mb-2"}
//                     placeholder={"Introduce correo electronico"}
//                     onChangeText={handleChange("email")}
//                     onBlur={handleBlur("email")}
//                     value={values.email}
//                     onSubmitEditing={() => passwordRef.current.focus()}
//                   />
//                   {touched.email && errors.email && <Text>{errors.email}</Text>}
//                   <MiInput
//                     addClass={"w-full mb-2"}
//                     placeholder={"Introduce contraseña"}
//                     onChangeText={handleChange("password")}
//                     onBlur={handleBlur("password")}
//                     value={values.password}
//                     ref={passwordRef}
//                   />
//                   {touched.password && errors.password && (
//                     <Text>{errors.password}</Text>
//                   )}
//                   <CustomButton
//                     texto={"Ingresar"}
//                     color={"bg-buttonPrimary dark:bg-dark-buttonPrimary mt-2"}
//                     onPress={handleSubmit}
//                   />
//                 </View>
//               )}
//             </Formik>
//           </Box>
//         </View>
//       </KeyboardAvoidingView>
//     </MiVentana>
//   );
// };

// export default LoginScreen;,

import React, { useRef, useState } from "react";
import {
  Text,
  TextBase,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { MiVentana } from "../components/MiVentana";
import {
  Box,
  ErroresInput,
  gestionarErroresLogin,
  MiInput,
  PantallaLoadingPage,
  SeparadorH,
  TextBig,
  TextSmall,
} from "../components/Utils";
import DarkModeSwitch from "../components/DarkModeSwitch";
import { Formik } from "formik";
import CustomButton from "../components/CustomButton";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";
import { loginUser } from "../Api/LoginApi";
import Toast from "react-native-toast-message";

const LoginScreen = () => {
  const navigation = useNavigation();
  const passwordRef = useRef();
  const [loadingPage, setLoadingPage] = useState(false);
  const [erroresLogin, setErroresLogin] = useState(null);
  const hanlderSubmit = async (values, actions) => {
    try {
      setLoadingPage(true);
      await loginUser(values);
    } catch (error) {
      console.log(error.data);
      Toast.show({
        type: "error",
        text1: "Ha habido un problema",
        text2: gestionarErroresLogin(error.data),
      });
    }
    setLoadingPage(false);
  };
  const validateSchema = Yup.object().shape({
    email: Yup.string()
      .email("Direccion de correo invalida")
      .required("Campo requerido"),
    password: Yup.string().min(6, "Minimo 6").required("Campo requerido"),
  });
  if (loadingPage) {
    return <PantallaLoadingPage />;
  }
  return (
    <MiVentana>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <View className="flex-1 justify-center items-center">
          <Box>
            <View className="flex-row justify-between">
              <TextBig>Iniciar Sesion</TextBig>
              <DarkModeSwitch />
            </View>
            <SeparadorH />
            <View>
              <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={hanlderSubmit}
                validationSchema={validateSchema}
              >
                {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  values,
                  touched,
                  errors,
                }) => (
                  <View className="gap-3">
                    <MiInput
                      placeholder="Dirección de correo electrónico"
                      addClass="w-full"
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      value={values.email}
                      onSubmitEditing={() => {
                        passwordRef.current.focus();
                      }}
                    />
                    <ErroresInput
                      touched={touched.email}
                      errors={errors.email}
                    />
                    <MiInput
                      ref={passwordRef}
                      placeholder="**********"
                      addClass="w-full"
                      onChangeText={handleChange("password")}
                      onBlur={handleBlur("password")}
                      value={values.password}
                      onSubmitEditing={handleSubmit}
                    />
                    {touched.password && errors.password && (
                      <Text className="font-sans text-red-500">
                        {errors.password}
                      </Text>
                    )}
                    <CustomButton
                      color={
                        "bg-buttonPrimary dark:bg-dark-buttonPrimary w-full"
                      }
                      texto={"Acceder"}
                      onPress={handleSubmit}
                    />
                    <TouchableOpacity
                      onPress={() => navigation.navigate("RegistroScreen")}
                    >
                      <TextSmall addClass={"text-center text-blue-500"}>
                        ¿No tienes una cuenta? Regístrate
                      </TextSmall>
                    </TouchableOpacity>
                  </View>
                )}
              </Formik>
            </View>
          </Box>
        </View>
      </KeyboardAvoidingView>
    </MiVentana>
  );
};

export default LoginScreen;
