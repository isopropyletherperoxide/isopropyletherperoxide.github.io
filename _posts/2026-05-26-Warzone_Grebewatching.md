---
title: "Warzone Grebewatching"
author: Birder S. Thompson
image: https://isopropyletherperoxide.github.io/assets/images/2026_grebewatch/thumbnail.webp
layout: post
subtitle: "I am going to regurgitate a feather in your mouth as I tell you this."
twittercard: summary_large_image
--- 

<script>
const title = document.getElementById('title');
hr = false;
num = 0;
links = ["/assets/images/2026_grebewatch/grebewatching.svg", "/assets/images/2026_grebewatch/warzone_grebewatching.svg"]

async function loadSVG(targetElementId, url) {
  try {
    const response = await fetch(url);
    const svgText = await response.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(svgText, "image/svg+xml");
    const svgElement = xmlDoc.querySelector("svg");
    const container = document.getElementById(targetElementId);
    container.appendChild(svgElement);
  } catch (error) {
    console.error("Error loading the SVG:", error);
  }
}

title.addEventListener('click', async (event) => {
title.textContent = "\u200B";
loadSVG("title", links[num]);
if (hr != true) {
title.insertAdjacentHTML("afterend", "<hr style=\"width: 35%; margin-left: 0\">");
title.style.margin = 0
hr = true;
 }
num = (num + 1) % 2;
});

</script>

<style>
#grebe {
position: absolute;
  right: 20px;
  bottom: 0px;
  width: 20%;
  max-width: 600px;
  z-index: -100;
  opacity: 20%;
  margin-bottom: -20px;
}
body { 
position: relative;
}
</style>

Somewhat recently[^1], a dear friend of ours and friend of the website Catherine Whitequark alongside some associates has finished a project of its own, a static webpage host by the name of <a href="https://grebedoc.dev/">Grebedoc</a>. Though it's name is based on a pun wrt its architecture ("grebedoc" is "codeberg" backwards, grebedocs architecture is the inverse of the old codeberg pages architecture), the website prominently features a photograph of a Great Crested Grebe. The <a href="https://ebird.org/species/grcgre1">Great Crested Grebe</a> is a small, interesting looking waterfowl endemic to most of Eurasia, quite commonly found inhabiting the reeds around lakes and other bodies of water. 

In April of Current Year, the drudgery of undergrad, unpaid unappreciated chemistry research and staying indoors due to awful spring cold snaps has started driving us up the fucking wall. Most of our time was spent staring at iNaturalist and eBird in search of interesting looking birds to check out when the weather won't actively try to kill us. And then, on a fateful spring thursday, we have found it. A Great Crested Grebe sighting at a manmade lake in the northeast of town.

So on friday, after hitting the bare minimum of caloric intake by eating a banana and ingesting a normal amount of stimulants, we have headed out towards to the lake. Arriving to the edge of the residential zone of the city, we walked through a series of various garage complexes and parking lots, places beloved by the local substance users and dealers, making our way to a minor pond near the local big box department store. At the pond we have spent our time pacing back and forth in confusion, trying to find a path forward to the lake, as google maps kept pointing us to a rubble pile and some form of industrial scrapyard/parking lot instead the promised walkway.

<img src="/assets/images/2026_grebewatch/plan_of_action.webp"><br>

Looking closely 2-3 times to make sure that this really is the road, we scaled the aformentioned rubble pile into the Source Engine Singleplayer Development Kit 2013 Asset-laden Scrapyard.

<img src="/assets/images/2026_grebewatch/node_graph.webp"><br>

