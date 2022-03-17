import "./WiwUser.css";
import {useNavigate} from "react-router-dom";

interface WiwUserProps {
    memberInfos: memberInfos
}

interface memberInfos {
    id: number,
    name: string,
    picture: string
}

function WiwUser({memberInfos}: WiwUserProps) {

    const navigate = useNavigate();

    return (
        <div className="avatar user">
            {<img src={memberInfos.picture} alt={memberInfos.name}/>}
            {<span className="profile_username">{memberInfos.name}</span>}
        </div>
    );
}

export default WiwUser;