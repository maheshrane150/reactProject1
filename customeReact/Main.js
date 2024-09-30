function customeRander(reactObject, container){
    const tag = document.createElement(reactObject.type);
    tag.innerHTML=reactObject.child;
    for(let prop in reactObject.props){
        tag.setAttribute(prop, reactObject.props[prop]);
    }
    container.appendChild(tag);
}

const reactObject = {
    type : "a",
    props : {
        href :"https://google.com",
        id : "pid"
    },
    child: "my name is custome",
}

const container = document.querySelector("#root");

customeRander(reactObject, container)