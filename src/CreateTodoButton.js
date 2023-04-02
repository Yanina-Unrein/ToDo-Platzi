import React from "react";
import './CreateTodoButton.css';


function CreateTodoButton(){
    const onClickButton = () => {
        alert('Aqui se deberia abrir el modal');
    }

    return(
        <section className="buttonTodo">
            <button className="ButtonCreate"
            onClick={() => onClickButton()}
            
            >+</button>
        </section>
        
    );
}

export { CreateTodoButton };