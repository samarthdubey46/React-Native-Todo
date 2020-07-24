import React, { useState } from 'react'
import { View, Text,Dimensions } from 'react-native'
import { CheckBox } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome5'
export default function App(props) {
    const [iscomplete, changecomplete] = useState(false)
    const width = Dimensions.get('window').width

    return (
        <View style={{ padding:0,marginTop:0,alignSelf: 'flex-start', alignItems: 'flex-start', justifyContent: 'flex-start',flexDirection:'row',width:width }}>
            <CheckBox
               checked={iscomplete}
               title={props.tittle}
               onPress={() => iscomplete ? changecomplete(false) : changecomplete(true)}
               checkedColor = '#00ddff'
               containerStyle={{backgroundColor:'black',width:width-50,borderWidth:0,}}
               textStyle={ !iscomplete ?  {color:'white',fontSize:20,fontStyle:'normal' } : {textDecorationLine:'underline line-through',textDecorationStyle:'solid',fontSize:20,fontStyle:'italic'}}
            />
            <Icon
                name="angle-double-right"
                color='#12d5e3'
                size={15}
                style={{alignSelf:'center'}}
            />
        </View>
    )
}
