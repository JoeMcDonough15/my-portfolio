import { Link } from "react-router-dom";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <section className="contact-me">
      <div className="contact-details">
        <div className="contact-links main-container col content-section">
          <h1 className="contact-me-header">Let&apos;s Stay in Touch</h1>
          <p className="text-block">I would love to hear from you!</p>
          <h6 className="link-name">
            Reach me by email <br />
            joemcdonoughmusic@gmail.com
          </h6>
        </div>
      </div>

      <form action="/" className="main-container content-section contact-form">
        <div className="form-field">
          <label htmlFor="name-input" className="">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your Name"
            id="name-input"
            name="name"
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="email-input" className="">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter a valid email address"
            id="email-input"
            name="email"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="message-input" className="">
            Message
          </label>
          <textarea
            placeholder="Enter your message"
            id="message-input"
            name="message"
            required
          ></textarea>
        </div>
        <div className="u-form-group u-form-submit">
          <input type="submit" value="submit" />
        </div>
        {/* <div class="u-form-send-message u-form-send-success">
          Thank you! Your message has been sent.
        </div>
        <div class="u-form-send-error u-form-send-message">
          Unable to send your message. Please fix errors then try again.
        </div> */}
      </form>
    </section>
  );
};

export default ContactPage;
