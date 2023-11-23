window.onload = function () {
    var name = prompt("Wat is je naam reiziger?", "Naam");

    if (name) {
        document.getElementById("welcomeText").innerHTML = name + "! " + "Interessant." + '<br>' + "Je hebt geluk dat het 5 mei is in 1840. Het is namelijk de eerste dag dat de Ringvaart wordt gegraven.";
    } else {
        var name = prompt("Wat is je naam reiziger?", "Naam");
    }
      
}