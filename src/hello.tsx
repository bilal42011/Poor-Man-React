import App from "./some";
import  money from "../assets/money.png";
console.log("hello world");
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
console.log(
<div name="div"> 
<App name="app"/>
</div>
);
