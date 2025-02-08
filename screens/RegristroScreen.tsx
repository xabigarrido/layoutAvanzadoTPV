import React, { useEffect, useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  View,
  Keyboard,
  ActivityIndicator,
} from "react-native";
import { MiVentana } from "../components/MiVentana";
import {
  Box,
  ErroresInput,
  gestionarErroresLogin,
  MiInput,
  PantallaLoading,
  PantallaLoadingPage,
  SeparadorH,
  TextBig,
  TextSmall,
} from "../components/Utils";
import DarkModeSwitch from "../components/DarkModeSwitch";
import { Formik } from "formik";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import * as Yup from "yup";
import { createUser } from "../Api/RegisterApi";
import { useAuth } from "../Context/AuthContext";
import Toast from "react-native-toast-message";
const RegistroScreen = () => {
  const navigation = useNavigation();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);
  const validateSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Ingresa un nombre con mas de 3 caracteres")
      .required("Campo requerido"),
    password: Yup.string().min(
      6,
      "La contraseña debe contener almenos 6 caracteres"
    ),
    email: Yup.string().email("Email invalido").required("Campo requerido"),
  });

  const handlerSubmit = async (values, actions) => {
    setLoading(true);
    Keyboard.dismiss();
    const resultado = await createUser(values);
    if (resultado.estado) {
      console.log(resultado.mensaje);
    } else {
      Toast.show({
        type: "error",
        text1: "Ha habido un problema",
        text2: gestionarErroresLogin(resultado.mensaje),
      });
      console.log(resultado.mensaje);
    }
    setLoading(false);
  };
  if (loading) {
    return <PantallaLoadingPage />;
  }
  return (
    <MiVentana>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <View className="flex-1 items-center justify-center">
          <Box>
            <View className="flex-row justify-between">
              <TextBig>Crear cuenta</TextBig>
            </View>
            <SeparadorH />
            <Formik
              initialValues={{ name: "", email: "", password: "" }}
              onSubmit={handlerSubmit}
              validationSchema={validateSchema}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
              }) => (
                <View className="gap-3">
                  <MiInput
                    placeholder="Nombre de usuario"
                    addClass="w-full"
                    onChangeText={handleChange("name")}
                    onBlur={handleBlur("name")}
                    value={values.name}
                    onSubmitEditing={() => {
                      emailRef.current.focus();
                    }}
                  />
                  <ErroresInput touched={touched.name} errors={errors.name} />
                  <MiInput
                    ref={emailRef}
                    placeholder="Direccion de correo electronico"
                    addClass="w-full"
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    onSubmitEditing={() => {
                      passwordRef.current.focus();
                    }}
                  />
                  <ErroresInput touched={touched.email} errors={errors.email} />
                  <MiInput
                    ref={passwordRef}
                    placeholder="*********"
                    addClass="w-full"
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                    onSubmitEditing={handleSubmit}
                  />
                  <ErroresInput
                    touched={touched.password}
                    errors={errors.password}
                  />
                  <CustomButton
                    texto={"Crear Cuenta"}
                    color={"bg-buttonSuccess dark:bg-dark-buttonSuccess w-full"}
                    onPress={handleSubmit}
                  />
                  <TouchableOpacity
                    onPress={() => navigation.navigate("LoginScreen")}
                  >
                    <TextSmall addClass={"text-center text-blue-500"}>
                      ¿Ya tienes una cuenta?, Inicia sesion
                    </TextSmall>
                  </TouchableOpacity>
                </View>
              )}
            </Formik>
          </Box>
        </View>
      </KeyboardAvoidingView>
    </MiVentana>
  );
};

export default RegistroScreen;
