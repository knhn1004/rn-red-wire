import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import YTPlayer from 'react-native-youtube-iframe';
import ContentShow from '../../../../utils/contentShow';

const VideoScreen = () => {
    return (
        <ScrollView>
            <View>
                <YTPlayer
                    videoId="kzVgkrCiDEo"
                    height={250}
                />
                <ContentShow />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({});

export default VideoScreen;
