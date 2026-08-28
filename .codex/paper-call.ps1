param(
  [Parameter(Mandatory = $true)][string]$Tool,
  [Parameter(Mandatory = $true)][string]$ArgumentsJson
)

$endpoint = 'http://127.0.0.1:29979/mcp'
$headers = @{ Accept = 'application/json, text/event-stream' }
$utf8 = New-Object System.Text.UTF8Encoding($false)
$initialize = @{
  jsonrpc = '2.0'
  id = 1
  method = 'initialize'
  params = @{
    protocolVersion = '2025-06-18'
    capabilities = @{}
    clientInfo = @{ name = 'codex-allpa-paper'; version = '1.0' }
  }
} | ConvertTo-Json -Depth 8 -Compress

$initializeResponse = Invoke-WebRequest -UseBasicParsing -Uri $endpoint -Method Post -ContentType 'application/json; charset=utf-8' -Headers $headers -Body ($utf8.GetBytes($initialize)) -TimeoutSec 20
$sessionId = [string]$initializeResponse.Headers['Mcp-Session-Id']
$sessionHeaders = @{ Accept = 'application/json, text/event-stream'; 'Mcp-Session-Id' = $sessionId }

$ready = @{ jsonrpc = '2.0'; method = 'notifications/initialized'; params = @{} } | ConvertTo-Json -Depth 4 -Compress
Invoke-WebRequest -UseBasicParsing -Uri $endpoint -Method Post -ContentType 'application/json; charset=utf-8' -Headers $sessionHeaders -Body ($utf8.GetBytes($ready)) -TimeoutSec 20 | Out-Null

$arguments = $ArgumentsJson | ConvertFrom-Json
$request = @{ jsonrpc = '2.0'; id = 2; method = 'tools/call'; params = @{ name = $Tool; arguments = $arguments } } | ConvertTo-Json -Depth 30 -Compress
$response = Invoke-WebRequest -UseBasicParsing -Uri $endpoint -Method Post -ContentType 'application/json; charset=utf-8' -Headers $sessionHeaders -Body ($utf8.GetBytes($request)) -TimeoutSec 60
$dataLine = $response.Content -split "`n" | Where-Object { $_ -like 'data: *' } | Select-Object -Last 1
if (-not $dataLine) { throw "Paper MCP returned no data event for $Tool." }
$payload = $dataLine.Substring(6) | ConvertFrom-Json
$payload.result | ConvertTo-Json -Depth 30
