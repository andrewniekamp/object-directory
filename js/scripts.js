//business logic
function Card(cardName, cardType, cardTerrain, cardWeakness, imageLink) {
  this.name = cardName;
  this.type = cardType;
  this.terrain = cardTerrain;
  this.weakness = cardWeakness;
  this.image = imageLink;
}

Card.prototype.nameAndClass = function() {
  return this.type + ": " + this.name;
}

//user interface logic
$(function(){
  var portraitLink = '';
  $(".portrait").click(function() {
    $("form img").addClass("unselected");
    $(this).removeClass("unselected");
    portraitLink = $(this).attr("src");
    console.log(portraitLink);
  })

  //SHOW CARD IN LARGER AREA
  var showCard = function(card) {
      $("#show-card").show();
      $("#show-card h2").text(card.name);
      $("#deck-img-area").html("<img src='" + card.image + "'>");
      // $(".card-name").text(card.name);
      $(".card-type").text(card.type);
      $(".card-terrain").text(card.terrain);
      $(".card-weakness").text(card.weakness);
  };

  //ADD CARD TO LISTING
  $("#sample").click(function() {
    var newCard = new Card("Spider Queen", "Rogue", "Cave", "Fire", "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT4sXUjKXQkRzivabWnl2jCOcfbzM-Ob7hjq40Vo1Kn3FmyD66e");
    $("#deck").append("<li><span class='card'>" + newCard.nameAndClass() + "</span></li>");
    //SHOW CARD IN LARGER AREA
    $(".card").last().click(function() {
      showCard(newCard);
    });
  });

  $("form#new-card").submit(function(event) {
    event.preventDefault();
    var cardNameInput = $("#new-card-name").val();
    var cardTypeInput = $("#new-card-type").val();
    var cardTerrainInput = $("#new-card-terrain").val();
    var cardWeaknessInput = $("#new-card-weakness").val();
    var imageLinkInput = portraitLink;

    //ADD CARD TO LISTING
    var newCard = new Card(cardNameInput, cardTypeInput, cardTerrainInput, cardWeaknessInput, imageLinkInput);
    $("#deck").append("<li><span class='card'>" + newCard.nameAndClass() + "</span></li>");

    //CLEAR VALUES IN INPUTS
    $("#new-card-name").val("");
    $("#new-card-type").val("");
    $("#new-card-terrain").val("");
    $("#new-card-weakness").val("");

    //SHOW CARD IN LARGER AREA
    $(".card").last().click(function() {
      showCard(newCard);
    })
  })
})
