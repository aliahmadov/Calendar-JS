const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas (the)",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia (Plurinational State of)",
    "Bonaire, Sint Eustatius and Saba",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory (the)",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cayman Islands (the)",
    "Central African Republic (the)",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands (the)",
    "Colombia",
    "Comoros (the)",
    "Congo (the Democratic Republic of the)",
    "Congo (the)",
    "Cook Islands (the)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Curaçao",
    "Cyprus",
    "Czechia",
    "Côte d'Ivoire",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic (the)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Falkland Islands (the) [Malvinas]",
    "Faroe Islands (the)",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories (the)",
    "Gabon",
    "Gambia (the)",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard Island and McDonald Islands",
    "Holy See (the)",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran (Islamic Republic of)",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea (the Democratic People's Republic of)",
    "Korea (the Republic of)",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic (the)",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands (the)",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia (Federated States of)",
    "Moldova (the Republic of)",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands (the)",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger (the)",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands (the)",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine, State of",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines (the)",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Republic of North Macedonia",
    "Romania",
    "Russian Federation (the)",
    "Rwanda",
    "Réunion",
    "Saint Barthélemy",
    "Saint Helena, Ascension and Tristan da Cunha",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Martin (French part)",
    "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Sint Maarten (Dutch part)",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and the South Sandwich Islands",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan (the)",
    "Suriname",
    "Svalbard and Jan Mayen",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands (the)",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates (the)",
    "United Kingdom of Great Britain and Northern Ireland (the)",
    "United States Minor Outlying Islands (the)",
    "United States of America (the)",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela (Bolivarian Republic of)",
    "Viet Nam",
    "Virgin Islands (British)",
    "Virgin Islands (U.S.)",
    "Wallis and Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe",
    "Åland Islands"
];


let year_selection = document.getElementById("year");
let month_selection = document.getElementById('month');
let calendar = document.getElementById("calendar");
let date_title = document.querySelector("#date_title");
let table = document.querySelector("#table");
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let days = document.getElementsByTagName('td');
let selectedDay = 0;
let degree = document.getElementById('degree');
let state = document.getElementById('state');
let pop_up = document.getElementById('pop-up');
let tasks = document.querySelector("#tasks");
let country_selection = document.getElementById('country');
let selectedCountry = "";
let notes = "";

