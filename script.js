const toggleBtn = document.getElementById("toggle_btn")
const nav = document.querySelector('.nav');
const headerLink = document.querySelector('.header_link');
const brandLogo = document.getElementById("brandLogo")
const shareLogo = document.getElementById("shareLogo");
const tableBody = document.querySelector("#companyTable tbody");


// const hamburgerTop = document.querySelector('.hamburger-top')
// const hamburgerMiddle = document.querySelector('.hamburger-middle')
// const hamburgerBottom = document.querySelector('.hamburger-bottom')






const btn = document.getElementById('menu-btn');
const navEl = document.getElementById('menu');

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    headerLink.classList.toggle('toggle_on')
    // navEl.classList.toggle('flex')
    // navEl.classList.toggle('hidden')
    // if (headerLink.classList.contains('toggle_on')) {
    //     toggleBtn.src = '/assets/images/close_black.png';
    // } else {
    //     // toggleBtn.src = '/assets/images/hamburger_menu.png';
    //     if(nav.classList.contains('active')){
    //         toggleBtn.src = '/assets/svg/hamburger.svg'
    //     } else {
    //         toggleBtn.src = '/assets/images/hamburger_menu.png';
    //     }
    // }
})

// toggleBtn.addEventListener("click", () => {
//     headerLink.classList.toggle('toggle_on')

//     if (headerLink.classList.contains('toggle_on')) {
//         toggleBtn.src = '/assets/images/close_black.png';
//     } else {
//         // toggleBtn.src = '/assets/images/hamburger_menu.png';
//         if(nav.classList.contains('active')){
//             toggleBtn.src = '/assets/svg/hamburger.svg'
//         } else {
//             toggleBtn.src = '/assets/images/hamburger_menu.png';
//         }
//     }
// })

window.addEventListener('scroll', fixNav);

function fixNav() {
    if (window.scrollY > nav.offsetHeight - 70) {
        nav.classList.add('active')
        brandLogo.src = '/assets/images/brand_logo_black.png'
        if (!headerLink.classList.contains('toggle_on')) {
            shareLogo.src = '/assets/images/share_black.png'
            // toggleBtn.src = '/assets/svg/hamburger.svg'
        }
    } else {
        nav.classList.remove('active')
        brandLogo.src = '/assets/images/brand_logo.png'
        shareLogo.src = '/assets/images/share.png'
        // if (!headerLink.classList.contains('toggle_on')) {
        //     toggleBtn.src = '/assets/images/hamburger_menu.png';
        // }
    }
}

