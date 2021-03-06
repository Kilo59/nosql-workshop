"use strict";

var proc = require('child_process').spawn('pbcopy');

// Load faker
var faker = require("faker");

var userPrefs = [];

var hobbies = [
    "hobby",
    "3D printing",
    "amateur radio",
    "scrapbook",
    "Amateur radio",
    "Acting",
    "Baton twirling",
    "Board games",
    "Book restoration",
    "Cabaret",
    "Calligraphy",
    "Candle making",
    "Computer programming",
    "Coffee roasting",
    "Cooking",
    "Coloring",
    "Cosplaying",
    "Couponing",
    "Creative writing",
    "Crocheting",
    "Cryptography",
    "Dance",
    "Digital arts",
    "Drama",
    "Drawing",
    "Do it yourself",
    "Electronics",
    "Embroidery",
    "Fashion",
    "Flower arranging",
    "Foreign language learning",
    "Gaming",
    "tabletop games",
    "role-playing games",
    "Gambling",
    "Genealogy",
    "Glassblowing",
    "Gunsmithing",
    "Homebrewing",
    "Ice skating",
    "Jewelry making",
    "Jigsaw puzzles",
    "Juggling",
    "Knapping",
    "Knitting",
    "Kabaddi",
    "Knife making",
    "Lacemaking",
    "Lapidary",
    "Leather crafting",
    "Lego building",
    "Lockpicking",
    "Machining",
    "Macrame",
    "Metalworking",
    "Magic",
    "Model building",
    "Listening to music",
    "Origami",
    "Painting",
    "Playing musical instruments",
    "Pet",
    "Poi",
    "Pottery",
    "Puzzles",
    "Quilting",
    "Reading",
    "Scrapbooking",
    "Sculpting",
    "Sewing",
    "Singing",
    "Sketching",
    "Soapmaking",
    "Sports",
    "Stand-up comedy",
    "Sudoku",
    "Table tennis",
    "Taxidermy",
    "Video gaming",
    "Watching movies",
    "Web surfing",
    "Whittling",
    "Wood carving",
    "Woodworking",
    "Worldbuilding",
    "Writing",
    "Yoga",
    "Yo-yoing",
    "Air sports",
    "Archery",
    "Astronomy",
    "Backpacking",
    "BASE jumping",
    "Baseball",
    "Basketball",
    "Beekeeping",
    "Bird watching",
    "Blacksmithing",
    "Board sports",
    "Bodybuilding",
    "Brazilian jiu-jitsu",
    "Community",
    "Cycling",
    "Dowsing",
    "Driving",
    "Fishing",
    "Flag Football",
    "Flying",
    "Flying disc",
    "Foraging",
    "Gardening",
    "Geocaching",
    "Ghost hunting",
    "Graffiti",
    "Handball",
    "Hiking",
    "Hooping",
    "Horseback riding",
    "Hunting",
    "Inline skating",
    "Jogging",
    "Kayaking",
    "Kite flying",
    "Kitesurfing",
    "LARPing",
    "Letterboxing",
    "Metal detecting",
    "Motor sports",
    "Mountain biking",
    "Mountaineering",
    "Mushroom hunting",
    "Mycology",
    "Netball",
    "Nordic skating",
    "Orienteering",
    "Paintball",
    "Parkour",
    "Photography",
    "Polo",
    "Rafting",
    "Rappelling",
    "Rock climbing",
    "Roller skating",
    "Rugby",
    "Running",
    "Sailing",
    "Sand art",
    "Scouting",
    "Scuba diving",
    "Sculling",
    "Rowing",
    "Shooting",
    "Shopping",
    "Skateboarding",
    "Skiing",
    "Skimboarding",
    "Skydiving",
    "Slacklining",
    "Snowboarding",
    "Stone skipping",
    "Surfing",
    "Swimming",
    "Taekwondo",
    "Tai chi",
    "Urban exploration",
    "Vacation",
    "Vehicle restoration",
    "Water sports"
];

for (var i = 0; i < hobbies.length; i++) {
    var userJoinDate = new Date(faker.date.past());
    var month = (userJoinDate.getMonth() + 1).toString().length === 1 ? `0${userJoinDate.getMonth() + 1}` : (userJoinDate.getMonth() + 1);
    var day = (userJoinDate.getDate() + 1).toString().length === 1 ? `0${userJoinDate.getDate()}` : (userJoinDate.getDate() + 1);
    userJoinDate = `${userJoinDate.getFullYear()}-${(month)}-${day}`;
    userPrefs.push({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        joined: userJoinDate,
        likes: [hobbies[Math.floor(Math.random() * 168)], hobbies[Math.floor(Math.random() * 168)]]
    });
}

proc.stdin.write(JSON.stringify(userPrefs));
proc.stdin.end();
