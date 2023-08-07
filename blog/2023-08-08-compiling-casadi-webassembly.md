---
title: Compiling CasADi to WebAssembly
description: This is my first post on Docusaurus 2.
authors: nachawati
tags: [casadi,wasm,webassembly]
image: /img/casadi.png
---

Today I revisited [CasADi](https://web.casadi.org/) to see if I could use [emscripten](https://emscripten.org/) to compile it to a WebAssembly and run it inside of a Web browser. CasADi is an awesome tool for performing [symbolic computation](https://en.wikipedia.org/wiki/Computer_algebra) and [automatic differentiation](https://en.wikipedia.org/wiki/Automatic_differentiation), among other things. It also provides interfaces to popular open-source solvers, such as the MINLP solver [BONMIN](https://www.coin-or.org/Bonmin/).

I had previously used CasADi during my PhD to implement a grey-box algorithmic framework that I had designed and aptly named GreyOpt ([paper](https://www.scitepress.org/PublishedPapers/2021/103501/103501.pdf), [slides](http://mason.gmu.edu/~mnachawa/icores2021-slides.pdf)). I also used CasADi for implementing the main backend of [Unity DGMS](https://github.com/nachawati/unity), an open-source JSONiq analytics engine. I thought it would be interesting to see if at least some functionality could be easily ported to run directly in the browser.

It was fairly easy to add a new executable target in [CMAKE](https://cmake.org/), along with a simple C API that wrapped some functions for constructing symbolic variables and for performing basic symbolic arithmetic. I initially got some compilation errors stemming from an issue with some preprocessor directives that conditionally enabled the `pack` and `unpack` methods for `unsigned int&` arguments based on the value of `SIZE_MAX` (WASM support is currently only 32-bit).

After resolving those errors, the build and linking of the CasADi WebAssembly completed successfully. Now I can use CasADi to do computer algebra in Chromium ;-)