const companies = [
    {
        Company: "Adyen",
        Ticker: "AFRM",
        Vertical: "Payments",
        Price: "$17.15",
        MarketCap: "$50.5B",
        RevenueGrowth: "49.0%",
        GrossMargin: "15.8%",
        EVRevenue: "6.3",
        YTDPerformance: "24.3%"
    },
    {
        Company: "Affirm",
        Ticker: "AFRM",
        Vertical: "Lending",
        Price: "$16.12",
        MarketCap: "$4.7B",
        RevenueGrowth: "32.0%",
        GrossMargin: "48.7%",
        EVRevenue: "4.9",
        YTDPerformance: "77.1%"
    },
    {
        Company: "Alkami Technology",
        Ticker: "ALKT",
        Vertical: "B2B SaaS",
        Price: "$16.27",
        MarketCap: "$1.5B",
        RevenueGrowth: "34.0%",
        GrossMargin: "53.0%",
        EVRevenue: "7.0",
        YTDPerformance: "10.0%"
    },
    {
        Company: "AvidXchange",
        Ticker: "AVDX",
        Vertical: "Payments",
        Price: "$10.21",
        MarketCap: "$2.0B",
        RevenueGrowth: "27.0%",
        GrossMargin: "61.5%",
        EVRevenue: "6.0",
        YTDPerformance: "10.5%"
    },
    {
        Company: "Bakkt Holdings",
        Ticker: "BKKT",
        Vertical: "Wealth",
        Price: "$1.32",
        MarketCap: "$0.1B",
        RevenueGrowth: "38%",
        GrossMargin: "--",
        EVRevenue: "0.4",
        YTDPerformance: "13.8%"
    },
    {
        Company: "Virtu Financial Inc",
        Ticker: "VIRT",
        Vertical: "Wealth",
        Price: "$17.0",
        MarketCap: "$3.1B",
        RevenueGrowth: "-22.0%",
        GrossMargin: "38.2%",
        EVRevenue: "2.6",
        YTDPerformance: "-17.8%"
    },
    {
        Company: "Square",
        Ticker: "SQ",
        Vertical: "Payments",
        Price: "$215.65",
        MarketCap: "$98.2B",
        RevenueGrowth: "44.0%",
        GrossMargin: "39.4%",
        EVRevenue: "15.1",
        YTDPerformance: "45.2%"
    },
    {
        Company: "PayPal",
        Ticker: "PYPL",
        Vertical: "Payments",
        Price: "$293.65",
        MarketCap: "$343.6B",
        RevenueGrowth: "22.0%",
        GrossMargin: "52.3%",
        EVRevenue: "16.9",
        YTDPerformance: "39.8%"
    },
    {
        Company: "Shopify",
        Ticker: "SHOP",
        Vertical: "E-commerce",
        Price: "$1450.0",
        MarketCap: "$180.9B",
        RevenueGrowth: "86.0%",
        GrossMargin: "52.2%",
        EVRevenue: "34.7",
        YTDPerformance: "58.6%"
    },
    {
        Company: "Zillow",
        Ticker: "ZG",
        Vertical: "Real Estate",
        Price: "$104.0",
        MarketCap: "$26.1B",
        RevenueGrowth: "24.0%",
        GrossMargin: "89.2%",
        EVRevenue: "12.0",
        YTDPerformance: "35.1%"
    },
    {
        Company: "Redfin",
        Ticker: "RDFN",
        Vertical: "Real Estate",
        Price: "$64.0",
        MarketCap: "$6.5B",
        RevenueGrowth: "34.0%",
        GrossMargin: "28.5%",
        EVRevenue: "6.4",
        YTDPerformance: "21.3%"
    },
    {
        Company: "Intuit",
        Ticker: "INTU",
        Vertical: "Software",
        Price: "$540.0",
        MarketCap: "$148.5B",
        RevenueGrowth: "13.0%",
        GrossMargin: "83.7%",
        EVRevenue: "12.1",
        YTDPerformance: "23.9%"
    },
    {
        Company: "Coinbase",
        Ticker: "COIN",
        Vertical: "Crypto",
        Price: "$342.0",
        MarketCap: "$86.0B",
        RevenueGrowth: "139.0%",
        GrossMargin: "89.7%",
        EVRevenue: "19.7",
        YTDPerformance: "76.1%"
    },
    {
        Company: "Robinhood",
        Ticker: "HOOD",
        Vertical: "Fintech",
        Price: "$35.0",
        MarketCap: "$29.0B",
        RevenueGrowth: "67.0%",
        GrossMargin: "66.0%",
        EVRevenue: "10.2",
        YTDPerformance: "45.4%"
    },
    {
        Company: "SoFi",
        Ticker: "SOFI",
        Vertical: "Fintech",
        Price: "$20.0",
        MarketCap: "$15.0B",
        RevenueGrowth: "60.0%",
        GrossMargin: "55.5%",
        EVRevenue: "8.1",
        YTDPerformance: "28.2%"
    },
    {
        Company: "Snowflake",
        Ticker: "SNOW",
        Vertical: "Software",
        Price: "$240.0",
        MarketCap: "$73.8B",
        RevenueGrowth: "110.0%",
        GrossMargin: "56.8%",
        EVRevenue: "33.5",
        YTDPerformance: "52.9%"
    },
    {
        Company: "Palantir",
        Ticker: "PLTR",
        Vertical: "Software",
        Price: "$25.0",
        MarketCap: "$50.1B",
        RevenueGrowth: "49.0%",
        GrossMargin: "78.9%",
        EVRevenue: "22.5",
        YTDPerformance: "31.4%"
    },
    {
        Company: "Twilio",
        Ticker: "TWLO",
        Vertical: "Software",
        Price: "$370.0",
        MarketCap: "$64.0B",
        RevenueGrowth: "62.0%",
        GrossMargin: "55.2%",
        EVRevenue: "23.9",
        YTDPerformance: "46.7%"
    },
    {
        Company: "Roku",
        Ticker: "ROKU",
        Vertical: "Streaming",
        Price: "$460.0",
        MarketCap: "$58.9B",
        RevenueGrowth: "81.0%",
        GrossMargin: "50.7%",
        EVRevenue: "14.8",
        YTDPerformance: "59.2%"
    },
    {
        Company: "Zoom",
        Ticker: "ZM",
        Vertical: "Communication",
        Price: "$375.0",
        MarketCap: "$110.1B",
        RevenueGrowth: "355.0%",
        GrossMargin: "68.2%",
        EVRevenue: "35.6",
        YTDPerformance: "34.8%"
    },
    {
        Company: "Pinterest",
        Ticker: "PINS",
        Vertical: "Social Media",
        Price: "$72.0",
        MarketCap: "$47.1B",
        RevenueGrowth: "48.0%",
        GrossMargin: "73.2%",
        EVRevenue: "16.5",
        YTDPerformance: "41.7%"
    },
    {
        Company: "Snap",
        Ticker: "SNAP",
        Vertical: "Social Media",
        Price: "$75.0",
        MarketCap: "$117.3B",
        RevenueGrowth: "66.0%",
        GrossMargin: "58.1%",
        EVRevenue: "30.2",
        YTDPerformance: "49.0%"
    },
    {
        Company: "Twitter",
        Ticker: "TWTR",
        Vertical: "Social Media",
        Price: "$70.0",
        MarketCap: "$55.7B",
        RevenueGrowth: "32.0%",
        GrossMargin: "63.8%",
        EVRevenue: "15.9",
        YTDPerformance: "23.5%"
    },
    {
        Company: "Netflix",
        Ticker: "NFLX",
        Vertical: "Streaming",
        Price: "$510.0",
        MarketCap: "$226.1B",
        RevenueGrowth: "24.0%",
        GrossMargin: "41.7%",
        EVRevenue: "10.5",
        YTDPerformance: "25.6%"
    },
    {
        Company: "Spotify",
        Ticker: "SPOT",
        Vertical: "Streaming",
        Price: "$270.0",
        MarketCap: "$51.3B",
        RevenueGrowth: "27.0%",
        GrossMargin: "26.5%",
        EVRevenue: "9.3",
        YTDPerformance: "35.1%"
    },
    {
        Company: "Uber",
        Ticker: "UBER",
        Vertical: "Ridesharing",
        Price: "$45.0",
        MarketCap: "$82.1B",
        RevenueGrowth: "43.0%",
        GrossMargin: "34.5%",
        EVRevenue: "7.5",
        YTDPerformance: "22.9%"
    },
    {
        Company: "Lyft",
        Ticker: "LYFT",
        Vertical: "Ridesharing",
        Price: "$55.0",
        MarketCap: "$18.5B",
        RevenueGrowth: "50.0%",
        GrossMargin: "43.8%",
        EVRevenue: "6.9",
        YTDPerformance: "28.3%"
    },
    {
        Company: "DoorDash",
        Ticker: "DASH",
        Vertical: "Food Delivery",
        Price: "$190.0",
        MarketCap: "$60.9B",
        RevenueGrowth: "120.0%",
        GrossMargin: "37.0%",
        EVRevenue: "14.4",
        YTDPerformance: "63.8%"
    },
    {
        Company: "Airbnb",
        Ticker: "ABNB",
        Vertical: "Travel",
        Price: "$145.0",
        MarketCap: "$92.8B",
        RevenueGrowth: "77.0%",
        GrossMargin: "40.2%",
        EVRevenue: "12.1",
        YTDPerformance: "45.9%"
    }
];


