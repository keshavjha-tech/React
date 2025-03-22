import React from "react"; 

const UserContext = React.createContext()

export default UserContext;

// har ek context apne aap me ek provider hota hai, ese hi usercontext apne aap me ek provider h

//in sbko wrap kar denge UserContext ke andar, jisse ye ab ban gya ek provider

{/* <UserContext>
<Login />
<Card>
    <Dashboard />
</Card>
</UserContext> */}
//provider se mera mtlb ab jitne bhi components hai unko iss global UserContext ka access mil jayega