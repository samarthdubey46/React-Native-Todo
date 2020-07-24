import React from 'react'
import {View,Text} from 'react-native'


const values = [
    {icon:"format-title",type:"MaterialCommunityIcons",hint:"Title"},
    {icon:"description",type:"MaterialIcons",hint:"Description"},
    {icon:"calendar",type:"FontAwesome",hint:"Title"},
]

export default class Add extends React.Component{
    render(){
        return(
            <View style={{backgroundColor:'grey',flex:1}}>
                <View style={{backgroundColor:'white',}}>
                    <Text> sad </Text>
                </View>
            </View>
        )
    }
}