import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";


function PetDetail( setPetToEdit ) {

    const [pet, setPet] = useState([])

    const { petId } = useParams()

    const getPet = async () => {
        try {
            const response = await axios.get(`htpp://localhost:3000/pets/${petId}`)
            if (response.status === 200)  {
                setPet(response.data)
                setPetToEdit(response.data)
            }
        } catch (error) {
            console.log('error', error)
        }
    }
    useEffect( () => { getPet() }, [])

    const deletePet = async () => {
        try {
            const response = await axios.delete(`http://localhost:3000/pets/${petId}`)
            if (response.status === 200) window.location.href = '/'
        } catch (error) {
            console.log('error', error)
        }
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h2>Pet Detail</h2>
            
            {pet && (
                <>
                    <p>Pet name: {pet.name} </p>
                    <p>Pet age: {pet.age} </p>
                    <p>Pet type: {pet.type} </p>
                    <p>Pet breed: {pet.breed} </p>

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Link to={`/${pet?.id}/edit`}>
                            <button style={{ marginRight: 10, }}> Edit pet </button>
                        </Link>

                        <button style={{ marginLeft: 10}} onClick={ () => deletePet}>
                            Delete pet
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}
export default PetDetail;