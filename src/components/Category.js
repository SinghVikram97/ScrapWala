import React, { Component } from 'react'
import {storage} from '../firebase'
export default class Category extends Component {

  state={
    image:null,
    url:'',
    progress:0
  }

  imageUpload=(e)=>{
    if(e.target.files[0]){
      this.setState({
        image:e.target.files[0]
      })
    }
  }

  handleClick=()=>{
    const {image}=this.state;
    const uploadTask=storage.ref(`images/${image.name}`).put(image);
    uploadTask.on('state_changed',(snapshot)=>{
      const progress=Math.round((snapshot.bytesTransferred/snapshot.totalBytes)*100);
      this.setState({
        progress:progress
      })
    },(error)=>{
      console.log(error)
      },()=>{
      storage.ref('images').child(image.name).getDownloadURL().then((url)=>{
        console.log(url);
        this.setState({
          url:url
        })
      })
    })
  }

  render() {
     return (
      <div className="row mt4">
        <div className="col s12">
          <div className="row center">
            <div className="col s12">
              <h5>Detect Category of Waste</h5>
            </div>
          </div>
          <div className="row center">
            <div className="col s12"> 
              <progress value={this.state.progress} max="100"/>
              <br></br><br></br>
              <input type="file" onChange={this.imageUpload}></input>
              <button onClick={this.handleClick} className="waves-effect green darken-4 waves-light btn text-white">Upload</button>
            </div>
          </div>
          <div className="row center">
            <div className="col s12">
              <img src={this.state.url || 'http://via.placeholder.com/400*300'} height="300" width="400"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
