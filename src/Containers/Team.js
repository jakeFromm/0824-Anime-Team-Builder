import Character from "../Components/Character"

const Team = (props) => {
    function renderCharacters() {
        return (
            props.characters.map(el => <Character 
            key={el.name}
            character={el}
            team
            />))
    }
    console.log("Team props", props)
    return (
        <div className="container team">
            <h2>My Team</h2>
            <div>
                {renderCharacters()}
            </div>
        </div>
    ) 
}

export default Team