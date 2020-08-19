// Feet to Mile Converter ##############################
const feetToMile = feet => {
    if (feet < 0) {
        console.log("Feet count/number can't be a negative number");
    }
    else if (typeof feet === 'number') {
        document.getElementById("output_mile").innerHTML = feet / 5280;

        return feet / 5280; // 1 mile = 5280 feet
    }
    else {
        console.log("Feet should be a valid number");
    }
}
// console.log(feetToMile(1.6546));


// Wood Calculator ##############################
const woodCalculator = (chair = 0, table = 0, bed = 0) => {
    // 1 chair needs 1cft wood, 1 table 3cft, 1 bed 5cft

    if (chair < 0) {
        console.log("Chair count/number can't be a negative number");
    }
    else if (table < 0) {
        console.log("Table count/number can't be a negative number");
    }
    else if (bed < 0) {
        console.log("Bed count/number can't be a negative number");
    }
    else if (typeof chair === 'number' && typeof table === 'number' && typeof bed === 'number') {
        const wood = (chair * 1) + (table * 3) + (bed * 5);

        document.getElementById("output_wood").innerHTML = wood;

        return wood;
    }
    else {
        console.log("Chair or Table or Bed count/number should be a valid number");
    }
}
// console.log(woodCalculator(1, 3));


// Brick Calculator ##############################
const brickCalculator = floor => {
    // 1st 10 every floor height 15f, 11 - 20 every floor height 12f, 21 <= every floor height 10f
    // every 1 feet need 1000 bricks

    if (floor < 0) {
        console.log("Floor count/number can't be a negative number");
    }
    else if (typeof floor === 'number') {
        if (floor >= 21) {
            const afterTwentyFloor = floor - 20;
            const afterTwentyFloorHeight = afterTwentyFloor * 10;

            const secondTenFloorHeight = 10 * 12;

            const firstTenFloorHeight = 10 * 15;

            const totalHeight = afterTwentyFloorHeight + secondTenFloorHeight + firstTenFloorHeight;

            document.getElementById("output_brick").innerHTML = totalHeight * 1000;
            return totalHeight * 1000;
        }
        else if (floor >= 11 && floor <= 20) {
            const afterTenFloor = floor - 10;
            const afterTenFloorHeight = afterTenFloor * 12;

            const firstTenFloorHeight = 10 * 15;

            const totalHeight = afterTenFloorHeight + firstTenFloorHeight;

            document.getElementById("output_brick").innerHTML = totalHeight * 1000;
            return totalHeight * 1000;
        }
        else {
            const totalHeight = floor * 15;

            document.getElementById("output_brick").innerHTML = totalHeight * 1000;
            return totalHeight * 1000;
        }
    }
    else {
        console.log("Floor count/number should be a valid number");
    }
}
// console.log(brickCalculator(1));


// Tiny Friend Finder ##############################
const tinyFriend = array => {
    // return Math.min(...array.map(({ length }) => length));
    let shortLength = Infinity;
    let shortest = "";

    if (array.length > 0) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] !== '' && typeof array[i] === 'string' && array[i].length < shortLength) {
                shortest = array[i];
                shortLength = array[i].length;
            }
        }
    }

    document.getElementById("output_tiny").innerHTML = shortest;
    return shortest;
}
// console.log(tinyFriend(['siam', 'joy', 'jihadul', 'hasan', '', 'ti']));