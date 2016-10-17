function exist(elem) {
  (elem.length>0) ? true : false;
}
$(window).load(function(){
  var boiler = {
  "farmeTime": 500,
  "sprites": [
    [
    "           (",
    "         )  )",
    "       _(_____",
    "      (________)",
    "       )      (",
    "      /        \\",
    "  ___|          |___",
    " ()__\\___ _ ) __/__()",
    "     .`/``||``\\`.",
    "    ()/   ()   \\()"
    ],
    [
    "          )  ",
    "         (  (",
    "       ______)_",
    "      (________)",
    "       )      (",
    "      /        \\",
    "  ___|          |___",
    " ()__\\__( _   __/__()",
    "     .`/``||``\\`.",
    "    ()/   ()   \\()"
    ],
    [
    "          (  ",
    "             ",
    "       ______(_",
    "      (________)",
    "       )      (",
    "      /        \\",
    "  ___|          |___",
    " ()__\\___ _ ( __/__()",
    "     .`/``||``\\`.",
    "    ()/   ()   \\()"
    ]
  ],

  "colorPatterns": [
    [
      "       wwwwww",
      "       wwwwww",
      "       bwbbbbb",
      "      bbbbbbbbbb",
      "       b      b",
      "      b        b",
      "  tttb          bttt",
      " tttttbbb b f bbttttt",
      "     ttttttttttt",
      "    ttt   tt   ttt"
    ],

    [
      "       wwwwww",
      "       wwwwww",
      "       bbbbbbwb",
      "      bbbbbbbbbb",
      "       b      b",
      "      b        b",
      "  tttb          bttt",
      " tttttbbf b b bbttttt",
      "     ttttttttttt",
      "    ttt   tt   ttt"
    ],

    [
      "      wwwwww",
      "      wwwwww",
      "       bbbbbbwb",
      "      bbbbbbbbbb",
      "       b      b",
      "      b        b",
      "  tttb          bttt",
      " tttttbbb b f bbttttt",
      "     ttttttttttt",
      "    ttt   tt   ttt"
    ]
  ],

  "colorPresets": {
    "w": "#eee",
    "b": "#142",
    "f": "#e91",
    "t": "#a31"
  },

  "colorDefault": "#000"
};

var example = {
  "farmeTime": 500,
  "sprites": [
    [
    "#|",
    "##"
    ],
    [
    "|#",
    "##"
    ]
  ],

  "colorPatterns": [
    [
      "gb",
      "gg"
    ]
  ],

  "colorPresets": {
    "g": "#3f3",
    "b": "#33f"
  },

  "colorDefault": "#000"
};


//console.log(example.sprites[0][0]);
//console.dir(example.colorPresets);


drawAnimation(boiler);

function drawAnimation(spriteSet) {
  var frameTime = spriteSet.farmeTime;
  var spriteName = spriteSet;
  //var sprites = spriteName.sprites;

  setInterval(function() {drawFrame(spriteName)}, frameTime);
  }

  function drawFrame(spriteName) {
    $(".console").html("");

    var sprites = spriteName.sprites;
    // get frame number
    var frameNum;
    if (spriteName.frameNum != undefined) {
      frameNum = spriteName.frameNum;
    } else {
      frameNum = 0;
    }

    var theFrame = spriteName.sprites[frameNum];
    for (string in theFrame) {
      var s_length = theFrame[string].length;
      for (char in theFrame[string]) {

        var ch = theFrame[string][char]

        // color pattern ?
        if (theFrame[string].length>0) {
          // color not null ?
          var clr_ch
          if (spriteName.colorPatterns[frameNum] != undefined) {
            clr_ch = spriteName.colorPatterns[frameNum][string][char];
          } else {
            clr_ch = spriteName.colorPatterns[0][string][char];
          }
          if (clr_ch != " ") {
            var clr = spriteName.colorPresets[clr_ch];
            $(".console").append("<span style='color: "+clr+"'>"+ch+"</span>");
          } else {
            $(".console").append("<span>" +clr_ch+ "</span>");
          }
          if (char == s_length-1)
            $(".console").append("<br>");
        }
      }
    }//

    // next frame
    if (frameNum < spriteName.sprites.length - 1) {
      frameNum++;
    } else {
      frameNum = 0;
    }
    spriteName.frameNum = frameNum;
  }

});
