const btcData = async () => {
    const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=BTC&tsym=USD&limit=119&api_key=dc60a30bf57a201dc1566cfc3c0ebfbf565518e71b1ada5137a6d2ea0161df0b');
    const json = await response.json();
    const data = json.Data.Data
    const times = data.map(obj => obj.time)
    const prices = data.map(obj => obj.high)
    return {
        times,
        prices
    }
}

const bnbData = async () => {
    const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=BNB&tsym=USD&limit=119&api_key=dc60a30bf57a201dc1566cfc3c0ebfbf565518e71b1ada5137a6d2ea0161df0b');
    const json = await response.json();
    const data = json.Data.Data;
    const times = data.map(obj => obj.time);
    const prices = data.map(obj => obj.high);
    return {
        times,
        prices
    };
}

const trxData = async () => {
    const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=TRX&tsym=USD&limit=119&api_key=dc60a30bf57a201dc1566cfc3c0ebfbf565518e71b1ada5137a6d2ea0161df0b');
    const json = await response.json();
    const data = json.Data.Data
    const times = data.map(obj => obj.time)
    const prices = data.map(obj => obj.high)
    return {
        times,
        prices
    }
}

const yfiData = async () => {
    const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=YFI&tsym=USD&limit=119&api_key=dc60a30bf57a201dc1566cfc3c0ebfbf565518e71b1ada5137a6d2ea0161df0b');
    const json = await response.json();
    const data = json.Data.Data
    const times = data.map(obj => obj.time)
    const prices = data.map(obj => obj.high)
    return {
        times,
        prices
    }
}

const ltcData = async () => {
    const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=LTC&tsym=USD&limit=119&api_key=dc60a30bf57a201dc1566cfc3c0ebfbf565518e71b1ada5137a6d2ea0161df0b');
    const json = await response.json();
    const data = json.Data.Data
    const times = data.map(obj => obj.time)
    const prices = data.map(obj => obj.high)
    return {
        times,
        prices
    }
}

const cosmosData = async () => {
    const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=ATOM&tsym=USD&limit=119&api_key=dc60a30bf57a201dc1566cfc3c0ebfbf565518e71b1ada5137a6d2ea0161df0b');
    const json = await response.json();
    const data = json.Data.Data
    const times = data.map(obj => obj.time)
    const prices = data.map(obj => obj.high)
    return {
        times,
        prices
    }
}


const ethereumData = async () => {
    const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=ETH&tsym=USD&limit=119&api_key=dc60a30bf57a201dc1566cfc3c0ebfbf565518e71b1ada5137a6d2ea0161df0b');
    const json = await response.json();
    const data = json.Data.Data
    const times = data.map(obj => obj.time)
    const prices = data.map(obj => obj.high)
    return {
        times,
        prices
    }
}

const dogeData = async () => {
    const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=DOGE&tsym=USD&limit=119&api_key=dc60a30bf57a201dc1566cfc3c0ebfbf565518e71b1ada5137a6d2ea0161df0b');
    const json = await response.json();
    const data = json.Data.Data
    const times = data.map(obj => obj.time)
    const prices = data.map(obj => obj.high)
    return {
        times,
        prices
    }
}

const xrpData = async () => {
    const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=XRP&tsym=USD&limit=119&api_key=dc60a30bf57a201dc1566cfc3c0ebfbf565518e71b1ada5137a6d2ea0161df0b');
    const json = await response.json();
    const data = json.Data.Data
    const times = data.map(obj => obj.time)
    const prices = data.map(obj => obj.high)
    return {
        times,
        prices
    }
}

/// Error handling ///
function checkStatus(response) {
    if (response.ok) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(new Error(response.statusText));
    }
}



/// Charts ///
let createBtcChart
let createCosmosChart
let createethereumChart
let createDogeChart
let createLtcChart
let createXrpChart
let yfiChart
let tronChart
let bnbChart

async function printBtcChart() {
    let { times, prices } = await btcData()

    let btcChart = document.getElementById('btcChart').getContext('2d');

    let gradient = btcChart.createLinearGradient(0, 0, 0, 400);

    gradient.addColorStop(0, 'rgba(247,147,26,.5)');
    gradient.addColorStop(.425, 'rgba(255,193,119,0)');

    Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
    Chart.defaults.global.defaultFontSize = 12;

    createBtcChart = new Chart(btcChart, {
        type: 'line',
        data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: 'rgba(247,147,26,1)',
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
        },

        options: {
            title: {
                display: false,
                text: 'Heckin Chart!',
                fontSize: 35
            },

            legend: {
                display: false
            },

            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            },

            scales: {
                xAxes: [{
                    display: false,
                    gridLines: {}
                }],
                yAxes: [{
                    display: false,
                    gridLines: {}
                }]
            },

            tooltips: {
                callbacks: {
                    //This removes the tooltip title
                    title: function () { }
                },
                //this removes legend color
                displayColors: false,
                yPadding: 10,
                xPadding: 10,
                position: 'nearest',
                caretSize: 10,
                backgroundColor: 'rgba(255,255,255,.9)',
                bodyFontSize: 15,
                bodyFontColor: '#303030'
            }
        }
    });
}

