$edge = 'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
if (-not (Test-Path $edge)) {
  Write-Error "Edge not found at $edge"
  exit 1
}

& $edge 'https://www.reddit.com/'
