import React from 'react'; 

export default class Login extends React.Component {
    render() {
        return(
                <div>
                  <form>
                    <div>
                      <input type="text" name="Username" placeholder="Username"/>
                      <label htmlFor="username">Username</label>
                    </div>
                    <div>
                      <input type="text" name="Password" placeholder="Password"/>
                      <label htmlFor="password">Password</label>
                    </div>
                    <input type="submit" value="Login"/>
                  
                  </form>
                </div>   
        )
    }
}