function generateTable(data) {
    tableBody.innerHTML = "";

    data.forEach(company => {
        const row = document.createElement("tr");

        for (const key in company) {
            const cell = document.createElement("td");
            cell.textContent = company[key];
            row.appendChild(cell);
        }

        tableBody.appendChild(row);
    });
}

function filterTable() {
    const searchInput = document.querySelector("#searchInput").value.toLowerCase();
    const filteredData = companies.filter(company => 
        company.Company.toLowerCase().includes(searchInput)
    );
    generateTable(filteredData);
}

document.addEventListener("DOMContentLoaded", () => {
    generateTable(companies); 
    document.querySelector("#searchInput").addEventListener("input", filterTable);
});


// download table csv
document.getElementById('downloadBtn').addEventListener('click', function() {
    downloadCSV();
});

function downloadCSV() {
    var csv = [];
    var rows = document.querySelectorAll("table tr");

    for (var i = 0; i < rows.length; i++) {
        var row = [], cols = rows[i].querySelectorAll("td, th");

        for (var j = 0; j < cols.length; j++) 
            row.push(cols[j].innerText);

        csv.push(row.join(","));        
    }

    downloadFile(csv.join("\n"), 'All_companies_data.csv');
}

function downloadFile(data, filename) {
    var file = new Blob([data], { type: 'text/csv' });
    if (window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(file, filename);
    } else {
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}

//
let index = 1;

const on = (listener, query, fn) => {
	document.querySelectorAll(query).forEach(item => {
		item.addEventListener(listener, el => {
			fn(el);
		})
	})
}

on('click', '.selectBtn', item => {
	const next = item.target.nextElementSibling;
	next.classList.toggle('toggle');
	next.style.zIndex = index++;
});
on('click', '.option', item => {
	item.target.parentElement.classList.remove('toggle');

	const parent = item.target.closest('.select').children[0];
	parent.setAttribute('data-type', item.target.getAttribute('data-type'));
	parent.innerText = item.target.innerText;
})

//tab switching
document.addEventListener('DOMContentLoaded', function () {
    var tabs = document.querySelectorAll('.tab');

    tabs.forEach(function(tab) {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            tabs.forEach(function(tab) {
                tab.classList.remove('active');
            });

            // Add active class to the clicked tab
            this.classList.add('active');

            // Update icons to reflect active state
            tabs.forEach(function(tab) {
                var icon = tab.querySelector('.icon');
                if (tab.classList.contains('active')) {
                    icon.textContent = '-';
                } else {
                    icon.textContent = '+';
                }
            });
        });
    });
});
