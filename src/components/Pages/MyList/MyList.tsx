import React from 'react';

interface IMovie {
    id: number
    name: string
    poster_path: string
    backdrop_path: string
    overview?: string
}

const MyList = () => {

    const localUser = localStorage.getItem("user");
    const localMember = localStorage.getItem("member");
    let memberId: string;
    let user;
    let member_infos;
    let wishlist = [];
    
    if (localUser && localMember) {
        user = JSON.parse(localUser);
        memberId = JSON.parse(localMember);
        member_infos = user.members.filter((member: any) => member.id === memberId)[0];

        console.log(member_infos);

    }


    return (
        <h1>MYLIST</h1>

    )
}

export default MyList;