import React, { Component } from 'react';
//import ReactDOM from 'react-dom';

import Form from 'devextreme-react/ui/form';
import RadioGroup,{dxRadioGroup} from 'devextreme-react/ui/radio-group';
import 'devextreme-react/ui/text-area';
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
}]

;
class Formulario extends Component {
constructor(props) {
  super(props);
  this.state = { 
    showToolTip:true,
    geo:null
   };

}
//componentDidMount() {
//  
//  fetch('https://hn.algolia.com/api/v1/search?query=redux')
//    .then(response => response.json())
//    .then(data => this.setState({ geo:data }));
//}
render() {
  
   return(
            <div>Formulario
               
               <Form formData={employee} items={formItems} />;
          </div>
          )
   } 

}
export default Formulario;