import React, { Component } from 'react';
//import ReactDOM from 'react-dom';

import Form from 'devextreme-react/form';
import 'devextreme-react/text-area';
import 'devextreme-react/radio-group';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.compact.css';
const employee = {
  "FirstName":"pedro",
  "LastName":"Azpurua",
  "BirthDate":"2010-01-01",
  "Pregunta":"Si"

};
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
dataField: 'FirstName'
}, {
dataField: 'LastName'
},
{
dataField: 'BirthDate',
editorType: 'dxDateBox',
editorOptions: {
width: '100%'
},
},
{
dataField: 'Pregunta',
editorType: 'dxRadioGroup',
editorOptions: {
layout: "vertical",
items: ["Si", "No", "No obtuve los resultados"],
},
}
]
}]
}];


;
class Formulario extends Component {
constructor(props) {
  super(props);
  this.state = { 
    showToolTip:true,
    geo:null
   };

}

render() {
  
   return(
            <div>Formulario
               
               <Form formData={employee} items={formItems} />;
          </div>
          )
   } 

}
export default Formulario;