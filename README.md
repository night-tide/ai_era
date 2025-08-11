# Wisp Landing Page

A modern, responsive landing page for Wisp - the future of team communication from Nighttide.

## Features

- 🎨 Modern, clean design with gradient backgrounds
- 📱 Fully responsive for all devices
- ⚡ Fast loading with optimized assets
- 📧 Email collection form for waitlist
- 🔗 Social media links in footer
- 🎬 Placeholder for product demo GIF

## File Structure

```
wisp_website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── assets/             # Images and other assets
│   └── logo.png        # Company logo (placeholder)
└── README.md           # This file
```

## Setup Instructions

### 1. Add Your Logo
Replace the placeholder logo in `assets/logo.png` with your actual company logo.

### 2. Add Your Product GIF
Replace the GIF placeholder in the hero section with your actual product demo GIF:
```html
<div class="gif-container">
    <img src="assets/product-demo.gif" alt="Wisp Product Demo" class="product-gif">
</div>
```

### 3. Update Content
- Modify the problem description to match your specific use case
- Update the features to reflect your actual product capabilities
- Change the statistics to real data about your target market
- Update social media links in the footer

### 4. Deploy to GitHub Pages

1. **Create a GitHub Repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/wisp-website.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click "Settings" tab
   - Scroll down to "GitHub Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

3. **Your site will be available at:**
   `https://yourusername.github.io/wisp-website`

## Customization

### Colors
The main color scheme uses purple gradients. To change colors, update these CSS variables in `styles.css`:
- Primary gradient: `#667eea` to `#764ba2`
- Text colors: `#1a1a1a`, `#4a5568`
- Background colors: `#f8fafc`, `#ffffff`

### Fonts
The site uses Inter font from Google Fonts. To change fonts, update the font-family in the CSS and the Google Fonts link in the HTML.

### Content
All content is in the HTML file and can be easily modified. The structure is semantic and well-commented for easy editing.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

The site is optimized for fast loading:
- Minimal external dependencies (only Google Fonts)
- Optimized CSS and JavaScript
- Responsive images
- Efficient animations

## License

This project is for internal use by Nighttide. All rights reserved.

## Support

For questions or issues, please contact the development team.
