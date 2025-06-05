const Profile_card = () =>{
    return (
     <div>
        <h1>Profile Card Making Challenge</h1>
     
        <ProfileCard 
            name="Archer"
            Age={15}
            greeting={
                <div>
                    <strong>Hello this is Archer</strong>
                </div>
            }
        >
            <p>Hobbies : Reading ,Writing and Coding</p>
            <button>Contact Me Buddy</button>
        </ProfileCard>
        
        <ProfileCard 
            name="Knight"
            Age={25}
            greeting={
                <div>
                    <strong>Hello this is Knight</strong>
                </div>
            }
        >
            <p>Hobbies : Reading ,Writing and Coding</p>
            <button>Contact Me Buddy</button>
        </ProfileCard>
    </div>
    )
}

export default Profile_card;

function ProfileCard(props){
    const {name,age,greeting} = props;
      return (
        <>
            <h1>Name : {name}</h1>
            <h3>Age : {age}</h3>
            <p>Greeting : {greeting}</p>  
            <div>{props.children}</div>
        </>
      )
}