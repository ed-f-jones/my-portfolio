import React from 'react'

 function Contact() {

    // make for after complete come to email address

    // background pictures needs to be added.
    return (
        <section className="section-contact">
            <div classNmae="contact-container">
                <div>
                    <div>
                        <form>
                            <div>
                                <input type="text" id="firstname" placeholder="Firstname">
                                </input>
                            </div>

                            <div>
                                <input type="text" id="lastname" placeholder="Lastname">
                                </input>
                            </div>

                            <div>
                                <input type="email" id="email" placeholder="email">
                                </input>
                            </div>
                            <div>
                                <textarea palceholder="Enter meassage here...">

                                </textarea>
                            </div>
                            <button>submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact;