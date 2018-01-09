import React from 'react';
import { Text, View, Image, Dimensions } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';

const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image } = album;
    const { headerContenStyle, 
            thumbnailStyle, 
            thumbnailContainerStyle, 
            headerTextStyle, 
            albumCoverStyle } = styles;

    return (
        <Card>
            <CardItem>
                <View style={thumbnailContainerStyle}>
                    <Image
                        style={thumbnailStyle}
                        source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={headerContenStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardItem>

            <CardItem>
                <View>
                    <Image 
                        style={albumCoverStyle} 
                        source={{ uri: image }} 
                    />
                </View>
            </CardItem>
        </Card>

    );
};

const win = Dimensions.get('window');

const styles = {
    headerContenStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginLeft: 10
    },
    headerTextStyle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    albumCoverStyle: {
        height: 300,
        width: win.width,
        justifyContent: 'center'
    }
};

export default AlbumDetail;  
