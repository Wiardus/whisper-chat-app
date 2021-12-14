import { useState } from 'react';
import { user} from "./Login"

export const Profile = () => {
    const [IsOpen, setIsOpen] = useState({
        isOpen: false
    })

    let openProfile = (
        <div className="profile">
            <h2>Profiel</h2>
            <p>Naam: {user.username}</p>
        </div>
    )

    if (IsOpen.isOpen) {
        return (
            <div>
                <div className="profilePicture" onClick={(e) => setIsOpen({...IsOpen, isOpen: false})}></div>{openProfile}
            </div>
        )
    } else {
        return (
            <div>
                <div className="profilePicture" onClick={(e) => setIsOpen({...IsOpen, isOpen: true})}></div>
            </div>
        )
    }
    
}

