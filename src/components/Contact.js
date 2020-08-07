import React from 'react'

 function Contact() {

    // make for after complete come to email address

    // background pictures needs to be added.
    return (
        <section className="section-contact">
            <div className="contact-container">
                <h3>Contact me</h3>
                <form>
                    <div>
                        <label for="firstname">first name:</label>
                        <input type="text" id="firstname"/>
                    </div>

                    <div>
                        <label for="lastname">last name</label>
                        <input type="text" id="lastname"/>
                    </div>

                    <div>
                        <label for="email">email</label>
                        <input type="email" id="email"/>
                    </div>

                    <div>
                        <label for="message">message</label>
                        <textarea id="message"></textarea>
                    </div>
                </form>
                <button>submit</button>
            </div>
        </section>
    )
}
export default Contact;