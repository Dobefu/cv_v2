+++
title = 'Tetris for the Picosystem'
linkTitle = 'Tetris for the Picosystem'
description = 'A small Tetris clone made for the Picosystem. It has been built to learn about optimisation and working in very constrained environments, both in computing power and memory.'
tags = ['cpp']
date = '2025-02-17T17:14:48+01:00'
lastmod = '2025-11-12T17:14:48+01:00'
weight = 0
draft = false

[params]
    teaserText = 'A small Tetris clone made for the Picosystem. It has been built to learn about optimisation and working in very constrained environments, both in computing power and memory.'
    repository = 'https://github.com/Dobefu/picosystem-tetris'
    imgAlt = 'Screenshot of the Tetris application for the Picosystem'
    imgSrc = '/projects/picosystem-tetris.png'
+++

## Why create this?

As someone with an interest in performance optimisation,
I wanted to see if I could create an application that would run well on a micro-controller.
I did want it to be a game, so I decided to create a Tetris clone.
For the hardware, I chose the [Picosystem](https://shop.pimoroni.com/products/picosystem).
This is a great little device, and it's based on the RP2040 microcontroller.
This gives me a couple of advantages:

- The RP2040 is still quite powerful for a micro-controller, so I still have some space to experiment
- The Picosystem is a complete set of hardware, so I only have to worry about the software
- The display is 240x240 pixels, which is still quite detailed

## Creating the Tetris application

For the programming language, I had several options.
Any embedded language could have been used, but two of them are officially supported by the Picosystem:

- C++
- MicroPython

I chose C++, for multiple reasons:

- It more closely fits my goal of squeezing out as much performance as I can
- I'm personally more familiar with C++ than (Micro)Python
- MicroPython has a limitation, which is that the SDK can only render at half resolution
  - I want to optimise, but cutting the resolution in half would feel like cheating
