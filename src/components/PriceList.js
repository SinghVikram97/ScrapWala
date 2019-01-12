import React, { Component } from 'react'
import RateCard from './RateCard'
export default class PriceList extends Component {
  render() {
    return (
     <div className="row pt4">
      <div className="col s12">
        <div className="row center">
          <div className="col s12">
            <h4>The eKabadi rates of scrap</h4>
          </div>
        </div>
        <div className="row pl6">
          <div className="col s12 m4">
            <RateCard src="https://www.thekabadiwala.com/Images/Material/x128/c5v1rm4p.gz2.png" item="Aluminium" price="80.00"/>
          </div>
          <div className="col s12 m4">
          <RateCard src="https://www.thekabadiwala.com/Images/Material/x128/s43ftptr.haf.png" item="Beer Bottles" price="0.50"/>
          </div>
          <div className="col s12 m4">
          <RateCard src="https://www.thekabadiwala.com/Images/Material/x128/xfur23ae.cgt.png" item="Books" price="6.00"/>
          </div>
        </div>
        <div className="row pl6">
          <div className="col s12 m4">
          <RateCard src="https://www.thekabadiwala.com/Images/Material/x128/zlutiyk2.3wa.png" item="Brass" price="195"/>
          </div>
          <div className="col s12 m4">
          <RateCard src="https://www.thekabadiwala.com/Images/Material/x128/wstrzesd.1zc.png" item="Carton(House)" price="6"/>
          </div>
          <div className="col s12 m4">
          <RateCard src="https://www.thekabadiwala.com/Images/Material/x128/wstrzesd.1zc.png" item="Carton(Shop)" price="7"/>
          </div>
        </div>
        <div className="row pl6">
          <div className="col s12 m4">
          <RateCard src="https://www.thekabadiwala.com/Images/Material/x128/i2ik5erf.kfh.png" item="Copper" price="245"/>
          </div>
          <div className="col s12 m4">
          <RateCard src="https://www.thekabadiwala.com/Images/Material/x128/q3ammhyu.gjz.png" item="E-Waste" price="10"/>
          </div>
          <div className="col s12 m4">
          <RateCard src="https://www.thekabadiwala.com/Images/Material/x128/yj5bm45i.bol.png" item="Fiber" price="7"/>
          </div>
        </div>
        <div className="row pl6">
          <div className="col s12 m4">
          <RateCard src="https://www.thekabadiwala.com/Images/Material/x128/p3tamw21.bta.png" item="Grey Board" price="2"/>
          </div>
          <div className="col s12 m4">
          <RateCard src="https://www.thekabadiwala.com/Images/Material/x128/s43ftptr.haf.png" item="Hard Plastic" price="2"/>
          </div>
          <div className="col s12 m4">
          <RateCard src="https://www.thekabadiwala.com/Images/Material/x128/h5bs3x4i.m0s.png" item="Iron" price="16"/>
          </div>
        </div>
        <div className="row pl6">
          <div className="col s12 m4">
          <RateCard src="https://www.thekabadiwala.com/Images/Material/x128/k02eqj4k.0te.png" item="Magazines" price="7"/>
          </div>
          <div className="col s12 m4">
          <RateCard src="https://www.thekabadiwala.com/Images/Material/x128/1vek2e1c.y5o.png" item="Milk Covers" price="3"/>
          </div>
          <div className="col s12 m4">
          <RateCard src="https://www.thekabadiwala.com/Images/Material/x128/wof1xrce.ylx.png" item="Mix Plastic" price="5"/>
          </div>
        </div>
        <div className="row pl6">
          <div className="col s12 m4">
          <RateCard src="https://www.thekabadiwala.com/Images/Material/x128/5popr5mn.iqd.png" item="Mix Waste" price="4"/>
          </div>
          <div className="col s12 m4">
          <RateCard src="https://www.thekabadiwala.com/Images/Material/x128/weo4meqk.pog.png" item="Others" price="1"/>
          </div>
          <div className="col s12 m4">
          <RateCard src="https://www.thekabadiwala.com/Images/Material/x128/n0vla1ll.nnr.png" item="Plastic Jar(15ltr)" price="10"/>
          </div>
        </div>
        <div className="row pl6">
          <div className="col s12 m4">
          <RateCard src="https://www.thekabadiwala.com/Images/Material/x128/alqspqpk.u2s.png" item="Plastic Jar(5ltr)" price="3"/>
          </div>
          <div className="col s12 m4">
          <RateCard src="https://www.thekabadiwala.com/Images/Material/x128/twxbmqr5.5i5.png" item="Polythene Mix" price="5"/>
          </div>
          <div className="col s12 m4">
          <RateCard src="https://www.thekabadiwala.com/Images/Material/x128/bpmp4shi.edn.png" item="Record Paper" price="6"/>
          </div>
        </div>
      </div>
     </div>
    )
  }
}
