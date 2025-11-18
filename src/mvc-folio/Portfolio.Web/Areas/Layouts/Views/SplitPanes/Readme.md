## Split Pane Layout Using CSS Grid

This split pane layout is implemented using **CSS Grid**, a powerful layout system that provides precise control over page structure. Here's how it works:

### Core Implementation

The layout uses `display: grid` on the container element, which enables CSS Grid layout mode. The key property is `grid-template-columns: 300px 1fr`, which creates two columns:

- **Left Pane**: Fixed at `300px` width - ideal for navigation or sidebar content
- **Right Pane**: Uses `1fr` (one fractional unit) - automatically fills the remaining available space

### Key Features

- **Full Height Layout**: The container uses `height: 100vh` to span the entire viewport height, creating an immersive full-screen experience.

- **Responsive Design**: On screens smaller than 768px, the layout automatically adapts using `grid-template-columns: 1fr` and `grid-template-rows: auto 1fr`, stacking the panes vertically instead of side-by-side.

- **Independent Scrolling**: Each pane has `overflow-y: auto`, allowing content in each section to scroll independently without affecting the other.

### Advantages of CSS Grid

- **Simplicity**: No JavaScript or complex calculations required
- **Performance**: Native browser layout engine handles all positioning
- **Maintainability**: Clean, declarative CSS that's easy to understand and modify
- **Flexibility**: The `1fr` unit automatically adjusts to browser resizing
- **Modern**: Works across all modern browsers with excellent support

This approach demonstrates how CSS Grid can replace traditional float-based or flexbox-heavy layouts with a more intuitive and efficient solution for split-pane interfaces.