Our attempt to push further through the ``.bsp`` scrapyard towards the lake seems to have really pissed off a set of local dogs, which was a good signal that our presence is not welcomed. A relatively minor drop in the "maybe birdwatching here and today is a bad idea" bucket. At that point, we were struck with a very graphic and vivid vision of us getting mauled to death by a set of angry german shepherds in a junkyard, as a sort of divine punishment for our hubris. A tinnitus-like loop of some fiftysomething year old visibly alcoholic security guard giggling at the sight of his puppies tearing me from limb to limb started playing in my head. No one and nothing to save me, no tears shed, no nights of sleep lost. Now, to our relief, the dogs were too far off in the distance for us to see or feel if they're an actual threat or not, so we could instead make a hasty retreat to the rubble barrier that we just crossed to leave their line of sight, and make a strategic decision to explore alternative paths to our goal. Thankfully, we could proceed quite easily by taking a left turn and scaling a nearby hill, peacefully strolling under some high voltage powerlines towards a High Pressure Natural Gas Line, a landmark designating the local lake that we recall from our idyllic cottagecore-solarpunk-throwing up in our mouth childhood. 

<img src="/assets/images/2026_grebewatch/gas_line.webp"><br>

The entrance to the actual lake was marked by a reasonably large sign obscured by tree branches... Looking closer between the shrubs there we saw, in large haphazard print, something about a "LANDMINE HAZARD". Another possible reason why this hobby has not seen the sudden rise in popularity like it did in places untouched by Active Warfare.

<img src="/assets/images/2026_grebewatch/landmine.webp"><br>

The UXO concern this time isn't actually baseless because the lake is quite close to TETs-6, a combined heat and power plant supplying both to the northeast part of town which was relentlessly pummelled by loitering munitions and cruise missiles for the last few years, with the old Soviet infrastructural legacy turned into a landscape of unrecognizable rubble and scrap metal. Strikes both audible in the moment and felt for months after. Most notably and frequently this happened during last winter, where it left that entire district of the city (population: 500K souls give or take, nobody bothers with a census these days) without heating or hot water for the entirety of an unusually cruel winter and a middling early spring. At some points during the heating outages that were commonplace in the entire town we could actually see our own breath if we walked into the apartment kitchen. These few months can be best characterized in retrospect as "an exercise in utter futility", as the only reward for persistance was as per the usual, more things to persist through. Not much of value could be achieved and not much of value was achieved. 

A notable amenity near the lake entrance is a somewhat haphazardly setup Pet Cemetary on the edge of a big Human Cemetary, which we decided to take a brief leisure-walk through. 

<img src="/assets/images/2026_grebewatch/grave.webp"><br>

A rather poor idea. Now, we feel a certain sense of kinship to cats, and the notion of an untimely tragic death really does hit very close to home, so looking at all the graves made us feel... Quite depressed in a rather intense way? A panicked sadness bordering on despair? Will we be mourned the same way? Remembered as fondly with words as kind as those written on the gravestones? By the end of our visit to the cemetary we spotted a huge floral wreath, and decided to check out who is deserving of all that fanfare. Under the wreath we have found the gravestone for a cat named Adolf. Rest in peace.

<img src="/assets/images/2026_grebewatch/cat.webp"><br>

We, at last, have made our way to the grebe watching spot, and right as we sat down on the embankment to consume a caffeinated beverage we saw an interesting looking spot in the distance - on zooming in with our camera[^2] we have found: a solitary Eurasian Coot. 

<img src="/assets/images/2026_grebewatch/coot.webp"><br>

It's solitude is easily explained by the fact that during nesting season Coots are the worst pieces of shit you could possibly encounter on a body of water in their respectful weight category. Eurasian Coots do not have a code of ethics or considerations for their own future. A purely death-drive animated bird that can and will try to fight anything that comes close.[^3] On a second look, a very distinctive silhouette was spotted further away from us.

<img src="/assets/images/2026_grebewatch/grebe0.webp"><br>

It was in fact, the **Great Crested Grebe**. There it is, in the lake water, with the Great Crest and everything it could insinuate. On scanning the other shore we have found a small piece of concrete rubble and a few black headed gulls hanging out with another grebe. 

<img src="/assets/images/2026_grebewatch/far_away_grebe.webp"><br>

