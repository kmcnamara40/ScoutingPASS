var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2024",
  "page_title": "Crescendo",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Initials",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2024iri",
      "required": "true"
    },
    { "name": "Match Level",
      "code": "l",
      "type": "level",
      "choices": {
        "qm": "Quals<br>",
        "sf": "Semifinals<br>",
        "f": "Finals"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 150,
      "required": "true"
    },
    { "name": "Robot",
      "code": "r",
      "type": "robot",
      "choices": {
        "r1": "Red-1",
        "b1": "Blue-1<br>",
        "r2": "Red-2",
        "b2": "Blue-2<br>",
        "r3": "Red-3",
        "b3": "Blue-3"
      },
      "required":"true"
    },
    { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Auto Start Position",
    "code": "as",
    "type": "clickable_image",
    "filename": "2024/field_image.png",
    "clickRestriction": "one",
    "allowableResponses": "1 12 13 24 25 36 37 48 49 60 61 72",
    "shape": "circle 5 black red true"
  }
  ],
  "auton": [
    { "name": "Leave Starting Zone",
      "code": "al",
      "type": "bool"
    },
    { "name": "Amp Scores",
      "code": "aas",
      "type": "counter"
    },
    { "name": "Speaker Scores",
      "code": "ass",
      "type": "counter"
    },
    { "name": "Auto Pickup",
      "code": "ap",
      "type": "clickable_image",
      "filename": "2024/field_image_auto.png",
      "dimensions": "7 5",
      "clickRestriction": "onePerBox",
      "allowableResponses": "2 4 6 9 11 13 16 18 20 25 32",
      "toggleClick": "true",
      "showFlip": "true",
      "showUndo": "true",
      "shape": "circle 5 black red true"
    }
  ],
  "teleop": [
    { "name": "Amp Scores",
      "code": "tas",
      "type": "counter"
    },
    { "name": "Speaker Scores",
      "code": "tss",
      "type": "counter"
    },
    { "name": "Relayed Notes",
      "code": "rn",
    "type": "counter"
    },
    { "name": "Dropped/Missed Notes",
    "code": "tdn",
    "type": "counter"
    }
  ],
  "endgame": [
    { "name": "Time left when climb started",
      "code": "tlc",
      "type": "radio",
      "choices": {
        "th": "30-20 seconds<br>",
        "tw": "20-10 seconds<br>",
        "te": "Less than 10 seconds<br>",
        "f": "Failed climb<br>",
        "x": "Climb not attempted"
      },
      "defaultValue": "x"
    },
    { "name": "Final Status",
      "code": "fs",
      "type":"radio",
      "choices": {
        "p": "Parked<br>",
        "o": "Onstage<br>",
        "a": "Attempted but failed<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    },
    { "name": "Note in Trap",
      "code": "nit",
      "type": "bool"
    }
  ],
  "postmatch": [
    { "name": "Citrus Ranking(discuss with your team)",
      "code": "cr",
      "type": "radio",
      "choices": {
        "1": "1st alliance member<br>",
        "2": "2nd alliance member<br>",
        "3": "3rd alliance member<br>",
        "4": "4th alliance member<br>",
        "x": "Not Observed"
      },
      "defaultValue": "x"
    },
    { "name": "Where did they shoot from?",
      "code": "wsf",
      "type": "radio",
      "choices": {
        "s": "Against speaker<br>",
        "n": "In front of starting zone line<br>",
        "a": "Behind starting zone line <br>",
        "b": "Any location<br>",
        "x": "Did not score speaker"
      },
      "defaultValue": "x"
    },
    { "name": "Defense Rating",
      "code": "dr",
      "type": "radio",
      "choices": {
        "b": "Below Average<br>",
        "a": "Average<br>",
        "g": "Good<br>",
        "e": "Excellent<br>",
        "x": "Did not play defense"
      },
      "defaultValue": "x"
    },
    { "name": "Speed Rating",
      "code": "sr",
      "type": "radio",
      "choices": {
        "1": "1 (slow)<br>",
        "2": "2<br>",
        "3": "3<br>",
        "4": "4<br>",
        "5": "5 (fast)"
      },
      "defaultValue":"3"
    },
    { "name": "Died/Immobilized",
      "code": "die",
      "type": "bool"
    },
    { "name": "Tippy<br>(almost tipped over)",
      "code": "tip",
      "type": "bool"
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 55
    }
  ]
}`;
