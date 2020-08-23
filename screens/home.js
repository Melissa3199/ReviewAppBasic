import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, Animated, TouchableOpacity,Dimensions  } from 'react-native';
import { globalStyles } from '../styles/global';
import { MaterialIcons } from '@expo/vector-icons';
import Books from '../components/Books'
import { BookContext } from "../routes/BookContext"
import Card from '../shared/card'
import theme from '../constants/Theme'

export default function Home({ navigation, name }) {
    const {width}=Dimensions.get('window');
    const [state, setState] = useContext(BookContext);
    const [text, setText] = useState('');
    const [active, setActive] = useState(0);
    const [xTabOne, setXTabOne] = useState(0);
    const [xTabTwo, setXTabTwo] = useState(0);

    const [translateX, setTranslateX] = useState(new Animated.Value(0) );
    const [translateXTabOne, setTranslateXTabOne] = useState(new Animated.Value(0) );

    const [translateXTabTwo, setTranslateXTabTwo] = useState(new Animated.Value(width) );
    const [translateY, setTranslateY] = useState(-1000 );


    const submitHandler = (val) => {
        setText(val)
        console.log(val)
    }
    const [modalOpen, setModalOpen] = useState(false);
    const handleSlide = type => {
        Animated.spring(translateX,{
            toValue:type,
            duration:100
        }).start() ;
        if (active==0){
            Animated.parallel([
                Animated.spring(translateXTabOne,{
                    toValue:0,
                    duration:100
                }).start(),
                Animated.spring(translateXTabTwo,{
                    toValue:width,
                    duration:100
                }).start(),
            ])
        }
        else{
            Animated.parallel([
                Animated.spring(translateXTabOne,{
                    toValue:-width,
                    duration:100
                }).start(),
                Animated.spring(translateXTabTwo,{
                    toValue:0,
                    duration:100
                }).start(),
            ])
        }
    
    }
   
    return (
        <View style={styles.container}  >

            <View style={{ 
                flexDirection: "row", 
                marginBottom: 10,
                height:40,
                
                
                
                 }}>

                <Animated.View style={{
                position:'absolute',
                left:0,
                height:"100%",
                top:0,
                width:"50%",
                backgroundColor:theme.COLORS.PRIMARY,
                transform:[{
                    translateX
                }]
                
                }} />                
                <TouchableOpacity style={{ 
                flex: 1, 
                justifyContent: "center", 
                alignItems: "center",
                borderWidth:1,
                borderRightWidth:0,
                borderTopWidth:0,
                borderColor:theme.COLORS.PRIMARY,
                
                 }}
                 onLayout={ event =>  setXTabOne(event.nativeEvent.layout.x) }
                 onPress={() => {setActive(0), handleSlide(xTabOne)}}
                 >
                    <Text style={{color: active === 0 ? "#fff" : theme.COLORS.PRIMARY }}>Books </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ 
                flex: 1, 
                justifyContent: "center", 
                alignItems: "center",
                borderWidth:1,
                borderColor:theme.COLORS.PRIMARY,
                borderTopWidth:0,
                }}
                onLayout={ event => setXTabTwo(event.nativeEvent.layout.x) }
                 onPress={() =>{  setActive(1),handleSlide(xTabTwo) }}
      
                >
                    <Text style={{color: active === 1  ? "#fff" : theme.COLORS.PRIMARY }}>My books </Text>
                </TouchableOpacity>
            </View>
            <Animated.View
             style={{
                 padding:10,
                 flex:1 , 
                 transform:[{
                      translateX:translateXTabTwo,
                      },
                     
                      ]
            }} 
            onLayout= {event=> setTranslateY(event.nativeEvent.layout.height) }
            >
           
           <Books title={state.bookTitle} navigation={navigation} />
            </Animated.View>
           
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        
        flex: 1,
    },
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0,
    },


});
/*
export default function Home({ navigation }) {
    const [text, setText]=useState('');
    const submitHandler = (val) => {
    setText(val)
    console.log(val)
    }
    const [modalOpen, setModalOpen] = useState(false);
    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
    ]);
    return ( <Books title={state.bookTitle} navigation={navigation} />
        <View style={styles.container}  >



            <Modal visible={modalOpen} animationType='slide'>


                <View  >
                    <MaterialIcons
                        name='close'
                        size={28}
                        onPress={() => setModalOpen(false)}
                        style={{ ...styles.modalToggle, ...styles.modalClose }}

                    />
                    <Text>Modal Works !</Text>
                </View>
            </Modal>
            <MaterialIcons
                name='add'
                size={28}
                onPress={() => setModalOpen(true)}
                style={styles.modalToggle}
            />
            <FlatList
                data={reviews}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity>
                            <Card>
                                <Text style={globalStyles.textStyle}
                                    onPress={() => navigation.navigate('ReviewDetails', item)}>{item.title}</Text>
                            </Card>
                        </TouchableOpacity>);
                }
                }
            />
        </View>
    )
}

*/