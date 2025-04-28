export function showContact(target) {
  target.innerHTML = `
        <div class="contact-container">
            <div class="contact-content">
                <h1>Contact Us</h1>
                <p><strong>Phone:</strong> (707) 555-1234</p>
                <p><strong>Email:</strong> reservations@stableandvine.com</p>
                <p><strong>Address:</strong> 123 Vineyard Lane, Napa Valley, CA</p>
                <p><strong>Hours of Operation:</strong></p>
                <p>
                Monday - Thursday: 5:00 PM – 9:30 PM<br />
                Friday - Saturday: 5:00 PM – 10:30 PM<br />
                Sunday: Closed
                </p>
                <p><strong>Private Events & Wine Tastings:</strong> Available upon request.</p>
            </div>
        </div>
    `;
}
