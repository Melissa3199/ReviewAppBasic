import { View, Text, StyleSheet, ImageBackground, Image, Modal, Alert } from 'react-native';
import { Divider } from 'react-native-elements';
import React, { useState } from 'react';
import globalStyle, { images, globalStyles } from "../styles/global";
import { ScrollView } from 'react-native-gesture-handler';
import { CustomButton } from '../shared/custom-button';
import { MaterialIcons } from '@expo/vector-icons';
import CategoriesList from '../components/Categories/categoriesList';
import CommentsList from '../components/Comments/commentsList';

export default function ({ navigation }) {

    const [modalCommentsListOpen, setModalCommentsListOpen] = useState(false);
    const [modalCategoriesOpen, setModalCategoriesOpen] = useState(false);

    const [modalCommentOpen, setModalCommentOpen] = useState(false);

    const [rateVal, setRateVal] = useState(0);

    const rating = navigation.getParam('rating');

    const [modalOpen, setModalOpen] = useState(false);


    const [categories, setCategories] = useState([
        { categorie: 'Autre', icon: 'ios-heart', key: '1' },
    ]);
    const [firstComments, setFirstComments] = useState([
        { comment: 'En fait, les parties qui m\'ont le plus intéressée sont d\'une part son enfance dans les quartiers pauvres de Chicago, où elle se heurte aux préjugés et à une discrimination raciale insidieuse, et d\'autre part le début de la carrière', username: 'Patrick', rating: 3, avatar: './assets/profile-img.jpg', key: '1' },
        { comment: 'En fait, les parties qui m\'ont le plus intéressée sont d\'une part son enfance dans les quartiers pauvres de Chicago, où elle se heurte aux préjugés et à une discrimination raciale insidieuse, et d\'autre part le début de la carrière', username: 'Bob', rating: 4, avatar: './assets/profile-img.jpg', key: '2' },
        { comment: 'En fait, les parties qui m\'ont le plus intéressée sont d\'une part son enfance dans les quartiers pauvres de Chicago, où elle se heurte aux préjugés et à une discrimination raciale insidieuse, et d\'autre part le début de la carrière', username: 'Liam', rating: 2, avatar: './assets/profile-img.jpg', key: '3' },
    ]);
    const [comments, setComments] = useState([
        { comment: 'En fait, les parties qui m\'ont le plus intéressée sont d\'une part son enfance dans les quartiers pauvres de Chicago, où elle se heurte aux préjugés et à une discrimination raciale insidieuse, et d\'autre part le début de la carrière', username: 'Patrick', rating: 3, avatar: './assets/profile-img.jpg', key: '1' },
        { comment: 'En fait, les parties qui m\'ont le plus intéressée sont d\'une part son enfance dans les quartiers pauvres de Chicago, où elle se heurte aux préjugés et à une discrimination raciale insidieuse, et d\'autre part le début de la carrière', username: 'Bob', rating: 4, avatar: './assets/profile-img.jpg', key: '2' },
        { comment: 'En fait, les parties qui m\'ont le plus intéressée sont d\'une part son enfance dans les quartiers pauvres de Chicago, où elle se heurte aux préjugés et à une discrimination raciale insidieuse, et d\'autre part le début de la carrière', username: 'Liam', rating: 2, avatar: './assets/profile-img.jpg', key: '3' },
        { comment: 'En fait, les parties qui m\'ont le plus intéressée sont d\'une part son enfance dans les quartiers pauvres de Chicago, où elle se heurte aux préjugés et à une discrimination raciale insidieuse, et d\'autre part le début de la carrière', username: 'Sandy', rating: 4, avatar: './assets/profile-img.jpg', key: '4' },
        { comment: 'En fait, les parties qui m\'ont le plus intéressée sont d\'une part son enfance dans les quartiers pauvres de Chicago, où elle se heurte aux préjugés et à une discrimination raciale insidieuse, et d\'autre part le début de la carrière', username: 'Lola', rating: 3, avatar: './assets/profile-img.jpg', key: '5' },
        { comment: 'En fait, les parties qui m\'ont le plus intéressée sont d\'une part son enfance dans les quartiers pauvres de Chicago, où elle se heurte aux préjugés et à une discrimination raciale insidieuse, et d\'autre part le début de la carrière', username: 'Petter', rating: 3, avatar: './assets/profile-img.jpg', key: '6' },
        { comment: 'En fait, les parties qui m\'ont le plus intéressée sont d\'une part son enfance dans les quartiers pauvres de Chicago, où elle se heurte aux préjugés et à une discrimination raciale insidieuse, et d\'autre part le début de la carrière', username: 'Candice', rating: 3, avatar: './assets/profile-img.jpg', key: '7' },

    ]);
    const registerTheValue = (val) => {
        setRateVal(val);
        console.log(val);
    };
    const deleteCategorieHandler = (key) => {
        setCategories((prevCategories) => {
            return prevCategories.filter((categorie) => categorie.key != key);
        });

    };
    const pressHandler = {
        //Quand on clique sur les catégories mis à part le déjà lu
    };
    const submitCategorieHandler = (text) => {
        if (text.length > 4) {
            setCategories(prevCategories => {
                return [
                    { categorie: text, icon: 'ios-book', key: Math.random().toString() },
                    ...prevCategories
                ];
            });
        } else {
            Alert.alert('OOPS', 'Le nom d\'une catégorie doit avoir plus de 3 caractères', [
                { text: 'Compris' }
            ]);
        }
    };

    const submitCommentHandler = (text) => {
        if (text.length > 0) {
            setFirstComments((prevComments) => {
                return prevComments.filter((comment) => comment.key != '3');
            });
            setFirstComments(prevComments => {
                return [
                    { comment: text, rating: 2, username: 'Me', key: '1' },
                    ...prevComments
                ];
            });
            setComments(prevComments => {
                return [
                    { comment: text,  rating: 2, username: 'Me', key: '1' },
                    ...prevComments
                ];
            });
        } else {
            Alert.alert('OOPS', 'Votre commentaire est vide, il ne sera pas posté', [
                { text: 'Compris' }
            ]);
        }
    };

    return (
        <ScrollView>

            <Modal visible={modalCategoriesOpen} animationType='slide'>
                <View>
                    <MaterialIcons
                        name='close'
                        size={28}
                        onPress={() => setModalCategoriesOpen(false)}
                        style={styles.modalClose}
                    />
                </View>
                <CategoriesList submitCategorieHandler={submitCategorieHandler} submitCommentHandler={submitCommentHandler} setModalCommentOpen={setModalCommentOpen} categories={categories} modalCommentOpen={modalCommentOpen} deleteCategorieHandler={deleteCategorieHandler} />


            </Modal>

            <ImageBackground style={styles.backImage} blurRadius={3} source={require('../assets/MichelleObamafront.jpg')}>
                <Image style={styles.frontImage} source={require('../assets/MichelleObamafront.jpg')} />
            </ImageBackground>

            <View>
                <Text style={styles.titleStyle}>{navigation.getParam('title')}</Text>
                <Text style={styles.textStyle}>Michelle Obama</Text>
            </View>

            <View style={[styles.ratings, { marginTop: 10, marginBottom: 15, borderColor: '#fff', borderBottomColor: globalStyle.COLORS.PRIMARY, borderTopColor: globalStyle.COLORS.PRIMARY, borderWidth: 1 }]}>
                <Image source={images.ratings[rating]} />
                <View style={styles.ratings}>
                    <Text style={[styles.textStyle, { fontSize: 10 }, { color: globalStyle.COLORS.DEFAULT }]}>784 notes</Text>
                    <Image style={styles.point} source={require('../assets/point.png')} />
                    <Text style={[styles.textStyle, { fontSize: 10 }, { color: globalStyle.COLORS.DEFAULT }]}>31 avis</Text>
                </View>
            </View>

            <CustomButton
                title="Ajouter"
                onPress={() => setModalCategoriesOpen(true)}
                style={{ marginLeft: '37%', width: 100 }}
                textStyle={{ fontSize: 15 }}
                nameIcon="star"
                sizeIcon={15}
            />



            <View style={styles.description}>
                <Text style={styles.subTitleStyle}>Description</Text>
                <Divider style={[styles.dividerStyle, { width: 130, marginLeft: '33%' }]} />
                <Text style={[styles.textStyle, { fontFamily: 'Montserrat-Italic' }]}>{navigation.getParam('body')}</Text>
            </View>
            
            <Modal visible={modalCommentsListOpen} animationType='slide'>
                <View>
                    <MaterialIcons
                        name='close'
                        size={28}
                        onPress={() => setModalCommentsListOpen(false)}
                        style={styles.modalClose}
                    />
                </View>
                <ScrollView>
                <CommentsList comments={comments} />
                </ScrollView>
            </Modal>


            <View style={styles.commentSection}>
                <Text style={styles.subTitleStyle}>Commentaires de la communauté</Text>
                <Divider style={styles.dividerStyle} />
                <CommentsList comments={firstComments} />
                <CustomButton
                    title="Autres commentaires "
                    onPress={() => setModalCommentsListOpen(true)}
                    style={{ width: '60%', backgroundColor: '#bbb', marginLeft: '39%', marginTop: 10, height: 30 }}
                    textStyle={[styles.textStyle, { color: 'white' }]}
                    nameIcon="arrow-right"
                    sizeIcon={15}

                />

            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    dividerStyle: {
        backgroundColor: globalStyle.COLORS.PRIMARY,
        width: 210,
        marginLeft: '20%',
        marginBottom: 20,
    },
    subTitleStyle: {
        textAlign: 'center',
        fontSize: 13,
        marginBottom: 10,
        marginTop: 10,
        color: globalStyle.COLORS.PRIMARY,
        fontFamily: 'Montserrat-SemiBold'
    },
    itemText: {
        marginLeft: 20,
        color: 'grey',
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
    },
    content: {
        padding: 40,
        //  backgroundColor:'pink',
        flex: 1,

    },
    input: {
        height: 200,
        width: '90%',
        marginTop: 30,
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderWidth: 1,
        borderColor: globalStyle.COLORS.PRIMARY,
        borderRadius: 40,

    },
    description: {
        marginTop: 40,
        borderWidth: 1,
        borderColor: 'white',
        borderBottomColor: globalStyle.COLORS.PRIMARY,
        borderTopColor: globalStyle.COLORS.PRIMARY,
        marginBottom: 90,
    },
    point: {
        marginLeft: 20,
        marginRight: 20,
        width: 10,
        height: 10,
    },
    backImage: {
        width: '100%',
        height: 370,
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    frontImage: {
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 8,
        position: 'relative',
        left: '20%',
        top: '22%',
        width: '61%',
        height: '75%',
    },
    titleStyle: {
        marginBottom: 10,
        marginTop: 10,
        textAlign: 'center',
        fontFamily: 'Montserrat-Bold',
        fontSize: 20,
        color: globalStyle.COLORS.PRIMARY,
    },
    textStyle: {
        textAlign: 'center',
        fontFamily: 'Montserrat-Regular',
        fontSize: 13,
        color: '#000000',
        marginBottom: 10,
        marginTop: 10,
    },
    ratings: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

    modalClose: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    list: {
        flex: 1,
        marginTop: 40,
    },
    commentSection: {
        marginLeft: 5,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderBottomColor: globalStyle.COLORS.PRIMARY,
        borderTopColor: globalStyle.COLORS.PRIMARY,
        height: 700,
        width: 380,
        marginBottom: 40,
    }
});