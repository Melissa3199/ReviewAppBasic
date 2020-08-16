import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Modal, FlatList, View } from 'react-native';
import globalStyle  from '../../styles/global';
import CommentItem from '../Comments/commentItem';
import AddComment from '../Comments/addComment'



export default function CommentsList({ comments }) {
    return (
        <View>

                <FlatList
                    data={comments}
                    renderItem={({ item }) => {
                        return (
                            <CommentItem item={item} />
                        );
                    }
                    }
                />

            </View>
    );
}
