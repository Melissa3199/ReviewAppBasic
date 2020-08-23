import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons,MaterialIcons } from '@expo/vector-icons';

import globalStyle from '../../styles/global'


export default function CategorieItem({ item/*, pressHandler */,deleteCategorieHandler}) {
    return (
     <TouchableOpacity /*onPress={}*/>
             <View style={styles.item}>
                <Ionicons name={item.icon} size={28} color={globalStyle.COLORS.PRIMARY}/>
                <Text style={styles.itemText}>{item.categorie}</Text>
                <MaterialIcons
                            name='delete-forever'
                            size={26}
                            onPress={() => deleteCategorieHandler(item.key)}
                            style={styles.deleteButton}
                           
                        />
             </View>
     </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    deleteButton:{
        color: globalStyle.COLORS.PRIMARY,
        marginLeft:'60%',
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,

    },
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
        alignItems:'flex-end',
        justifyContent:'space-between'
    },
    itemText: {
      //  marginLeft: 20,
        color: 'grey',
    },

});