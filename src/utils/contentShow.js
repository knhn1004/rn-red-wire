import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import HTML from 'react-native-render-html';

const ContentShow = () => {
    const text = `
  <div>Sit id ipsum quo consectetur totam. Laborum quaerat at a maiores culpa architecto aliquam Cum eveniet sit ad ea a Maiores repellendus iure vel excepturi ex. Fugit iusto illo modi</div>
  <div>Adipisicing debitis accusamus iste ullam natus corporis Sunt a tenetur itaque natus quo! Maxime at ipsa sed laborum porro? Suscipit quidem quo voluptatem quisquam tempora alias porro. In doloribus deserunt</div>
  <div>Adipisicing blanditiis facilis autem facilis ducimus perspiciatis Esse corporis non ratione facere vel! Non ut dolore saepe corrupti placeat, voluptates Maiores exercitationem eum quo molestias cum labore, fugiat? Aliquam rerum</div>
  <div>Ipsum eum voluptatem commodi eaque dicta? Corrupti facere maiores iste nobis corporis. Non quia hic nihil in vel officia perferendis Maxime qui id veritatis quisquam corrupti facilis, vitae quidem delectus</div>
  <div>Dolor ad ipsa ut rem ipsum ratione iste minus soluta! Ullam quisquam doloribus consectetur soluta adipisci? Voluptates tempora praesentium et illo molestiae Reiciendis eveniet rerum tempore ea asperiores reiciendis? Obcaecati?</div>
  
  `;
    return (
        <View>
            <View style={{ padding: 10 }}>
                <Text style={styles.articleTitle}>
                    Sit eos harum voluptatibus dolores dolores suscipit quaerat.
                </Text>
                <HTML
                    source={{ html: text }}
                    baseFontStyle={styles.aritcleContent}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    articleTitle: {
        fontSize: 30,
        marginBottom: 30,
        fontWeight: '300',
        color: '#444',
    },
    aritcleContent: {
        fontSize: 18,
        color: '#444',
    },
});

export default ContentShow;
