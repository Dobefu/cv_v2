+++
title = 'DLiteScript'
linkTitle = 'DLiteScript'
description = 'My custom programming language, designed to be easy to use. Built to learn more about how programming languages work under the hood.'
tags = ['go']
date = '2025-12-06T07:27:22+01:00'
lastmod = '2025-12-06T07:27:22+01:00'
weight = 0
draft = false

[params]
    teaserText = "My custom programming language, designed to be easy to use but very powerful. I've built this to learn more about how programming languages work under the hood. Also includes a formatter and linter."
    repository = 'https://github.com/Dobefu/DLiteScript'
    imgAlt = 'DLiteScript logo'
    imgSrc = '/projects/dlitescript.png'
+++

## Why a programming language?

In order to learn more about programming languages and how they work,
I wanted to build an operator-precedence parser.
I went with a [Pratt Parser](https://en.wikipedia.org/wiki/Operator-precedence_parser#Pratt_parsing), since that's one of the fastest parsers.
This was successful, and the initial result can be found on my [GitHub](https://github.com/Dobefu/pratt-parser).
but I wanted to learn more, so I tried to see if I could extend it to become a full programming language.
It's still in early stages, but I'm already quite happy with how far I got.
