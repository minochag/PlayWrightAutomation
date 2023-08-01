
function generateRandomEmail() {
    const validCharacters = 'pyramid';
    const emailDomain = 'example.com';
    const localPartLength = 10; // You can adjust this value to change the length of the local part

    let localPart = '';
    for (let i = 0; i < localPartLength; i++) {
        const randomIndex = Math.floor(Math.random() * validCharacters.length);
        localPart += validCharacters.charAt(randomIndex);
    }

    const email = `${localPart}@${emailDomain}`;
    return email;
}

const randomEmail = generateRandomEmail();
console.log(randomEmail);