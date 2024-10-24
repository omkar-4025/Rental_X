import React from 'react';

function Contact() {
    return (
        <section className="contact" id="contact">
            <h1 className="heading"><span>Contact </span>Us</h1>
            <div className="row">
            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3939.6684481865404!2d76.4918194!3d9.093937!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0602e7b4a2049d%3A0x3af3246b5138db0f!2sAmrita%20Vishwa%20Vidyapeetham%2C%20Amritapuri!5e0!3m2!1sen!2sin!4v1715104480625!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                <form>
                    <h3>Get in touch</h3>
                    <input type="text" placeholder="Name" className="box" />
                    <input type="email" placeholder="Email" className="box" />
                    <input type="number" placeholder="Number" className="box" />
                    <textarea placeholder="Message" className="box" cols="30" rows="10"></textarea>
                    <input type="submit" value="Send Message" className="btn" />
                </form>
            </div>
        </section>
    );
}

export default Contact;
