$(document).ready(function() {
  $('.popup').click(function(event) {
    var text = $('#quote').text() + " -- " + $('#author').text();
    var hashtags = "Quote";
    var width  = 575,
        height = 400,
        left   = ($(window).width()  - width)  / 2,
        top    = ($(window).height() - height) / 2,
        url    = this.href + "?text=" + text + "&hashtags=" + hashtags,
        opts   = 'status=1' +
                 ',width='  + width  +
                 ',height=' + height +
                 ',top='    + top    +
                 ',left='   + left;
    
    window.open(url, 'twitter', opts);
 
    return false;
  });
  
  var quotes = [
    ["Strive not to be a success, but rather to be of value.", "Albert Einstein"],
    ["Two roads diverged in a wood, and I — I took the one less traveled by, And that has made all the difference.", "Robert Frost"],
    ["You miss 100% of the shots you don’t take.", "Wayne Gretzky"],
    ["The most difficult thing is the decision to act, the rest is merely tenacity.", "Amelia Earhart"],
    ["Every strike brings me closer to the next home run.", "Babe Ruth"],
    ["Life isn’t about getting and having, it’s about giving and being.", "Kevin Kruse"],
    ["Life is what happens to you while you’re busy making other plans.", "John Lennon"],
    ["Life is 10% what happens to me and 90% of how I react to it.", "Charles Swindoll"],
    ["The mind is everything, what you think you become.", "Buddha"],
    ["Eighty percent of success is showing up.", "Woody Allen"],
    ["Your time is limited, so don't waste it living someone else's life.", "Steve Jobs"],
    ["Every child is an artist. The problem is how to remian an artist once he grows up.", "Pablo Picasso"],
    ["Be yourself; everyone else is already taken.", "Oscar Wilde"],
  ];
  
  
  $('#random-quote').click(function() {
    var index = Math.floor(Math.random() * quotes.length);
    $('#quote').text(quotes[index][0]);
    $('#author').text(quotes[index][1]);
  })
})
