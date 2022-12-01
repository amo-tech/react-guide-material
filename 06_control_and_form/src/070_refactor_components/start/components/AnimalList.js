import AnimalItems from "./AnimalItem";

const AnimalList = ({animals}) => {
    if (animals.length === 0) {
        return <h3>No animals</h3>
    };
    return (
        <ul>
            {animals
                .map((animal) => {
                    return (
                        <AnimalItems key={animal} animal={animal}/>
                    );
                })}
        </ul>
    )
}

export default AnimalList;