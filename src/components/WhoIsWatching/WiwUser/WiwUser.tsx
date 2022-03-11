import "./WiwUser.css";

interface WiwUserProps {
    name: string;
    picture: string;
}

function WiwUser({name, picture}: WiwUserProps) {

    return (
        <div className="avatar user">
            <img src={picture} alt={name}/>
            <span className="profile_username">{name}</span>
        </div>
    );
}

export default WiwUser;