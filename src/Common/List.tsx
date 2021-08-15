import { People as ListProps } from '../App';

const List: React.FC<ListProps> = ({ people }) => {

    function renderList() : JSX.Element[] {
        return people.map( person =>{ 
           return ( <li key={person.name} className="List">
                <div className="List-header">
                    <img src={person.url} alt={person.name} className="List-img" />
                    <h2>{person.name}</h2>
                </div>
                <p>{person.age} years old</p>
                <p className="List-note">{person.notes}</p>

            </li>)}
        );
    }
    return(
        <ul>
            {renderList()}
        </ul> 
    );
}

export default List;