
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import openURLInBrowser from 'react-native/Libraries/Core/Devtools/openURLInBrowser';

import {
//   Header,
//   LearnMoreLinks,
   Colors,
//   DebugInstructions,
//   ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const currentBooks = [
  {
    id: 1,
    title: 'The Basic book',
    link: 'https://reactnative.dev/docs/tutorial',
    description: 'Explains a Hello World for React Native.',
  },
  {
    id: 2,
    title: 'Style notebook',
    link: 'https://reactnative.dev/docs/style',
    description:
      'Covers how to use the prop named style which controls the visuals.',
  },
  {
    id: 3,
    title: 'Layout plans',
    link: 'https://reactnative.dev/docs/flexbox',
    description: 'React Native uses flexbox for layout, learn how it works.',
  }
]
// function openURLInBrowser(link){
//   console.log(link)
// }

const Books: () => React$Node = () => {
  return (
    <>
      <View>
      {currentBooks.map(({id, title, link, description}) => {
        return (
          <React.Fragment key={id}>
            <View style={styles.separator} />
            <TouchableOpacity
              accessibilityRole={'button'}
              onPress={() => openURLInBrowser(link)}
              style={styles.linkContainer}>
                <Text style={styles.link}>{title}</Text>
              {/* <Text style={styles.description}>{description}</Text> */}
            </TouchableOpacity>
          </React.Fragment>
        )
      } )}
        <Text>rawrrr</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  linkContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  link: {
    fontSize: 18,
    fontWeight: '400',
    color: Colors.primary,
  },
  description: {
    flex: 3,
    paddingVertical: 16,
    fontWeight: '400',
    fontSize: 18,
    color: Colors.dark,
  },
  separator: {
    backgroundColor: Colors.light,
    height: 1,
  },
});

export default Books;
