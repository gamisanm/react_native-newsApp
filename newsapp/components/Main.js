import { StyleSheet, View, Text, TouchableOpacity, FlatList, Image, Modal } from 'react-native';
import React, { useState } from 'react';
import { gStyle } from '../styles/style.js';
import { Ionicons } from '@expo/vector-icons';
import Form from './Form.js'


export default function Main({ navigation }) {
  const [news, setNews] = useState([
    { name: 'Google', anons: 'Google!', full: 'Google is cool!', key: '1', img: 'https://i.ytimg.com/vi/qyEKLzRtQAc/maxresdefault.jpg'},
    { name: 'Apple', anons: 'Apple!', full: 'Apple is cool!', key: '2', img: 'https://monsterlessons.com/api/storage/uploads/posters/9e2fcfb9-fecf-4f2b-924a-6cf0290808a4/poster.png' },
    { name: 'Facebook', anons: 'Facebook!', full: 'Facebook is cool!', key: '3', img: 'https://coderoll.net/uploads/posts/2021-11/react-1.jpg' },
  ]);

  const addArticle = (article) => {
    setNews((list) => {
      article.key = Math.random().toString();
      return [
        article, 
        ...list
      ]
    });
    setModalWindow(false);
  }

  const [modalWindow, setModalWindow] = useState(false);

  return (
    <View style={gStyle.main}>
      <Modal visible={modalWindow}>
        <View style={gStyle.main}>
          <Ionicons name="close" size={24} color="black" style={styles.iconClose} onPress={() => setModalWindow(false)}/>
          <Text style={styles.title}>Форма добавления статей</Text>
          <Form addArticle={addArticle}/>
        </View>
      </Modal>
      <Ionicons name="add-circle" size={35} color="black" style={styles.iconAdd} onPress={() => setModalWindow(true)}/>
      <Text style={[gStyle.title, styles.header]}>Главная страница</Text>
      <FlatList
        data={news}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('FullInfo', item)}>
            <Image style={styles.image}source={{ uri: item.img }}/>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.anons}>{item.anons}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create ({
  header: {
    marginBottom: 30,
  },
  item: {
    width: '100%',
    marginBottom: 30
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    marginTop: 20,
    color: 'skyblue'
  },
  anons: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
    color: 'skyblue'
  },
  image: {
    width: '100%',
    height: 200,
  },
  iconAdd: {
    textAlign: 'center',
    marginBottom: 15,
  },
  iconClose: {
    textAlign: 'center',
  }
});
