import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, FlatList, Modal } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card'
import { MaterialIcons } from '@expo/vector-icons';


export default function Home({ navigation }) {

    const [reviews, setReviews] = useState([
        { title: 'Becoming', rating: 3,image:'../assets/MichelleObamafront.jpg', body: 'Dans ses mémoires très attendus, Michelle Obama raconte son parcours exceptionnel, depuis son enfance dans le South Side de Chicago en passant par les années au cours desquelles  elle a dû concilier sa vie d’avocate et de mère de famille, jusqu’aux huit années passées à la Maison-Blanche, où l’ancienne première dame a su imprimer sa marque tout en soutenant son mari alors qu’il dirigeait l’Amérique pendant des moments difficiles.', key: '1' },
        { title: 'Everything I Never Told You', rating: 4 ,image:'../assets/MichelleObamafront.jpg',  body: 'lorem ipsum', key: '2' },
        { title: 'The Curious Incident of the Dog in the Night', rating: 3 ,image:'../assets/MichelleObamafront.jpg', body: 'lorem ipsum', key: '3' },
    ]);
    return (
        <View style={globalStyles.container}>
            {/*<Modal visible={modalOpen} animationType='slide'>
                <View>
                    <MaterialIcons
                        name='close'
                        size={28}
                        onPress={() => setModalOpen(false)}
                        style = {{...styles.modalToggle, ...styles.modalClose}}
                    />
                    <Text>Modal Works !</Text>
                </View>
            </Modal>
            <MaterialIcons
                name='add'
                size={28}
                onPress={() => setModalOpen(true)}
                style = {styles.modalToggle}
            />*/}
            <FlatList
                data={reviews}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity>
                            <Card>
                                <Text style={globalStyles.textStyle} onPress={() => navigation.navigate('BookDetails', item)}>{item.title}</Text>
                            </Card>
                        </TouchableOpacity>);
                }
                }
            />
        </View>
    )
}


const styles = StyleSheet.create({
    modalToggle:{
        marginBottom : 10,
        borderWidth : 1,
        borderColor : '#f2f2f2',
        padding : 10,
        borderRadius : 10,
        alignSelf : 'center',
    },
    modalClose:{
        marginTop : 20,
        marginBottom : 0,
    }

});
