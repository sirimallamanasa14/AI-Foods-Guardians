// -----------------------------
// PAGE NAVIGATION
// -----------------------------

function showPage(pageName) {

    let pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.style.display = "none";
    });

    document.getElementById(pageName).style.display = "block";
}


// -----------------------------
// PACKAGING SELECTOR
// -----------------------------

function packaging(type) {

    let result = document.getElementById("packageResult");

    if (type === "pizza") {
        result.innerText =
        "Recommended: Ventilated food box 🍕";
    }

    else if (type === "soup") {
        result.innerText =
        "Recommended: Leak-proof insulated container 🍲";
    }

    else if (type === "dessert") {
        result.innerText =
        "Recommended: Cool insulated box 🍰";
    }

    else if (type === "burger") {
        result.innerText =
        "Recommended: Ventilated food box 🍔";
    }
}


// -----------------------------
// SENSOR VALUES
// -----------------------------

let currentTemperature = 28;
let currentHumidity = 58;


// -----------------------------
// QUALITY CHECK
// -----------------------------

function checkQuality() {

    let quality = document.getElementById("quality");
    let message = document.getElementById("qualityMessage");

    let risk = document.getElementById("risk");
    let riskStatus = document.getElementById("riskStatus");

    let passportRisk =
    document.getElementById("passportRisk");


    if (currentTemperature > 40) {

        quality.innerText = "🔴 HIGH RISK";
        message.innerText =
        "Temperature is too high. Food quality may be affected.";

        risk.innerText = "HIGH RISK";

        riskStatus.innerText =
        "🔴 FOOD QUALITY ATTENTION REQUIRED";

        passportRisk.innerText = "🔴 HIGH";

    }

    else if (currentTemperature > 30 ||
             currentHumidity > 65) {

        quality.innerText = "🟡 MODERATE RISK";
        message.innerText =
        "Environmental conditions need monitoring.";

        risk.innerText = "MODERATE RISK";

        riskStatus.innerText =
        "🟡 MONITOR FOOD CONDITION";

        passportRisk.innerText = "🟡 MODERATE";

    }

    else {

        quality.innerText = "🟢 LOW RISK";
        message.innerText =
        "Current environmental condition is normal.";

        risk.innerText = "LOW RISK";

        riskStatus.innerText =
        "🟢 FOOD CONDITION GOOD";

        passportRisk.innerText = "🟢 LOW";
    }
}


// -----------------------------
// UPDATE WEBSITE SENSOR DATA
// -----------------------------

function updateSensorData(temp, hum) {

    currentTemperature = temp;
    currentHumidity = hum;

    document.getElementById("temperature").innerText =
        temp + " °C";

    document.getElementById("humidity").innerText =
        hum + " %";

    document.getElementById("passportTemp").innerText =
        temp + " °C";

    document.getElementById("passportHumidity").innerText =
        hum + " %";

    checkQuality();
}


// -----------------------------
// DEMO SENSOR DATA
// -----------------------------

updateSensorData(28, 58);


// -----------------------------
// TAMPER DEMO
// -----------------------------

let tamperCount = 0;
let shockCount = 0;

function tamperAlert() {

    tamperCount++;

    document.getElementById("tamper").innerText =
        "OPEN";

    document.getElementById("alert").innerText =
        "🔴 TAMPER DETECTED!";

    document.getElementById("passportTamper").innerText =
        tamperCount;

    document.getElementById("quality").innerText =
        "🔴 HIGH RISK";

    document.getElementById("risk").innerText =
        "HIGH RISK";
}


// -----------------------------
// SHOCK DEMO
// -----------------------------

function shockAlert() {

    shockCount++;

    document.getElementById("motion").innerText =
        "ABNORMAL";

    document.getElementById("alert").innerText =
        "🔴 SHOCK DETECTED!";

    document.getElementById("passportShock").innerText =
        shockCount;
}


// -----------------------------
// RESET
// -----------------------------

function resetSystem() {

    tamperCount = 0;
    shockCount = 0;

    document.getElementById("tamper").innerText =
        "SAFE";

    document.getElementById("motion").innerText =
        "NORMAL";

    document.getElementById("passportTamper").innerText =
        "0";

    document.getElementById("passportShock").innerText =
        "0";

    document.getElementById("alert").innerText =
        "System Normal 🟢";

    updateSensorData(28, 58);
}