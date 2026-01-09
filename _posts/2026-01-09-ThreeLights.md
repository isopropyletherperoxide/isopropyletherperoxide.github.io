---
title: Favourite Light Sources of Yesteryear 
author: arylia incandenza
image: https://isopropyletherperoxide.github.io/assets/images/2026_three_lights/noise_diode_night.webp 
layout: post
subtitle: "💡 (lightbulb emoji)"
--- 

<img src="/assets/images/2026_three_lights/danger.webp"><br>

The emission of visible (and invisible) light is up there among the best pastimes available to a researcher/tinkerer/infantile individual. Light sources sit in a very pleasant area of "spectacle-danger", making them a fun activity to engage in for children and developmentally stunted adults alike. Most of these were part of bigger projects, however due to technical difficulties or just general lack of skill, the bigger projects failed to materialize (for now!)... So I cut my losses and compiled 3 of them in a Post. 

### Xenon Tube
This is the ИНП3-7/80A (INP3-7/80A)[^1] - a big xenon-filled tube that functions as the pump source for an old Nd:YAG laser. These ideally should live in a nice snug aluminium enclosure, complete with watercooling, hanging out in an undeniably sapphic way with a beautiful girly-pink neodymium-doped yttrium aluminium garnet rod; I do not have the funds to afford such a machine (anyone, please? BTC:bc1q93g87lf8akzsn8qr5dz30e32s6lh77raskx8hc). So I had to make do with a replacement tube that I scored for 8$ on the local marketplace. It is a beautiful long glass tube with two metal electrodes, destined to be tickled gently with a high voltage to make path for a violent discharge of a big (2160 uF at 500V) capacitor. In spirit, an oversized xenon camera flash. I got it for the purpose of putting really high voltage AC through it and watching the arcs twinkle inside. 

<video controls>
<source src="/assets/images/2026_three_lights/xenon.webm">
</video>

For the power supply I am using an AC flyback from a Soviet black and white CRT television, greatly overdriven with a ZVS[^2] driver, powered by a really big switching power supply[^3]. You can get away with a smaller 555 timer based power supply, but an AC flyback is preferable, as capacitive coupling is really fun.

<img src="/assets/images/2026_three_lights/zvs.webp"><br>

Really, though I'd love to see it in action, its most likely fate is a decorative piece somewhere in the lab, powered with maybe a smaller flyback based power supply. The current one, like a hermit crab - lives inside of a shell of a broken ATX power supply and draws close to a kilowatt, also just like a hermit crab. It scares me.

<video controls>
<source src="/assets/images/2026_three_lights/xenon_cap.webm">
</video>

