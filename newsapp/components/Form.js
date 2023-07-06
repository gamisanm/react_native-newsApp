import { StyleSheet, View, Text, Button, TextInput} from 'react-native';
import React from 'react';
import { Formik } from 'formik';

export default function Form({addArticle}) {

    return (
        <View>
            <Formik initialValues={{
                name: '',
                anons: '',
                full: '',
                img: ''
            }} onSubmit={(values, action) => {
                addArticle(values);
                action.resetFrom();
            }}>
                {(props) => (
                    <View>
                        <TextInput 
                            style={styles.input}
                            placeholder='Введите название' 
                            value={props.values.name} 
                            onChangeText={props.handleChange('name')} 
                        />
                        <TextInput 
                            style={styles.input}
                            placeholder='Введите анонс' 
                            multiline
                            value={props.values.anons} 
                            onChangeText={props.handleChange('anons')} 
                        />
                        <TextInput 
                            style={styles.input}
                            placeholder='Введите статью' 
                            multiline
                            value={props.values.full} 
                            onChangeText={props.handleChange('full')} 
                        />
                        <TextInput 
                            style={styles.input}
                            placeholder='Укажите фото' 
                            value={props.values.img} 
                            onChangeText={props.handleChange('img')} 
                        />
                        <Button title='Добавить' onPress={props.handleSubmit}/>
                    </View>
                )}
            </Formik>
        </View>
    );
}

const styles = StyleSheet.create ({
    input: {
        borderWidth: 1,
        padding: 20,
        marginTop: 15,
        borderRadius: 5,
        textAlign: 'center'
    },
})