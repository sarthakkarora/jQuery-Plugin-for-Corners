## jQuery Image Corner Plugin 

### Introduction

This repository provides jQuery Corner plugin, offering customization options for adding visually appealing corners to website elements. This plugin simplifies the creation of CSS3 curved corners for images using jQuery. 

### Features

* **Customizable Corner Radius:** Precisely control the radius of each corner individually.
* **Corner Shape Flexibility:** Choose from various corner shapes, including rounded, elliptical, and custom (using SVG paths).
* **Advanced Styling:** Apply border styles, colors, shadows, and gradients to corners for intricate designs.
* **Content Clipping:** Prevent content overflow within rounded corners for a clean appearance.
* **Performance Optimization:** Prioritizes performance through techniques like hardware acceleration and lazy loading (when applicable).
* **Accessibility:** Ensures compatibility with assistive technologies by considering ARIA attributes and focus styles.
* **Responsiveness:** Automatically adjusts corner styles based on screen size for optimal display on different devices.

### Installation

1. **Download:** Obtain the plugin files (jQuery library, `jquery.corner.js`) from the project repository.
2. **Include in HTML:** Add the following script tags to your HTML:

### Usage

1. **Apply the `corner` class:** Add the `corner` class to the target image element.
2. **Customize options (optional):** Use data attributes or JavaScript to specify corner radius, shape, and other settings.


### Options

The plugin offers a wide range of options to fine-tune the appearance of corners:

* `radius`: Sets the corner radius (default: '5px').
* `shape`: Specifies the corner shape (default: 'round', options: 'round', 'ellipse', 'custom').
* `customPath`: Defines a custom SVG path for the corner shape.
* `borderStyle`: Sets the border style (default: 'solid').
* `borderWidth`: Sets the border width (default: '1px').
* `borderColor`: Sets the border color (default: 'transparent').
* `boxShadow`: Applies a box shadow to the corner.
* `clipContent`: Enables content clipping within the corner (default: false).
* `animation`: Defines CSS animations for corner transitions.

### Contributing

I welcome contributions to enhance the plugin.
