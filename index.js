
let map, marker;

function initMap() {

    const posicion = {
        lat: 29.9792345, 
        lng: 31.1342019,

    }

    const posicion2 = {
        lat: 48.8583701, 
        lng: 2.2944813,
    }    

    const posicion3 = {
        lat:  40.6892532, 
        lng:  -74.0445481714432,
    }    

  map = new google.maps.Map(document.getElementById("map"), {
    center: posicion2,
    zoom: 3,
  });

  marker = new google.maps.Marker({
    position: posicion,
    map,
    title: "Piramide de Giza"
})

  marker2 = new google.maps.Marker({
    position: posicion2,
    map,
    title: "Torre Eiffel"
})  

  marker3 = new google.maps.Marker({
    position: posicion3,
    map,
    title: "Estatua de la Libertad"
})  

}




