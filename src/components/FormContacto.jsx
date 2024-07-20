import "./FormContacto.css"

const FormContacto = () => {
    return ( 
<div className="form-contacto-father">
<form>
		<input name="name" placeholder="What is your name?" className="name" required />
		<input name="emailaddress" placeholder="What is your email?" className="email" type="email" required />
        <textarea rows="4" cols="50" name="subject" placeholder="Please enter your message" className="message" required></textarea>
        <input name="submit" className="btn" type="submit" value="Send" />
</form>
</div>
)
}

export default FormContacto;