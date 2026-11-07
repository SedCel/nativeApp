import { TextInput, TextInputProps, StyleSheet } from 'react-native'
import { Colors } from '../tokens'

export function Input(props: TextInputProps) {
    return(
        <TextInput
            style = {styles.input}
            placeholderTextColor={Colors.gray}
            {...props}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: Colors.violetDark,
        borderRadius : 10,
        height: 50,
        fontSize: 16,
        lineHeight: 1.6,
        paddingHorizontal: 26
    }

});