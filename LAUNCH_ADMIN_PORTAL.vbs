Set WshShell = CreateObject("WScript.Shell")
Set fso = CreateObject("Scripting.FileSystemObject")
currentDir = fso.GetParentFolderName(WScript.ScriptFullName)
htmlFile = currentDir & "\ADMIN_PORTAL.html"

chromePath = "C:\Program Files\Google\Chrome\Application\chrome.exe"
chromePathX86 = "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
edgePath = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
edgePath64 = "C:\Program Files\Microsoft\Edge\Application\msedge.exe"

If fso.FileExists(chromePath) Then
    WshShell.Run """" & chromePath & """ """ & htmlFile & """", 1, False
ElseIf fso.FileExists(edgePath) Then
    WshShell.Run """" & edgePath & """ """ & htmlFile & """", 1, False
ElseIf fso.FileExists(chromePathX86) Then
    WshShell.Run """" & chromePathX86 & """ """ & htmlFile & """", 1, False
ElseIf fso.FileExists(edgePath64) Then
    WshShell.Run """" & edgePath64 & """ """ & htmlFile & """", 1, False
Else
    WshShell.Run "msedge.exe """ & htmlFile & """", 1, False
End If
