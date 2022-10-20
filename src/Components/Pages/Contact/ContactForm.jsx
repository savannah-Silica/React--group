import React, {useState} from 'react'

function ContactForm() {
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [message, setMessage] = useState([]);
  const [submittedData, setSubmittedData] = useState([]);

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleMessageChange(event) {
    setMessage(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (name.length > 0) {
      const formData = { name: name, email: email, message: message };
      const dataArray = [...submittedData, formData];
      setSubmittedData(dataArray);
      setName("");
      setEmail("");
      setMessage("");
    }
  }

  return (
    <div className=" flex flex-col justify-right w-full ">
      <form
        className="max-w-[500px] w-full mx-auto bg-gradient-to-r from-blue-800 to-fuchsia-600 px-10 "
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col text-white py-2">
          <label>Your Name</label>
          <input
            className="input "
            type="text"
            onChange={handleNameChange}
            value={name}
          />
        </div>
        <div className="flex flex-col text-white py-2">
          <label>Your Email</label>
          <input
            className="input"
            type="email"
            onChange={handleEmailChange}
            value={email}
          />
        </div>
        <div className="flex flex-col text-white py-2">
          <label>Your Message</label>
          <textarea
            className="textarea"
            type="text"
            rows={4}
            onChange={handleMessageChange}
            value={message}
          ></textarea>
        </div>
        <button
          className="btn"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactForm