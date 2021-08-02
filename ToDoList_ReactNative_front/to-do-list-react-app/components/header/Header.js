import React from 'react';
import { Text, View } from 'react-native';

import { style } from './Style';

// Mettre {content} dans la const permet d'éviter de mettre props et on peut utiliser content directement plutôt que d'écrire
// props.content
const Header = ({content}) => (
    <View>
        <View style={style.subHeader} />
        <View style={style.header}>
            <Text style={style.text}>{content}</Text>
        </View>
    </View>
);

export default Header;