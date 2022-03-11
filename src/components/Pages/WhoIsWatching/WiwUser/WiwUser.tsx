import "./WiwUser.css";


interface WiwUserProps {
    userInfos: Object,
    members: any[]
}

function WiwUser({userInfos, members}: WiwUserProps) {

    console.log({userInfos})

    console.log({members})


    return (
        <div className="avatar user">
            {/*<img src={picture} alt={user.name}/>*/}
            {/*<span className="profile_username">{name}</span>*/}
        </div>
    );
}

export default WiwUser;