const tronData = async () => {
    const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=TRX&tsym=USD&limit=119&api_key=dc60a30bf57a201dc1566cfc3c0ebfbf565518e71b1ada5137a6d2ea0161df0b');
    const json = await response.json();
    const data = json.Data.Data
    const times = data.map(obj => obj.time)
    const prices = data.map(obj => obj.high)
    return {
        times,
        prices
    }
}

async function printTronChart() {
    let { times, prices } = await tronData()

    let tronChart = document.getElementById('tronChart').getContext('2d');

    let gradient = tronChart.createLinearGradient(0, 0, 0, 400);

    gradient.addColorStop(0, 'rgba(31, 150, 243, 0.5)');
    gradient.addColorStop(.425, 'rgba(144, 202, 249, 0)');

    Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
    Chart.defaults.global.defaultFontSize = 12;

    createTronChart = new Chart(tronChart, {
        type: 'line',
        data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: 'rgba(31, 150, 243, 1)',
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
        },

        options: {
            title: {
                display: false,
                text: 'Heckin Chart!',
                fontSize: 35
            },

            legend: {
                display: false
            },

            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            },

            scales: {
                xAxes: [{
                    display: false,
                    gridLines: {}
                }],
                yAxes: [{
                    display: false,
                    gridLines: {}
                }]
            },

            tooltips: {
                callbacks: {
                    //This removes the tooltip title
                    title: function () { }
                },
                //this removes legend color
                displayColors: false,
                yPadding: 10,
                xPadding: 10,
                position: 'nearest',
                caretSize: 10,
                backgroundColor: 'rgba(255,255,255,.9)',
                bodyFontSize: 15,
                bodyFontColor: '#303030'
            }
        }
    });
}

async function printBnbChart() {
    let { times, prices } = await bnbData();
  
    let bnbChart = document.getElementById('bnbChart').getContext('2d');
  
    let gradient = bnbChart.createLinearGradient(0, 0, 0, 400);
  
    gradient.addColorStop(0, 'rgba(230, 230, 250, .5)');
    gradient.addColorStop(.425, 'rgba(255, 240, 245, 0)');
  
    Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
    Chart.defaults.global.defaultFontSize = 12;
  
    let createBnbChart = new Chart(bnbChart, {
      type: 'line',
      data: {
        labels: times,
        datasets: [{
          label: 'BNB',
          data: prices,
          backgroundColor: gradient,
          borderColor: 'rgba(123, 104, 238, 1)',
          borderJoinStyle: 'round',
          borderCapStyle: 'round',
          borderWidth: 3,
          pointRadius: 0,
          pointHitRadius: 10,
          lineTension: .2,
        }]
      },
  
      options: {
        title: {
          display: false,
          text: 'Heckin Chart!',
          fontSize: 35
        },
  
        legend: {
          display: false
        },
  
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
  
        scales: {
          xAxes: [{
            display: false,
            gridLines: {}
          }],
          yAxes: [{
            display: false,
            gridLines: {}
          }]
        },
  
        tooltips: {
          callbacks: {
  
            title: function () { }
          },
  
          displayColors: false,
          yPadding: 10,
          xPadding: 10,
          position: 'nearest',
          caretSize: 10,
          backgroundColor: 'rgba(255, 255, 255, .9)',
          bodyFontSize: 15,
          bodyFontColor: '#303030'
        }
      }
    });
}  

async function printYfiChart() {
    let { times, prices } = await yfiData()

    let yfiChart = document.getElementById('yfiChart').getContext('2d');

    let gradient = yfiChart.createLinearGradient(0, 0, 0, 400);

    gradient.addColorStop(0, 'rgba(227, 188, 6, .5)');
    gradient.addColorStop(.425, 'rgba(255, 255, 255, 0)');

    Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
    Chart.defaults.global.defaultFontSize = 12;

    createYfiChart = new Chart(yfiChart, {
        type: 'line',
        data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: 'rgba(227, 188, 6, 1)',
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
        },

        options: {
            title: {
                display: false,
                text: 'YFI Chart',
                fontSize: 35
            },

            legend: {
                display: false
            },

            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            },

            scales: {
                xAxes: [{
                    display: false,
                    gridLines: {}
                }],
                yAxes: [{
                    display: false,
                    gridLines: {}
                }]
            },

            tooltips: {
                callbacks: {
                    //This removes the tooltip title
                    title: function () { }
                },
                //this removes legend color
                displayColors: false,
                yPadding: 10,
                xPadding: 10,
                position: 'nearest',
                caretSize: 10,
                backgroundColor: 'rgba(255,255,255,.9)',
                bodyFontSize: 15,
                bodyFontColor: '#303030'
            }
        }
    });
}


