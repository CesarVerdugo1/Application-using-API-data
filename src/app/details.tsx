import { useLocalSearchParams } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Details() {
  const params = useLocalSearchParams();

  return (
    <View style={[styles.container, { backgroundColor: String(params.color) }]}>
      <Text style={styles.name}>{params.name}</Text>
      <Text style={styles.tag}>{params.types}</Text>
      <Image
        source={{ uri: String(params.image) }}
        style={{ width: 400, height: 400 }}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
  alignItems: 'center',
  justifyContent: 'center',},
  name: { 
    fontSize: 24,
  fontWeight: 'bold',
  textAlign: 'center',
},
  tag: { fontSize: 16 },
});