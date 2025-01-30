const currentUrl = window.location.href;
const formData = currentUrl.split('?')[1].split('&');
console.log(formData);

// Show user submitted data in a readable format
function separateData(info) {
    formData.forEach((element) => {
        console.log(element);
        if (element.startsWith(info)) {
            result = decodeURIComponent(element.split('=')[1]).replace(/\+/g, ' ');
        }

    })
    return result;
} // end separateData

const displayInfo = document.querySelector('#submittedInfo')
displayInfo.innerHTML = `
<p>Thank you for submitting your information!</p>
<p>Please verify that the following information is correct:</p>
<p>Name: ${separateData('firstName')} ${separateData('lastName')}</p>
<p>Email: ${separateData('email')}</p>
<p>Phone: ${separateData('phone')}</p>
<p>Organization Name: ${separateData('organizationName')}</p>
<p>Date Submitted: ${separateData('timeStamp')}</p>
`;