async function printXrpChart() {
    let { times, prices } = await xrpData()

    let xrpChart = document.getElementById('xrpChart').getContext('2d');

    let gradient = xrpChart.createLinearGradient(0, 0, 0, 400);

    gradient.addColorStop(0, 'rgba(0, 148, 255,.5)');
    gradient.addColorStop(.425, 'rgba(166, 216, 251,0)');

    Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
    Chart.defaults.global.defaultFontSize = 12;

    createXrpChart = new Chart(xrpChart, {
        type: 'line',
        data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: 'rgba(0, 148, 255,1)',
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
        },

        options: {
            title: {
                display: false,
                text: 'XRP Chart!',
                fontSize: 35
            },

            legend: {
                display: false
            },

            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            },

            scales: {
                xAxes: [{
                    display: false,
                    gridLines: {}
                }],
                yAxes: [{
                    display: false,
                    gridLines: {}
                }]
            },

            tooltips: {
                callbacks: {

                    title: function () { }
                },

                displayColors: false,
                yPadding: 10,
                xPadding: 10,
                position: 'nearest',
                caretSize: 10,
                backgroundColor: 'rgba(255,255,255,.9)',
                bodyFontSize: 15,
                bodyFontColor: '#303030'
            }
        }
    });
}


async function printCosmosChart() {
    let { times, prices } = await cosmosData()

    let cosmosChart = document.getElementById('cosmosChart').getContext('2d');

    let gradient = cosmosChart.createLinearGradient(0, 0, 0, 400);

    gradient.addColorStop(0, 'rgba(27,30,54,.5)');
    gradient.addColorStop(.425, 'rgba(46,49,72,0)');

    Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
    Chart.defaults.global.defaultFontSize = 12;

    createCosmosChart = new Chart(cosmosChart, {
        type: 'line',
        data: {
            labels: times,
            datasets: [{
                label: "",
                data: prices,
                backgroundColor: gradient,
                borderColor: 'rgba(46,49,72,1)',
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
        },

        options: {
            title: {
                display: false,
                text: 'Heckin Chart!',
                fontSize: 35
            },

            legend: {
                display: false
            },

            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            },

            scales: {
                xAxes: [{
                    display: false,
                    gridLines: {}
                }],
                yAxes: [{
                    display: false,
                    gridLines: {}
                }]
            },

            tooltips: {
                callbacks: {
                    //This removes the tooltip title
                    title: function () { }
                },
                //this removes legend color
                displayColors: false,
                yPadding: 10,
                xPadding: 10,
                position: 'nearest',
                caretSize: 10,
                backgroundColor: 'rgba(255,255,255,.9)',
                bodyFontSize: 15,
                bodyFontColor: '#303030'
            }
        }
    });
}


async function printEthereumChart() {
    let { times, prices } = await ethereumData()

    let ethereumChart = document.getElementById('ethereumChart').getContext('2d');

    let gradient = ethereumChart.createLinearGradient(0, 0, 0, 400);

    gradient.addColorStop(0, 'rgba(78,56,216,.5)');
    gradient.addColorStop(.425, 'rgba(118,106,192,0)');

    Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
    Chart.defaults.global.defaultFontSize = 12;

    createEthereumChart = new Chart(ethereumChart, {
        type: 'line',
        data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: 'rgba(118,106,192,1)',
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
        },

        options: {
            title: {
                display: false,
                text: 'Heckin Chart!',
                fontSize: 35
            },

            legend: {
                display: false
            },

            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            },

            scales: {
                xAxes: [{
                    display: false,
                    gridLines: {}
                }],
                yAxes: [{
                    display: false,
                    gridLines: {}
                }]
            },

            tooltips: {
                callbacks: {
                    //This removes the tooltip title
                    title: function () { }
                },
                //this removes legend color
                displayColors: false,
                yPadding: 10,
                xPadding: 10,
                position: 'nearest',
                caretSize: 10,
                backgroundColor: 'rgba(255,255,255,.9)',
                bodyFontSize: 15,
                bodyFontColor: '#303030'
            }
        }
    });
}

