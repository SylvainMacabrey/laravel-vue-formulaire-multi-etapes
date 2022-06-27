import { createApp } from 'vue';
import './bootstrap';
import SubscriptionForm from './components/SubscriptionForm';

const app = createApp();

app.component('subscription-form', SubscriptionForm);

app.mount('#app');
