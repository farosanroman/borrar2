import React from 'react';
import { Card,Row,Col,CardBlock,CardHeader,CardFooter, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
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
     const clientes=[1,2,3,4,5,6,7,8,9,10,11,12,13,14]
     let i=0;
    //alert(JSON.stringify(formItems[0].items[2].items))
    return(
        <div>
         
          <h3>
             <span  className="badge badge-secondary">{COD_ESTADO+" "+ESTADO}</span>
          </h3>
        <GeoJsonLayer geojson={geojson} centrospoli={[]} centros={[]} center={center} zoom={zoom} onsetgeojson={this.onSetGeoJson} />
        <div className="container-fluid" style={{marginLeft: '2px'}}>   
        <div className="d-flex flex-row">                    
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="card-deck">
            {clientes.map(function(item,index){
              i+=1;
                if (1==1){
                    return (
                        <ContentItem item={item} key={i} />
                    )
                    
                 }}
                 
                 )}
         </div>
       </div>       
     </div>
    </div>      
           
</div>
      )
    }
  }
  class ContentItem extends React.Component {
    render(){
      
      return(
       
        <Row >
          <Col xs="1" />
         <Col xs="6" sm="6" >
           <Card style={{ width: "20rem" }}>
            <CardBody>
              <CardTitle className="font-weight-bold">
              Rol: Observador
              </CardTitle>
              <CardSubtitle className="font-italic">Luis castro</CardSubtitle>
              <CardText>
              010101000 Colegio Libertad<br/>
              Miranda, Baruta, Baruta<br/>
              0416-234434343 lcastro@gmail.com @llibertad
              </CardText>
              <Button href="#" color="success">Cambios</Button>
            </CardBody>
           </Card>
         </Col>
        </Row>
      )
    }

}
export default Geo;