At that moment we felt the same amount of ecstasy as we did when our university application went through or when we have a breakthrough on one of our long-term white-elephantesque electronics project that we promise will come one day, but with much less baggage than the 3 years wasted on an unemployable degree in chemistry or the amount of money and time we spent on that hardware project. These feelings were the subject of a short and amateurish psychoanalysis session between me and my girlfriend a couple days or so later. An evening discussion about how I devalue my work and always use the most self-degrading phrasing when talking about it. "You always use the most self-degrading words in every context", "You see your work as more of a chore than any accomplishment". I conceded that I am probably better at doing things than I was a few years ago when finishing high school, sure.

<img src="/assets/images/2026_grebewatch/grebe1.webp"><br>
<img src="/assets/images/2026_grebewatch/grebe2.webp"><br>
<img src="/assets/images/2026_grebewatch/grebe3.webp"><br>

Our specimen on that day was quite conducive to being documented[^4], after 20 minutes it swam quite close to the shore, where we could document it in pretty good detail in a... stalkerish shot from behind the Reeds. A particularly lovely idiosyncracy the Podiceps Cristatus displays is the very characteristic rapid "snap-to-angle" mechanized-looking Neck Twirl, which it loves doing enough to even employ it during Mating Rituals[^5] - right alongside a fetch quest diving competition where the fitness of a partner is decided by whether it can pull out some algae or a rotten leaf from the bottom of the lake bed. The gender identity of the creature is unknown as you can only deduce that as a differential diagnosis between two grebes by looking at very subtle beak length and general size differences. Though we can see its bright brown-orange breeding plumage, which it sheds in the winter[^6]. Not even the Grebes can avoid the fate of getting Norwooded. 

<img src="/assets/images/2026_grebewatch/shore_grebe1.webp"><br>
<img src="/assets/images/2026_grebewatch/shore_grebe2.webp"><br>
<img src="/assets/images/2026_grebewatch/shore_grebe3.webp"><br>

After an hour or so of wasting our time staring at various waterfowl, we headed towards the place that we somehow still refer to as "home", complete with a case of heat exhaustion and running an insane caloric deficit, as we near always do. Our idea of good judgement again distorted further, seeding ideas for more future trips.

<img src="/assets/images/2026_grebewatch/wagtail_bookend.webp"><br>

<img id="grebe" src="/assets/images/2026_grebewatch/grebe.webp"><br>

## Footnotes 
[^1]: creative license, this was back in october afaict? decoration Great Crested Grebe <a href="https://commons.wikimedia.org/wiki/File:Podiceps_Cristatus_2015-5786.jpg">Original Photo</a> © Bengt Nyman, CC BY-SA 4.0. transparent grebe by Catherine Whitequark
[^2]: The cheap Sony bridge camera (DSC-HX300, 150€ on the secondary market) we have is surprisingly capable for what it is. the 50X Zeiss Lens performed quite well photographing a far away bird, though the light conditions on that particular day were not very complicated so we were not really pushing the camera far... the itsy bitsy fingernail of a sensor is not a bottleneck here thankfully
[^3]: have you ever seen a bird <a href="https://www.youtube.com/watch?v=pRLSFp2MHj8">curbstomp another bird?</a>
[^4]: We learned here that the Great Crested Grebe is an **excellent** diver, we have watched the thing dive underwater for a good 30 seconds (we measured!) and reappear 10 or so meters away. <a href="https://www.youtube.com/watch?v=VQWqbyQt3kM">Video.</a>
[^5]: good demonstration: <a href="https://twitter.com/justcreepazoid/status/2043014812595085388">https://twitter.com/justcreepazoid/status/2043014812595085388</a>
[^6]: Great Crested Grebe Norwood Chart: <a href="https://therattlingcrow.blogspot.com/2013/02/territorial-great-crested-grebes.html">https://therattlingcrow.blogspot.com/2013/02/territorial-great-crested-grebes.html</a>

