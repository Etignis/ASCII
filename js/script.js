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

var pers = {
  "sprites": [
    [
      "  __",
      " ( ->",
      " / )\\",
      "<_/_/",
      " ' '"
    ],
    [
      "  __",
      " ( ->",
      " / )\\",
      "<_/_/",
      "  ' "
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


//console.log(example.sprites[0][0]);
//console.dir(example.colorPresets);


function drawAnimation(spriteSet, status) {
  var frameTime = spriteSet.farmeTime;
  var spriteName = spriteSet;
    var frame_arr=[];
  //var sprites = spriteName.sprites;

  setInterval(function() {drawFrame(spriteName, status)}, frameTime);

    function drawFrame(spriteName, status) {
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

  if (frameTime == undefined ||
      frameTime == 0 ||
      frameTime == "") {
    drawFrame(frameSets)
  } else {
    nMaintTimer = setInterval(function() {drawFrame(frameSets)}, frameTime);
  }

  function drawFrame(spriteSets) {
    var frame_arr = [];
    /*
    if (frameArr.length>0) {
      frame_arr = frame_arr.concat(frameArr);
    }
*/
    frame_arr = frame_arr.concat(consoleArr);
    console.dir(frame_arr);

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
/**/
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
        var frameNum;
        if (theSprite.frameNum != undefined) {
          frameNum = theSprite.frameNum;
        } else {
          frameNum = 0;
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
								spriteList[sprite].xShift > 0) {
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
                    //frame_arr[1][1] = "<span "+s_clr+" data-ind='"+fa_i+":"+fa_j+"'>"+ch+"</span>";

                    console.dir(frame_arr);
                    console.dir(consoleArr);

									}
								}
							}
						}// repeat x
					}
        }//


      }
      // next frame
      if (frameNum < theSprite.sprites.length - 1) {
          frameNum++;
      } else {
        frameNum = 0;
      }
      theSprite.frameNum = frameNum;
    }
    var out = "";
    frame_arr.forEach (function(item, i, frame_arr) {
      out+=item.join("");
    });
    $(".console").html(out);
  }

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

}

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


// console settings
setConsole({cWidth: 30, cHeight: 10});

$(".console").mouseover(function () {
   if (!fAnim) {

/*
    initConsole({
      "width": 3,
      "height": 3
    });

*/
   //drawAnimation2([test1, test2], 1000);
   /*/
   drawAnimation2([
    {
      oSprite: test1,
      xShift: 3,
      yShift: 6
    },
    {
      oSprite: test2,
      xShift: 3,
      yShift: 6
    }
    ], 800);
   /**/
   /*/
   drawAnimation2([
    {
      oSprite: test2,
      xShift: 5,
      yShift: 4
    }
    ], 400);
   /**/

   //drawAnimation2([{oSprite: rain2, yRepeat: 6, xRepeat: 6, yShift: 2, xShift: 3}], 300);

   //drawAnimation2([{oSprite: rain, yRepeat: 1, xRepeat: 1}], 300);
    drawAnimation2([{oSprite: pers, yShift: 5}], 300);

   //drawAnimation2([boiler, boo], 400);
    //drawAnimation2([{oSprite: pumpkin}], 400);


    fAnim = true;

    }

  });

});
