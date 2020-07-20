
import Mpesa from 'mpesa-node';

const mpesaConfig = {
    consumerKey: 'LTrQZg4AAlsSAAZvSECaicK0Ovpvzyzz', 
    consumerSecret: 'Mn8yOpGccQNe3gWW',
    environment: 'sandbox',
    shortCode: '600729',
    initiatorName: 'Test Initiator',
    lipaNaMpesaShortCode: 174379,
    lipaNaMpesaShortPass: 'bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919',
    securityCredential: 'Safaricom729#',
}

const mpesaApi = new Mpesa(mpesaConfig)

async function sendStkPush(msisdn, amount, accountRef){
    await mpesaApi.lipaNaMpesaOnline(msisdn, amount, 'https://0f809f249afa.ngrok.io/lipanampesa/success', accountRef)
}