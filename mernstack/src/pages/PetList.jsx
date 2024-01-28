import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios'

function PetList() {
    const [ pets, setPets] = useState([]);
    
    const getPets = async () => {
        try {
            const response = await axios.get('http://localhost:3000/pets')
            if ( response.status === 200) setPets( response.data )

        } catch (error) {
            console.log('error', error)
        }
    }

    useEffect( () => {getPets() }, [])
        
    return (
        <>
        <h2>Pet List</h2>
        {pets?.map((pet) => {
            return(
                <div key={pet?.id}>
                    <p>{pet?.name} - {pet?.type} - {pet?.breed}</p>
                    <Link>
                    <button>Pet detail</button>
                    </Link>
                </div>
            )
        })}
        </>
    )
}
export default PetList;