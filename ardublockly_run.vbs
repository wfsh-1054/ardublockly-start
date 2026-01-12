Set objShell = CreateObject("WScript.Shell")
Set objFSO = CreateObject("Scripting.FileSystemObject")

' Get the absolute path of the script's directory
strScriptDir = objFSO.GetParentFolderName(WScript.ScriptFullName)

' Define paths relative to the script directory
strCachePath = objFSO.BuildPath(strScriptDir, "ardublockly\arduexec\appdata\Cache")
strGPUCachePath = objFSO.BuildPath(strScriptDir, "ardublockly\arduexec\appdata\GPUCache")
strExePath = objFSO.BuildPath(strScriptDir, "ardublockly\arduexec\ardublockly.exe")

' Clean cache (if exists)
On Error Resume Next
If objFSO.FolderExists(strCachePath) Then
    objFSO.DeleteFile objFSO.BuildPath(strCachePath, "*.*"), True
End If
If objFSO.FolderExists(strGPUCachePath) Then
    objFSO.DeleteFile objFSO.BuildPath(strGPUCachePath, "*.*"), True
End If
On Error GoTo 0

' Launch executable hidden (0) or normal (1)
' Note: The node/electron process will create its own window regardless of run mode here, 
' but using 0 ensures no CMD window pops up for this script itself if it were run via cscript.
' Since we are WScript, simply running the exe is enough. 
' We use Run method. 
' "1" activates and displays the window. 
' "False" means do not wait for the program to finish.
objShell.Run chr(34) & strExePath & chr(34), 1, False

Set objShell = Nothing
Set objFSO = Nothing
