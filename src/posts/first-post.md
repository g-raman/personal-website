---
title: First post
imgUrl: static/test/url
youtubeId: someId
publishedAt: 2025-11-14
summary: A summary
---

# Markdown Test Document

This document contains examples of all major Markdown elements for testing purposes.

# Headings

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

## Text Formatting

**Bold text**
_Italic text_
**_Bold and italic_**
~~Strikethrough~~
`Inline code`

## Links and Images

[Link text](https://example.com)
[Link with title](https://example.com 'Hover title')

![Alt text](https://via.placeholder.com/150)
![Image with title](https://via.placeholder.com/150 'Image title')

## Lists

### Unordered List

- Item 1
- Item 2
  - Nested item 2.1
  - Nested item 2.2
    - Deeply nested item
- Item 3

### Ordered List

1. First item
2. Second item
   1. Nested item 2.1
   2. Nested item 2.2
3. Third item

### Task List

- [x] Completed task
- [ ] Incomplete task
- [ ] Another incomplete task

## Blockquotes

> Single line blockquote

> Multi-line blockquote
> continues here
> and here

> Nested blockquote
>
> > Second level
> >
> > > Third level

## Code Blocks

Inline code: `const x = 5;`

```javascript
// JavaScript code block
function greet(name) {
	return `Hello, ${name}!`;
}
```

```python
# Python code block
def greet(name):
    return f"Hello, {name}!"
```

```bash
npm install
cd project-directory
npm start
```

```text
Plain text code block
No syntax highlighting
```

## Tables

| Header 1 | Header 2 | Header 3 |
| -------- | -------- | -------- |
| Row 1    | Data     | More     |
| Row 2    | Data     | More     |

| Left aligned | Center aligned | Right aligned |
| :----------- | :------------: | ------------: |
| Left         |     Center     |         Right |
| Text         |      Text      |          Text |

## Horizontal Rules

---

---

---

## Escaping Characters

\*Not italic\*
\`Not code\`
\[Not a link\]

## HTML Entities

&copy; &trade; &reg;
&lt; &gt; &amp;

## Line Breaks

Line with two spaces at end  
Creates a line break

Line with backslash at end\
Also creates a line break

## Footnotes

Here's a sentence with a footnote[^1].

[^1]: This is the footnote content.

## Definition Lists

Term 1
: Definition 1

Term 2
: Definition 2a
: Definition 2b

## Abbreviations

The HTML specification is maintained by the W3C.

_[HTML]: Hyper Text Markup Language
_[W3C]: World Wide Web Consortium

## Inline HTML (if supported)

<div style="color: red;">
  This is red text
</div>

<details>
<summary>Click to expand</summary>

Hidden content here

</details>

## Special Characters

em dash — en dash –
Ellipsis…
"Smart quotes"
'Single smart quotes'

## Mixed Content

You can **combine _multiple_ formatting** styles `with code` and [links](https://example.com).

1. **Bold list item**
2. _Italic list item_
3. `Code in list`
4. [Link in list](https://example.com)

> Blockquote with **bold**, _italic_, and `code`
>
> - List in blockquote
> - Another item

---

End of test document.
