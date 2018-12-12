import React from 'react';
import Form  from 'devextreme-react/form';
import Button  from 'devextreme-react/button';
import notify from 'devextreme/ui/notify';
import 'devextreme-react/text-area';
import 'devextreme-react/radio-group';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.compact.css';
import {dxformItems} from '../data/formularios.json';
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
colCount: 2,
colSpan: 4,
items: [{
dataField: 'nombre1',
label: {
    text: 'Nombre'
  },
  editorOptions: {
    width: 300,
    disabled: true,
    },
},
{
  dataField: 'nombre2',
  label: {
      text: 'Nombre2',
      disabled: true,
    },
    editorOptions: {
      width: 300,
      disabled: true,
      },
  }, 
{
dataField: 'apellido1',
label: {
    text: 'Apellido',
   
  },
  editorOptions: {
    width: 300,
    disabled: true,
    },

},
{
  dataField: 'apellido2',
  label: {
      text: 'Apellido2'
    },
    editorOptions: {
      width: 300,
      disabled: true,
      },
  
  },
  {
    dataField: 'correo',
    label: {
        text: 'Correo',
       
      },
      editorOptions: {
        width: 300,
        disabled: true,
        },
    
    },
    {
      dataField: 'telefono',
      label: {
          text: 'Telefono'
        },
        editorOptions: {
          width: 300,
          disabled: true,
          },
      
      },
{
dataField: 'fecha',
editorType: 'dxDateBox',
editorOptions: {
width: 200,
disabled: true,
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
      observador:[],
      formdata: {
        "nombre1":"","nombre2":"",
        "apellido1":"","apellido2":"",
        "fecha":"",
        "orientacion":""
     },
      error:null,
      isLoading:false

    };
    this.setForm2 = (ref) => {
      if (ref!=null){
      
        this.form = ref.instance;
        }
     };
    this.onClick = this.onClick.bind(this);
  } 
  onSearch = (e) => {
    this.setState({ isLoading: true });
   // alert('The value is: ' + this.cedula.value);
    let cedula=this.cedula.value;    
    e.preventDefault();
    const url='https://faro2018consultas.azurewebsites.net/api/twtpersona?cedula=V3664204'
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
 // alert(JSON.stringify(result))
  //console.log("onSetResults")
  //console.log(result)
  const formdata={
    "nombre1":"Pedro",
    "nombre2":"Pablo",
    "apellido1":"Azpurua",
    "apellido2":"SIN",
    "fecha":"2010-01-01",
    "correo":"ppaapap@gmail.com",
    "telefono":"02727827287",
    "orientacion":"PJ"
  
  };
  this.setState({observador:result,formdata,isLoading:false})
  
  /*
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
  */
  //this.setState({ personas: result })
  //console.log(this.state)
}
onClick(e){
    
  notify("Informacion Registrada", "success", 600);
    alert(JSON.stringify(this.form.option("formData")));
  }
  render() {
    
    if (error) {
        return <p>{error.message}</p>;
      }
    if (isLoading) {
        return <p>Loading ...</p>;
      }
      const {observador,formdata,error,isLoading } = this.state;
    
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
           <Form ref={this.setForm2} formData={formdata} items={formItems} />;
           </td></tr>
           <tr><td>
           <Button
            text={"Registrar Orientacion Politica"}
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