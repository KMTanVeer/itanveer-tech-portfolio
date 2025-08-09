# Jekyll Setup Script for Windows PowerShell
Write-Host "=== Setting up Jekyll for itanveer.tech ===" -ForegroundColor Cyan

# Check if Ruby is installed
Write-Host "Checking Ruby installation..." -ForegroundColor Yellow
try {
    $rubyVersion = ruby -v
    Write-Host "✅ Ruby is installed: $rubyVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Ruby is not installed. Please install Ruby from https://rubyinstaller.org/" -ForegroundColor Red
    Write-Host "   Download Ruby+Devkit version for Windows" -ForegroundColor Red
    exit 1
}

# Check if Bundler is installed
Write-Host "Checking Bundler installation..." -ForegroundColor Yellow
$bundlerInstalled = gem list bundler -i 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "Installing Bundler..." -ForegroundColor Yellow
    gem install bundler
}
Write-Host "✅ Bundler is available" -ForegroundColor Green

# Install Jekyll dependencies
Write-Host "Installing Jekyll and dependencies..." -ForegroundColor Yellow
bundle install

# Create additional directories if they don't exist
Write-Host "Creating necessary directories..." -ForegroundColor Yellow
$directories = @("_data", "_includes", "_sass")
foreach ($dir in $directories) {
    if (!(Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force | Out-Null
        Write-Host "Created directory: $dir" -ForegroundColor Green
    }
}

Write-Host "✅ Jekyll setup complete!" -ForegroundColor Green
Write-Host ""
Write-Host "=== Next Steps ===" -ForegroundColor Cyan
Write-Host "1. Run 'bundle exec jekyll serve' to start the development server"
Write-Host "2. Open http://localhost:4000 in your browser"
Write-Host "3. Add your blog posts to the _posts/ directory"
Write-Host "4. Customize _config.yml with your site settings"
Write-Host ""
Write-Host "=== File Structure ===" -ForegroundColor Cyan
Write-Host "├── _config.yml          # Site configuration"
Write-Host "├── _layouts/            # Page layouts"
Write-Host "├── _posts/              # Blog posts (Markdown files)"
Write-Host "├── _includes/           # Reusable components"
Write-Host "├── _sass/               # Sass stylesheets"
Write-Host "├── _data/               # Data files"
Write-Host "├── assets/              # CSS, JS, images"
Write-Host "├── blog/                # Blog page"
Write-Host "├── Gemfile              # Ruby dependencies"
Write-Host "└── index.html           # Homepage"
Write-Host ""
Write-Host "=== Creating Blog Posts ===" -ForegroundColor Cyan
Write-Host "Create files in _posts/ with this naming format:"
Write-Host "YYYY-MM-DD-title-of-post.md"
Write-Host ""
Write-Host "Example: 2025-01-15-my-awesome-arduino-project.md"
Write-Host ""
Write-Host "Happy blogging! 🚀" -ForegroundColor Green
