function buildingBase()
{
   return "Base created";
}

function buildWalls(base){
    return base + " with walls build";
}

function addRoof(walls){
    return walls + " and a roof on top of it. ";
}

function housebuilded(){
    let base = buildingBase();
    let walls = buildWalls(base);
    let house = addRoof(walls);
    return house;
}

console.log(housebuilded());