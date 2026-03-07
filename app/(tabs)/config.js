import { View, Text, StyleSheet } from "react-native";

export default function Config() {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Config</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    texto: { fontSize: 28, fontWeight: 'bold' }
});