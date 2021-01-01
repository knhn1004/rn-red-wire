import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Tile } from 'react-native-elements';
import { Colors } from '../../../utils/tools';

const VideosScreen = ({ navigation }) => {
    const renderVideos = () => {
        return (
            <Tile
                imageSrc={{ uri: 'http://picsum.photos/200/300' }}
                title="
	Consectetur debitis aliquam debitis veritatis commodi quis? Dolorem sunt pariatur
	"
                icon={{
                    name: 'play-circle',
                    type: 'font-awesome',
                    color: Colors.red,
                    size: 80,
                }}
                titleStyle={{ fontSize: 20 }}
                contentContainerStyle={styles.contentContainerStyle}
                containerStyle={styles.containerStyle}
                onPress={() =>
                    navigation.navigate('Video', {
                        id: 'ajsio',
                        postData: {},
                    })
                }
            />
        );
    };
    return (
        <ScrollView>
            <View style={{ padding: 20 }}>{renderVideos()}</View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    contentContainerStyle: {
        borderColor: '#fff',
        borderWidth: 1,
        borderColor: '#e1e8ee',
        shadowColor: 'rgba(0, 0, 0, 0.2)',
    },
    containerStyle: {
        width: '100%',
        height: 300,
        marginBottom: 15,
    },
});

export default VideosScreen;
