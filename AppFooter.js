import { StyleSheet, Text, View } from "react-native";

export default function AppFooter(footer) {
    return (
        <View style={styles.container}>
            <Text sylte={styles.footer}> {footer.footer} 
                <Text style={{fontStyle: 'italic'}}>Karachi Insitute of Economics & Technology</Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.075,
        backgroundColor: 'gold',
        padding: 5,
    },
    footer: {
        textAlign: 'auto',
    }
});
