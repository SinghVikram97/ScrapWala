import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div className="container mt5">
        <div className="row">
          <div className="col s12 m6">
          <div className="row center">
            <div className="col s12">
              <h4>Welcome to the The eKabadi</h4>
              <h5>Smart solution for all your waste problems</h5>
            </div>
          </div>
          <div className="row center">
            <div className="col s12">
             <h6>Now sell scrap at your fingertips!!! <span style={{color:"blue",cursor:"pointer"}}>Download our app</span></h6>
            </div>
          </div>
          <div className="row">
           <div className="col s12">
              <img alt="description" src="https://www.thekabadiwala.com/Images/Home/Selling-Scrap-Online.png"></img>
           </div> 
          </div>
            </div>
            <div className="col s12 m6">
              <div className="row">
                <div className="col s12 m7 offset-m2">
                  <div className="card">
                    <div className="card-content center row">
                      <div className="col s12">
                        <div className="row">
                          <div className="col s12">
                            <h5>Sell or Donate your scrap</h5>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col s12">
                            <h6><i>In just 3 easy steps...</i></h6>
                          </div>
                        </div>
                        <div className="row" style={{marginBottom:"0",paddingBottom:"0"}}>
                          <div className="col s12 offset-s2">
                            <div className="row" style={{marginBottom:"0",paddingBottom:"0"}} >
                              <form className="col s12 ">
                                <div className="row center">
                                <div class="input-field col s6">
                                    <i class="material-icons prefix">phone</i>
                                    <input id="icon_telephone" type="tel" class="validate"/>
                                    <label for="icon_telephone">Telephone</label>
                                </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div className="row" style={{margintTop:"0",paddingTop:"0"}}>
                          <div className="col s12">
                            <a className="waves-effect green darken-4 waves-light btn"><i class="material-icons text-white left">attach_money</i><span className="text-white">Sell</span></a>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col s12">
                            <h6>Now available in all major cities!!</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="row mt4 center">
            <div className="col s12">
              <h4>Why The eKabadi</h4>
              <h5>You have various reasons to choose us</h5>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <img src="https://www.thekabadiwala.com/Images/Home/Why-to-choose-The-Kabadiwala.png"></img>
            </div>
          </div>
          <hr></hr>
          <div className="row mt6 center">
            <div className="col s12 m4 mb4">
              <h6>What do we buy</h6>
              <img  className="mt4" src="https://www.thekabadiwala.com/Images/Home/what-do-we-buy.png"/>
              <p className="mt4">All kinds of Papers, Plastic, Metal, E-waste</p>
            </div>
            <div className="col s12 m4 mb4">
              <h6>Refer and Earn</h6>
              <img  className="mt4" src="https://www.thekabadiwala.com/Images/Home/Refer-and-Earn.png"/>
              <p className="mt4">Refer your friend and earn mone</p>
            </div>
            <div className="col s12 m4">
            <h6>Contribute to Environment</h6>
              <img  className="mt4" src="https://www.thekabadiwala.com/Images/Home/Contribute-to-Environment.png"/>
              <p className="mt4">Contribute & help in saving Environment</p>
            </div>
          </div>
          <hr></hr>
          <div className="row mt5 mb6 center">
            <div className="col s12 m6">
              <h5 className="mb6">Track your request</h5>
              <h6 className="mb6">Track where is your pickup reached</h6>
              <input placeholder="RequestId" id="first_name" type="text" class="validate" style={{width:"50%"}}/>
            </div>
            <div className="col s12 m6">
              <img src="https://www.thekabadiwala.com/Images/Home/Track-your-Request.png"></img>
            </div>
          </div>
      </  div>
    ) 
  }
}
