import React, { useState } from 'react';
import './payment.css'; // Assuming you have a CSS file for styling

const PaymentForm = () => {
    const [formData, setFormData] = useState({
        cardNumber: '',
        cardHolder: '',
        expiryMonth: '',
        expiryYear: '',
        cvv: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const showBack = () => {
        document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
        document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
    }

    const showFront = () => {
        document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
        document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
    }

    return (
        <div className="container">

            <div className="card-container">

                <div className="front" onClick={showBack}>
                    <div className="image">
                        <img src="image/chip.png" alt="" />
                        <img src="image/visa.png" alt="" />
                    </div>
                    <div className="card-number-box">{formData.cardNumber || 'XXXX-XXXX-XXXX-XXXX'}</div>
                    <div className="flexbox">
                        <div className="box">
                            <span>card holder</span>
                            <div className="card-holder-name">{formData.cardHolder || 'full name'}</div>
                        </div>
                        <div className="box">
                            <span>expires</span>
                            <div className="expiration">
                                <span className="exp-month">{formData.expiryMonth || 'mm'}</span>
                                <span className="exp-year">{formData.expiryYear || 'yy'}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="back" onClick={showFront}>
                    <div className="stripe"></div>
                    <div className="box">
                        <span>cvv</span>
                        <div className="cvv-box">{formData.cvv}</div>
                        <img src="image/visa.png" alt="" />
                    </div>
                </div>

            </div>

            <form>
                <div className="inputBox">
                    <span>card number</span>
                    <input type="text" maxLength="16" className="card-number-input" name="cardNumber" value={formData.cardNumber} onChange={handleChange} />
                </div>
                <div className="inputBox">
                    <span>card holder</span>
                    <input type="text" className="card-holder-input" name="cardHolder" value={formData.cardHolder} onChange={handleChange} />
                </div>
                <div className="flexbox">
                    <div className="inputBox">
                        <span>expiration mm</span>
                        <select name="expiryMonth" className="month-input" value={formData.expiryMonth} onChange={handleChange}>
                            <option value="month" disabled>month</option>
                            {[...Array(12).keys()].map(month => (
                                <option key={month + 1} value={(month + 1).toString().padStart(2, '0')}>{(month + 1).toString().padStart(2, '0')}</option>
                            ))}
                        </select>
                    </div>
                    <div className="inputBox">
                        <span>expiration yy</span>
                        <select name="expiryYear" className="year-input" value={formData.expiryYear} onChange={handleChange}>
                            <option value="year" disabled>year</option>
                            {[...Array(10).keys()].map(year => (
                                <option key={year + 2021} value={(year + 2021).toString()}>{year + 2021}</option>
                            ))}
                        </select>
                    </div>
                    <div className="inputBox">
                        <span>cvv</span>
                        <input type="text" maxLength="4" className="cvv-input" name="cvv" value={formData.cvv} onChange={handleChange} />
                    </div>
                </div>
                <input type="submit" value="Pay" className="submit-btn" /><p id="money"></p>
            </form>

        </div>
    );
};

export default PaymentForm;
