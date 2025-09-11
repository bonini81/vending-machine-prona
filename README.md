# Cocktail Vending Machine App

A 3-page interactive cocktail making experience for a vending machine display (1080px × 1920px).

## 🍸 App Flow

1. **Welcome Page** - Same for all cocktails, press start to begin
2. **Video Page** - 30-second cocktail preparation video (auto-advance)
3. **Final Page** - 1-minute cocktail showcase (auto-advance back to welcome)

The app cycles through 4 different cocktails automatically.

## 📁 Project Structure

```
index.html              # Main app file
css/
  ├── layout.css        # Font definitions and layout
  └── styles.css        # Cocktail app specific styles
js/
  └── index.js          # App logic and cocktail rotation
assets/
  ├── videos/           # 30-second cocktail preparation videos
  │   ├── martini-video.mp4
  │   ├── mojito-video.mp4
  │   ├── pina-colada-video.mp4
  │   └── old-fashioned-video.mp4
  ├── images/           # Final cocktail images
  │   ├── martini-final.jpg
  │   ├── mojito-final.jpg
  │   ├── pina-colada-final.jpg
  │   └── old-fashioned-final.jpg
  └── [existing assets]  # Logo, buttons, etc.
```

## 🍹 Cocktails Configuration

The app is configured for 4 cocktails:

1. **Martini Clásico**
2. **Mojito Refrescante** 
3. **Piña Colada Tropical**
4. **Old Fashioned**

Each cocktail has:
- A 30-second preparation video
- A final cocktail image
- Custom text for the final page

## 🎬 Video Requirements

- **Format:** MP4 (H.264 codec recommended)
- **Duration:** ~30 seconds
- **Resolution:** 800x600 or similar (will scale automatically)
- **Audio:** Optional (videos play muted by default)

## 🖼️ Image Requirements

- **Format:** JPG or PNG
- **Size:** 400x500px maximum (will scale proportionally)
- **Content:** High-quality finished cocktail photos

## ⚙️ Customization

### Adding/Changing Cocktails

Edit the `cocktails` array in `js/index.js`:

```javascript
const cocktails = [
    {
        id: 1,
        name: "Your Cocktail Name",
        video: "assets/videos/your-video.mp4",
        finalImage: "assets/images/your-image.jpg",
        finalMessage: "Custom message text",
        description: "Custom description text"
    }
    // ... more cocktails
];
```

### Timing Adjustments

- **Video duration:** Change `30000` in `showVideoPage()` function
- **Final page duration:** Change `60000` in `showFinalPage()` function

### Styling

- Colors and gradients in `css/styles.css`
- Fonts in `css/layout.css`
- Screen size optimized for 1080px × 1920px

## 🚀 Usage

1. Add your cocktail videos to `assets/videos/`
2. Add your final cocktail images to `assets/images/`
3. Update the cocktail configuration in `js/index.js` if needed
4. Open `index.html` in a web browser
5. The app will automatically cycle through all cocktails

## 📱 Vending Machine Deployment

- Optimized for portrait orientation (1080px × 1920px)
- No external dependencies
- Works offline once loaded
- Touch-friendly interface
