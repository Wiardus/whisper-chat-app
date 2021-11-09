const openProfile = () => {
    alert('profiel')
    return <div className="profile"></div>
}

export const Profile = () => {
    return (
        <div>
            <div className="profilePicture" onClick={openProfile}></div>
        </div>
    )
}

