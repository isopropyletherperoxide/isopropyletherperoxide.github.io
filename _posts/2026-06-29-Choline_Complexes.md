---
title: "Synthesis of Tetranuclear Chicken Feed Copper Complexes; including a section on Deep Eutectic Solvents"
author: aryl chloride
image: https://isopropyletherperoxide.github.io/assets/images/2026_choline/thumbnail.webp
layout: post
subtitle: "sponsored by the poultry-industrial complex"
twittercard: summary_large_image
toc: true
--- 

*"...it feels like an ad in a cheap hardware store in a part of town where there is at least 4 different people injecting heroin under that store"*<br>
<div align="right"> - <b>Rosa</b>, when presented with this article, 2 days ago </div>

<br>
Deep Eutectic Solvents are a sort of an emerging (?) buzzword in the world of academic chemistry. An entire explanation of the field is unwarranted and out of place here; but a short gist of it is: they consist of mixture of salts (usually one organic and the other inorganic) that undergo a very drastic melting point depression when mixed.[^1]

The most sought-after property of a DES is its ability to act as an ionic liquid. Ionic liquids, as implied by their name - are a class of salt that is liquid below the boiling point of water (most of the time.). Ionic Liquids are yet another such Emerging Buzzword Type of molecule that shows some promising properties in certain application but is quite severely bottlenecked by the high cost. Because of course, most labs who don't make it their purpose to write about ILs would prefer to just buy a gallon of cheap, mass-produced THF or Hexane or HMPA compared to Ultra-Niche-Designer-Drug-Research-Chemical psychoactive alkylimidazole hexafluorophosphate that performs marginally better in a small subset of an already ivory-tower catalytic reaction. 

Despite all this, they are an interesting class of molecule and DESes provide a viable alternative to some expensive ionic fluids and don't require as involved of a synthesis as the aforementioned bespoke organics. The most widespread in literature (unsubstantiated claim but we've seen it a fair few times) DES is made out of a 1:2 mixture of Urea and Choline Chloride. Both chemicals easily accessible to your average ~~bench chemist~~ Chicken Farmer. 

Now, to disregard everything we just said - the topic of this post is not actually the Type II DES at hand. The DES is there just so we could leech off a popular keyword. What we actually are here after are the two interestingly-structured and colored complexes of Choline Chloride made purely for aesthetic enjoyment. As cholinium is a very accessible somewhat bulky quat ammonium ion - the chicken farm supply store does not stock tetramethylammonium hydroxide for some reason.  

### Chemicals
To everyone's dismay - the choline chloride used here was actually just bought from an Aliexpress biochem supplier instead of a farm supply shop. All the local farm-grade stuff came pre mixed with seed and purifying choline chloride from that seems... Annoying at best according to the sciencemadness thread[^2]. The Copper Chloride Dihydrate used here was made by us a few years back from insanely impure gardening store grade Copper Sulfate that had bits of glass and sand in it as an impurity and actually might've just been really shit and impure Copper (II) Chloride instead of sulfate. 

<img style="width: 70%" src="/assets/images/2026_choline/labcels.png"><br>

## Synthesis of the DES 
But; just for the sake of it and because we wanted to play with one ever since we were in high school, let's actually make a type 2 DES before getting to the complexes at hand.

Mixing solid CuCl2 dihydrate and ChCl leads to the formation of a black goop, which is assumed to be the DES in question.[^4]

<img src="/assets/images/2026_choline/DES_pre_mixing.webp"><br>

Heating the solution seems to drive the formation of the goop forward, though we haven't seen a drastic liquefaction that we (wrongly?) assumed would happen. 

<img src="/assets/images/2026_choline/DES_waterbath.webp"><br>

The flavour palate of the DES leaves a lot to be desired; as it does not pair well with a serving of Chicken Strips (Kentucky Fried Chicken, 3.85euro, 5 pcs.) compared to any of the standard dressings or dipping sauces.

**somewhat icky food pic, click at ur own risk**

<img style="filter: blur(10px)" id="evil_chicken" src="/assets/images/2026_choline/DES_Chicken.webp"><br>

<script>
const chicken = document.getElementById('evil_chicken');

chicken.addEventListener('click', async (event) => {
if (blur != true) {
chicken.style.filter = "blur(0px)"
blur = true
}
else {
chicken.style.filter = "blur(10px)"
blur = false
}
})

</script>

(**LEGAL DISCLAIMER: please dont eat this. this is not culinary advice and we are not responsible for any harm caused, physical or mental**)

On sitting out, a brown-red compound that we assume is some impure form of the red choline chlorocuprate is formed in the DES. 

<img src="/assets/images/2026_choline/DES_After.webp"><br>

## Synthesis of the Complexes 
For this we used the procedures provided in (White et al. (1953))[^3]. Two discrete compounds that were described in the paper were obtained, one was isolated.

<img src="/assets/images/2026_choline/solutions.webp"><br>

The red compound is synthesized via the reaction of 0.01 moles (1.7 grams) of Copper (II) chloride withan equimolar amount (1.38 grams) of Choline Chloride in ~50 ml of Methanol, though you should go lighter on the solvent, our copper chloride is just really bad. The original paper uses azeotropic ethanol, but because we are biased against it as a solvent we used methanol instead, which is way too good of a solvent for this compound and leads to No Precipitation. This situation can be fixed by the addition of isopropanol to the methanolic solution, which leads to a precipitation of a brown-orange solid on cooling. On standing in the freezer overnight, sparkly red crystals are formed. They were filtered off and washed with hot 2:1 methanol-isopropanol, which gave us 458 mg of a sparkly red solid. Which corresponds to a lovely... yield of 18.6% of [choline]4[Cu4Cl10O] of theoretical (2.6025 g).

In a previous, trial run of this synthesis we got... 647 mg (49%) out on the same synthesis scaled down by half. Good job!

<img src="/assets/images/2026_choline/final_compound.webp"><br>

The yellow compound is synthesized similarly, but 0.034 moles (4.8 g) of Choline Chloride and 0.011 mol (2.24 g) of Copper (II) Chloride Dihydrate are used instead. The red compound is quite soluble in the methanol-isopropanol mix so you have to be quite careful while purifying and crystallizing it.  

Now, because of the widely acknowledged fact that yellow chemistry is Trash. We could not isolate the yellow solid due to a myriad of technical difficulties. Because we really wanted to hit a deadline, the yellow complex is omitted from this article. We hope it can reappear a bit later.

The classic aqueous method for chlorometalate synthesis was also attempted at a tiny scale (279 mg ChCl to 170 mg CuCl2 dihydrate (1:2 molar ratio), slowly evaporated with a few drops of HCl), yielding a yellow mass of hygroscopic crystals, possibly the same compound as the yellow chlorocuprate mentioned before.

<img src="/assets/images/2026_choline/aq_complex.webp"><br>

## Structures 
Now, there are 2 papers dealing with this compound. White et al.[^3] from 1953 and also a modern paper by De Vreese et al. from 2012[^4]. The original 1953 paper gets the structure of the red compound really wrong, claiming it to be [choline]CuCl3 when it is actually a tetranuclear complex with the formula [choline]4[Cu4Cl10O]. You can look at the structure from the XRD analysis carried out in 2012 down here.

<img src="/assets/images/2026_choline/tetranuclear.png"><br>

The structure of the yellow compound (if we can match the yellow compound from the 1953 paper to the 2011 paper correctly) is also slightly weird. What is supposed to be [choline]2CuCl4 is actually [choline]3CuCl4[Cl], with more choline chloride per choline tetrachlorocuprate unit cell than expected.

<img src="/assets/images/2026_choline/cholinecucl3.png"><br>

## Things That Went Wrong 
Now, usually we like to post articles in the first half of the month, so the quite precarious date on this blogpost might explain the general shoddiness of the chemistry carried out. So lets engage in some rigorous self-criticism and find out what went wrong here in the awful last day rush this post was written in. 

### The Methods:
We... strayed from the method a bit and improvised by the end... Leading to questionable yields and purities. We would strongly suggest using ethanol instead (oftentimes they're more or less equivalent but in this one the lesser polarity of ethanol is actually beneficial compared to methanol).

### The Reagents: 
Our copper chloride was quite impure and probably needs a recrystallization from hydrochloric acid. On standing, Copper (II) Chloride tends to hydrolyse and form basic salts like Cu(OH)Cl that interfere with our synthesis. 

### The Equipment:
Right as we were filtering the yellow compound, the hose on our aspirator pump finally gave way and decomposed, making the vacuum pulled by it negligible. We had to frantically scrape the remains of the rotten hose off the aspirator and force on a new one just to finish this on time.

### The Heat:
The European Heatwave is not treating us well. The heat in the lab seems to poach our brain into a nice and firm hardboiled state. 

## Conclusions 
And you may ask me, what is the purpose of the research carried out? Why did you do this? Besides aesthetic value and a personal obligation we did this because it staves off the Feeling. A compulsive work-habit even when the work isn't very useful helps a lot, no matter what the austrian-style economists might tel you. An alternative would be to just engage in a substance habit but securing funding for that is less trivial than chemistry. Anyways; this stuff can like. Oxidize corn oil? I live in a very sunflower oil country, so I've genuinely never encountered corn oil in my life. A smaller-scope less rushed chemistry post will probably come next. 

<img class="bw" src="/assets/images/2026_choline/corn_oil.png"><br>

## Footnotes 
[^1]: Smith, E. L.; Abbott, A. P.; Ryder, K. S. Deep Eutectic Solvents (DESs) and Their Applications. Chem. Rev. 2014, 114 (21), 11060–11082. <a href="https://doi.org/10.1021/cr300162p">https://doi.org/10.1021/cr300162p</a>
[^2]: Sources of choline chloride in Australia, sciencemadness.org forum users. <a href="https://www.sciencemadness.org/talk/viewthread.php?tid=77467#pid494461">https://www.sciencemadness.org/talk/viewthread.php?tid=77467#pid494461</a>
[^3]: White, P. L.; Hegsted, D. M.; Mayer, J. Two Complex Salts of Choline and Copper Chloride and Their Activity as Catalysts of Fat Oxidation1. J. Am. Chem. Soc. 1953, 75 (10), 2352–2354. <a href="https://doi.org/10.1021/ja01106a018">https://doi.org/10.1021/ja01106a018</a>
[^4]: De Vreese, P.; Brooks, N. R.; Van Hecke, K.; Van Meervelt, L.; Matthijs, E.; Binnemans, K.; Van Deun, R. Speciation of Copper(II) Complexes in an Ionic Liquid Based on Choline Chloride and in Choline Chloride/Water Mixtures. Inorg. Chem. 2012, 51 (9), 4972–4981. <a href="https://doi.org/10.1021/ic202341m">https://doi.org/10.1021/ic202341m</a>

