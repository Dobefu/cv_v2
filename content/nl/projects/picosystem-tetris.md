+++
title = 'Tetris voor de Picosystem'
linkTitle = 'Tetris voor de Picosystem'
description = 'Een kleine Tetris clone, gemaakt voor de Picosystem. Het is gebouwd om te leren over optimalisatie en werken in zeer beperkte omgevingen, zowel in rekenkracht als in geheugen.'
tags = ['cpp']
date = '2025-02-17T17:14:48+01:00'
lastmod = '2025-11-12T17:14:48+01:00'
weight = 0
draft = false

[params]
    teaserText = 'Een kleine Tetris clone, gemaakt voor de Picosystem. Het is gebouwd om te leren over optimalisatie en werken in zeer beperkte omgevingen, zowel in rekenkracht als in geheugen.'
    repository = 'https://github.com/Dobefu/picosystem-tetris'
    imgAlt = 'Schermafbeelding van de Tetris applicatie voor de Picosystem'
    imgSrc = '/projects/picosystem-tetris.png'
+++

## Waarom heb ik dit gemaakt?

Als iemand met een interesse in optimalisatie van software
wilde zien of ik een applicatie kon maken die goed zou draaien op een micro-controller.
Ik wilde ook dat het een spel zou worden, dus ik besloot een Tetris clone te maken.
Voor de hardware heb ik gekozen voor de [Picosystem](https://shop.pimoroni.com/products/picosystem).
Dit is een uitstekend apparaat, en is gebaseerd op de RP2040 microcontroller.
Dit geeft me een aantal voordelen:

- De RP2040 is nog steeds vrij krachtig voor een micro-controller, dus ik heb ruimte om te experimenteren
- De Picosystem is een compleet set hardware, dus ik hoef alleen op de software te focussen
- Het display is 240x240 pixels, wat nog steeds vrij gedetailleerd is

## Het maken van de Tetris applicatie

Voor de programmeertaal had ik verschillende opties.
Elke embedded taal kon worden gebruikt, maar twee van de officiële talen worden officieel ondersteund door de Picosystem:

- C++
- MicroPython

Ik koos voor C++, om verschillende redenen:

- Het past meer bij mijn doel om zo veel mogelijk prestaties te krijgen
- Ik ben persoonlijk meer bekend met C++ dan (Micro)Python
- MicroPython heeft een beperking, namelijk dat de SDK alleen half resolutie kan renderen
  - Ik wil optimaliseren, maar halveren van de resolutie zou voelen als valsspelen
