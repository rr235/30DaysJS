> Go to https://rr235.github.io/30js/ for all pages.

# 1. [Drum Kit](drumKit/index.html)

* `<kbd>` - The HTML Keyboard Input element (`<kbd>`) represents a span of inline text denoting textual user input from a keyboard, voice input, or any other text entry device. By convention, the user agent defaults to rendering the contents of a` <kbd>` element using its default monospace font, although this is not mandated by the HTML standard.
* `transitionend` event - The `transitionend` event is fired when a CSS transition has completed. In the case where a transition is removed before completion, such as if the transition-property is removed or display is set to "none", then the event will not be generated.

# 2. [Clock](clock/index.html)

* `transform-origin` css - The transformation origin is the point around which a transformation is applied. For example, the transformation origin of the `rotate()` function is the center of rotation. (This property is applied by first translating the element by the negated value of the property, then applying the element's transform, then translating by the property value.)
* `transition-timing-function` css - The transition-timing-function CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.
* `cubic-bezier` css - The cubic-bezier() functional notation defines a cubic Bézier curve. As these curves are continuous, they are often used to smooth down the start and end of the animation and are therefore sometimes called easing functions.

A cubic Bézier curve is defined by four points P0, P1, P2, and P3. P0 and P3 are the start and the end of the curve and, in CSS these points are fixed as the coordinates are ratios (the abscissa the ratio of time, the ordinate the ratio of the output range). P0 is (0, 0) and represents the initial time and the initial state, P3 is (1, 1) and represents the final time and the final state.

Not all cubic Bézier curves are suitable as timing functions as not all are mathematical functions; i.e., curves that for a given abscissa have zero or one value. With P0 and P3 fixed as defined by CSS, a cubic Bézier curve is a function, and is therefore valid, if and only if the abscissas of P1 and P2 are both in the [0, 1] range.

Cubic Bézier curves with the P1 or P2 ordinate outside the [0, 1] range may generate bouncing effects.

![cubic bezier](clock/cubic-bezier.png)