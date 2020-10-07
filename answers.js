/*
Noel Angelo Babao
noan.babao@gmail.com
2020-10-06

### #1 What is this code doing? How might it be improved?

return !this.allQuestions
.filter(q =>
    q.subThreadName == this.currentQuestion.subThreadName
  )
  .filter(q => q.mrLevel == this.currentQuestion.mrLevel)
  .some( q => q.currentAnswer == "No")
*/

### #1 Answer 
code finds an object with currentAnswer property equal to "No"
and subThreadName and mrLevel properties with same values as currentQuestion

returns false if found else true

return !this.Questions.find( q => q.subThreadName == this.currentQuestion &&  q.mrLevel == this.currentQuestion.mrLevel && q.currentAnswer == "No" )
/*
### #2 What is this code doing?

`var oldAssessment = this.allQuestions.map( q => Object.assign({}, q));`
*/
### #2 Answer

creates a new array that assigns an empty object to an element without a property like a number or an empty string or a function
/*
### #3 What is this code doing?

var allQuestions= ["test", "any" , { adsfg:"asdg"}] 
const old = allQuestions.map(function(question: any) {
  return {...question};
})
*/
### #3 Answer
in javascript it would be a syntax error saying colon is unexpected.
I think in other framework it might assign any as type, I'm not sure because I haven't use it. 

/*
### #4 I have an array of objects, they are currently untyped. 
I'm unsure of how but mixed in with my normal objects (`{ id, name, date, createdAt }`), 
are `null` values. How would you eliminate the null values?
*/
### #4 Answer

objects.filter(element => {return element != null});
/*
### #5 In Angular 2+ how to you pass variable(s) from a parent to a child? answer in concept

```// file 1.
<div>
  <header-component />
</div>
class FileOne {
...
private date: any;
headerMessage: string;
...
}
// file 2 -- header-component
<div>
  // HERE is where I want a header message
</div>```
*/
### #5 Answer

To be honest I have no Angular experience. a quick google search shows that you can pass variable(s) 
from parent to a child by using @Input decorations 