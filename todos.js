import React from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    TextInput,
    ActivityIndicator
} from 'react-native';
import Todo from './Todo'
import AsyncStorage from '@react-native-community/async-storage'
import Modal from 'react-native-modal';

let Todoss = [

]


export default class Todos extends React.Component {
    state = {
        isLoading: false,
        isVisible: false,
        name: '',
        description: ''
    }
    componentDidMount() {
        this.getdata()
    }
    componentWillUnmount() {
        this.savedata()
    }
    getdata = async () => {
        try {
            this.setState({ isLoading: true })
            const Todo_t = await AsyncStorage.getItem('data')
            if (Todo_t !== null) {
                // value previously stored
                Todoss = JSON.parse(Todo_t)
            }
            this.setState({ isLoading: false })
        } catch (e) {
            this.setState({ isLoading: false })
            console.log(e)
        }
    }
    savedata = async () => {
        try {
            const jsonValue = JSON.stringify(Todoss)
            await AsyncStorage.setItem('data', jsonValue)
        } catch (e) {
            // saving error
            console.log(e)
        }
    }
    save = () => {
        if (this.state.name != '' && this.state.description != "") {
            this.setState({ isVisible: false })
            Todoss.push(
                { tittle: this.state.name, description: this.state.description }
            )
            this.savedata()
            this.getdata()
        }
    }
    render() {
        return (
            this.state.isLoading ? <ActivityIndicator /> : <>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: .07, backgroundColor: 'black', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'stretch' }}>
                        <Text style={{ color: 'white', fontSize: 40, fontStyle: 'italic', paddingLeft: 10 }}>Todos </Text>
                        <TouchableOpacity onPress={() => this.setState({ isVisible: true })} style={{ flex: .2, paddingRight: 5 }}>
                            <Text style={{ color: 'white', fontSize: 40, alignSelf: 'stretch' }}> + </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: .99, backgroundColor: 'black', paddingTop: 10 }}>
                        <View style={{ borderColor: 'red', borderTopWidth: 1, backgroundColor: 'black', flex: 1, paddingTop: 20 }}>
                            <FlatList
                                data={Todoss}
                                renderItem={({ item }) => (<Todo {...item} />)}
                                keyExtractor={({ item, index }) => (index)}
                            />
                        </View>
                    </View>
                    <Modal
                        isVisible={this.state.isVisible}
                        onBackdropPress={() => { this.setState({ isVisible: false }) }}
                        style={{ margin: 0 }}
                    >
                        <View >
                            <TouchableOpacity onPress={this.save} style={{ alignSelf: 'flex-end' }}>
                                <Text style={{ color: '#12d5e3', fontSize: 20, marginVertical: 10 }}> Save </Text>
                            </TouchableOpacity>
                            <TextInput
                                value={this.state.name}
                                style={{ backgroundColor: 'white', }}
                                placeholder="Title"
                                onChangeText={text => this.setState({ name: text })}
                            />
                            <TextInput
                                value={this.state.description}
                                style={{ backgroundColor: 'white', marginTop: 10 }}
                                placeholder="Description"
                                onChangeText={text => this.setState({ description: text })}
                            />

                        </View>
                    </Modal>
                </View>
            </>
        )
    }
}

