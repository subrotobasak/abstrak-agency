import React from 'react';
import { useSignInWithGoogle} from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import GoogleImage from "../../assets/google.png";
import auth from '../../firebas.init';
import "./GoogleButton.css"

const GoogleButton = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
      if (loading) {
        return <p>Loading...</p>;
      }
      if (user) {
        return (
          <div>
            <p>User Registered!</p>
          </div>
        );
      }
    return (
        <div className="google-button">
            <Link onClick={() => signInWithGoogle()} type="submit"><img src ={GoogleImage} alt="GoogleButton"/>Continue With Google</Link>
            
        </div>
    );
};

export default GoogleButton;