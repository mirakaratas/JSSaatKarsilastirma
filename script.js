function showTime() {
    var zaman = new Date();
    
    var gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    var gun = gunler[zaman.getDay()];

    var saat = zaman.toLocaleTimeString();
    var tarihvesaat = saat + " - " + gun;
    
    document.getElementById('myClock').textContent = tarihvesaat;
    
    setTimeout(showTime, 1000);
}

function askName() {
    var name = prompt('Adınızı girin:');
    if (name) {
        document.getElementById('text1').innerHTML = `Merhaba, <strong><span id="myName">${name}</span></strong>! Hoş geldin!`;
        document.getElementById('welcome').style.display = 'block';
        showTime();
    } else {
        alert('Lütfen adınızı girin.');
        askName(); 
    }
}

window.onload = function() {
    askName();
};


    

