#!/bin/bash

# Jekyll Setup Script for Windows
echo "=== Setting up Jekyll for itanveer.tech ==="

# Check if Ruby is installed
echo "Checking Ruby installation..."
if ! command -v ruby &> /dev/null
then
    echo "❌ Ruby is not installed. Please install Ruby from https://rubyinstaller.org/"
    echo "   Download Ruby+Devkit version for Windows"
    exit 1
fi

echo "✅ Ruby is installed: $(ruby -v)"

# Check if Bundler is installed
echo "Checking Bundler installation..."
if ! gem list bundler -i &> /dev/null
then
    echo "Installing Bundler..."
    gem install bundler
fi

echo "✅ Bundler is available"

# Install Jekyll dependencies
echo "Installing Jekyll and dependencies..."
bundle install

# Create additional directories if they don't exist
echo "Creating necessary directories..."
mkdir -p _data
mkdir -p _includes
mkdir -p _sass

# Initialize Jekyll (if not already done)
if [ ! -f "_config.yml" ]; then
    echo "Initializing Jekyll site..."
    jekyll new . --force
fi

echo "✅ Jekyll setup complete!"
echo ""
echo "=== Next Steps ==="
echo "1. Run 'bundle exec jekyll serve' to start the development server"
echo "2. Open http://localhost:4000 in your browser"
echo "3. Add your blog posts to the _posts/ directory"
echo "4. Customize _config.yml with your site settings"
echo ""
echo "=== File Structure ==="
echo "├── _config.yml          # Site configuration"
echo "├── _layouts/            # Page layouts"
echo "├── _posts/              # Blog posts (Markdown files)"
echo "├── _includes/           # Reusable components"
echo "├── _sass/               # Sass stylesheets"
echo "├── _data/               # Data files"
echo "├── assets/              # CSS, JS, images"
echo "├── blog/                # Blog page"
echo "├── Gemfile              # Ruby dependencies"
echo "└── index.html           # Homepage"
echo ""
echo "=== Creating Blog Posts ==="
echo "Create files in _posts/ with this naming format:"
echo "YYYY-MM-DD-title-of-post.md"
echo ""
echo "Example: 2025-01-15-my-awesome-arduino-project.md"
echo ""
echo "Happy blogging! 🚀"
