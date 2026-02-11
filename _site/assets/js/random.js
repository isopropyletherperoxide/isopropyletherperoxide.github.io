const phrases =
    [
      "All Twisted Metal Stretching Upwards", // gy!be
      "Lethal Force Authorized", "Legal Force Authorized",
      "Circulation of Blood is Circulation of Power", // ville d callio
      "made possible by strictly undulating squigglies",
      "tested on nociceptive organisms only",
      "Feline-coded Chemistry Edutainment", "AAAAUGHHHHHHHHHH!!!!",
      "we need a new place",
      "nya,",
            "petroleum-derived",
            "for no one's amusement, but my own", // pynchon
      "In a pronounced case of psychoneurosis we seldom find the development of one single perverted impulse;", // freud 
      "meow",
     "'unreadable', 'turgid', 'overwritten', and in parts 'obscene'",
      "\"Up you get then, weakling,\" said the information-giver.", // kafka's
                                                                    // trial
      "The body's bad the body's not good... The body's bad the body's not goooood",
      "ITS NOT A WEBSITE", // endorphin port
      "Inkscape: Torment",
        "pessimism of the intellect, optimism of the delusion",
      "The work is mysterious and important.", // severance
      "Wholly Tangential.",
      "“I have done that, says my memory. I cannot have done that, says my pride and remains adamant. Finally, memory yields”", // nietzsche
      "You should get that looked at.", "Power in Misery",
      "NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO",
      "*purrs*",
      "this demands the gentle hand of a surgeon",  // pathologic
      "crushed into dust by my weak chemist hands", // paraphrased from nilered
      "History might absolve me", "History will absolve me",
      "When Does the Last Angel Stop Dancing on a Speeding Pinhead?" // jim
                                                                     // williams,
                                                                     // linear
                                                                     // technology
                                                                     // AN120
    ]

    let n = Math.floor(Math.random() * phrases.length)

      text = document.getElementById("random")

      text.textContent = phrases[n]

          const images =
              [ "angel.png", "angel_color.png", "kitty.png", "emblem.png" ];

      let ord = 0;

      function svgClickFunc() {
        ord = (ord + 1) % images.length
        image1.href.baseVal = "assets/images/" + images[ord]
      }