function setCookie(name, value, seconds) {
    const d = new Date();
    d.setTime(d.getTime() + seconds * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}


function getCookie(key) {
    let name = key + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");

    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


function fillSelectionTools() {

    let content_year = "";

    for (let i = 0; i < 100; i++) {

        content_year += `<option value='${2023 - i}'>${2023 - i}</option>`
    }

    year_selection.innerHTML = content_year;


    let content_month = "";


    for (let i = 0; i < 12; i++) {

        content_month += `<option value='${i + 1}'>${i + 1} - ${new Date(0, i).toString().split(' ')[1]}</option>`;

    }

    let content_country = "";
    for (let i = 0; i < countryList.length; i++) {
        content_country += `<option value='${countryList[i]}'>${countryList[i]}</option>`;

    }

    country_selection.innerHTML = content_country;
    selectedCountry = country_selection.value;

    month_selection.innerHTML = content_month;

    const today = new Date();
    month_selection.value = today.getMonth() + 1;
    year_selection.value = today.getFullYear();
    selectedMonth = month_selection.value;
    selectedYear = year_selection.value;
    date_title.innerHTML = selectedYear + " " + monthNames[selectedMonth - 1];
}


function getValuesofSelection() {


    month_selection.addEventListener('change', function (event) {
        selectedMonth = month_selection.value;
        selectedYear = year_selection.value;
        date_title.innerHTML = selectedYear + " " + monthNames[selectedMonth - 1];
        fillCalendar(selectedMonth, selectedYear);
        listenToSelectedDay();
        AddDblClickToTableData()
    });

    year_selection.addEventListener('change', function (event) {
        selectedMonth = month_selection.value;
        selectedYear = year_selection.value;
        date_title.innerHTML = selectedYear + " " + monthNames[selectedMonth - 1];
        fillCalendar(selectedMonth, selectedYear);
        listenToSelectedDay();
        AddDblClickToTableData()
    });


    country_selection.addEventListener('change', function () {
        selectedCountry = country_selection.value;
        getForecast();
    });
}


function fillCalendar(month, year) {
    let content = "";


    let numofdays = new Date(year, month, 0).getDate();

    let prevMonthLastDate = new Date(year, month - 1, 0).getDate();
    let nextMonthFirstDate = new Date(year, month + 1, 1).getDate();


    let firstDate = new Date(year, month - 1, 1).getDate();//for example, Friday
    let firstDay = new Date(year, month - 1, 1).getDay();//for example, Friday

    let diff = prevMonthLastDate - firstDay + 1;

    calendar.innerHTML = "";

    for (let i = 0; i < 6; i++) {

        content += `<tr>`


        if (i == 0) {
            for (let k = 0; k < 7; k++) {

                if (k < firstDay) {
                    content += `<td title="${i}" style="color:gray;">${diff++}</td>`;
                }
                else
                    content += `<td title="${i}">${firstDate++}</td>`;

            }
            content += `<td></td>`
        }
        else {
            for (let k = 0; k < 7; k++) {

                if (firstDate <= numofdays)
                    content += `<td title="${i}">${firstDate++}</td>`;

                else {
                    content += `<td title="${i}" style="color:gray;">${nextMonthFirstDate++}</td>`;
                }
            }
        }


    }

    content += `</tr>`

    calendar.innerHTML = content;


}


function removeAnimations() {
    for (let i = 0; i < table.classList.length; i++) {
        const element = table.classList[i];

        if (element.startsWith("animate__") && !element.endsWith("__animated")) {
            table.classList.remove(element);
        }

    }
}

function restartAnimation(anime_name) {

    void table.offsetWidth; // trigger a reflow to restart the animation
    table.classList.add(anime_name);
}

table.addEventListener('animationEnd', restartAnimation);

const event = new Event('change');
function PrevClick() {

    removeAnimations();
    restartAnimation("animate__fadeInLeft");
    if (selectedMonth > 1) {
        month_selection.selectedIndex--;
        month_selection.dispatchEvent(event);
    }
    else if (selectedMonth == 1) {
        year_selection.selectedIndex++;
        month_selection.selectedIndex = 11;
        year_selection.dispatchEvent(event);
    }

}


function NextClick() {

    removeAnimations();
    restartAnimation("animate__fadeInRight")
    if (selectedMonth < 12) {
        month_selection.selectedIndex++;
        month_selection.dispatchEvent(event);
    }
    else if (selectedMonth == 12 && selectedYear < 2023) {
        year_selection.selectedIndex--;
        month_selection.selectedIndex = 0;
        year_selection.dispatchEvent(event);
    }
}

function highlightToday(day) {
    for (let i = 0; i < days.length; i++) {
        const element = days[i];
        if (element.innerHTML == day) {
            element.backgroundColor = "rgb(125,77,255)";
        }
    }
}

function removeStylesofTD() {
    for (let i = 0; i < days.length; i++) {
        let element = days[i];

        element.style.backgroundColor = "transparent";
        if (element.style.color != "gray")
            element.style.color = "black";
        else
            element.style.color = "gray";
    }
}

function GetNotes(allnotes) {
    let mynotes = [];
    for (let i = 0; i < allnotes.length; i++) {
        const splitted = allnotes[i].split('&');

        if (selectedYear == splitted[0] && selectedMonth == splitted[1] &&
            selectedDay == splitted[2]) {
            mynotes.push(allnotes[i]);
        }

    }
    return mynotes;
}

let tasktext = document.getElementById('tasktext');
function listenToSelectedDay() {
    for (let i = 0; i < days.length; i++) {
        let element = days[i];

        element.addEventListener('click', function (event) {

            removeStylesofTD();
            element.style.backgroundColor = "rgb(125, 77, 255)";
            if (element.style.color != "gray")
                element.style.color = "white";
            selectedDay = element.innerHTML;

            if (element.style.color != "gray")
                tasktext.innerHTML = `Your notes for ${selectedDay} ${monthNames[selectedMonth - 1]},${selectedYear}`
            else if (element.style.color == "gray" && element.title == '0')
                tasktext.innerHTML = `Your notes for ${selectedDay} ${monthNames[selectedMonth - 2]},${selectedYear}`
            else if (element.style.color == "gray" && element.title == '5' || element.title=='4')
                tasktext.innerHTML = `Your notes for ${selectedDay} ${monthNames[selectedMonth]},${selectedYear}`

            let allnotes = GetResultCookie().split('=');
            tasks.innerHTML = "";
            let html = "";
            let mynotes = GetNotes(allnotes);

            html += `<ul class='listview'>`;
            for (let i = 0; i < mynotes.length; i++) {

                let splitted = mynotes[i].split('&');

                html += `<li>
                <p class='roundedTime'>${splitted[3]}</p>
                <p class='basefont' style='color:white; font-size:1em;'>${splitted[4]}</p>
                </li>`
            }
            html += `<ul>`

            tasks.innerHTML = html;
            console.log(mynotes);

        });
    }
}




let degSign = degree.innerHTML;

async function getForecast() {
    const API_KEY = '991b5bba4f294098a09102730231403';
    const CITY = selectedCountry;

    let condition_icon = document.getElementById('icon');
    fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${CITY}`)
        .then(response => response.json())
        .then(data => {

            degree.style.fontSize='3.5em';
            degree.innerHTML = data.current.temp_c + " " + degSign;
            state.innerHTML = data.current.condition.text;
            condition_icon.src = "https:" + data.current.condition.icon;

        })
        .catch(function(){
            degree.style.fontSize='1em';
            degree.innerHTML=`No data found for ${CITY} `;
            condition_icon.src="images\\notfound.png";
            state.innerHTML="";
        });
}


let text_area = document.getElementById('myTextarea');
let timePicker = document.getElementById('timePicker');
function AddDblClickToTableData() {
    let y = document.getElementById('y');
    let d = document.getElementById('date');
    for (let i = 0; i < days.length; i++) {
        let element = days[i];

        element.addEventListener('dblclick', function (event) {
            pop_up.classList.add("animate__animated", "animate__fadeInLeftBig");
            y.innerHTML = selectedYear;
            d.innerHTML = selectedDay + " " + monthNames[selectedMonth - 1];
            pop_up.style.visibility = "visible";
            pop_up.style.display = "flex";


        });
    }
}


function ClosePopUp() {

    pop_up.addEventListener("animationstart", onAnimationStart);
    pop_up.addEventListener("animationend", onAnimationEnd);

    pop_up.classList.remove("animate__fadeInLeftBig");
    pop_up.classList.add("animate__bounceOutRight");

    notes = GetResultCookie();
    notes += `${selectedYear}&${selectedMonth}&${selectedDay}&${timePicker.value}&'${text_area.value}'=`;

    setCookie('notes', notes, 3600);


}

function GetResultCookie() {
    let result = getCookie('notes');
    return result;
}

window.addEventListener('beforeunload', function (event) {
    // Cancel the event as long as the user hasn't saved their work
    event.preventDefault();

    //setCookie('notes', notes, 3600);
    console.log(document.cookie);
    // Prompt the user with a confirmation dialog
    event.returnValue = '';
});

function onAnimationStart() {
    // Set the visibility property to hidden when the animation starts
    pop_up.style.visibility = "visible";
}

function onAnimationEnd() {
    // Remove the visibility property when the animation ends
    pop_up.style.visibility = "hidden";
    pop_up.classList.remove("animate__bounceOutRight");

    // Remove the event listeners
    pop_up.removeEventListener("animationstart", onAnimationStart);
    pop_up.removeEventListener("animationend", onAnimationEnd);
}






function main() {

    fillSelectionTools();
    getValuesofSelection();

    fillCalendar(selectedMonth, selectedYear);
    getValuesofSelection();
    getForecast();

    listenToSelectedDay();
    //getCountries();

    AddDblClickToTableData();
    GetResultCookie();

}


main();