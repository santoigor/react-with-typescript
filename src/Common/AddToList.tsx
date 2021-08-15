import { useState } from "react";
import { People as Props} from '../App';

type AddToListProps = {
    people: Props['people'],
    setPeople: React.Dispatch<React.SetStateAction<Props['people']>>
}

export const AddtoList: React.FC<AddToListProps> = ({ people, setPeople }) => {
    const [input, setInput] = useState({
        name:'',
        age:'',
        img:'',
        note:''
    });

    function handleChange(e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
        setInput({
            ...input, 
            [e.target.name] : e.target.value
        });
    };

    function handleClick(e : React.MouseEvent<HTMLButtonElement, MouseEvent>): void { 
        e.preventDefault();

        if(!input.name || !input.age || !input.img ) {
            return;
        }

        setPeople([
            ...people, 
            {
                name: input.name,
                age: parseInt(input.age),
                url: input.img,
                notes: input.note
            }
        ]);

        setInput({
            name:'',
            age:'',
            img:'',
            note:''
        })
    };

    return(
        <form className="AddToList">
            <input 
                placeholder="Name"
                type="text" 
                className="AddToList-input"
                name="name"
                value={input.name}
                onChange={handleChange} />

            <input 
                placeholder="Age"
                type="number" 
                className="AddToList-input" 
                name="age"
                value={input.age}
                onChange={handleChange} />

            <input 
                placeholder="Image URL"
                type="text" 
                className="AddToList-input"
                name="img"
                value={input.img}
                onChange={handleChange} />

            <textarea 
                placeholder="Note" 
                className="AddToList-input"
                name="note" 
                value={input.note} 
                onChange={handleChange} />

            <button 
                className="AddToList-btn"
                onClick={handleClick}>
                    Add To List
            </button>
        </form>
    );
}