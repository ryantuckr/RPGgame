var userName = prompt("Please enter your name:")

var selectedUnit = {
    archer: {
        hp: 150,
        value: "bow"
    },
    mage: {
        hp: 90,
        value: "wand"

    },
    warrior: {
        hp: 240,
        value: "shield"

    }
}

var computerUnit = {
    archer: {
        hp: 150,
        value: "bow"


    },
    mage: {
        hp: 90,
        value: "wand"

    },
    warrior: {
        hp: 240,
        value: "shield"

    }
}


$(document).ready(function () {

    archerAttackDmg = Math.floor((Math.random() * 30) + 15);
    console.log("Archer will attack for: " + archerAttackDmg);
    mageAttackDmg = Math.floor((Math.random() * 45) + 20);
    console.log("Mage will attack for: " + mageAttackDmg);
    warriorAttackDmg = Math.floor((Math.random() * 20) + 10);
    console.log("Warrior will attack for: " + warriorAttackDmg);

    var now = new Date();




    $('#archerHp').html(computerUnit.archer.hp);
    $('#mageHp').html(computerUnit.mage.hp);
    $('#warriorHp').html(computerUnit.warrior.hp);





    $('select#select_2').change(function () {
        var userClass = $(this).find('option:selected').text();
        console.log("User has chosen the " + userClass + " class");
        $('#battleLog').append(now + " " + userName + " has chosen the " + userClass + ' as their class.');
        $("#battleLog").append( $("<p>").text("") );
        selectedUnit = userClass;
    });


    $('select#select_3').change(function () {
        var cpuClass = $(this).find('option:selected').text();
        console.log("CPU has chosen the " + cpuClass + " class");
        $('#battleLog').append(now + 'The CPU has chosen the ' + cpuClass + ' as their class.');
        $("#battleLog").append( $("<p>").text("") );
        computerUnit = cpuClass;
    });

    //Userarcher vs mage
    $("#attackButton").click(function () {
        console.log(selectedUnit + " is attacking " + computerUnit)
        if (selectedUnit === "Archer" && computerUnit === "Mage") {
            var a = 90 - archerAttackDmg;
            console.log("updated mage hp" + a);
            $('#battleLog').append(now + selectedUnit + ' has attacked ' + computerUnit + " for " + archerAttackDmg);
            $("#battleLog").append( $("<p>").text("") );
            $('#mageHp').html(a);
            
        }
    });
    //Userarcher vs warrior
    $("#attackButton").click(function () {
        console.log(selectedUnit + " is attacking " + computerUnit)

        if (selectedUnit === "Archer" && computerUnit === "Warrior") {
            var b = 240 - archerAttackDmg;
            console.log("updated warrior hp" + b);
            $('#battleLog').append(now + selectedUnit + ' has attacked ' + computerUnit + " for " + archerAttackDmg);
            $("#battleLog").append( $("<p>").text("") );
            $('#warriorHp').html(b);
        }
    });
    //Userarcher vs archer
    //$("#attackButton").click(function () {
    //    console.log(selectedUnit + " is attacking " + computerUnit)

    //    if (selectedUnit === "Archer" && computerUnit === "Archer") {
    //        var c = archerAttackDmg;
    //        console.log("updated archer hp" + c);
    //        $('#battleLog').append(now + selectedUnit + ' has attacked ' + computerUnit + " for " + archerAttackDmg);
    //        $('#archerHp').html(c)
    //    }
    //});

    //Usermage vs archer
    $("#attackButton").click(function () {
        console.log(selectedUnit + " is attacking " + computerUnit)

        if (selectedUnit === "Mage" && computerUnit === "Archer") {
            var d = 150 - mageAttackDmg;
            console.log("updated mage hp" + d);
            $('#battleLog').append(now + selectedUnit + ' has attacked ' + computerUnit + " for " + mageAttackDmg);
            $("#battleLog").append( $("<p>").text("") );
            $('#arhcerHp').html(d);
        }
    });
    //usermage vs warrior
    $("#attackButton").click(function () {
        console.log(selectedUnit + " is attacking " + computerUnit)

        if (selectedUnit === "Mage" && computerUnit === "Warrior") {
            var e = 240 - mageAttackDmg;
            console.log("updated warrior hp" + e);
            $('#battleLog').append(now + selectedUnit + ' has attacked ' + computerUnit + " for " + mageAttackDmg);
            $("#battleLog").append( $("<p>").text("") );
            $('#warriorHp').html(e);
        }
    });
    //usermage vs mage
   // $("#attackButton").click(function () {
    //    console.log(selectedUnit + " is attacking " + computerUnit)

    //    if (selectedUnit === "Mage" && computerUnit === "Mage") {
    //        var f = 90 - mageAttackDmg;
    //        console.log("updated mage hp" + f);
    //        $('#battleLog').append(now + selectedUnit + ' has attacked ' + computerUnit + " for " + mageAttackDmg);
    //    }
   // });

    //userwarrior vs archer
    $("#attackButton").click(function () {
        console.log(selectedUnit + " is attacking " + computerUnit)

        if (selectedUnit === "Warrior" && computerUnit === "Archer") {
            var g = 150 - warriorAttackDmg;
            console.log("updated archer hp" + g);
            $('#battleLog').append(now + selectedUnit + ' has attacked ' + computerUnit + " for " + warriorAttackDmg);
            $("#battleLog").append( $("<p>").text("") );
            $('#archerHp').html(g);
        }
    });
    //user warrior vs warrior
    //$("#attackButton").click(function () {
     //   console.log(selectedUnit + " is attacking " + computerUnit)

     //   if (selectedUnit === "Warrior" && computerUnit === "Warrior") {
     //       var h = 240 - warriorAttackDmg;
     //       console.log("updated warrior hp" + h);
     //       $('#battleLog').append(now + selectedUnit + ' has attacked ' + computerUnit + " for " + warriorAttackDmg);
    //    }
   //});
    
   //userwarrior vs mage
    $("#attackButton").click(function () {
        console.log(selectedUnit + " is attacking " + computerUnit)

        if (selectedUnit === "Warrior" && computerUnit === "Mage") {
            var i = 90 - warriorAttackDmg;
            console.log("updated mage hp" + i);
            $('#battleLog').append(now + selectedUnit + ' has attacked ' + computerUnit + " for " + warriorAttackDmg);
            $("#battleLog").append( $("<p>").text("") );
            $('#mageHp').html(i);
        }
    });


    //////////////////////////computer attacks

    //cpuarcher vs user mage
    $("#cpuAttackButton").click(function () {
        console.log(computerUnit + " is attacking " + selectedUnit)
        if (computerUnit === "Archer" && selectedUnit === "Mage") {
            var j = 90 - archerAttackDmg;
            console.log("updated mage hp" + j);
            $('#battleLog').append(now + computerUnit + ' has attacked ' + selectedUnit + " for " + archerAttackDmg);
            $("#battleLog").append( $("<p>").text("") );
            $('#mageHp').html(j);
        }
    });
    //cpuarcher vs userwarrior
    $("#cpuAttackButton").click(function () {
        console.log(computerUnit + " is attacking " + selectedUnit)

        if (computerUnit === "Archer" && selectedUnit === "Warrior") {
            var k = 240 - archerAttackDmg;
            console.log("updated warrior hp" + k);
            $('#battleLog').append(now + computerUnit + ' has attacked ' + selectedUnit + " for " + archerAttackDmg);
            $("#battleLog").append( $("<p>").text("") );
            $('#warriorHp').html(k);
        }
    });
    //cpuarcher vs archer
    //$("#cpuAttackButton").click(function () {
    //    console.log(computerUnit + " is attacking " + selectedUnit)

    //    if (computerUnit === "Archer" && selectedUnit === "Archer") {
    //        var l = 150 - archerAttackDmg;
    //        console.log("updated archer hp" + l);
    //        $('#battleLog').append(now + computerUnit + ' has attacked ' + selectedUnit + " for " + archerAttackDmg);
    //    }
    //});

    //cpumage vs userarcher
    $("#cpuAttackButton").click(function () {
        console.log(computerUnit + " is attacking " + selectedUnit)

        if (computerUnit === "Mage" && selectedUnit === "Archer") {
            var m = 150- mageAttackDmg;
            console.log("updated mage hp" + m);
            $('#battleLog').append(now + computerUnit + ' has attacked ' + selectedUnit + " for " + mageAttackDmg);
            $("#battleLog").append( $("<p>").text("") );
            $('#archerHp').html(m);
        }
    });
    //cpumage vs userwarrior
    $("#cpuAttackButton").click(function () {
        console.log(computerUnit + " is attacking " + selectedUnit)

        if (computerUnit === "Mage" && selectedUnit === "Warrior") {
            var n = 240 - mageAttackDmg;
            console.log("updated warrior hp" + n);
            $('#battleLog').append(now + computerUnit + ' has attacked ' + selectedUnit + " for " + mageAttackDmg);
            $("#battleLog").append( $("<p>").text("") );
            $('#warriorHp').html(n);
        }
    });
    //cpumage vs usermage
    //$("#cpuAttackButton").click(function () {
    //    console.log(computerUnit + " is attacking " + selectedUnit)

    //    if (computerUnit === "Mage" && selectedUnit === "Mage") {
    //        var o = 90 - mageAttackDmg;
     //       console.log("updated mage hp" + o);
    //        $('#battleLog').append(now + computerUnit + ' has attacked ' + selectedUnit + " for " + mageAttackDmg);
    //    }
    //});

    //cpuwarrior vs userarcher
    $("#cpuAttackButton").click(function () {
        console.log(computerUnit + " is attacking " + selectedUnit)

        if (computerUnit === "Warrior" && selectedUnit === "Archer") {
            var p = 150 - warriorAttackDmg;
            console.log("updated archer hp" + p);
            $('#battleLog').append(now + computerUnit + ' has attacked ' + selectedUnit + " for " + warriorAttackDmg);
            $("#battleLog").append( $("<p>").text("") );
            $('#archerHp').html(p);
        }
    });
    //cpu warrior vs userwarrior
    //$("#cpuAttackButton").click(function () {
     //   console.log(computerUnit + " is attacking " + selectedUnit)
//
    //    if (computerUnit === "Warrior" && selectedUnit === "Warrior") {
    //        var q = 240 - warriorAttackDmg;
     //       console.log("updated warrior hp" + q);
     //       $('#battleLog').append(now + computerUnit + ' has attacked ' + selectedUnit + " for " + warriorAttackDmg);
    //    }
    //});
    //cpuwarrior vs usermage
    $("#cpuAttackButton").click(function () {
        console.log(computerUnit + " is attacking " + selectedUnit)

        if (computerUnit === "Warrior" && selectedUnit === "Mage") {
            var q = 90 - warriorAttackDmg;
            console.log("updated mage hp" + i);
            $('#battleLog').append(now + computerUnit + ' has attacked ' + selectedUnit + " for " + warriorAttackDmg);
            $("#battleLog").append( $("<p>").text("") );
            $('#mageHp').html(q);
        }
    });


    var check = function () {
        if (computerUnit.archer.hp <= 0) {
            $('#battleLog').append(computerUnit + " has fallen.");
        }
        if (computerUnit.mage.hp <= 0) {
            $('#battleLog').append(computerUnit + " has fallen.");
        }
        if (computerUnit.warrior.hp <= 0) {
            $('#battleLog').append(computerUnit + " has fallen.");
        }
        if (selectedUnit.mage.hp <= 0) {
            $('#battleLog').append(selectedUnit + " has fallen.");
            restart();
        }
    }

    var restart = function () {
        $("#battleLog").empty();


        archerAttackDmg = Math.floor((Math.random() * 30) + 15);
        console.log("Archer will attack for: " + archerAttackDmg);
        mageAttackDmg = Math.floor((Math.random() * 45) + 20);
        console.log("Mage will attack for: " + mageAttackDmg);
        warriorAttackDmg = Math.floor((Math.random() * 20) + 10);
        console.log("Warrior will attack for: " + warriorAttackDmg);

    }






});