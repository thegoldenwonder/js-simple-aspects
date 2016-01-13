# Aspect Oriented Programming Methods for JS

Naive implementation of some _aspect oriented_ wrapper functions that could be used with JS functions. It's just a minimalistic experiment. There are loads of good libraries out there, check out NPM.

## Motivation

The idea of AOP is nice: add cross-cutting functionality while leaving the original implementation code intact. The added functionality will generally include stuff that is not the main responsibility of the function being wrapped, the canonical example being logging. Other examples would be profiling, or pipelines that avoid using a pub-sub pattern. This latter example is interesting, because the coupled code does not need to publish or subscribe to anything. It is the aspect wrappers that do the linking, making the pattern very unobtrusive.

## Caveats

1. Use at your own risk, etc..
2. This implementation is most friendly to a functional programming approach. In particular, one without the risk of too many side effects. While it should be OK in other instances, you'd probably want to avoid situations such as the advice function manipulating the same objects and values as the target function does.

### Refs

[Wikipedia article on Aspect Oriented Programming](https://en.wikipedia.org/wiki/Aspect-oriented_programming)
