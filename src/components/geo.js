import React from 'react';
import GeoJsonLayer from './geojsonlayer';
//import MapGeoJSONLayer from './mapgeojsonlayer';
import notify from 'devextreme/ui/notify';

class Geo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      center:[-66.45286,10.3],
      zoom:[8],
     error:null,
      isLoading:false,
      geojson:[],
      COD_ESTADO:"GeoFaro en Accion ©Faro San Roman",
      ESTADO:""
    };
    
  } 
  
  componentDidMount() {
    console.log("geo componentDidMount")
    console.log(this.state.geojson)
    this.setState({ isLoading: true });
    //alert(this.props.idestado+" "+this.props.idformulario)
   // alert(JSON.stringify(this.props.formulario))
    var url="https://f18.azurewebsites.net/api/GeoJSONGet?code=71Esf7JNvNa2WkN5beemvAEXhK0GhAmrSoTZaMHpKKNn9mDrhxFKdw=="
    url="https://f18.azurewebsites.net/api/GeoMunJSONGet?code=K39ClZV7YrIxt74EO1Ueryk6ZKaevDxu32ys4OW/D3qnNhawd4WFBA==&id=13"
    //console.log(url)
    fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Something went wrong ...');
      }
    })
   .then(results => this.setState({geojson:results ,isLoading:false}))
   .catch(error => this.setState({ error, isLoading: false }));
    }
    onSetGeoJson = (id,nombre) => {  
      //alert("onSetFormulario "+id)  
      this.setState({COD_ESTADO:id,ESTADO:nombre})
      this.getMunicipio(id)
    } 
    getMunicipio(id) {
      console.log("getMunicipio"+id)
      //console.log(this.state.geojson)
      this.setState({ isLoading: true });
      //alert(this.props.idestado+" "+this.props.idformulario)
     // alert(JSON.stringify(this.props.formulario))
      var url="https://f18.azurewebsites.net/api/GeoMunJSONGet?code=K39ClZV7YrIxt74EO1Ueryk6ZKaevDxu32ys4OW/D3qnNhawd4WFBA==&id="+id
      //console.log(url)
      fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
     .then(results => this.setState({geojson:results ,isLoading:false}))
     .catch(error => this.setState({ error, isLoading: false }));
      }

  render() {
   
    if (error) {
        return <p>{error.message}</p>;
      }
    if (isLoading) {
        return <p>Loading ...</p>;
      }
      const {center, zoom,geojson,error,isLoading,COD_ESTADO,ESTADO } = this.state;
     console.log("render geo")
     console.log(geojson)
      
    //alert(JSON.stringify(formItems[0].items[2].items))
    return(
        <div>
         
          <h3>
             <span  className="badge badge-secondary">{COD_ESTADO+" "+ESTADO}</span>
          </h3>
        <GeoJsonLayer geojson={geojson} centros={[]} center={center} zoom={zoom} onsetgeojson={this.onSetGeoJson} />
      </div>
      )
    }
  }

export default Geo;
