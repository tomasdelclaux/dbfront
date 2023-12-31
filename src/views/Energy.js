/*!

=========================================================
* Argon Design System React - v1.1.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes

// reactstrap components
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Row,
  Col,
} from "reactstrap";

// core components
import Navbar from "../components/NavBar.js";
import Footer from "../components/Footer.js";
import Chart_m_3_1 from "../components/Chart_m_3_1.js";
import Chart_m_3_2 from "../components/Chart_m_3_2.js";
import Divider from "../components/Divider.js"


class Energy extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        m_3_1: {
            topN: "5",
            agg: "2Y",
            from: "1990",
            to: "2019",
            data: null
        },
        m_3_2: {
            country: "United States",
            from: "1990",
            to: "2019",
            data: null
        }
    };
    // this.get_m_1_2 = this.get_m_1_2.bind(this);
    this.topNCountries = this.topNCountries.bind(this);
    this.changeCountry = this.changeCountry.bind(this);
    this.changeAgg = this.changeAgg.bind(this);
    this.changeYear = this.changeYear.bind(this);
    this.countryList = this.countryList.bind(this);
  }

  componentDidMount() {
    this.fetchData('mockup_3_1', this.state.m_3_1.topN,  'junk', this.state.m_3_1.agg, this.state.m_3_1.from, this.state.m_3_1.to);
    setTimeout(() => {
        this.fetchData('mockup_3_2', 'junk', this.state.m_3_2.country, 'junk', this.state.m_3_2.from, this.state.m_3_2.to);
    }, 500); // Delay the second request by 500ms
    }
  
  fetchData(url, topN, country, agg, from, to) {
    fetch(`http://127.0.0.1:5000/${url}`, {
      method: 'POST',
      body: JSON.stringify({topN, country, agg, from, to }),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })
    .then((response) => response.json())
    .then((data) => {
      switch(url) {
        case 'mockup_3_1':
          this.setState({ m_3_1: { ...this.state.m_3_1, data: data.data } });
          break;
        case 'mockup_3_2':
          this.setState({ m_3_2: { ...this.state.m_3_2, data: data.data } });
          break;
        // Add more cases here if you have more URLs to handle
        default:
          console.log('Unknown URL');
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
  }




  topNCountries(url){
    const years = [2,3,4,5,6,7,8,9,10,11,12,13,14, 15]
    console.log("years", years);
    const options = []
    for(let i=0; i<years.length; i++){
        options.push(<DropdownItem className="dropdown-item" onClick={e=>this.changeTopN(e,years[i], url)}><div>{years[i]}</div></DropdownItem>);
    }
    return options;
  }
   countryList(url){
    const countries = ['Afghanistan','Albania','Algeria','Angola','Argentina','Australia','Austria','Bahrain','Bangladesh','Barbados','Benin','Bolivia','Botswana','Brazil','Bulgaria','Burkina Faso','Cambodia','Cameroon','Canada','Central African Republic','Chad','Chile','China','Colombia','Comoros','Congo Republic','Cuba','Cyprus','Denmark','Djibouti','Dominica','Dominican Republic','Ecuador','Egypt','El Salvador','Equatorial Guinea','Eswatini','Finland','France','Gabon','Gambia','Germany','Ghana','Greece','Guatemala','Guinea','Guinea-Bissau','Haiti','Honduras','Hungary','Iceland','India','Indonesia','Iran','Iraq','Ireland','Israel','Italy','Jamaica','Japan','Jordan','Kenya','Kuwait','Laos','Lebanon','Lesotho','Liberia','Libya','Madagascar','Malawi','Malaysia','Mali','Malta','Mauritania','Mauritius','Mexico','Mongolia','Morocco','Mozambique','Myanmar','Namibia','Nepal','Netherlands','New Zealand','Nicaragua','Niger','Nigeria','North Korea','Norway','Oman','Pakistan','Panama','Paraguay','Peru','Philippines','Poland','Portugal','Qatar','Romania','Saudi Arabia','Senegal','Seychelles','Sierra Leone','South Africa','South Korea','Spain','Sri Lanka','St. Lucia','Sweden','Switzerland','Syria','Tanzania','Thailand','Togo','Trinidad and Tobago','Tunisia','Uganda','United Arab Emirates','United Kingdom','United States','Uruguay','Venezuela','Vietnam','Zambia','Zimbabwe'];
    console.log("countries", countries);
    const options = []
    for(let i=0; i<countries.length; i++){
        options.push(<DropdownItem className="dropdown-item" onClick={e=>this.changeCountry(e,countries[i], url)}><div>{countries[i]}</div></DropdownItem>);
    }
    return options;
  }
  yearList31(param, url){
    const yearList = [1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021];
    const options = []
    for(let i=0; i<yearList.length; i++){
        options.push(<DropdownItem onClick={e=>this.changeYear(e,yearList[i], param, url)}><div>{yearList[i]}</div></DropdownItem>);
    }
    return options;
  }

  yearList32(param, url){
    const yearList = [1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021];
    const options = []
    for(let i=0; i<yearList.length; i++){
        options.push(<DropdownItem onClick={e=>this.changeYear(e,yearList[i], param, url)}><div>{yearList[i]}</div></DropdownItem>);
    }
    return options;
  }
//   get_m_1_2(){
//     fetch('http://127.0.0.1:5000/mockup_1_2', {
//             method: 'POST',
//             body: JSON.stringify({
//               // Add parameters here
//             }),
//             headers: {
//               'Content-type': 'application/json; charset=UTF-8',
//             },
//           })
//              .then((response) => response.json())
//              .then((data) => {
//                 console.log(data);
//                 var temp = this.state.m_1_2;
//                 temp.data = data.data;
//                 this.setState({m_1_2:temp});
//                 // Handle data
//              })
//              .catch((err) => {
//                 console.log(err.message);
//              });
//   }

changeTopN(e, n, url) {
    var param_topN = null;
    var param_from = null;
    var param_to = null;
    var param_agg = null;
    switch(url){
        case "mockup_3_1":
            this.state.m_3_1.topN = n;
            param_topN = n;
            param_agg = this.state.m_3_1.agg;
            param_from = this.state.m_3_1.from;
            param_to = this.state.m_3_1.to;
            break;
    }
    this.setState({state: this.state});
    if(param_from != "select" && param_to != "select"){
        fetch(`http://127.0.0.1:5000/${url}`, {
            method: 'POST',
            body: JSON.stringify({
                topN: param_topN,
                from: param_from,
                agg: param_agg,
                to: param_to
              // Add parameters here
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
             .then((response) => response.json())
             .then((data) => {
                console.log(data);
                switch(url){
                    case "mockup_3_1":
                      var temp = this.state.m_3_1;
                      temp.data = data.data;
                      this.setState({m_3_1:temp});
                      break;
                  }
                // Handle data
             })
             .catch((err) => {
                console.log(err.message);
             });
    }
  }

  changeCountry(e, n, url) {
    var param_country = null;
    var param_agg = null;
    var param_from = null;
    var param_to = null;
    switch(url){
        case "mockup_3_1":
            this.state.m_3_1.country=n;
            param_country = n;
            param_agg = this.state.m_3_1.agg;
            param_from = this.state.m_3_1.from;
            param_to = this.state.m_3_1.to;
            break;
        case "mockup_3_2":
            this.state.m_3_2.country=n;
            param_country = n;
            param_from = this.state.m_3_2.from;
            param_to = this.state.m_3_2.to;
            break;
    }
    this.setState({state: this.state});
    if(param_from != "select" && param_to != "select"){
        fetch(`http://127.0.0.1:5000/${url}`, {
            method: 'POST',
            body: JSON.stringify({
                country: param_country,
                from: param_from,
                to: param_to
              // Add parameters here
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
             .then((response) => response.json())
             .then((data) => {
                console.log(data);
                switch(url){
                  case "mockup_3_1":
                    var temp = this.state.m_3_1;
                    temp.data = data.data;
                    this.setState({m_3_1:temp});
                    break;
                  case "mockup_3_2":
                    var temp = this.state.m_3_2;
                    temp.data = data.data;
                    this.setState({m_3_2:temp});
                    break;
                }
                // Handle data
             })
             .catch((err) => {
                console.log(err.message);
             });
    }
  }
  changeAgg(e, n, url) {
    var param_country = null;
    var param_agg = null;
    var param_from = null;
    var param_to = null;
    var param_topN = null;
    switch(url){
        case "mockup_3_1":
            this.state.m_3_1.agg=n;
            param_country = this.state.m_3_1.country;
            param_topN = this.state.m_3_1.topN;
            param_agg = n;
            param_from = this.state.m_3_1.from;
            param_to = this.state.m_3_1.to;
            break;
    }
    this.setState({state: this.state});
    if(param_country != "select" && param_from != "select" && param_to != "select"){
        fetch(`http://127.0.0.1:5000/${url}`, {
            method: 'POST',
            body: JSON.stringify({
              country: param_country,
              topN: param_topN,
              agg: param_agg,
              from: param_from,
              to: param_to
              // Add parameters here
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
             .then((response) => response.json())
             .then((data) => {
                console.log(data);
                switch(url){
                  case "mockup_3_1":
                    var temp = this.state.m_3_1;
                    temp.data = data.data;
                    this.setState({m_3_1:temp});
                    break;
                }
             })
             .catch((err) => {
                console.log(err.message);
             });
    }
  }
  changeYear(e, n, param, url) {
    var param_country = null;
    var param_agg = null;
    var param_from = null;
    var param_topN = null;
    var param_to = null;
    if(param=="to"){
        switch(url){
            case "mockup_3_1":
                this.state.m_3_1.to=n;
                param_agg = this.state.m_3_1.agg;
                param_from = this.state.m_3_1.from;
                param_topN = this.state.m_3_1.topN;
                param_to = n;
                break;
            case "mockup_3_2":
                this.state.m_3_2.to=n;
                param_country = this.state.m_3_2.country;
                param_from = this.state.m_3_2.from;
                param_to = n;
                break;
        }
        this.setState({state: this.state});
    }
    else{
        switch(url){
            case "mockup_3_1":
                this.state.m_3_1.from=n;
                param_country = this.state.m_3_1.country;
                param_agg = this.state.m_3_1.agg;
                param_from = n;
                param_topN = this.state.m_3_1.topN;
                param_to = this.state.m_3_1.to;
                break;
            case "mockup_3_2":
                this.state.m_3_2.from=n;
                param_country = this.state.m_3_2.country;
                param_from = n;
                param_to = this.state.m_3_2.to;
                break;
        }
        this.setState({state: this.state});
    }
    if(param=="to"){
        if(param_country != "select" && param_from != "select" && param_agg != "select"){
            fetch(`http://127.0.0.1:5000/${url}`, {
                method: 'POST',
                body: JSON.stringify({
                  country: param_country,
                  agg: param_agg,
                  from: param_from,
                  topN: param_topN,
                  to: param_to
                }),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
              })
                 .then((response) => response.json())
                 .then((data) => {
                    console.log(data);
                    switch(url){
                      case "mockup_3_1":
                        var temp = this.state.m_3_1;
                        temp.data = data.data;
                        this.setState({m_3_1:temp});
                        break;
                      case "mockup_3_2":
                            var temp = this.state.m_3_2;
                            temp.data = data.data;
                            this.setState({m_3_2:temp});
                            break;
                    }
                 })
                 .catch((err) => {
                    console.log(err.message);
                 });
        }
    }
    else if(param="from"){
        if(param_country != "select" && param_to != "select" && param_agg != "select"){
            fetch(`http://127.0.0.1:5000/${url}`, {
                method: 'POST',
                body: JSON.stringify({
                    country: param_country,
                    agg: param_agg,
                    from: param_from,
                    topN: param_topN,
                    to: param_to
                }),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
              })
                 .then((response) => response.json())
                 .then((data) => {
                    console.log(data);
                    switch(url){
                        case "mockup_3_1":
                          var temp = this.state.m_3_1;
                          temp.data = data.data;
                          this.setState({m_3_1:temp});
                          break;
                        case "mockup_3_2":
                            var temp = this.state.m_3_2;
                            temp.data = data.data;
                            this.setState({m_3_2:temp});
                            break;
                      }
                    // Handle data
                 })
                 .catch((err) => {
                    console.log(err.message);
                 });
        }
    }
  }
  render() {
    console.log("hello",this.state);
    return (
      <>
        <Navbar />
        <main ref="main">
        <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-shaped">
              <div className="shape shape-style-1 shape-default">
              </div>
            </section>  
            <section className="section">
            <container>
                <Row className="justify-content-center">
                    <div align="center">
                        <h3>Energy Consumption</h3>
                    </div>
                </Row>
                <Row className="justify-content-center">
                    <Col>
                        <Row>
                            <Col>
                                <div align="center">
                                    <h5 className='text-black'>Top N Countries</h5>
                                    <UncontrolledDropdown group>
                                    <DropdownToggle caret>
                                    {this.state.m_3_1.topN}
                                    </DropdownToggle>
                                    <DropdownMenu container={'body'}>
                                        {this.topNCountries("mockup_3_1")}
                                    </DropdownMenu>
                                    </UncontrolledDropdown>
                                </div>
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col>
                                <div align="center">
                                <h5 className='text-black'>Aggregation View</h5>
                                <UncontrolledDropdown group>
                                <DropdownToggle caret>
                                {this.state.m_3_1.agg}
                                </DropdownToggle>
                                <DropdownMenu container={'body'}>
                                    <DropdownItem onClick={e=>this.changeAgg(e,"Y", "mockup_3_1")}>
                                    <div>Y</div>
                                    </DropdownItem>
                                    <DropdownItem onClick={e=>this.changeAgg(e,"2Y", "mockup_3_1")}>
                                    <div>2Y</div>
                                    </DropdownItem>
                                    <DropdownItem onClick={e=>this.changeAgg(e,"3Y", "mockup_3_1")}>
                                    <div>3Y</div>
                                    </DropdownItem>
                                    <DropdownItem onClick={e=>this.changeAgg(e,"5Y", "mockup_3_1")}>
                                    <div>5Y</div>
                                    </DropdownItem>
                                </DropdownMenu>
                                </UncontrolledDropdown>
                                </div>
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col>
                                <div align="center">
                                <h5>Date Range</h5>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col></Col>
                            <Col>
                                <div align="center">
                                <h6 className='text-black'>From</h6>
                                <UncontrolledDropdown group>
                                <DropdownToggle caret>
                                {this.state.m_3_1.from}
                                </DropdownToggle>
                                <DropdownMenu container={'body'}>
                                        {this.yearList31("from", "mockup_3_1")}
                                </DropdownMenu>
                                </UncontrolledDropdown>
                                </div>
                            </Col>
                            <Col></Col>
                            <Col>
                                <div align="center">
                                <h6 className='text-black'>To</h6>
                                <UncontrolledDropdown group>
                                <DropdownToggle caret>
                                {this.state.m_3_1.to}
                                </DropdownToggle>
                                <DropdownMenu container={'body'}>
                                        {this.yearList31("to", "mockup_3_1")}
                                </DropdownMenu>
                                </UncontrolledDropdown>
                                </div>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Col>
                    <Col lg="7" className="align-self-center">
                        <Chart_m_3_1 data={this.state.m_3_1.data}/>
                    </Col>
                    <Col lg="2" className="align-self-center mr-4">
                        <div>
                            <p>The chart depicts the leading electricity-consuming countries, 
                              with all other nations grouped together as a single category to represent global consumption levels.</p>
                        </div>
                    </Col>
                </Row>
            </container>
            </section>
            <Divider></Divider>
            <section className="section">
            <container>
                <Row className="justify-content-center">
                    <div align="center">
                        <h3>Electricty Consumption vs Co2 Emissions</h3>
                    </div>
                </Row>
                <Row>
                    <Col>
                    <Row>
                        <Col>
                                <div align="center">
                                    <h5 className='text-black'>Country</h5>
                                    <UncontrolledDropdown group>
                                    <DropdownToggle caret>
                                    {this.state.m_3_2.country}
                                    </DropdownToggle>
                                    <DropdownMenu container={'body'}>
                                        {this.countryList("mockup_3_2")}
                                    </DropdownMenu>
                                    </UncontrolledDropdown>
                                </div>
                            </Col>
                        </Row>
                        <br></br>
                    <Row>
                            <Col>
                                <div align="center">
                                <h5>Date Range</h5>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col></Col>
                            <Col>
                                <div align="center">
                                <h6 className='text-black'>From</h6>
                                <UncontrolledDropdown group>
                                <DropdownToggle caret>
                                {this.state.m_3_2.from}
                                </DropdownToggle>
                                <DropdownMenu container={'body'}>
                                        {this.yearList32("from", "mockup_3_2")}
                                </DropdownMenu>
                                </UncontrolledDropdown>
                                </div>
                            </Col>
                            <Col></Col>
                            <Col>
                                <div align="center">
                                <h6 className='text-black'>To</h6>
                                <UncontrolledDropdown group>
                                <DropdownToggle caret>
                                {this.state.m_3_2.to}
                                </DropdownToggle>
                                <DropdownMenu container={'body'}>
                                        {this.yearList32("to", "mockup_3_2")}
                                </DropdownMenu>
                                </UncontrolledDropdown>
                                </div>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Col>
                    <Col lg="7" className="align-self-center">
                        <Chart_m_3_2 data={this.state.m_3_2.data}/>
                    </Col>
                    <Col lg="2" className="align-self-center">
                        <div>
                            <p>The chart illustrates a shifting relationship between electricity usage and CO2 emissions, 
                                suggesting that countries are increasingly favoring greener energy sources.</p>
                        </div>
                    </Col>
                </Row>
            </container>
            </section>
        </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default Energy;
