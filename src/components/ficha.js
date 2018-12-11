import React from 'react';
import Form  from 'devextreme-react/form';
import Button  from 'devextreme-react/button';

import 'devextreme-react/text-area';
import 'devextreme-react/radio-group';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.compact.css';
const employee = {
  "nombre1":"pedro",
  "apellido1":"Azpurua",
  "fecha":"2010-01-01",
  "orientacion":"AD"

};
const partidos = ['AD','PJ','VP','UNT','SUMATE','MUD','INDEPENDIENTE','FRENTE'];
const formItems = 
[{
itemType: 'group',
cssClass: 'first-group',
colCount: 4,
items: [{
template: '<div class="form-avatar"></div>'
}, {
itemType: 'group',
colSpan: 3,
items: [{
dataField: 'nombre1',
label: {
    text: 'Nombre'
  },
  editorOptions: {
    width: 300
    },
}, {
dataField: 'apellido1',
label: {
    text: 'Apellido'
  },
  editorOptions: {
    width: 300
    },

},
{
dataField: 'fecha',
editorType: 'dxDateBox',
editorOptions: {
width: 200
},
},
{
    dataField: 'orientacion',
    editorType: 'dxSelectBox',
    editorOptions: {
      items: partidos,
      width: 300
    },
    
},


]
}]
}];
class Ficha extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      error:null     
    };
    this.setForm = (ref) => {
        this.form = ref.instance;
  };
    this.onClick = this.onClick.bind(this);
  } 
  onSearch = (e) => {
    alert('The value is: ' + this.cedula.value);
    let login=this.login.value;
    let pwd=this.pwd.value;
    if (login==="O9D"){
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
onClick(e){
    alert(JSON.stringify(this.form.option("formData")));
  }
  render() {
    
    return(
        <div>
           <h2>Actualizacion de Datos</h2>
        <table><tr><td>
        <form onSubmit={this.onSearch}>
        <label>
          Cedula:
          <input type="text" ref={cedula => this.cedula = cedula} />
          </label>
          <button type="submit">Buscar</button>
        </form>
        </td></tr>
        <tr><td>
           <Form ref={this.setForm} formData={employee} items={formItems} />;
           </td></tr>
           <tr><td>
           <Button
            text={"Grabar"}
            onClick={this.onClick}
            type='success'
          />
          </td></tr></table>
      </div>
      )
    }
  }

export default Ficha;

/*{
dataField: 'Pregunta',
editorType: 'dxRadioGroup',
editorOptions: {
layout: "vertical",
items: ["Si", "No", "No obtuve los resultados"],
},
*/