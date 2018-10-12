import React, { Component } from "react";
import { Jumbotron }  from 'reactstrap';

//import 'font-awesome/css/font-awesome.css';
//import 'bootstrap-social/bootstrap-social.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            personas:[],
          flag:0,          
          config:null };
      }
      componentDidMount() {
        console.log("componentDidMount()")
        fetch('https://faro2018consultas.azurewebsites.net/api/personasuber?codcne=00&roles=229,230,231,233,232')
          .then(response => response.json())
          .then(result => this.onSetResult(result))
          //.then(data => this.setState({ personas: data }))
          .catch((error) => {
            console.error(error);
        });
        console.log(this.state.personas)
        console.log("componentDidMounted()")
    }
    onSearch = (e) => {
        alert('The value is: ' + this.login.value+'  '+this.pwd.value);
        /////////this.refs.myForm.submit();
        console.log("onSearch")
        e.preventDefault();
        const { value } = this.login;
        console.log(value)
        this.setState({flag:1});
        //fetch('http://nodebiz.azurewebsites.net/autenticacion')
        fetch('https://faro2018consultas.azurewebsites.net/api/personasuber?codcne=00&roles=229,230,231,233,232')
          .then(response => response.json())
          //.then(result => this.onSetResult(result, value))
          .then(data => this.setState({ personas: data }))
          .catch((error) => {
            console.error(error);
        });
        console.log("onSearch3")
        console.log(this.state.personas)
        if (value === '') {
          return;
        }
        //https://www.robinwieruch.de/local-storage-react/
     //https://carlosazaustre.es/consumiendo-un-api-rest-desde-react-js-con-ecmascript6/
      }
      onSetResult = (result) => {
          console.log("onSetRsultss")
          console.log(result)
          this.setState({ personas: result })
          console.log(this.state)
      }
  render() {
    console.log(this.state)
    return(
        <div>
            
        <h2>Autenticacion al Portal BizFin</h2>
        
        <form onSubmit={this.onSearch}>
        <label>
          Usuario:
          <input type="text" ref={login => this.login = login} />
          </label>
          <label>
          Password:
          <input type="text" ref={pwd => this.pwd = pwd} />
          </label>
          <button type="submit">Click</button>
        </form>
        
        <Jumbotron>
           <div  dark className="container">
               <div className="row row-header">
                   <div className="col-12 col-sm-6">
                       <h1>Instrucciones de Uso</h1>
                       <p>Una vez registrado podra...</p>
                   </div>
               </div>
           </div>
       </Jumbotron>
        </div>
    );
  }
}

export default Login;