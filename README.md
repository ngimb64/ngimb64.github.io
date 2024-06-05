# Jekyll/Tailwind CSS

![Jekyll](https://img.shields.io/badge/Jekyll-v3.9.0-red.svg)

[Jekyll](https://jekyllrb.com/) is a static website generator that works seamlessly with [GitHub Pages](https://pages.github.com/).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Credits](#credits)
- [License](#license)

## Installation

First, install [Jekyll](https://jekyllrb.com/docs/).

Then ensure Tailwind CSS and daisyUI & Prettier plugins are installed:

Dev dependencies should be easily installable with:
`npm install`

- [Tailwind CSS](https://tailwindcss.com/docs/installation)
- [daisyUI](https://daisyui.com/docs/install/)
- [Prettier](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)
- Also ensure to install npm package tailwindcss-cli to avoid annoying warning

In a separate terminal window, run this command in project root directory to
ensure tailwind generates CSS based in implemneted classes in HTML and JS:

`npx tailwindcss -i ./src/css/input.css -o ./src/css/tailwind.css --autoprefixer --watch`

Then run these commmands in the main window in projet root directory:

1. `bundle install`
1. `bundle exec jekyll serve`

**Note**: Ensure to build the project locally before pushing with `bundle exec jekyll build`
