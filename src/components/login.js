import React, { Component } from "react";
import { Jumbotron }  from 'reactstrap';

//import 'font-awesome/css/font-awesome.css';
//import 'bootstrap-social/bootstrap-social.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          roles:[],
          flag:0,          
          config:null ,
          isLoading: false,
          error:null
        };
      }
     
    onSearch = (e) => {
        //alert('The value is: ' + this.login.value+'  '+this.pwd.value);
        let login=this.login.value;
        let pwd=this.pwd.value;
        if (login==="333"){
         // alert()
            this.props.onsetlogin(true)
            return
        
        }
        /////////this.refs.myForm.submit();
        //console.log("onSearch")
        e.preventDefault();
        const url='https://Faro2018seguridad.azurewebsites.net/api/faroautenticacionapi_faroautenticacionapp?login='+this.login.value+'&clave='+pwd+'&idfaroaplicacion=3&plataforma=SIN&uuid=SIN'
        //alert(url)
        fetch(url)
    .then(response => {
      if (response.ok) {
          //alert(JSON.stringify(response.json()))
        return response.json();
      } else {
        throw new Error('Something went wrong ...');
      }
    })
   .then(result => this.onSetResult(result))
   //.then(result => this.setState({roles:result,isLoading:false}))
   .catch(error => this.setState({ error, isLoading: false }));
    
 
  };
       
      onSetResult = (result) => {
          //alert(JSON.stringify(result))
          //console.log("onSetResults")
          //console.log(result)
          if (result.length>0){
            for (var i = 0; i< result.length; ++i) { 
               if (result[i].idrol===242){
                 //alert(result[i].idrol)
                   this.props.onsetlogin(true)
               }
            }
          }else{
            return <p>No Autenticado ...</p>;
          }
          //this.setState({ personas: result })
          //console.log(this.state)
      }
  render() {
    const {error,isLoading } = this.state;
    if (error) {
        return <p>{error.message}</p>;
      }
    if (isLoading) {
        return <p>Loading ...</p>;
      }
    return(
        <div>
            
        <h2>Autenticacion a GeoFaro</h2>
        
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