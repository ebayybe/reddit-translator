$chrome = 'C:\Program Files\Google\Chrome\Application\chrome.exe'
if (-not (Test-Path $chrome)) {
  Write-Error "Chrome not found at $chrome"
  exit 1
}

& $chrome 'https://www.reddit.com/'
