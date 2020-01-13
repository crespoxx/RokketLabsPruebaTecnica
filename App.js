import React from 'react';
import { StyleSheet, View, ScrollView, FlatList,Dimensions, Image, Text, TouchableOpacity, Animated, TextInput, Keyboard} from 'react-native';
import { Icon } from 'native-base';
import Spinner from 'react-native-spinkit';

//Get windows dimensions
let widthPantalla = Dimensions.get("window").width;
let heigtPantalla = Dimensions.get("window").height;

export default class App extends React.Component {

      constructor(props){
        super(props);
          this.state={
            tags: [],
            tag: '',
            loading: true,
            keyboardOpen: false,
            postOpacity: new Animated.Value(0),
          }
        }

       componentDidMount(){

        this.defaultPosts();


        //Listeners for keyboard
        this.keyboardDidShowListener = Keyboard.addListener(
          'keyboardDidShow',
          this._keyboardDidShow,
        );
        this.keyboardDidHideListener = Keyboard.addListener(
          'keyboardDidHide',
          this._keyboardDidHide,
        );



      }

      componentWillUnmount() {
        //Remove keyboard´s listeners
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
      }

      //Function that search all posts from API
      defaultPosts = async () => {

        this.setState({loading:true, postOpacity: new Animated.Value(0)});
        try {
           await fetch('https://n161.tech/api/dummyapi/post')
            .then((response) => response.json())
            .then((responseJson) => {
              this.setState({
                loading:false,
                tags: responseJson.data,
                })
              })

              Animated.timing(this.state.postOpacity, {
              toValue: 1,
              duration: 1500,
              }).start();
        } catch (e) {
          console.log(e)
        }
      }

      //Function that finds posts by tag
      findPosts = async() => {

        this.setState({loading:true, postOpacity: new Animated.Value(0)});
        try {
          await fetch('https://n161.tech/api/dummyapi/tag/'+this.state.tag+'/post')
            .then((response) => response.json())
            .then((responseJson) => {
              this.setState({
                loading:false,
                tags: responseJson.data,
                })

                Animated.timing(this.state.postOpacity, {
                toValue: 1,
                duration: 1500,
                }).start();
              })
        } catch (e) {
          console.log(e);
        }
      }

      //Function that runs when keyboard is opened
      _keyboardDidShow = () => {
        this.setState({keyboardOpen: true})
      }

      //Function that runs when keyboard is closed
      _keyboardDidHide = () => {
        this.setState({keyboardOpen: false})
      }

      render(){

          return (
            <View style={styles.container}>
                <View style={styles.textInputContainer}>
                {
                  this.state.keyboardOpen ? (
                      <TouchableOpacity onPress={Keyboard.dismiss} style={styles.icons}>
                        <Icon
                        name="arrowleft"
                        underlineColorAndroid="transparent"
                        type="AntDesign"
                        />
                      </TouchableOpacity>
                    ):(
                      <TouchableOpacity onPress={() => { this.searchInput.focus() }} style={styles.icons}>
                        <Icon
                        name="magnifier"
                        underlineColorAndroid="transparent"
                        type="SimpleLineIcons"
                        />
                      </TouchableOpacity>
                      )
                }

                  <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <TextInput
                        placeholder="Search"
                        placeholderTextColor="#BDBDBD"
                        value={this.state.tag}
                        onChangeText={(tag) => this.setState({tag})}
                        selectionColor={'grey'}
                        onSubmitEditing={ () => this.findPosts() }
                        style={styles.textInput}
                        ref={(input) => { this.searchInput = input; }}
                      />
                      {
                        this.state.tag.length != 0 ? (
                          <TouchableOpacity onPress={() => {this.setState({tag:''}, () => {this.defaultPosts()})}} style={styles.icons}>
                          <Icon
                          name="x"
                          underlineColorAndroid="transparent"
                          type="Feather"

                          />
                          </TouchableOpacity>
                          ):null
                      }
                  </View>
                </View>

            {
              this.state.loading ? (
                <View style={styles.activityIndicator}>
                  <Spinner color={'black'} size={50} type={'9CubeGrid'} />
                </View>
                ):(
                  <FlatList

                      data={this.state.tags}
                      style={{}}
                      renderItem= {({item, index}) =>
                      <Animated.View style={[styles.postView, {opacity: this.state.postOpacity}]}>

                        <View style={styles.topPost}>
                            <Image source={{uri: item.owner.image}} style={styles.profileImage}/>
                            <Text style={{fontSize:18, paddingLeft:10}}> {item.owner.firstName} {item.owner.lastName} </Text>
                            <Text style={{fontSize:12, paddingLeft:15, color:'grey'}}> few seconds ago </Text>
                        </View>


                        <Image source={{uri: item.image}} style={styles.postImage}/>

                        <Text style={styles.messageStyle}> {item.message} </Text>

                        <View style={styles.tagsContainer}>
                              {item.tags.map( (tag,index) => {

                                if(tag == null){
                                  return null;
                                }else{
                                  return <Text onPress={() => {this.setState({tag:tag}, () => {this.findPosts()})}} style={styles.tags} key={index}> #{tag} </Text>
                                }

                                })}
                        </View>

                        </Animated.View>
                      }
                      keyExtractor = {(item, index) => index.toString()}
                  />
                  )
            }
            </View>
          );
      }
}

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
        },
        textInputContainer: {
          marginHorizontal:20,
          marginTop:10,
          marginBottom:1,
          flexDirection:'row',
        },
        textInput: {
          marginLeft:10,
          width: widthPantalla*0.72
        },
        icons: {
          justifyContent: 'center',
          marginRight:10
        },
        tags: {
          color: '#5882FA'
        },
        tagsContainer: {
          marginHorizontal: 20,
          marginBottom:10,
          flexDirection:'row'
        },
        messageStyle: {
          fontSize: 18,
          paddingLeft: 20,
          paddingRight:20
        },
        activityIndicator: {
          flex:1,
          justifyContent:'center',
          alignItems:'center'
        },
        postView: {
          borderWidth:0.5,
          borderColor:'grey',
          marginTop:10,
          backgroundColor:'white',
          elevation: 3
        },
        topPost: {
          flexDirection:'row',
          marginLeft:20,
          marginTop:10,
          alignItems: 'center'
        },
        profileImage: {
          width:60,
          height:60,
          borderRadius:30
        },
        postImage: {
          width: widthPantalla+5,
          height: heigtPantalla*0.4,
          borderColor:'#E6E6E6',
          borderWidth:0.5,
          alignSelf:'center',
          marginTop:heigtPantalla*0.02,
          marginBottom: heigtPantalla*0.02,
          backgroundColor:'#E6E6E6'
        }
      });
