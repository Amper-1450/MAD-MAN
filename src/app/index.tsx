import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/icon.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>NOT Campus Spots</Text>
      <Text style={styles.subtitle}>I updated the subtitle</Text>

      <View style={styles.card}>
        <Text style={styles.name}>Adil B.</Text>
        <Text style={styles.cardText}>
          I came from Astana, Kazakhstan, and I study Mathematical and Computer
          Modeling.
        </Text>
        <Text style={styles.cardText}>
          My favourite place in Astana is my home.
        </Text>
      </View>

      <View style={styles.row}>
        <View style={[styles.square, styles.red]} />
        <View style={[styles.square, styles.green, styles.middle]} />
        <View style={[styles.square, styles.blue]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    backgroundColor: "#f0f0e9",
  },
  logo: {
    width: 96,
    height: 96,
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
  },
  subtitle: {
    marginTop: 4,
    fontSize: 16,
    color: "#666",
  },
  card: {
    alignSelf: "stretch",
    marginTop: 24,
    padding: 16,
    borderRadius: 16,
    backgroundColor: "#ffffff",
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 8,
  },
  cardText: {
    fontSize: 15,
    color: "#333",
    marginTop: 4,
  },
  row: {
    alignSelf: "stretch",
    marginTop: 24,
    justifyContent: "space-between", // step 2
    gap: 8, // step 3
  },
  square: {
    width: 60,
    height: 60,
  },
  middle: {
    flex: 1, // step 3
  },
  red: { backgroundColor: "#e63946" },
  green: { backgroundColor: "#2a9d8f" },
  blue: { backgroundColor: "#457b9d" },
});
