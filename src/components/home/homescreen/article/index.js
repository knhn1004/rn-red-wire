import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    ActivityIndicator,
} from 'react-native';
import { Image } from 'react-native-elements';
import ContentShow from '../../../../utils/contentShow';

const ArticleScreen = () => {
    return (
        <ScrollView>
            <View>
                <Image
                    source={{ uri: 'http://picsum.photos/200/300' }}
                    style={{ width: '100%', height: 200 }}
                    PlaceholderContent={<ActivityIndicator />}
                />
	      <ContentShow />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({});

export default ArticleScreen;
