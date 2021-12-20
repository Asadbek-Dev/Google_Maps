mapboxgl.accessToken = 'pk.eyJ1IjoiYXNhZGJlay1kZXYiLCJhIjoiY2t3dXlmcHVmMXV3MzJ2cG1qNmhkd3NiaiJ9.t85Qc70M8dLztbUNls1QaQ';

    navigator.geolocation.getCurrentPosition(successLocation,errorLocation,{
        enableHighAccuracy:true
    })
    function successLocation(position){
        setupMap(position.coords.longitude,position.coords.latitude)
        
    }
    function errorLocation(){
        setupMap([-2.24,53.48])
    }
    
    function setupMap(center){
        var map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v11',
                center:center,
                zoom:15
        })
    }

