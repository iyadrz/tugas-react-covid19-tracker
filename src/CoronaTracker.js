import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/corona.css';
import CountUp from 'react-countup';
import CountryPicker from './CountryPicker';
import { Helmet } from 'react-helmet';

export default class CoronaTracker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            positifGlobal: null,
            meninggalGlobal: null,
            sembuhGlobal: null,
            positif: null,
            meninggal: null,
            sembuh: null,
            lastupdate: null,
            negara: null

        }
    }
    handleCountryChange = (negara) => {
        axios.get("https://covid19.mathdro.id/api/countries/" + negara)
            .then(response => {
                this.setState({
                    positif: response.data.confirmed.value,
                    meninggal: response.data.deaths.value,
                    sembuh: response.data.recovered.value,
                })
            })
    }
    componentDidMount() {
        this.getData();
    }
    getData = () => {
        axios.get('https://covid19.mathdro.id/api')
            .then(response => {
                this.setState({
                    positifGlobal: response.data.confirmed.value,
                    meninggalGlobal: response.data.deaths.value,
                    sembuhGlobal: response.data.recovered.value,
                    lastupdateGlobal: response.data.lastUpdate
                })
            })
            .catch(error => {
                console.log(error.response);

            })
    }
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>Tugas React Pantau COVID-19</title>
                </Helmet>
                <div className="jumbotron jumbotron-fluid text-white">
                    <div className="container text-center">
                        <p><a className="btnHome" href="https://iyadrz.github.io/index.html#tugas">Kembali ke Homepage</a></p>
                        <h1 className="display-4 text-danger"><strong>KAWAL COVID-19</strong></h1>
                        <p className="lead">
                            <h2>PANTAU PENYEBARAN VIRUS COVID-19<br />SECARA REAL-TIME<br /></h2>
                            <h3>Jaga Diri dan Tetap Patuhi Protokol Kesehatan</h3>
                        </p>
                    </div>
                </div>


                <div className="corona-body">
                    <div className="container">
                        <div className="col-md-12 mt-3">
                            <h1>DUNIA</h1>
                        </div>

                        <div className="row">
                            <div class="col pt-2">
                                <div class="box text-white text-center">
                                    <div class="row">
                                        <div class="col-12">
                                            <h4 style={{ color: "rgb(0, 153, 255)" }}>Positif</h4>
                                            <h2 id="data-kasus" style={{ color: "rgb(0, 153, 255)" }}>
                                                <CountUp
                                                    start={0}
                                                    end={this.state.positifGlobal}
                                                    duration={1}
                                                    separator="." />
                                            </h2>
                                            <h4 style={{ color: "rgba(0, 153, 255, 0.795)" }}>orang</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col pt-2">
                                <div class="box text-white text-center">
                                    <div class="row">
                                        <div class="col-12">
                                            <h4 style={{ color: "rgb(255, 0, 0)" }}>Meninggal</h4>
                                            <h2 id="data-kasus" style={{ color: "rgb(255, 0, 0)" }}>
                                                <CountUp
                                                    start={0}
                                                    end={this.state.meninggalGlobal}
                                                    duration={1}
                                                    separator="." />
                                            </h2>
                                            <h4 style={{ color: "rgb(255, 0, 0)" }}>orang</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col pt-2">
                                <div class="box text-white text-center">
                                    <div class="row">
                                        <div class="col-12">
                                            <h4 style={{ color: "rgba(0, 255, 0, 0.795)" }}>Sembuh</h4>
                                            <h2 id="data-kasus" style={{ color: "rgba(0, 255, 0, 0.795)" }}>
                                                <CountUp
                                                    start={0}
                                                    end={this.state.sembuhGlobal}
                                                    duration={1}
                                                    separator="." />
                                            </h2>
                                            <h4 style={{ color: "rgba(0, 255, 0, 0.795)" }}>orang</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 mt-5">
                            <h1>NEGARA</h1>
                        </div>

                        <center>
                            <div className="combo col-md-12">
                                <CountryPicker handleCountryChange={this.handleCountryChange} />
                            </div>
                        </center>

                        <div className="row">
                            <div class="col pt-2">
                                <div class="box text-white text-center">
                                    <div class="row">
                                        <div class="col-12">
                                            <h4 style={{ color: "rgb(0, 153, 255)" }}>Positif</h4>
                                            <h2 id="data-kasus" style={{ color: "rgb(0, 153, 255)" }}>
                                                <CountUp
                                                    start={0}
                                                    end={this.state.positif}
                                                    duration={1}
                                                    separator="." />
                                            </h2>
                                            <h4 style={{ color: "rgba(0, 153, 255, 0.795)" }}>orang</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col pt-2">
                                <div class="box text-white text-center">
                                    <div class="row">
                                        <div class="col-12">
                                            <h4 style={{ color: "rgb(255, 0, 0)" }}>Meninggal</h4>
                                            <h2 id="data-kasus" style={{ color: "rgb(255, 0, 0)" }}>
                                                <CountUp
                                                    start={0}
                                                    end={this.state.meninggal}
                                                    duration={1}
                                                    separator="." />
                                            </h2>
                                            <h4 style={{ color: "rgb(255, 0, 0)" }}>orang</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col pt-2">
                                <div class="box text-white text-center">
                                    <div class="row">
                                        <div class="col-12">
                                            <h4 style={{ color: "rgba(0, 255, 0, 0.795)" }}>Sembuh</h4>
                                            <h2 id="data-kasus" style={{ color: "rgba(0, 255, 0, 0.795)" }}>
                                                <CountUp
                                                    start={0}
                                                    end={this.state.sembuh}
                                                    duration={1}
                                                    separator="." />
                                            </h2>
                                            <h4 style={{ color: "rgba(0, 255, 0, 0.795)" }}>orang</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer class="text-center text-white mt-3 bt-2 pb-2">
                        Last Updated <h6 id="lastUpdated">{new Date(this.state.lastupdateGlobal).toLocaleString("id-ID", { timeZone: "Asia/Makassar" })} GMT+0800 (Central Indonesia Time)</h6>
                    </footer>
                </div>



            </React.Fragment>
        )
    }
}
