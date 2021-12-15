// submit buttons
const getSubmit = document.getElementById('getPost');


// inputs
const paramsInput = document.getElementById('params-input');
const queryInput = document.getElementById('query-input');

// response section
const responseSection = document.getElementsByClassName('response-area')[0];

// handle submits
getSubmit.addEventListener('click', () => {
    axios
        .get('http://localhost:5050/api/homepage')
        .then(res => addToView(res.data))
});

getParamsSubmit.addEventListener('click', () => {
    axios
        .get(`http://localhost:5050/api/hompage/${paramsInput.value}`)
        .then(res => addToView([res.data]))
});

getQuerySubmit.addEventListener('click', () => {
    axios
        .get(`http://localhost:5050/api/homepage?item=${queryInput.value}`)
        .then(res => addToView(res.data))
});

// handle response
function addToView(dataArr) {
    responseSection.innerHTML = null;

    if (dataArr.length === 0) {
        const p = document.createElement('p');
        const t = document.createTextNode("Response came back with no results!");
        p.appendChild(t);

        responseSection.appendChild(p)
    } else {
        dataArr.forEach(item => {
            const p = document.createElement('p');
            const t = document.createTextNode(item)
            p.appendChild(t);
    
            responseSection.appendChild(p)
        })
    }
}





// 
// 
// 
// 
// 
// 
// 
// 
// 
//DB CALL BEGIN

const sequelize = require("../server/dbcontroller.js");

const dads = require("../dbModels/dads")
const post = require("../dbModels/post")
const auth = require("../dbModels/auth")

dads.hasmany(post,auth);


sequelize
.sync({force: true})
.then((result) => {
    console.log(result);
})
.catch((err) => {
    console.log(err);
});

// DB CALL END
//
//
//
//
//
