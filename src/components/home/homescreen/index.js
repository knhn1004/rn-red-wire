import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { Card } from 'react-native-elements';

const HomeScreen = ({ navigation }) => {
    const renderCard = () => (
        <TouchableOpacity
            onPress={() =>
                navigation.navigate('Article', {
                    id: 'asjiodjsadio',
                    postData: {
                        title: 'Adipisicing soluta facere dicta illum',
                        content:
                            'Adipisicing soluta repellendus aperiam molestias veritatis! Rem iure commodi tempora!',
                    },
                })
            }
        >
            <Card>
                <Card.Title style={styles.cardTitle}>
                    <Text>Adipisicing soluta facere dicta illum</Text>
                </Card.Title>
                <Card.Divider />
                <Text>
                    Elit accusantium distinctio nihil enim sunt Vero facere
                    tempore sint tempore dicta autem. Quibusdam sint quis
                    aliquam voluptatem molestiae? Quisquam?
                </Text>
            </Card>
        </TouchableOpacity>
    );

    return (
        <ScrollView>
            {renderCard()}
            {renderCard()}
            {renderCard()}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    cardTitle: {
        fontSize: 20,
        textAlign: 'left',
    },
});

export default HomeScreen;
