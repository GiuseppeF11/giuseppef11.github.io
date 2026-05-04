import { useState } from "react";
import emailjs from "emailjs-com";

const inputClass =
  "w-full p-3 rounded-lg bg-[#0f172a] border border-[#183756] placeholder-gray-500 text-aliceblue focus:outline-none focus:border-[#52ced0] transition-colors duration-200";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    subject: "",
    message: "",
  });

  const [notification, setNotification] = useState({ message: "", type: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.fullName,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          company: formData.company,
          time: new Date().toLocaleString(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setNotification({ message: "Email inviata con successo!", type: "success" });
          setFormData({ fullName: "", company: "", email: "", subject: "", message: "" });
          setTimeout(() => setNotification({ message: "", type: "" }), 3000);
        },
        (error) => {
          setNotification({ message: `Errore nell'invio: ${error.text}`, type: "error" });
          setTimeout(() => setNotification({ message: "", type: "" }), 3000);
        }
      );
  };

  return (
    <div data-aos="fade-left">
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="fullName"
          placeholder="Nome Cognome"
          value={formData.fullName}
          onChange={handleChange}
          required
          className={inputClass}
        />
        <input
          type="text"
          name="company"
          placeholder="Nome Azienda (opzionale)"
          value={formData.company}
          onChange={handleChange}
          className={inputClass}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className={inputClass}
        />
        <input
          type="text"
          name="subject"
          placeholder="Oggetto"
          value={formData.subject}
          onChange={handleChange}
          required
          className={inputClass}
        />
        <textarea
          name="message"
          placeholder="Inserisci il tuo messaggio..."
          value={formData.message}
          onChange={handleChange}
          required
          className={`${inputClass} h-32 resize-none`}
        />
        <button
          type="submit"
          className="w-full p-3 bg-[#183756] hover:bg-[#52ced0] hover:text-[#0f172a] text-[#52ced0] font-bold rounded-lg border border-[#52ced0] transition-colors duration-200"
        >
          Invia Messaggio
        </button>
      </form>

      {notification.message && (
        <div
          className={`mt-4 p-3 rounded-lg text-white text-sm ${
            notification.type === "success" ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {notification.message}
        </div>
      )}
    </div>
  );
};

export default Contact;