### Hollow Cathode Lamps 
HCLs[^4] are the overgrown cousin of the neon bulb family. Used in spectroscopy as a reference source, these lamps - just like their commonplace relatives consist mostly of a tube filled with low pressure neon and two electrodes connected inside for easy mode ionization (If you're worth anything, do it capacitively). While the bulb itself is made from normal borosilicate glass, the front window is made out of fused quartz, hinting at what kinds of wavelengths we're dealing with here. The main feature that differentiates them from normal neon bulbs (outside of their gargantuan size!) is the aforementioned hollow cathode. The hollow cathode has a thin layer of whatever element of interest applied to them during manufacture. In the appropriate mode of operation, the metal/whatever sputters off it, gets really excited in the atmosphere of ionized buffer gas and emits light radiation of desirable wavelengths.

<img src="/assets/images/2026_three_lights/HCL_light.webp"><br>

This is not the light source that I initially wanted to play with, but I managed to score a giant box of a dozen or so of different ЛТ-2 (LT-2) lamps for the price of lunch. After leak checking them with a small slayer-exciter coil, I took to designing a power supply for such endeavours. It ended up being a haphazardly crafted device consisting of a project box fitted with voltmeters and ammeters that I tried beating into shape (no, you cannot make a bipolar ammeter by just twisting the adjustment screw really hard), two pots for rough and fine adjustment and a YH1168A module. It is not a good power supply. The ripple on the output when unloaded is somewhere around a few volts (!! :( !!), but it is suitable for powering basic digital vacuum tube circuitry and gas discharge tubes. For experimentation, I have picked a boron-doped lamp, thinking it'd produce an interesting and distinct color.

<img src="/assets/images/2026_three_lights/hcl.webp"><br>

My procedure for powering such a light is: Connecting the anode via a ballast resistor (usually within the order of ~2Kohm) to the positive rail of the power supply, connecting the cathode to the ground rail and twiddling the knob until I reach striking voltage. Neon lights are negative resistance devices, so after striking, the current draw drastically increases and excess voltage is dropped on the ballast resistor and turned into scorching heat and flames whenever a clueless operator decides to use a 1W thin film resistor as the ballast. For best performance, you're supposed to match the current with the current written in the documentation of the tube (~20mA for this fine specimen), as overcurrents can damage the thin sputtered layer of whatever element is on the cathode. The striking voltage is somewhere around 500V, though I could run such a bulb relatively fine at 360V. 

<video controls>
<source src="/assets/images/2026_three_lights/HCL_powered.webm">
</video>

Sadly, as we cannot see into the best segment of the spectrum, the characteristic UV peaks of Boron are beyond our perception. These bulbs are not fit for our mediocre eyes. At the time of purchase I have naively thought that there will be a faint green line present alongside the invisible UV lines of boron. The "monochromator" that I have used to try to make this possible consisted of a magnifying lens I had lying around, tinfoil wrapped around the tube to prevent stray light from illuminating my bedroom and either an x-cube or a diffraction grating I got from China for a great price. The green line was not visible due to one of the following reasons or due to the combination thereof: my terrifying "spectroscopic equipment", the green line not existing/being too faint for our eyes to see, the mode of operation being incorrect or the tubes being too busted. Point is, it scared the timid ghostly green glow that I so yearned for away. Too bad. On the bright side, it is a good and powerful neon light source, so the green and blue lines that neon has[^5] are much more visible... Not the worst ending... though it makes me yearn for a HeNe laser now... 

<img src="/assets/images/2026_three_lights/hcl_xcube.webp"><br>

<img src="/assets/images/2026_three_lights/hcl_diffract.webp"><br>

### Helium-Filled Noise Diode
These experiments stem from a brief obsession with tube technology that sort of died down because it all turned into a long tangentially related project that moves along at a glacial pace. What I did get from it are some nice frames of the kinds of glow discharge you don't see every day. This is a ТГ1П (TG1P) helium-filled diode[^6], used as a noise source for radio equipment. Usually, diodes are not filled with anything, only pumped down to a vacuum, except for the often used in the past high power mercury vapour rectifiers/ignitrons and some inert gas filled tubes. Oftenmost you can find such a gas filling inside of a thyratron, a modern precursor to the SCR (where did you think the word thyristor come from?). Unlike the aforementioned gas-filled thyratrons and mercury vapour filled diodes, these are very low power tubes, rated for less than 50 mA anode current. 

<img src="/assets/images/2026_three_lights/noise_diode_night.webp"><br>

The working principle behind these is similar to the historically used arc converter[^7]. At certain potentials, the glow discharge of gas-filled lamp continously extinguishes and reignites. This effect can be exploited both to generate a low frequency sawtooth waveform, like the one observed in a neon tube blinky (Pearson-Anson oscillator) or, when placed in the field of a permanent magnet, used to generate a dense noise, stretching all the way out into the 10+ megahertz range. 

<img src="/assets/images/2026_three_lights/noise_diode_zoom.webp"><br>

These ignite at somewhere around 80V, draw around 1-1.3 amps (standard 6.3V voltage) for the heater and 37.5mA for the anode, so it was powered via a YH1168A boost converter board through a ballast resistor. After a few minutes, the insides are hot enough and the tube starts to work in its normal mode of operation.

<img src="/assets/images/2026_three_lights/noise_diode_setup.webp"><br>

So far, publishing a nice spectral characteristic of such a noise source is not very possible, the power supply I used for this is incredibly noisy (look at those ugly bumps...), and whatever ripple produced by it undoubtedly adds a bunch of unnecessary bullshit to the spectral data. Also, my apartment is ungrounded, which is unsafe and makes using any appliance much more dangerous. Even worse, it makes all sorts of noise measurements much less precise. If you are interested in noise source design using similar tubes, check out the footnotes[^8] [^9]. 

<img src="/assets/images/2026_three_lights/noise1.webp"><br>

<img src="/assets/images/2026_three_lights/noise2.webp"><br>

Very sad, but this is being slowly worked on, low-noise high voltage sources are a niche product that can take up a whole room or cost more than whatever my life's worth. Or both. Not the last time you see this tube I hope. 

Peace.

### Footnotes
[^1]: <a href="https://donklipstein.com/inp3780a.pdf">https://donklipstein.com/inp3780a.pdf</a> INP3/7-80A datasheet
[^2]: <a href="http://uzzors2k.com/index.php?page=flybacktransformerdrivers">"http://uzzors2k.com/index.php?page=flybacktransformerdrivers"</a> 
[^3]: <a href="https://www.aliexpress.com/item/1005005191633442.html">"https://www.aliexpress.com/item/1005005191633442.html"</a> switch mode power supply, 1.2kW, 33.3A @ 36V
[^4]: <a href="https://en.wikipedia.org/wiki/Hollow-cathode_lamp">"https://en.wikipedia.org/wiki/Hollow-cathode_lamp"</a>
[^5]: <a href="https://en.wikipedia.org/wiki/Neon#/media/File:10_(Ne_I)_NIST_ASD_emission_spectrum.png">"https://en.wikipedia.org/wiki/Neon#/media/File:10_(Ne_I)_NIST_ASD_emission_spectrum.png"</a>
[^6]: <a href="https://web.archive.org/web/20191121064714/http://www.155la3.ru/tg1p.htm">"https://web.archive.org/web/20191121064714/http://www.155la3.ru/tg1p.htm"</a> russian page on the TG1P
[^7]: <a href="https://en.wikipedia.org/wiki/Arc_converter">"https://en.wikipedia.org/wiki/Arc_converter"</a>
[^8]: <a href="https://electronicprojectsforfun.wordpress.com/making-noise/noise-sources-i-have-built/a-tube-noise-source-using-the-2d3b-tube/">"https://electronicprojectsforfun.wordpress.com/making-noise/noise-sources-i-have-built/a-tube-noise-source-using-the-2d3b-tube/"</a>
[^9]: <a href="https://pubs.aip.org/aapt/ajp/article-abstract/32/7/v/1047075/Noise-Generators">"https://pubs.aip.org/aapt/ajp/article-abstract/32/7/v/1047075/Noise-Generators"</a>
