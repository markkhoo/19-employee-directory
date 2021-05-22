# Employee-Directory

## Description
This is an example basic directory that can be visited [HERE](https://markkhoo.github.io/19-employee-directory/). For quicker searching of employees, type their name in the input field. *Clicking on name sorts the list by name but doesn't immediately update the directory (to be fixed).*

## Technologies Used
* HTML
* CSS
* Javascript
* [Reactjs](https://reactjs.org/)

## Code Snippet
```javascript
  const nameFilter = event => {
    // This line creates an array of objects filtering the first name and last name concatinated everytime the input field is changed
    const toFilter = getUser.filter(xx => (xx.name.first + " " + xx.name.last).toLowerCase().includes(event.target.value.toLowerCase()));
    // sets the state that hold the data to be displayed in the table
    setFilt(toFilter);
  };
```

---

## Contact
For any questions contact GitHub user [markkhoo](https://github.com/markkhoo) or at this email: markkhoo95@gmail.com