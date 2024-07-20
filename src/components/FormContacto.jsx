import "./FormContacto.css"

const FormContacto = () => {
    return ( 
<div className="form-contacto-father">
<form className="form-contacto">
		<input name="name" placeholder="Cuál es tu nombre?" className="name" required />
		<input name="emailaddress" placeholder="Email?" className="email" type="email" required />
        <textarea rows="4" cols="50" name="subject" placeholder="Que nos quieres decir?" className="message" required></textarea>
        <input name="submit" className="btn" type="submit" value="Enviar" />
</form>
</div>
)
}

export default FormContacto;