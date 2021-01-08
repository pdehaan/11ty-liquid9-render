# 11ty-liquid9-render

Testing LiquidJS@9 support in Eleventy 1.0.0-beta.

Note that @11ty/eleventy v1.x isn't published to npm currently, so we're installing it via GitHub using <kbd>npm i github:11ty/eleventy -D</kbd>.

The src/home.liquid template uses the new LiquidJS@9 `render` tag (instead of the deprecated `include` tag), and passes a custom variable, `name` to the render template.

```liquid
{% render header.liquid, name: "peter" %}
```

Where the "header.liquid" template lives in our src/_includes/header.liquid directory and looks like the following:

```liquid
<header>
  <p>This is a rendered header</p>
  <p>Author: {{ name }}</p>
  <p>Rank: {{ rank }}</p>
</header>
```

Note that the render template uses both a `{{ name }}` and `{{ rank }}` variable, yet only the `name` variable was passed along via the `{% render %}` tag, so the generated HTML output will display the following:

```html
<header>
  <p>This is a rendered header</p>
  <p>Author: peter</p>
  <p>Rank: </p>
</header>
```
