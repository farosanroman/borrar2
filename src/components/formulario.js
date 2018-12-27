import React from 'react';

import Form  from 'devextreme-react/form';
import Button  from 'devextreme-react/button';
import notify from 'devextreme/ui/notify';
import 'devextreme-react/text-area';
import 'devextreme-react/radio-group';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.compact.css';
import {dxformItems} from '../data/formularios.json';
import { Height } from 'devextreme-react/range-selector';
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
items: [

{
dataField: 'Pregunta',
editorType: 'dxRadioGroup',
editorOptions: {
layout: "horizontal",
items: ["Blanco", "Amarillo", "Naranja","Azul"],
},
}
]
}]
}]
;
const employee = {
    
    "Pregunta": ""
  };
class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      observador:[],
      formItems:formItems,
      formdata: null,
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
  
onClick(e){
    
  notify("En desarrollo", "error", 600);
    //alert(JSON.stringify(this.form.option("formData")));
  }
  render() {
   
    if (error) {
        return <p>{error.message}</p>;
      }
    if (isLoading) {
        return <p>Loading ...</p>;
      }
      const {observador,formItems, formdata,error,isLoading } = this.state;
     
      
    //alert(JSON.stringify(formItems[0].items[2].items))
    return(
        <div>
         
          <h3>
             <span  className="badge badge-secondary">{'Actualizacion de Partido'}</span>
          </h3>
        <table>
        <tr><td>
         
    
           <Form  formData={employee} items={formItems} />
           
     
     
           </td></tr>
           <tr><td>
           <Button
            text={"Registrar su Seleccion"}
            onClick={this.onClick}
            type='success'
          />
          </td></tr></table>
      </div>
      )
    }
  }

export default Formulario;