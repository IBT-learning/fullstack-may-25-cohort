# HTML Lesson

## Introduction to HTML
HTML (HyperText Markup Language) is the standard language for creating web pages. It structures web content and is used in combination with CSS and JavaScript to create interactive websites.

## Basic Structure of an HTML Document
An HTML document consists of elements enclosed in tags. Below is a basic structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Web Page</title>
</head>
<body>
    <h1>Welcome to My Website</h1>
    <p>This is a paragraph.</p>
</body>
</html>
```

### Explanation of Elements:
- `<!DOCTYPE html>`: Declares the document type as HTML5.
- `<html>`: The root element of the page.
- `<head>`: Contains metadata like character set, title, and viewport settings.
- `<title>`: Defines the title displayed on the browser tab.
- `<body>`: Contains the visible content of the page.
- `<h1>`: A heading element (largest size).
- `<p>`: A paragraph element.

## Common HTML Elements
### Headings
HTML provides six levels of headings:
```html
<h1>Main Heading</h1>
<h2>Subheading</h2>
<h3>Smaller Subheading</h3>
<h4>...</h4>
<h5>...</h5>
<h6>Smallest Heading</h6>
```

### Paragraphs and Line Breaks
```html
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
<br> <!-- Line break -->
```

### Lists
#### Ordered List
```html
<ol>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ol>
```
#### Unordered List
```html
<ul>
    <li>Item A</li>
    <li>Item B</li>
    <li>Item C</li>
</ul>
```

### Links and Images
#### Links
```html
<a href="https://www.example.com">Visit Example</a>
```
#### Images
```html
<img src="image.jpg" alt="A sample image" width="300">
```

### Tables
```html
<table border="1">
    <tr>
        <th>Name</th>
        <th>Age</th>
    </tr>
    <tr>
        <td>Alice</td>
        <td>25</td>
    </tr>
    <tr>
        <td>Bob</td>
        <td>30</td>
    </tr>
</table>
```

### Forms
```html
<form action="submit.php" method="POST">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    <br>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    <br>
    <input type="submit" value="Submit">
</form>
```

### Multimedia Elements
#### Videos
```html
<video width="400" controls>
    <source src="video.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
```
#### Audio
```html
<audio controls>
    <source src="audio.mp3" type="audio/mp3">
    Your browser does not support the audio element.
</audio>
```
#### Iframes
```html
<iframe src="https://www.example.com" width="600" height="400"></iframe>
```

## Block-Level vs Inline Elements
### Block-Level Elements
Block elements take up the full width available and start on a new line.
Examples:
```html
<div>This is a block element.</div>
<p>Paragraph is also block-level.</p>
```

### Inline Elements
Inline elements do not start on a new line and only take up as much width as needed.
Examples:
```html
<span>This is an inline element.</span>
<a href="#">Inline Link</a>
```

## Document Structure Elements
### Header, Navigation, and Footer
```html
<header>
    <h1>Website Header</h1>
</header>
<nav>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
<section>
    <article>
        <h2>Article Title</h2>
        <p>Article content...</p>
    </article>
</section>
<footer>
    <p>Footer Information</p>
</footer>
```

## Attributes in HTML
HTML elements can have attributes that provide additional information. Common attributes include:
- `href`: Specifies the URL for links.
- `src`: Specifies the source for images, videos, and iframes.
- `alt`: Provides alternative text for images (important for accessibility).
- `width` and `height`: Define the size of elements.
- `id`: Unique identifier for elements.
- `class`: Groups elements for styling.
- `title`: Provides extra information (appears as a tooltip on hover).
- `style`: Adds inline CSS styles.

Example:
```html
<img src="image.jpg" alt="A beautiful sunset" width="500">
<a href="https://www.example.com" title="Go to Example">Click Here</a>
```

## Accessibility in HTML
Accessibility ensures that web content is usable by all people, including those with disabilities. Best practices include:
- **Using semantic elements** for better screen reader support.
- **Adding `alt` attributes** to images.
- **Providing labels for form inputs**:
```html
<label for="username">Username:</label>
<input type="text" id="username" name="username">
```
- **Using ARIA (Accessible Rich Internet Applications) attributes** where necessary:
```html
<button aria-label="Close the popup">X</button>
```
- **Ensuring keyboard navigation** by using focusable elements like `<button>` instead of `<div>` for clickable items.

## Conclusion
HTML is the backbone of web development. Learning its structure, elements, attributes, and best practices for accessibility is the first step in building web applications.

