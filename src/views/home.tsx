import React, { FC, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import Button from '../components/Button/button';
import HomeContainer from '../components/Container/HomeContainer';
import SearchInput from '../components/SearchInput/searchInput';

import theme from '../utils/theme';
import SectionMovie from '../components/SectionMovie/section-movie';
import SectionTrailer from '../components/SectionTrailer/section-trailer';



function HomeScreen({navigation}:any) {
    const image1 = { uri: 'https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/zqkmTXzjkAgXmEWLRsY4UpTWCeo.jpg' }
    const backLogo = require('../assets/images/backLogo.png')

    return (
        <SafeAreaView style={{ flex: 1 }} >
            <ScrollView>
                <HomeContainer source={image1} linearG={true} style={{ height: 300 }} style2={{ paddingHorizontal: 20 }} >
                    <Text style={[styles.text, { marginTop: 20 }]} >Welcome.</Text>
                    <Text style={[styles.text, { fontWeight: '600', fontSize: 25, width: 360 }]} >
                        Millions of movies, TV shows and people to discover. Explore now..
                    </Text>
                    <SearchInput styleview={{ marginTop: 20}} placeholder='Search for a movie,tv shows,person......'>
                        <Button style={{
                            backgroundColor: theme.colors.tmdbLightGreen,
                            height: 44,
                            width: 100,
                            position: 'absolute',
                            left: 270,
                        }} onPress={() => { }}>Search</Button></SearchInput>
                </HomeContainer>

                <HomeContainer source={backLogo}>
                    <SectionMovie
                        headerShown={true}
                        selectionList={['Today', 'This Week']}
                        selected='day'
                        keyWord='trend'
                        header='Trending' 
                        />
                </HomeContainer>

                <HomeContainer>
                    <SectionMovie
                        headerShown={true}
                        selectionList={['Streaming', 'On Tv', 'Top Rated', 'Up Coming']}
                        selected='movie/popular'
                        keyWord='popular'
                        header='Whats Popular' />
                </HomeContainer>

                <HomeContainer style={{ height: 350 }}>
                    <SectionTrailer
                        headerShown={true}
                        selectionList={['Streaming', 'On Tv']}
                        selected='movie'
                        header='Latest Trailers' />
                </HomeContainer>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    input: {
        flex: 1,
        height: 46,
        paddingHorizontal: 20,
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 30,
        backgroundColor: 'white',
    },
    text: {
        fontWeight: '700',
        fontSize: 50,
        color: 'white',
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    touch: {
        width: 150,
        alignItems: 'center',
        marginLeft: 16,
        marginTop: 16,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 20,
    }
});

export default HomeScreen