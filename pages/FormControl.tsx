function FormControl(props){
    return <>
    <form className="user">
            <input className="input_email input_styled" type="email" id="IdEmail" aria-describedby="emailHelp" placeholder="Email" name="email" />
            <input className="input_password input_styled" type="password" id="Password" placeholder="Password" name="password" />
          </form>
    </>}

export default FormControl;