# Jekyll Blog Setup Guide for itanveer.tech

## 🚀 Getting Started with Your Jekyll-Powered Blog

Your blog is now configured with Jekyll for dynamic content generation. Follow these steps to activate the full Jekyll functionality.

## ✅ Prerequisites Check

1. **Ruby Installation**: Ruby 3.4.5 detected in C:\Ruby34-x64\
2. **Project Structure**: Complete Jekyll structure ready
3. **Configuration**: _config.yml configured for your site

## 🔧 Installation Steps

### Option 1: Complete Ruby Setup (Recommended)
1. Download **Ruby+Devkit** from [rubyinstaller.org](https://rubyinstaller.org/)
2. Choose the **WITH DEVKIT** version (includes RubyGems and Bundler)
3. During installation, select "Add Ruby executables to PATH"
4. Run the RIDK install wizard when prompted

### Option 2: Fix Current Installation
Your current Ruby installation is missing RubyGems. You can:
```powershell
# Download Ruby+Devkit installer and reinstall over existing
# Or manually install RubyGems from https://rubygems.org/pages/download
```

## 📁 Project Structure

```
itanveer-tech/
├── _config.yml              # Jekyll configuration
├── _layouts/                 # Page templates
│   ├── default.html         # Main layout
│   └── post.html           # Blog post layout
├── _posts/                   # Blog posts (Markdown files)
│   ├── 2025-01-15-arduino-multimeter.md
│   └── 2025-01-10-esp32-iot-sensors.md
├── blog/
│   └── index.html           # Blog listing page
├── assets/
│   ├── css/styles.css       # Your existing styles + Jekyll blog styles
│   ├── js/main.js          # Your existing JavaScript
│   └── img/                # Images
├── Gemfile                  # Ruby dependencies
├── index.html               # Homepage (unchanged)
├── about.html              # About page (unchanged)
└── contact.html            # Contact page (unchanged)
```

## ✍️ Creating Blog Posts

### 1. Create a new Markdown file in `_posts/`
File naming format: `YYYY-MM-DD-title-of-post.md`

Example: `2025-01-20-building-smart-home-with-arduino.md`

### 2. Add front matter at the top of the file:
```yaml
---
title: "Building a Smart Home with Arduino"
date: 2025-01-20
category: "Arduino Projects"
description: "Complete guide to creating a smart home automation system using Arduino and IoT sensors."
image: "/assets/img/smart-home.jpg"
keywords: "Arduino, Smart Home, IoT, Home Automation"
---
```

### 3. Write your content in Markdown:
```markdown
# Introduction

Your blog content goes here...

## Code Examples

```cpp
void setup() {
  Serial.begin(9600);
}
```

## Images

![Arduino Setup](/assets/img/arduino-setup.jpg)
```

## 🎨 Styling and Customization

### Your Existing Design is Preserved
- All your current pages (`index.html`, `about.html`, `contact.html`) work exactly as before
- Your existing CSS and JavaScript remain unchanged
- The blog section uses additional CSS that complements your design

### Jekyll-Specific Styles
New CSS classes have been added to `assets/css/styles.css`:
- `.blog-hero` - Blog page header
- `.blog-card` - Individual blog post cards
- `.post-hero` - Individual post headers
- `.post-content` - Post content styling

### Customizing the Blog Design
You can modify the blog appearance by editing:
- `blog/index.html` - Blog listing page
- `_layouts/post.html` - Individual post layout
- CSS classes in `assets/css/styles.css`

## 🔧 Configuration

### Site Settings (`_config.yml`)
```yaml
title: itanveer.tech
description: Your site description
url: "https://itanveer.tech"
author:
  name: Kawsar Mahmud Tanveer Khan
  email: your-email@example.com
```

### Navigation Menu
The navigation is automatically generated from `_config.yml`:
```yaml
navigation:
  - title: Home
    url: /
  - title: About
    url: /about.html
  - title: Blog
    url: /blog/
```

## 📝 Content Management

### Blog Categories
Organize posts by adding categories in the front matter:
```yaml
category: "Arduino Projects"  # or "IoT & ESP32", "Smart Grid", etc.
```

### Featured Images
Add images to posts:
```yaml
image: "/assets/img/your-image.jpg"
```

### SEO and Social Media
Each post automatically includes:
- Meta descriptions
- Twitter Card support
- Structured data for search engines
- Canonical URLs

## 🚀 Deployment Options

### GitHub Pages (Free)
1. Push your code to a GitHub repository
2. Enable GitHub Pages in repository settings
3. Your site will be available at `https://username.github.io/repository-name`

### Netlify (Free)
1. Connect your GitHub repository to Netlify
2. Build command: `bundle exec jekyll build`
3. Publish directory: `_site`

### Custom Hosting
1. Run `bundle exec jekyll build`
2. Upload the `_site` folder to your web server

## 🛠️ Development Workflow

### Writing Posts
1. Create new `.md` file in `_posts/`
2. Add front matter with title, date, category
3. Write content in Markdown
4. Save and Jekyll will automatically regenerate

### Live Reload
Jekyll automatically reloads when you make changes:
```bash
bundle exec jekyll serve --livereload
```

### Building for Production
```bash
bundle exec jekyll build
```

## 📊 Features Included

### ✅ What's Working
- **Automatic blog generation** from Markdown files
- **Category filtering** on blog page
- **Pagination** for large numbers of posts
- **SEO optimization** with meta tags and structured data
- **Responsive design** matching your existing style
- **Search-friendly URLs** (`/blog/2025/01/15/post-title/`)
- **Related posts** sidebar
- **Social media integration**

### 🔄 Hybrid Approach
- **Static pages** (Home, About, Contact) remain unchanged
- **Blog section** powered by Jekyll
- **Existing CSS/JS** preserved and enhanced
- **Same navigation** and design consistency

## 🎯 Next Steps

1. **Add more blog posts** to `_posts/` directory
2. **Customize colors and fonts** in `assets/css/styles.css`
3. **Add author bio** and social links in `_config.yml`
4. **Set up deployment** to GitHub Pages or Netlify
5. **Add analytics** (Google Analytics, etc.)
6. **Implement search functionality**
7. **Add comments system** (Disqus, etc.)

## 🐛 Troubleshooting

### Common Issues

**Ruby/Jekyll not found:**
- Make sure Ruby is added to your PATH
- Restart your terminal after Ruby installation

**Bundle install fails:**
- Try running `gem install bundler` first
- On Windows, you may need to run `ridk install` after Ruby installation

**Port 4000 already in use:**
```bash
bundle exec jekyll serve --port 4001
```

**Changes not showing:**
- Check for syntax errors in your Markdown files
- Ensure file names follow the `YYYY-MM-DD-title.md` format
- Restart Jekyll if needed

## 📞 Support

If you encounter any issues:
1. Check the Jekyll documentation: https://jekyllrb.com/docs/
2. Verify your Ruby installation: `ruby -v`
3. Check for errors in the terminal when running Jekyll

---

**Your site now has the power of Jekyll while keeping everything you loved about the original design!** 🎉
