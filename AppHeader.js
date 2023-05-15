import { StyleSheet, Text, View } from "react-native";

export default function AppHeader(heading) {
    return(
        <View>
            <Text style={styles.header}>
                {heading.heading}
            </Text>
            <Text style={styles.slogan}>
                {heading.slogan}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        padding: 20,
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black'
    },
    slogan: {
        padding: 10,
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black'
    },
});
