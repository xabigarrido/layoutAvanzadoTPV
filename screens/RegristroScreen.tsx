import React, { useRef } from "react";
import {
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MiVentana } from "../components/MiVentana";
import {
  Box,
  ErroresInput,
  MiInput,
  SeparadorH,
  TextBig,
  TextSmall,
} from "../components/Utils";
import DarkModeSwitch from "../components/DarkModeSwitch";
import { Formik } from "formik";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import * as Yup from "yup";

const RegistroScreen = () => {
  const navigation = useNavigation();
  const emailRef = useRef();
  const passwordRef = useRef();
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

  const handlerSubmit = (values, actions) => {
    const newUserPrueba = {
      name: "Xabier",
      email: "xabigarrido@gmail.com",
      password: "123456",
    };
    console.log(values);
    actions.resetForm();
  };
  return (
    <MiVentana>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <View className="flex-1 items-center justify-center">
          <Box>
            <View className="flex-row justify-between">
              <TextBig>Crear cuenta</TextBig>
              <DarkModeSwitch />
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
