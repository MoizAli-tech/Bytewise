

function timer (){
    const element1 = `
        <div> 
            <h1> javascript</h1>
            <input type="text" />
            <p>${new Date().getTime()}</p>    
        </div>
    `

    document.getElementById("container1").innerHTML = element1;

    const element2 = React.createElement("div",null,
        React.createElement("div",null,React.createElement("input",{type:"text"}),
        React.createElement("p",null,new Date().getTime()))
        )
    ReactDOM.render(element2,document.getElementById("container2"))
}

setInterval(timer,1000)