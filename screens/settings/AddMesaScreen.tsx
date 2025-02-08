import React, { useRef, useState } from "react";
import {
  Text,
  View,
  Modal,
  Button,
  TextInput,
  useColorScheme,
  TouchableOpacity,
} from "react-native";
import { MiVentana } from "../../components/MiVentana";
import Animated, {
  useAnimatedStyle,
  runOnJS,
  withSpring,
  useSharedValue,
} from "react-native-reanimated";
import {
  GestureHandlerRootView,
  Gesture,
  GestureDetector,
} from "react-native-gesture-handler";
import CustomButton from "../../components/CustomButton";
import { Box, MiInput, TextBig, TextSmall } from "../../components/Utils";
import Header from "../../components/Header";
import "../../global.css";
import Slider from "@react-native-community/slider";

const AddMesaScreen = () => {
  const colorSystem = useColorScheme();
  const [crearMesa, setCrearMesa] = useState(false);
  const [circulos, setCirculos] = useState([]);
  const [mesaElegida, setMesaElegida] = useState(null);
  const [colorEscogido, setColorEscogido] = useState(null);
  const [compoCirculo, setCompoCirculo] = useState({
    title: "",
    alto: 50,
    ancho: 50,
    color: "red",
  });
  const updateCircle = async (id, x, y) => {
    try {
      console.log("llege");
      // sendMessage("Crear Bola", { id: 23, name: "pepe", subname: "maria" });
      const newArray = circulos.map((circulo) => {
        if (circulo.id == id) {
          circulo.initialX = x;
          circulo.initialY = y;
          return circulo;
        } else {
          return circulo;
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  const añadirCirculo = async ({
    ancho,
    altura,
    radius,
    bgColor,
    nombre,
    numero,
  }) => {
    try {
      const aleatorioX = 0;
      const aleatorioY = 0;
      const number = circulos.length;
      const newCirculo = {
        id: new Date().getTime(),
        color: bgColor,
        initialX: aleatorioX,
        initialY: aleatorioY,
        number,
        width: ancho,
        heigth: altura,
        borderRadius: radius,
      };
      const newArray = [...circulos, newCirculo];
      setCirculos(newArray);
      console.log(newCirculo);
    } catch (error) {
      console.log(error);
    }
  };
  const DibujarCirculo = ({
    id,
    color,
    initialX,
    initialY,
    updateCirculo,
    number,
    width,
    heigth,
    borderRadius,
  }) => {
    const translateX = useSharedValue(initialX);
    const translateY = useSharedValue(initialY);
    const offsetX = useSharedValue(0);
    const offsetY = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [
        { translateX: withSpring(translateX.value) },
        { translateY: withSpring(translateY.value) },
      ],
    }));

    const panGesture = Gesture.Pan()
      .onStart(() => {
        // Guarda la posición actual antes de iniciar el gesto
        offsetX.value = translateX.value;
        offsetY.value = translateY.value;
      })
      .onUpdate((event) => {
        // Aplica la traslación respecto a la posición guardada
        translateX.value = offsetX.value + event.translationX;
        translateY.value = offsetY.value + event.translationY;
      })
      .onEnd(() => {
        // Guarda la nueva posición final en el estado
        runOnJS(updateCirculo)(id, translateX.value, translateY.value);
      });
    return (
      <GestureDetector gesture={panGesture}>
        <Animated.View
          style={[
            animatedStyle,
            {
              height: heigth,
              width: width,
              backgroundColor: color, // Asumiendo que 'color' es una variable con el valor adecuado
              borderRadius,
              position: "absolute",
              justifyContent: "center",
              alignItems: "center",
            },
          ]}
          // className={`h-[50px] w-[70px] ${color} rounded-full absolute justify-center items-center`}
        >
          <Text className="text-4xl font-bold font-sans ">{number}</Text>
        </Animated.View>
      </GestureDetector>
    );
  };
  const CrearMesaAjustes = () => {
    const DiseñoMesas = ({ altura, ancho, color, radius }) => {
      let bgColor;
      if (colorSystem == "dark") {
        bgColor = "#f8f8f8";
      } else {
        bgColor = "#202020";
      }
      return (
        <TouchableOpacity
          onPress={() => setMesaElegida({ altura, ancho, radius, bgColor })}
        >
          <View
            style={{
              backgroundColor: bgColor,
              height: altura,
              width: ancho,
              borderRadius: radius,
            }}
          ></View>
        </TouchableOpacity>
      );
    };
    return (
      <View className=" justify-center items-center">
        <Box>
          <TextBig className="mt-5">Seleciona una forma</TextBig>
          <Text className="font-sans text-textPrimary dark:text-dark-textPrimary mb-10">
            Puedes elegir entre estas formas para modelar tu pizarra de trabajo,
            una vez elegida, seguimos con la configuración
          </Text>
          <View className="flex-row gap-2 flex-wrap">
            <View className="w-full flex-row justify-around items-center mb-2">
              <DiseñoMesas ancho={90} altura={90} radius={90 / 3} />
              <DiseñoMesas ancho={70} altura={70} radius={70 / 3} />
              <DiseñoMesas color="red" ancho={50} altura={50} radius={50 / 3} />
            </View>
            <View className="w-full flex-row justify-around items-center mb-2">
              <DiseñoMesas ancho={90} altura={90} radius={90 / 2} />
              <DiseñoMesas color="red" ancho={70} altura={70} radius={70 / 2} />
              <DiseñoMesas ancho={50} altura={50} radius={50 / 2} />
            </View>
            <View className="w-full flex-row justify-around items-center mb-2">
              <DiseñoMesas ancho={120} altura={60} radius={20} />
              <DiseñoMesas color="blue" ancho={90} altura={45} radius={10} />
              <DiseñoMesas color="green" ancho={70} altura={40} radius={15} />
            </View>
            <View className="w-full flex-row justify-around items-center mb-2">
              <DiseñoMesas ancho={60} altura={120} radius={20} />
              <DiseñoMesas ancho={45} altura={90} radius={10} />
              <DiseñoMesas ancho={40} altura={70} radius={15} />
            </View>
          </View>
        </Box>
      </View>
    );
  };

  const ConfigurarMesa = () => {
    const colores = [
      "#EF4444", // bg-red-500
      "#3B82F6", // bg-blue-500
      "#10B981", // bg-green-500
      "#F59E0B", // bg-yellow-500
      "#8B5CF6", // bg-purple-500
      "#EC4899", // bg-pink-500
      "#6366F1", // bg-indigo-500
      "#14B8A6", // bg-teal-500
      "#FB923C", // bg-orange-500
      "#84CC16", // bg-lime-500
      "#10B981", // bg-emerald-500
      "#22D3EE", // bg-cyan-500
      "#D946EF", // bg-fuchsia-500
      "#8B5CF6", // bg-violet-500
      "#F43F5E", // bg-rose-500
      "#0EA5E9", // bg-sky-500
      "#202020",
      "#e0e0e0",
    ];
    return (
      <View className="justify-center items-center">
        <Box>
          <View className="justify-center items-center">
            <TextBig addClass={"mb-4"}>Configuracion de mesa</TextBig>

            <View
              style={{
                height: mesaElegida.altura,
                width: mesaElegida.ancho,
                borderRadius: mesaElegida.radius,
                marginTop: 10,
                marginBottom: 10,
                backgroundColor: mesaElegida.bgColor,
              }}
            ></View>
            <TextSmall>Introduce un nombre (Opcional)</TextSmall>
            <MiInput
              placeholder="Nombre"
              onChangeText={(e) => console.log(e)}
            />
            <TextSmall>Introduce un numero (Opcional)</TextSmall>
            <MiInput
              placeholder="Nombre"
              onChangeText={(e) => console.log(e)}
            />
            <TextSmall addClass={"mt-10"}>
              Selecciona un color (Opcional)
            </TextSmall>
            <View className="border border-dark-background rounded-lg dark:border-background p-4 w-full flex-row flex-wrap gap-2 justify-center">
              {colores.map((color, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                    setMesaElegida({ ...mesaElegida, bgColor: color })
                  }
                >
                  <View
                    className={`h-[50px] w-[50px] rounded-full`}
                    style={{ backgroundColor: color }}
                  />
                </TouchableOpacity>
              ))}
            </View>
            <View className="flex-row gap-5">
              <CustomButton
                texto={"Crear Mesa"}
                color={"bg-buttonPrimary mt-5"}
                onPress={() => {
                  console.log(mesaElegida);
                  añadirCirculo(mesaElegida);
                  setCrearMesa(false);
                  setColorEscogido(null);
                  setMesaElegida(null);
                }}
              />
              <CustomButton
                texto={"Cancelar"}
                color={"bg-buttonDanger mt-5"}
                onPress={() => {
                  setCrearMesa(false);
                  setColorEscogido(null);
                  setMesaElegida(null);
                }}
              />
            </View>
          </View>
        </Box>
      </View>
    );
  };
  const Pizarra = () => {
    return (
      <View>
        <View className="h-[90%]">
          {circulos.map((circulo) => (
            <DibujarCirculo
              key={circulo.id}
              {...circulo}
              updateCirculo={updateCircle}
            />
          ))}
        </View>
        <View className="flex-row justify-between p-2 h-[10%]">
          {/* <CustomButton
            texto={"Añadir circulo"}
            color={"bg-buttonPrimary"}
            // onPress={() => setCrearMesa(true)}
            onPress={() => añadirCirculo()}
          /> */}
          <CustomButton
            texto={"+"}
            color={"bg-buttonSuccess w-[50px] rounded-full"}
            onPress={() => {
              setCrearMesa(!crearMesa);
            }}
          />
        </View>
      </View>
    );
  };
  return (
    <>
      {crearMesa == true && (
        <MiVentana>
          {mesaElegida !== null && <ConfigurarMesa />}
          {mesaElegida === null && <CrearMesaAjustes />}
        </MiVentana>
      )}
      {crearMesa == false && (
        <GestureHandlerRootView style={{ flex: 1 }}>
          <MiVentana>
            <View className="flex-1 mb-14 justify-between">
              <Pizarra />
            </View>
          </MiVentana>
        </GestureHandlerRootView>
      )}
    </>
  );
};

export default AddMesaScreen;
