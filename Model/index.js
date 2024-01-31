$(function(){
  const startTime = 9;
  const hoursOpen = 12;
  $("#escape-room-select").change(function(){
    let hourData = Number($(this).children(":selected").attr("data-hours"));
    let numHours = 12/hourData;
    if(numHours == undefined || numHours == null){
      numHours = 0;
    }
    $("#table-times").empty();
    $(".escape-room-time").off();
    for(i = 0; i < numHours; i++){
      let hourDecimal = parseFloat(((i*hourData-1)+startTime)%12+1);
      hourDecimal = hourDecimal.toFixed(Math.max(2, (hourDecimal.toString().split('.')[1] || []).length));
      let minutes = ("0" + ((hourDecimal % 1)*60)).slice(-2);
      console.log("hourdecimal: "+hourDecimal+" minutes "+minutes)
      $("#table-times").append(`<div class="escape-room-time">`+hourDecimal.toString().slice(0,hourDecimal.toString().indexOf(".")).concat(":",minutes)+`</div>`);
      $(".escape-room-time").click(function(){
        $(".escape-room-time.active").removeClass("active");
        $(this).addClass("active");
      });
    }
  });
});

function calculateBenefits(programValue, stateCode, homeYear) {
    if (programValue == "es-b") {
      if (stateCode == "CA") {
        document.getElementById("benefitLabel").innerHTML = "Depending on the type of home, consult the appropriate program: single family home - SFNH California, manufactured home - MH v2, or multi-family home MFNC California.";
      }
      else if (stateCode == "FL" && homeYear <= 2024) {
        document.getElementById("benefitLabel").innerHTML = "Depending on the type of home, consult the appropriate program: single family home - SFNH Florida or SFNH National, manufactured home - MH v2, or multi-family home MFNC National.";
      }
      else if (stateCode == "HI" && homeYear <= 2026) {
        document.getElementById("benefitLabel").innerHTML = "Depending on the type of home, consult the appropriate program: single family home - SFNH Pacific, manufactured home - MH v2, or multi-family home MFNC National.";
      }
      else if (stateCode == "OR" && homeYear <= 2026 || stateCode == "WA" && homeYear <= 2026) {
        document.getElementById("benefitLabel").innerHTML = "Depending on the type of home, consult the appropriate program: single family home - SFNH Oregon and Washington or SFNH National, manufactured home - MH v2, or multi-family home MFNC Oregon and Washington or MFNC National.";
      }
      else if (homeYear < 2023) {
        document.getElementById("benefitLabel").innerHTML = "Your home is not eligible for a tax rebate under the ENERGYSTAR program.";
      }
      else if (homeYear > 2023 && homeYear < 2027) {
        switch (homeYear) {
          case 2023:
            document.getElementById("benefitLabel").innerHTML = "If your home is a: single family home - $2500, manufactured home - $2500, or multi-family home - $500 ($2500 subject to wage requirements).";
            break;
          case 2024:
            document.getElementById("benefitLabel").innerHTML = "Your home is not eligible for a tax rebate under the ENERGYSTAR program.";
            break;
          case 2025:
            document.getElementById("benefitLabel").innerHTML = "Your home is not eligible for a tax rebate under the ENERGYSTAR program.";
            break;
          case 2026:
            document.getElementById("benefitLabel").innerHTML = "Your home is not eligible for a tax rebate under the ENERGYSTAR program.";
            break;
          case 2027:
            document.getElementById("benefitLabel").innerHTML = "Your home is not eligible for a tax rebate under the ENERGYSTAR program.";
            break;
          default:
            break;
        }
      }
      else {
        document.getElementById("benefitLabel").innerHTML = "Tax rebate information for your home has not been released by ENERGYSTAR yet.";
      }
    }
    else if if (programValue == "es-h") {
      document.getElementById("benefitLabel").innerHTML = "ENERGYSTAR states that between the January 1, 2023 and December 31, 2032, you are permitted to claim up to 30% of $150 of your costs as a tax credit."
    }
}
