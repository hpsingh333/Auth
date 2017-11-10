import React , {Component} from 'react';
import {Text}  from 'react-native';
import firebase from 'firebase';
import {Card, CardSection, Button, Input, Spinner} from './common'


class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            error:'',
            loading:false  
        }
    }

    onButtonPress(){
        const {email, password, error, loading}=this.state;
        this.setState({error:'', loading:true});

        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(this.onLoginSuccess.bind(this))
        .catch(()=>{
            firebase.auth().createUserWithEmailAndPassword(email,password).then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFail.bind(this));

        })
    }

    onLoginFail(){
        this.setState({error:'Authentication Failed', loading:false})
    }

    onLoginSuccess() {
        this.setState({
            email:'',
            password:'',
            error:'',
            loading:false
        })
    }

    renderButton(){
        if(this.state.loading){
            return <Spinner/>
        }
        return(
            <Button onPress={this.onButtonPress.bind(this)}>
            Log In
            </Button>
        )
    }

    render(){
        return(
            
            <Card>
                <CardSection>
                    <Input 
                        placeholder="abc@xyz.com" 
                        label="Email" 
                        value={this.state.email} 
                        onChangeText={email => this.setState({email})}/>
                </CardSection>
                <CardSection>
                    <Input 
                        secureTextEntry 
                        placeholder="Password" 
                        label="Password" 
                        value={this.state.password}
                        onChangeText={password => this.setState({password})}/>
                </CardSection>
                <Text style={styles.errorStyle}>
                    {this.state.error}
                </Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
}

const styles={
    errorStyle:{
        fontSize:20,
        color:'red',
        alignSelf:'center'
    }
}

export default LoginForm;