
$file = Get-Content "c:\whatever.txt";
Write-Output $file;
#Get the specific Web site where the list is housed and set a vairable $web
$web = Get-SPWeb https://spdev.itservices.msu.edu/units/its_pmo/

#Get the specific list you want to update
$list = $web.Lists["Data Services"]

#Find everyone in the current list
$listItems = $list.Items

#Go through list and update Employee Status to Termed if their Manager’s Name is TERMED, else mark them as Active
foreach($item in $listItems)
{
if ($item["Document Type Level 2"] -eq "21;#5-year Planning")
{

$item["Document Type Level 2"] = ""
$item.Update()

}

}
#dispose of web
$web.dispose();