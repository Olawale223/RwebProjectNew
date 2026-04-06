import React, { useState } from 'react';
import './FormComponent.css';

export default function FormComponent() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        position: "",
        coverLetter: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log("Form submitted:", formData);
    };

    return (
        <div>
            <div className="form-container">
                {/* <div className="form-header">
                    <h1>Join us</h1>
                    <p className="description">
                        Passionate about what we do? Share your details and let us know your interests. We'll keep you in mind for
                        future opportunities.
                    </p>
                </div> */}

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Full name</label>
                        <input
                            type="text"
                            placeholder="Enter full name"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        />
                    </div>

                    <div className="form-group">
                        <label>Email address</label>
                        <input
                            type="email"
                            placeholder="Enter email address"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>

                    <div className="form-group">
                        <label>Interested Position</label>
                        <input
                            type="text"
                            placeholder="What position are you interested in?"
                            value={formData.position}
                            onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                        />
                    </div>

                    <div className="form-group">
                        <label>
                            Upload CV
                        </label>
                        <div className="upload-area">
                            <label htmlFor="cv-upload" className="upload-label">
                                <div className="upload-content">
                                    <div className="upload-icon">⊕</div>
                                    <div className="upload-text">
                                        <span>Click to upload</span>
                                        <span className="upload-hint">Size: Max 5MB</span>
                                    </div>
                                </div>
                            </label>
                            <input type="file" id="cv-upload" accept=".pdf,.doc,.docx" className="hidden-input" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>
                            Write cover letter <span className="optional">(optional 500 words max)</span>
                        </label>
                        <textarea
                            placeholder="Write your cover letter here..."
                            value={formData.coverLetter}
                            onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                        />
                    </div>

                    <button type="submit" className="submit-btn">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}