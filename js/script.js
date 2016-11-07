function exist(elem) {
  (elem.length>0) ? true : false;
}
$(window).load(function(){
  var fAnim = false;

  var nMaintTimer;
  var frameArr=[];

	var consoleArr = [];


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


var test1 = {
  "farmeTime": 600,
  "sprites": [
    [
    "###",
    "###",
    "###"
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
    "---"
    ],
    [
    " ",
    "---"
    ],
    [
    " ",
    " ",
    "---"
    ]
  ],

  "colorPatterns": [
    [
    "bbbbb",
    "bbbbb",
    "bbbbb",
    "bbbbb",
    "bbbbb"
    ]
  ],

  "colorPresets": {
    "g": "#3f3",
    "b": "#33f"
  },

  "colorDefault": "#ddd"
};

var pumpkin = {
  "farmeTime": 600,
  "sprites": [
    [
    " ",
    " ",
    "                              /\\",
    "                             / /",
    "                         ___( (___",
    "                      .-'(    `' )`-.",
    "                    ./    `'''''''    \\.",
    "                   /                   \\",
    "                  /                     \\",
    "                 |       /\\      /\\      |",
    "                |       /O_\\    /O_\\      |",
    "                |            /\\           |",
    "                |            ~~           |",
    "                 |      \\.        ./     |",
    "                  \\      \\\\/\\/\\/\\//     /",
    "                   \\      \\/\\/\\/\\/     /",
    "                    `\\               /'",
    "                      `--_________--'",
    " ",
    " "
    ],

    [
    " ",
    " ",
    "                              /\\",
    "                             / /",
    "                         ___( (___",
    "                      .-'(    `' )`-.",
    "                    ./    `'''''''    \\.",
    "                   /                   \\",
    "                  /                     \\",
    "                 |       /\\      /\\      |",
    "                |       /_o\\    /_o\\      |",
    "                |            /\\           |",
    "                |            ~~           |",
    "                 |      \\.        ./     |",
    "                  \\      \\\\/\\/\\/\\//     /",
    "                   \\      \\/\\/\\/\\/     /",
    "                    `\\               /'",
    "                      `--_________--'",
    " ",
    " "
    ],
    [
    " ",
    " ",
    "                              /\\",
    "                             / /",
    "                         ___( (___",
    "                      .-'(    `' )`-.",
    "                    ./    `'''''''    \\.",
    "                   /                   \\",
    "                  /                     \\",
    "                 |       /\\      /\\      |",
    "                |       /O_\\    /O_\\      |",
    "                |            /\\           |",
    "                |            ~~           |",
    "                 |      \\.        ./     |",
    "                  \\      \\\\/\\/\\/\\//     /",
    "                   \\      \\/\\/\\/\\/     /",
    "                    `\\               /'",
    "                      `--_________--'",
    " ",
    " "
    ],

    [
    " ",
    " ",
    "                              /\\",
    "                             / /",
    "                         ___( (___",
    "                      .-'(    `' )`-.",
    "                    ./    `'''''''    \\.",
    "                   /                   \\",
    "                  /     /\\        /\\    \\",
    "                 |     /  \\      /  \\    |",
    "                |     /  * \\    / *  \\    |",
    "                |            /\\           |",
    "                |            ~~           |",
    "                 |      \\.        ./     |",
    "                  \\      \\\\/\\/\\/\\//     /",
    "                   \\      \\/\\/\\/\\/     /",
    "                    `\\               /'",
    "                      `--_________--'",
    " ",
    " "
    ]
  ],

  "colorPatterns": [
    [
    " ",
    " ",
    "                             ggg",
    "                             ggg",
    "                         gggggggggg",
    "                      ooogggggggggooo",
    "                    oo    gggggggg    oo",
    "                   o                   o",
    "                  o     rrr      rrr    o",
    "                 o     rrrrr    rrrrr    o",
    "                o     rrrrrrr  rrrrrrr    o",
    "                o            rr           o",
    "                o            rr           o",
    "                 o      rr        rrr    oo",
    "                  o      rrrrrrrrrr    ooo",
    "                   o      rrrrrrrr     oo",
    "                    oo               oo",
    "                      oooooooooooooooo"
    ]
  ],

  "colorPresets": {
    "g": "#3f3",
    "o": "#f52",
    "r": "#b71c1c"
  },

  "colorDefault": "#ddd"
};
/**/
var rain2 = {
  "farmeTime": 600,
  "sprites": [
    [
      "     /     /",
      "            ",
      "            ",
      " /      /   ",
      "            ",
      "            "
    ],
    [
      "            ",
      "   /      / ",
      "            ",
      "            ",
      "/     /     ",
      "            "
    ],
    [
      "            ",
      "            ",
      "  /      /  ",
      "            ",
      "            ",
      "     /     /"
    ]
  ],

  "colorPatterns": [
    [
      "bbbbccccbbbb",
      "ccccbbbbcccc",
      "bbbbccccbbbb",
      "ccccbbbbcccc",
      "bbbbccccbbbb",
      "ccccbbbbcccc"
    ],
    [
      "ccccbbbbcccc",
      "bbbbccccbbbb",
      "ccccbbbbbbbb",
      "bbbbccccbbbb",
      "ccccbbbbcccc",
      "bbbbccccbbbb"
    ]
  ],

  "colorPresets": {
    "b": "#229",
    "c": "#116"
  },

  "colorDefault": "#ddd"
};
/**/

var rain = {
  "sprites": [
    [
      "*.",
      "..",
      ".."
    ],
    [
      "..",
      "*.",
      ".."
    ],
    [
      "..",
      "..",
      "*."
    ]
  ],

  "colorPatterns": [
    [
      "bbbbccccbbbb",
      "ccccbbbbcccc",
      "bbbbccccbbbb",
      "ccccbbbbcccc",
      "bbbbccccbbbb",
      "ccccbbbbcccc"
    ],
    [
      "ccccbbbbcccc",
      "bbbbccccbbbb",
      "ccccbbbbcccc",
      "bbbbccccbbbb",
      "ccccbbbbcccc",
      "bbbbccccbbbb"
    ]
  ],

  "colorPresets": {
    "b": "#229",
    "c": "#116"
  },

  "colorDefault": "#ddd"
};

var ground = {
  "sprites": [
    [
      "==-=--"
    ],
    [
      "=-=--="
    ],
    [
      "-=--=="
    ],
    [
      "=--==-"
    ],
    [
      "--==-="
    ],
    [
      "-==-=-"
    ]
  ],

  "colorPatterns": [
    [
      "dmldml"
    ],
    [
      "mldmld"
    ],
    [
      "ldmldm"
    ]
  ],

  "colorPresets": {
    "d": "#090",
    "m": "#1e1",
    "l": "#1e3"
  },
  "frameRate": 2,
  "colorDefault": "#1e3"
};
var pers = {
  "sprites": [
    [
      "  __",
      " ( ->",
      " / )\\",
      "<_/_/",
      " / \\"
    ],
    [
      "  __",
      " ( ->",
      " / )\\",
      "<_/_/",
      "  | "
    ]
  ],
  "frameRate": 2,
  "colorPatterns": [
    [
      "bbbbb",
      " b gy",
      " b bb",
      "bbbbb",
      " yyy"
    ],
    [
      "bbbbb",
      " b gy",
      " b bb",
      "bbbbb",
      " yyy"
    ],
    [
      "bbbbb",
      " bbby",
      " b bb",
      "bbbbb",
      " yyy"
    ]
  ],

  "colorPresets": {
    "b": "#229",
    "y": "#972",
    "g": "292"
  },

  "colorDefault": "#ddd"
};


//console.log(example.sprites[0][0]);
//console.dir(example.colorPresets);

function drawAnimation2(spriteSets, frameTime) {
  var frameSets = [];
  if (spriteSets instanceof Array) {
    frameSets = spriteSets;
  } else {
    frameSets[0] = spriteSets;
  }

  if (frameTime == undefined ||
      frameTime == 0 ||
      frameTime == "") {
    drawFrame(frameSets)
  } else {
    nMaintTimer = setInterval(function() {drawFrame(frameSets)}, frameTime);
  }


}
function drawScene (spriteSets, frameTime) {
  var frameSets = [];
  if (spriteSets instanceof Array) {
    frameSets = spriteSets;
  } else {
    frameSets[0] = spriteSets;
  }
  clearConsole();
  drawFrame(frameSets);
}
  function drawFrame(spriteSets) {
    var frame_arr = [];

    frame_arr = frame_arr.concat(consoleArr);
    //console.dir(frame_arr);

    var spriteList = spriteSets;

    var theSprite;

    // for each spriteSet
    for (sprite in spriteList) {
      //console.log(sprite);
      if (spriteList[sprite].oSprite != undefined) {
        theSprite = spriteList[sprite].oSprite;
      } else {
        theSprite = spriteList[sprite];
      }

      // repeat Y
      var tmp_yR = spriteList[sprite].yRepeat || 1;
      for (var yRi = 0; yRi < tmp_yR; yRi++) {

        // Y Shift
        var yShift=0;
        if (spriteList[sprite].yShift != undefined &&
            spriteList[sprite].yShift > 0) {
          yShift = spriteList[sprite].yShift;
          for (var i = 0; i < yShift; i++) {
            if (frame_arr[i] == undefined) {
              frame_arr[i] = [];
              frame_arr[i].push("<br>");
            }
          }
        }

        // get frame number
        var frameNum, frameRateNum;

        if (theSprite.frameNum != undefined) {
          frameNum = theSprite.frameNum;
        } else {
          frameNum = 0;
        }
        if (theSprite.frameRateNum != undefined) {
          frameRateNum = theSprite.frameRateNum;
        } else {
          frameRateNum = 1;
        }

        var theFrame = theSprite.sprites[frameNum];

        // strings
        for (string in theFrame) {
          if(string<consoleArr.length) {
            var s_length = theFrame[string].length;
            var fa_i = Number(+string + +yShift + +(theFrame.length * yRi));
            if ( frame_arr[fa_i] == undefined)
             frame_arr[fa_i] = [];

            // X Shift
            var xShift=0;
            if (spriteList[sprite].xShift != undefined &&
                spriteList[sprite].xShift != 0) {
              xShift = spriteList[sprite].xShift;
              for (var i = 0; i < xShift; i++) {
                if (frame_arr[fa_i][i] == undefined) {
                 frame_arr[fa_i][i] = "<span> </span>";
                }
              }
            }

            // Repeat X
            var tmp_xR = spriteList[sprite].xRepeat || 1;
            for (var xRj = 0; xRj < tmp_xR; xRj++) {
              // chars
              for (char in theFrame[string]) {
                if (char<consoleArr[0].length){

                  var ch = theFrame[string][char];
                  var fa_j = Number(+char + +xShift + +(xRj * theFrame[string].length));

                  // color pattern ?
                  if (s_length > 0) {
                    // color not null ?
                    var clr_ch;
                    if (theSprite.colorPatterns[frameNum] != undefined &&
                        theSprite.colorPatterns[frameNum].length > 0 &&
                        theSprite.colorPatterns[frameNum][string] != undefined &&
                        theSprite.colorPatterns[frameNum][string][char] != undefined) {
                      clr_ch = theSprite.colorPatterns[frameNum][string][char];
                    } else {
                      if ( theSprite.colorPatterns[0] != undefined &&
                        theSprite.colorPatterns[0].length > 0 &&
                        theSprite.colorPatterns[0][string] != undefined
                        ) {
                        clr_ch = theSprite.colorPatterns[0][string][char];
                      } else {
                        clr_ch = theSprite.colorDefault;
                      }
                    }

                    // what color?
                    if (clr_ch != " ") {
                      var clr = theSprite.colorPresets[clr_ch];
                      var s_clr =  " style='color: "+clr+"'";
                    } else {
                      var s_clr='';
                    }

                    // add simbol
                    frame_arr[fa_i][fa_j] = "<span "+s_clr+" data-ind='"+fa_i+":"+fa_j+"'>"+ch+"</span>";

                    //console.dir(frame_arr);
                    //console.dir(consoleArr);

                  }
                }
              }
            }// repeat x
          }
        }//


      }
      // next frame
      if (frameRateNum == undefined || frameRateNum > theSprite.frameRate){
        if (frameNum < theSprite.sprites.length - 1) {
            frameNum++;
        } else {
          frameNum = 0;
        }
        frameRateNum = 1;
      } else {
        frameRateNum++;
      }
      theSprite.frameRateNum = frameRateNum;
      theSprite.frameNum = frameNum;
    }
    var out = "";
    frame_arr.forEach (function(item, i, frame_arr) {
      out+=item.join("");
    });
    $(".console").html(out);
  }


function setConsole(data) {
  var stringArr="";
  for (var i = 0; i<data.cWidth; i++) {
    stringArr += "<span> </span>|";
  }
  stringArr += "<br>";
  for (var i = 0; i<data.cHeight; i++) {
   consoleArr = consoleArr.concat([stringArr.split("|")]);
  }
   //frame_arr=[];
    //console.dir(consoleArr);

}
function clearConsole() {
  for (var i = 0; i<consoleArr.length; i++)
    for (var j=0; j<consoleArr[i].length-1; j++){
      consoleArr[i][j] = "<span> </span>";
    }
}
/*
function initConsole(conf) {
  var cW=0;
  var cH=0;
  var arrString = [];

  if (conf.width != undefined) {
    cW=conf.width;
  } else {
    cW=10;
  }
  if (conf.height != undefined) {
    cH=conf.height;
  } else {
    cH=10;
  }

  for( var i=0; i<cW; i++) {
    arrString.push("<span></span>");
  }
  arrString.push("<br>");
  for( var i=0; i<cH; i++) {
    consoleArr.push(arrString);
  }
}
*/

// console settings
setConsole({cWidth: 70, cHeight: 10});

$(".console").mouseover(function () {
   if (!fAnim) {

    fAnim = true;

    }

  });
var f = {};
f.key={};
f.key.queue=[];

f.frames={};
f.frames.spf=2;
f.frames.curStep=1;

f.pers = {};
f.pers.jump = {}
f.pers.jump.flag = false;
f.pers.jump.num = 0;

f.scene = {};
f.scene.ground = {};
f.scene.ground.width = 30;
f.scene.ground.i = 0;


var y_shift = 0;
var mainLoop = setInterval(
  function () {
    // get key
    f.key.cur = f.key.queue.shift();
    // is space
    if (f.key.cur == 'space') {
      //debugger;
      f.pers.jump.flag = true;
    }

    // create jump
    if (f.pers.jump.flag){
      f.pers.jump.num++;
      if(f.pers.jump.num>4)
        f.pers.jump.flag=false;
    } else {
      if(f.pers.jump.num>0)
        f.pers.jump.num--
    }

    // move ground
    f.scene.ground.i++;
    if (f.scene.ground.i > f.scene.ground.width) {
      f.scene.ground.i = 0;
    }

    // if time to render frame
    if (f.frames.curStep == f.frames.spf)  {
      drawScene([
        {oSprite: ground, yShift: 10, xRepeat: 7},
        {oSprite: pers, yShift: 5-f.pers.jump.num, xShift: 5}
        ]);
      y_shift = 0;
    }

    // next step
    f.frames.curStep++;
    if (f.frames.curStep > f.frames.spf)
     f.frames.curStep=1;
  }, 50);

$('body').keyup(function(eventObject){
    //Space Enter
    if(eventObject.which == 32 || eventObject.which == 13) {
      f.key.queue.push('space');
    }
});

//mainLoop();

});
