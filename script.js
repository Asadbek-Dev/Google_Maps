mapboxgl.accessToken = 'pk.eyJ1IjoiYXNhZGJlay1kZXYiLCJhIjoiY2t3dXlmcHVmMXV3MzJ2cG1qNmhkd3NiaiJ9.t85Qc70M8dLztbUNls1QaQ';

    navigator.geolocation.getCurrentPosition(successLocation,errorLocation,{
        enableHighAccuracy:true
    })
    function successLocation(position){
        console.log(position);
    }
    function errorLocation(position){
        console.log(position);
    }

var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11'
    });