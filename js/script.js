function exist(elem) {
  (elem.length>0) ? true : false;
}
$(window).load(function(){

  var boiler = {
  "farmeTime": 500,
  "sprites": [
    [
    "           '",
    "         )  )",
    "       _(_____",
    "      (________)",
    "       )      (",
    "      /  (     \\",
    "  ___|          |___",
    " ()__\\___ _ ) __/__()",
    "     .`/``||``\\`.",
    "    ()/   ()   \\()"
    ],
    [
    "        '   (",
    "         )  ",
    "       _______",
    "      (________)",
    "       )      (",
    "      /        \\",
    "  ___|       (  |___",
    " ()__\\__) _   __/__()",
    "     .`/``||``\\`.",
    "    ()/   ()   \\()"
    ],
    [
    "          )  ",
    "             ",
    "       ______'_",
    "      (________)",
    "       )      (",
    "      /      ) \\",
    "  ___|   (      |___",
    " ()__\\___ _ ' __/__()",
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
      "      b  f     b",
      "  tttb          bttt",
      " tttttbbb b f bbttttt",
      "     tttttttttttt",
      "    ttt   tt   ttt"
    ],

    [
      "       wwwwwww",
      "       wwwwwww",
      "       bbbbbbbb",
      "      bbbbbbbbbb",
      "       b      b",
      "      b        b",
      "  tttb    ffffffbttt",
      " tttttbbf b b bbttttt",
      "     tttttttttttt",
      "    ttt   tt   ttt"
    ],

    [
      "      wwwwww",
      "      wwwwww",
      "       bbbbbbwb",
      "      bbbbbbbbbb",
      "       b      b",
      "      b      ffb",
      "  tttbffff      bttt",
      " tttttbbb b f bbttttt",
      "     tttttttttttt",
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
  "farmeTime": 400,
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

var boo = {
  "farmeTime": 400,
  "sprites": [
    [
    "   ",
    " .-.",
    "(o o)",
    "| o \\",
    " \\   \\",
    "   `~~~``"
    ],
    [
    " .-.",
    "(o o)",
    "| o \\",
    " \\   \\",
    "   `~~~'",
    "  "
    ],
    [
    " .-.",
    "(o o)",
    "| o \\",
    " \\   \\",
    "   `~~~``",
    "  "
    ],
    [
    "   ",
    " .-.",
    "(0 0)",
    "| o \\",
    " \\   \\",
    "   `~~~'"
    ],
    [
    " .-.",
    "(o o)",
    "| o \\",
    " \\   \\",
    "   `~~~``",
    "  "
    ],
    [
    " .-.",
    "(o o)",
    "| o \\",
    " \\   \\",
    "   `~~~'",
    "  "
    ],
    [
    "   ",
    " .-.",
    "(o o)",
    "| o \\",
    " \\   \\",
    "   `~~~``"
    ],
    [
    " .-.",
    "(o o)",
    "| Ѻ \\",
    " \\   \\",
    "   `~~~'",
    "  "
    ],
    [
    " .-.",
    "(o o)",
    "| Ѻ \\",
    " \\   \\",
    "   `~~~'",
    "  "
    ]
  ],

  "colorPatterns": [
    [
    ]
  ],

  "colorPresets": {
    "g": "#3f3",
    "b": "#33f"
  },

  "colorDefault": "#ddd"
};


var cat = {
  "farmeTime": 400,
  "sprites": [
    [
    " ",
    "   /\\_/\\",
    " =( °w° )=",
    "   )   (  //",
    "  (__ __)//"
    ],
    [
    " ",
    "   /\\_/\\",
    " =( `w` )=",
    "   )   ( ||",
    "  (__ __)//"
    ],
    [
    " ",
    "   /\\_/\\",
    " =( `w` )=",
    "   )   (\\\\",
    "  (__ __)//"
    ],
    [
    " ",
    "   /\\_/\\",
    " =( °w° )=",
    "   )   (\\",
    "  (__ __)\\"
    ],
    [
    " ",
    "   /\\_/\\",
    " =( °w° )=",
    "   )   (\\\\",
    "  (__ __)//"
    ],
    [
    "         [   Meow!]",
    "   /\\_/\\  |/",
    " =( `▼` )= ",
    "   )   ( ||",
    "  (__ __)//"
    ],
    [
    "         [  Meow! ]",
    "   /\\_/\\  |/",
    " =( °▼° )= ",
    "   )   (  //",
    "  (__ __)//"
    ],
    [
    "         [Meow!   ]",
    "   /\\_/\\  |/",
    " =( °▼° )= ",
    "   )   (  //",
    "  (__ __)//"
    ]
  ],

  "colorPatterns": [
    [
    ]
  ],

  "colorPresets": {
    "g": "#3f3",
    "b": "#33f"
  },

  "colorDefault": "#ddd"
};

var cat_back = {
  "farmeTime": 600,
  "sprites": [
    [
    "        |\\___/|",
    "        )     (",
    "       =\\     /=",
    "         )===(",
    "        /     \\",
    "        |     |",
    "       /       \\",
    "       \\       / ",
    "        \\__  _/",
    "           ))",
    "          //",
    "         ((",
    "          \\)"
    ],
    [
    "        |\\___/|",
    "        )     (",
    "       =\\     /=",
    "         )===(",
    "        /     \\",
    "        |     |",
    "       /       \\",
    "       \\       / ",
    "        \\__  _/",
    "           ((",
    "            \\\\",
    "             ))",
    "            (/"
    ]

  ],

  "colorPatterns": [
    [
    ]
  ],

  "colorPresets": {
    "g": "#3f3",
    "b": "#33f"
  },

  "colorDefault": "#ddd"
};

var truck = {
  "farmeTime": 600,
  "sprites": [
    [
"                    *     ,MMM8&&&.            *",
"                         MMMM88&&&&&    .",
"                        MMMM88&&&&&&&",
"            *           MMM88&&&&&&&&",
"                        MMM88&&&&&&&&",
"                        'MMM88&&&&&&'",
"                          'MMM8&&&'      *  ",
" ",
" ",
" ",
"                     _______________________________________________________",
"                   /|     |                                                 |",
"                   ||     |                                                 |",
"              .----|-----,|                                                 |",
"              ||  ||   ==||                                                 |",
"         .-----'--'|   ==||                                                 |",
"         |)-      ~|     ||_________________________________________________|",
"         | ___     |     |____...==..._  >\\______________________________|",
"        [_/.-.\\'--'--------//.-.  .-.\\\\/   |/      //.-.  .-.  .-. \\\\__/",
"          ( o )`==='''''''||( 0 )( o )||-  o       '( 0 )( o )( 0 )||",
"------___--'-'---------------'-'--'-'----___---------'-'--'-'--'-'--------------"
    ],
    [
"                    .     ,MMM8&&&.            *",
"                         MMMM88&&&&&    .",
"                        MMMM88&&&&&&&",
"            *           MMM88&&&&&&&&",
"                        MMM88&&&&&&&&",
"                        'MMM88&&&&&&'",
"                          'MMM8&&&'      .  ",
" ",
" ",
" ",
"                     _______________________________________________________",
"                   /|     |                                                 |",
"                   ||     |                                                 |",
"              .----|-----,|                                                 |",
"              ||  ||   ==||                                                 |",
"         .-----'--'|   ==||                                                 |",
"         |)-      ~|     ||_________________________________________________|",
"         | ___     |     |____...==..._  >\\______________________________|",
"        [_/.-.\\'--'--------//.-.  .-.\\\\/   |/      //.-.  .-.  .-. \\\\__/",
"          ( O )`==='''''''||( o )( 0 )||-  o       '( o )( 0 )( o )||",
"-----------'-'___------------'-'--'-'------------___-'-'--'-'--'-'--------------"
    ],
    [
"                    *     ,MMM8&&&.            .  ",
"                         MMMM88&&&&&    .  ",
"                        MMMM88&&&&&&&",
"            .           MMM88&&&&&&&&",
"                        MMM88&&&&&&&&",
"                        'MMM88&&&&&&'",
"                          'MMM8&&&'      *    ",
" ",
" ",
" ",
"                     _______________________________________________________",
"                   /|     |                                                 |",
"                   ||     |                                                 |",
"              .----|-----,|                                                 |",
"              ||  ||   ==||                                                 |",
"         .-----'--'|   ==||                                                 |",
"         |)-      ~|     ||_________________________________________________|",
"         | ___     |     |____...==..._  >\\______________________________|",
"        [_/.-.\\'--'--------//.-.  .-.\\\\/   |/      //.-.  .-.  .-. \\\\__/",
"          ( o )`==='''''''||( O )( o )||-  o       '( O )( o )( O )||",
"-----------'-'--------___----'-'--'-'----------------'-'-_'_'--'-'--------------"
    ],
    [
"                    *     ,MMM8&&&.            *",
"                         MMMM88&&&&&    *",
"                        MMMM88&&&&&&&",
"            *           MMM88&&&&&&&&",
"                        MMM88&&&&&&&&",
"                        'MMM88&&&&&&'",
"                          'MMM8&&&'      .  ",
" ",
" ",
" ",
"                     _______________________________________________________",
"                   /|     |                                                 |",
"                   ||     |                                                 |",
"              .----|-----,|                                                 |",
"              ||  ||   ==||                                                 |",
"         .-----'--'|   ==||                                                 |",
"         |)-      ~|     ||_________________________________________________|",
"         | ___     |     |____...==..._  >\\______________________________|",
"        [_/.-.\\'--'--------//.-.  .-.\\\\/   |/      //.-.  .-.  .-. \\\\__/",
"          ( O )`==='''''''||( o )( O )||-  o       '( o )( O )( o )||",
"-----------'-'---------------'_'_-'-'----------------'-'-'-'--'-'----___-------"
    ]
  ],

  "colorPatterns": [
    [
    ]
  ],

  "colorPresets": {
    "g": "#3f3",
    "b": "#33f"
  },

  "colorDefault": "#ddd"
};


var test1 = {
  "farmeTime": 600,
  "sprites": [
    [
    "###",
    "###",
    "###"
    ],
    [
    "@@@",
    "@@@",
    "@@@"
    ]
  ],

  "colorPatterns": [
    [
    "ggg",
    "ggg",
    "ggg"
    ]
  ],

  "colorPresets": {
    "g": "#3f3",
    "b": "#33f"
  },

  "colorDefault": "#ddd"
};
var test2 = {
  "farmeTime": 600,
  "sprites": [
    [
    "   ",
    " _ ",
    "   "
    ],
    [
    "   ",
    " - ",
    "   "
    ]
  ],

  "colorPatterns": [
    [
    "bbb",
    "bbb",
    "bbb"
    ]
  ],

  "colorPresets": {
    "g": "#3f3",
    "b": "#33f"
  },

  "colorDefault": "#ddd"
};


//console.log(example.sprites[0][0]);
//console.dir(example.colorPresets);






function drawAnimation(spriteSet, status) {
  var frameTime = spriteSet.farmeTime;
  var spriteName = spriteSet;
  //var sprites = spriteName.sprites;

  setInterval(function() {drawFrame(spriteName, status)}, frameTime);

    function drawFrame(spriteName, status) {
    var frame_arr=[];
    if (status != "add")
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
      frame_arr[string] = [];
      for (char in theFrame[string]) {

        var ch = theFrame[string][char]

        // color pattern ?
        if (theFrame[string].length>0) {
          // color not null ?
          var clr_ch;
          if (spriteName.colorPatterns[frameNum] != undefined &&
            spriteName.colorPatterns[frameNum].length > 0) {
            clr_ch = spriteName.colorPatterns[frameNum][string][char];
          } else {
            if ( spriteName.colorPatterns[0] != undefined &&
              spriteName.colorPatterns[0].length > 0) {
              clr_ch = spriteName.colorPatterns[0][string][char];
            } else {
              clr_ch = spriteName.colorDefault;
            }
          }

          if (clr_ch != " ") {
            var clr = spriteName.colorPresets[clr_ch];
            var s_clr =  " style='color: "+clr+"'";
          } else {
            var s_clr='';
          }

          if (status != "add"){
            //$(".console").append("<span "+s_clr+">"+ch+"</span>");
            frame_arr[string].push("<span "+s_clr+">"+ch+"</span>");
          } else {
            if (!ch==" ") {
              //$(".console").find("span").eq(char*string).html(ch).css("color", clr);
              while (frame_arr.length < string) {
                frame_arr.push([]);
              }
              while(frame_arr[string].length < char) {
                frame_arr[string].push("<span></span>");
              }
              frame_arr[string][char] = "<span "+s_clr+">"+ch+"</span>";
            }

          }

          if (char == s_length-1 && status != "add")
            //$(".console").append("<br>");
          frame_arr[string].push("<br>");
        }
      }

    }//

    var out = "";
    frame_arr.forEach (function(item, i, frame_arr) {
      out+=item.join("");
    });
    $(".console").append(out);
    // next frame
    if (frameNum < spriteName.sprites.length - 1) {
      frameNum++;
    } else {
      frameNum = 0;
    }
    spriteName.frameNum = frameNum;
  }
  }

function drawAnimation2(spriteSets, frameTime) {
  var frameSets = [];
  if (spriteSets instanceof Array) {
    frameSets = spriteSets;
  } else {
    frameSets[0] = spriteSets;
  }


  //var frameTime = frameSets.farmeTime;
  //var spriteName = frameSets;
  //var sprites = spriteName.sprites;

  setInterval(function() {drawFrame(frameSets)}, frameTime);
  //drawFrame(frameSets);

  function drawFrame(spriteList) {
    var frame_arr=[];

    // for each spriteSet
    for (sprite in spriteList) {
      console.log(sprite);
/**/
      if (sprite == 0)
        $(".console").html("");

      var objSprites = spriteList[sprite].sprites;
      // get frame number
      var frameNum;
      if (spriteList[sprite].frameNum != undefined) {
        frameNum = spriteList[sprite].frameNum;
      } else {
        frameNum = 0;
      }

      var theFrame = spriteList[sprite].sprites[frameNum];
      for (string in theFrame) {
        var s_length = theFrame[string].length;
        if ( frame_arr[string] == undefined)
         frame_arr[string] = [];
        for (char in theFrame[string]) {

          var ch = theFrame[string][char]

          // color pattern ?
          if (theFrame[string].length>0) {
            // color not null ?
            var clr_ch;
            if (spriteList[sprite].colorPatterns[frameNum] != undefined &&
              spriteList[sprite].colorPatterns[frameNum].length > 0) {
              clr_ch = spriteList[sprite].colorPatterns[frameNum][string][char];
            } else {
              if ( spriteList[sprite].colorPatterns[0] != undefined &&
                spriteList[sprite].colorPatterns[0].length > 0) {
                clr_ch = spriteList[sprite].colorPatterns[0][string][char];
              } else {
                clr_ch = spriteList[sprite].colorDefault;
              }
            }

            if (clr_ch != " ") {
              var clr = spriteList[sprite].colorPresets[clr_ch];
              var s_clr =  " style='color: "+clr+"'";
            } else {
              var s_clr='';
            }

            if (sprite == 0){
              //$(".console").append("<span "+s_clr+">"+ch+"</span>");
              frame_arr[string].push("<span "+s_clr+">"+ch+"</span>");
            } else {
              if (ch!=" ") {
                //$(".console").find("span").eq(char*string).html(ch).css("color", clr);
                while (frame_arr.length < string) {
                  frame_arr.push([]);
                }
                while(frame_arr[string].length < char) {
                  frame_arr[string].push("<span></span>");
                }
                frame_arr[string][char] = "<span "+s_clr+">"+ch+"</span>";
              }

            }

            if (char == s_length-1 && sprite == 0) {
              //$(".console").append("<br>");
              frame_arr[string].push("<br>");
            }
          }
        }

      }//


      // next frame
      if (frameNum < spriteList[sprite].sprites.length - 1) {
        frameNum++;
      } else {
        frameNum = 0;
      }
      spriteList[sprite].frameNum = frameNum;
      /**/
    }
    var out = "";
    frame_arr.forEach (function(item, i, frame_arr) {
      out+=item.join("");
    });
    $(".console").append(out);
  }

}



 $(".console").mouseover(function () {
   drawAnimation2([test1, test2], 1000);
   //drawAnimation(test2, "add");
 });

});
