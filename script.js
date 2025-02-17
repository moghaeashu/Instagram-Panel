function showForm(formId) {
    const forms = ['postLikes', 'reelsLikes', 'reelsViews', 'followers'];
    forms.forEach(id => document.getElementById(id).style.display = 'none');
    document.getElementById(formId).style.display = 'block';
}

function sendEmail(subject, nameId, amountId, phoneId, quantityId, linkId) {
    const name = document.getElementById(nameId).value;
    const amount = document.getElementById(amountId).value;
    const phone = document.getElementById(phoneId).value;
    const quantity = document.getElementById(quantityId).value;
    const link = document.getElementById(linkId).value;

    const body = `Name: ${name}%0D%0AAmount: ${amount}%0D%0APhone: ${phone}%0D%0AQuantity: ${quantity}%0D%0ALink: ${link}`;

    localStorage.setItem('orderData', JSON.stringify({subject, body}));

    window.location.href = "thankyou.html";
}