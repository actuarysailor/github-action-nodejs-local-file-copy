# Define the directory path and the comment to be added
$directoryPath = $PSScriptRoot
$comment = @"
// Copyright (C) 2024 actuarysailor
// For license information, see https://github.com/actuarysailor/github-action-nodejs-local-file-copy/blob/main/LICENSE

"@

# Function to add comment to a file
function Add-CommentToFile {
    param (
        [string]$filePath
    )
    
    $content = Get-Content -Path $filePath -Raw
    if (-not $content.StartsWith($comment)) {
        $updatedContent = $comment + $content
        Set-Content -Path $filePath -Value $updatedContent
    }
}

# Function to process a directory
function Process-Directory {
    param (
        [string]$directory
    )
    
    Get-ChildItem -Path $directory -Recurse -Filter *.ts | ForEach-Object {
        Add-CommentToFile -filePath $_.FullName
    }
}

# Process the specified directory
Process-Directory -directory $directoryPath