async function printDogeChart() {
    let { times, prices } = await dogeData()

    let dogeChart = document.getElementById('dogeChart').getContext('2d');

    let gradient = dogeChart.createLinearGradient(0, 0, 0, 400);

    gradient.addColorStop(0, 'rgba(78,56,216,.5)');
    gradient.addColorStop(.425, 'rgba(118,106,192,0)');

    Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
    Chart.defaults.global.defaultFontSize = 12;

    createDogeChart = new Chart(dogeChart, {
        type: 'line',
        data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: 'rgba(118,106,192,1)',
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
        },

        options: {
            title: {
                display: false,
                text: 'Heckin Chart!',
                fontSize: 35
            },

            legend: {
                display: false
            },

            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            },

            scales: {
                xAxes: [{
                    display: false,
                    gridLines: {}
                }],
                yAxes: [{
                    display: false,
                    gridLines: {}
                }]
            },

            tooltips: {
                callbacks: {
                    //This removes the tooltip title
                    title: function () { }
                },
                //this removes legend color
                displayColors: false,
                yPadding: 10,
                xPadding: 10,
                position: 'nearest',
                caretSize: 10,
                backgroundColor: 'rgba(255,255,255,.9)',
                bodyFontSize: 15,
                bodyFontColor: '#303030'
            }
        }
    });
}

async function printLtcChart() {
    let { times, prices } = await ltcData()

    let ltcChart = document.getElementById('ltcChart').getContext('2d');

    let gradient = ltcChart.createLinearGradient(0, 0, 0, 100);

    gradient.addColorStop(0, 'rgba(247,255,255)');
    gradient.addColorStop(.425, 'rgba(255,193,119,0)');

    Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
    Chart.defaults.global.defaultFontSize = 12;

    createLtcChart = new Chart(ltcChart, {
        type: 'line',
        data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: 'rgba(247,255,255)',
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
        },

        options: {
            title: {
                display: false,
                text: 'Heckin Chart!',
                fontSize: 35
            },

            legend: {
                display: false
            },

            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            },

            scales: {
                xAxes: [{
                    display: false,
                    gridLines: {}
                }],
                yAxes: [{
                    display: false,
                    gridLines: {}
                }]
            },

            tooltips: {
                callbacks: {
                    //This removes the tooltip title
                    title: function () { }
                },
                //this removes legend color
                displayColors: false,
                yPadding: 10,
                xPadding: 10,
                position: 'nearest',
                caretSize: 10,
                backgroundColor: 'rgba(255,255,255,.9)',
                bodyFontSize: 15,
                bodyFontColor: '#303030'
            }
        }
    });
}

/// Update current price ///
async function updateEthereumPrice() {
    let { times, prices } = await ethereumData()
    let currentPrice = prices[prices.length - 1].toFixed(2);

    document.getElementById("ethPrice").innerHTML = "$" + currentPrice;
}

async function updateYFIPrice() {
    let { times, prices } = await yfiData()
    let currentPrice = prices[prices.length - 1].toFixed(2);

    document.getElementById("yfiPrice").innerHTML = "$" + currentPrice;
}

async function updateCosmosPrice() {
    let { times, prices } = await cosmosData()
    let currentPrice = prices[prices.length - 1].toFixed(2);

    document.getElementById("atomPrice").innerHTML = "$" + currentPrice;
}


async function updateBitcoinPrice() {
    let { times, prices } = await btcData()
    let currentPrice = prices[prices.length - 1].toFixed(2);

    document.getElementById("btcPrice").innerHTML = "$" + currentPrice;
}


async function updateDogePrice() {
    let { times, prices } = await dogeData()
    let currentPrice = prices[prices.length - 1].toFixed(2);

    document.getElementById("dogePrice").innerHTML = "$" + currentPrice;
}

async function updateBNBPrice() {
    let { times, prices } = await bnbData()
    let currentPrice = prices[prices.length - 1].toFixed(2);

    document.getElementById("bnbPrice").innerHTML = "$" + currentPrice;
}

async function updateLtcPrice() {
    let { times, prices } = await ltcData()
    let currentPrice = prices[prices.length - 1].toFixed(2);

    document.getElementById("LtcPrice").innerHTML = "$" + currentPrice;
}

async function updateXRpPrice() {
    let { times, prices } = await xrpData()
    let currentPrice = prices[prices.length - 1].toFixed(2);

    document.getElementById("xrpPrice").innerHTML = "$" + currentPrice;
}

async function updateTRONPrice() {
    let { times, prices } = await tronData()
    let currentPrice = prices[prices.length - 1].toFixed(2);

    document.getElementById("tronPrice").innerHTML = "$" + currentPrice;
}

updateXRpPrice()
updateLtcPrice()
updateDogePrice()
updateEthereumPrice()
updateCosmosPrice()
updateBitcoinPrice()
updateTRONPrice()
updateBNBPrice()

printBnbChart()
printYfiChart()
printLtcChart()
printDogeChart()
printBtcChart()
printCosmosChart()
printEthereumChart()
printXrpChart()
printTronChart()