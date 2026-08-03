# Testing Report

## Normal Test
Input:
Name: Abby
Scores: 80, 70, 90

Expected:
Average = 80
Grade = A
Status = Pass

Result:
Passed

## Edge Case
Input:
Empty fields

Expected:
Show an alert asking the user to fill all fields.

Result:
Passed

## Bug Fixed
Bug:
Records were not saved after refreshing the page.

Fix:
Used Local Storage to save and load student records.