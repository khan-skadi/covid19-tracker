import React, { Component } from 'react';

// import Cards from './components/Cards/Cards.jsx';
// import Chart from './components/Chart/Chart.jsx';
// import CountryPicker from './components/CountryPicker/CountryPicker.jsx';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api'; // When you have index files you can just point to its folder.
import coronaImage from './images/image.png';

class App extends Component {
  state = {
    data: {},
    country: ''
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async country => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img src={coronaImage} className={styles.image} alt="logo" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
