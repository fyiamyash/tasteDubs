import{useAuth0} from "@auth0/auth0-react"

function AuthPage()
{
    const {user,loginWithRedirect} = useAuth0();
    console.log(user);
    return<>
     <div >
        <button onClick={(e)=>{
            loginWithRedirect(); 
        }} >
            login here!
        </button>

    </div>
    </>
}

export default AuthPage;