import { TransactionalSMSApi } from '@getbrevo/brevo';

const smsApi = new TransactionalSMSApi();

smsApi.sendTransacSms({  
    sender: "some-sender",
    recipient: "some-recipient",
    content: "some-content",
    tag: "some-tag"
})