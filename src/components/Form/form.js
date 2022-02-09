import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Vibration, } from "react-native";
import styles from "./style";
import ResultImc from "./ResultImc/resultImc";

export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState("Preencha o peso e a Altura!");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");
  const [errorMessage, setErrorMessage] = useState(null);

  function imcCalculator() {
    return setImc((weight / (height * height)).toFixed(2));
  }

  function verificationImc() {
    if (imc === null) {
      Vibration.vibrate();
      setErrorMessage("Campo Obrigatório");
    }
  }

  function validationImc() {
    if (height !== null && weight !== null) {
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessageImc("Seu IMC é igual: ");
      setTextButton("Calcular Novamente");
      setErrorMessage(null);

      return;
    }
    verificationImc();
    setImc(null);
    setTextButton("Calcular");
    setMessageImc("Preencha o peso e a altura!");
  }

  return (
    <View style={styles.formContent}>
      <View style={styles.form}>

        <Text style={styles.formLabel}>Altura</Text>
        <TextInput
          style={styles.formInput}
          placeholder="Ex: 1.75"
          placeholderTextColor="#999"
          keyboardType="numeric"
          onChangeText={setHeight}
          value={height}
        />
        <Text style={styles.errorMessage}>{errorMessage}</Text>

        <Text style={styles.formLabel}>Peso</Text>
        <TextInput
          style={styles.formInput}
          placeholder="Ex: 80.345"
          placeholderTextColor="#999"
          keyboardType="numeric"
          onChangeText={setWeight}
          value={weight}
        />
        <Text style={styles.errorMessage}>{errorMessage}</Text>

        <TouchableOpacity
          style={styles.buttonCalculator}
          onPress={() => validationImc()}
          title={textButton}
        >
          <Text style={styles.textButtonCalculator}>Calcular</Text>
        </TouchableOpacity>
        
      </View>
      <ResultImc messageResultImc={messageImc} resultImc={imc} />
    </View>
  );
}
