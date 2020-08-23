import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Modal, FlatList, View } from 'react-native';
import globalStyle, { globalStyles } from '../../styles/global';
import CategorieItem from '../Categories/categorieItem';
import AddCategorie from '../Categories/addCategorie';
import { MaterialIcons, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import AddComment from '../Comments/addComment';


export default function CategoriesList({ submitCategorieHandler, submitCommentHandler, setModalCommentOpen, categories, modalCommentOpen, deleteCategorieHandler }) {
    return (
        <View>
            <AddCategorie submitCategorieHandler={submitCategorieHandler} />
            <View>
                <Modal visible={modalCommentOpen} animationType='fade'>
                    <View>
                        <MaterialIcons
                            name='close'
                            size={28}
                            onPress={() => setModalCommentOpen(false)}
                            style={styles.modalClose}
                        />
                        <AddComment submitCommentHandler={submitCommentHandler}/>
                    </View>
                </Modal>
                <TouchableOpacity onPress={() => { setModalCommentOpen(true) }}>

                    <View style={styles.item}>
                        <MaterialCommunityIcons name='checkbox-multiple-marked-circle-outline' size={28} color={globalStyle.COLORS.PRIMARY} />
                        <Text style={styles.itemText}>Déjà lu</Text>
                       
                    </View>
                </TouchableOpacity>

                <TouchableOpacity /*onPress={setModalCategoriesOpen(false)}*/>
                    <View style={styles.item}>
                        <AntDesign name='smileo' size={26} color={globalStyle.COLORS.PRIMARY} />
                        <Text style={styles.itemText}>A lire</Text>
                        
                    </View>
                </TouchableOpacity>

                <TouchableOpacity /*onPress={() => setModalCategoriesOpen(false)}*/>
                    <View style={styles.item}>
                        <MaterialCommunityIcons name='progress-clock' size={28} color={globalStyle.COLORS.PRIMARY} />
                        <Text style={styles.itemText}>En cours</Text>
                        
                    </View>
                </TouchableOpacity>

                <FlatList
                    data={categories}
                    renderItem={({ item }) => {
                        return (
                            <CategorieItem item={item} deleteCategorieHandler={deleteCategorieHandler}/*pressHandler={/*setModalCategoriesOpen(false)}*/ />
                        );
                    }
                    }
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({


    item: {
        fontSize: 20,
        color: 'grey',
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 10,
        flexDirection: 'row',
        alignItems:'flex-start',
        justifyContent:'flex-start'
    },
    itemText: {
        color: 'grey',
        marginLeft:20,
    },
    modalClose: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },

});