let React={
    createElement:(tag,props,children)=>{
        if(typeof(tag)!=="function"){
           let element={tag,props:{...props,children}};
           return element;
        }
        else{
            return tag(props);
        }
       }
};
let App=(props)=>{
    return (<h1>
        <p>Welcome to App</p>
    </h1>);
}
export default App;