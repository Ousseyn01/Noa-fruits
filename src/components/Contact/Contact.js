import React from 'react'
import "./Contact.css"
import msg_icon from "../../assets/msg-icon.png"
import mail_icon from "../../assets/mail-icon.png"
import phone_icon from "../../assets/telephone-icon.png"
import location_icon from "../../assets/location-icon.png"
import white_arrow from "../../assets/white-arrow.png"
const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("En cours d'envoie....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6c15feb2-1e16-4026-9e03-eec55cc6a2ec");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Envoie avec success");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Envoyez nous un message <img src={msg_icon} alt="" /> </h3>
            <p>N'hésitez pas à nous contacter via le formulaire de contact ou à consulter nos
coordonnées ci-dessous. Vos commentaires, questions et suggestions sont
importants pour nous, car nous nous efforçons de fournir un service exceptionnel à notre
communauté universitaire.
            </p>
            <ul>
                <li> <img src={mail_icon} alt="" /> noa.fruits@gmail.com</li>
                <li> <img src={phone_icon} alt="" /> +221 77 547 69 91</li>
                <li> <img src={location_icon} alt="" /> Grand-Dakar, Dakar <br /> Sénégal</li>
            </ul>
        </div>

        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label>Nom et prénom</label>
            <input type="text" name='name' placeholder='Votre nom' required />
            <label>Numéro de téléphone</label>
            <input type="tel" name='phone' placeholder='Votre numéro' required />
            <label>Ecrivez votre message ici</label>
            <textarea name="message" id="" rows="6" placeholder='Ecrivez votre message' required></textarea>
            <button type="submit" className='btn dark-btn'>Envoyez maintenant <img src={white_arrow} alt="" /></button>
          </form>
          <span> {result} </span>
        </div>
    </div>
  )
}

export default Contact