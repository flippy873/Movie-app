function haeLeffa(){
    haeData();
  }
  
  async function haeData() {
    
    var leffanNimi = document.getElementById("leffaid").value;
    var leffanVuosi = document.getElementById("vuosiid").value;
  
    var hakurimpsu = "https://www.omdbapi.com/?t=" + leffanNimi + "&y=" + leffanVuosi +  "&apikey=93cdfc37"
  
    var vastaus = await fetch(hakurimpsu);
    var data = await vastaus.json();
  
    console.log(hakurimpsu);
    console.log(data);
  
  
    
    document.getElementById("otsikko").innerHTML = data.Title;
    document.getElementById("vuosi").innerHTML = data.Year
    document.getElementById("rating").innerHTML = data.imdbRating;
  
    var leffanJuliste = document.getElementById("juliste");
    leffanJuliste.src= data.Poster;
  
    
  
    
  }