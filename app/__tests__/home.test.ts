import { UITestBuilder } from '@antiwork/shortest';

interface loginButton {
  url: string;
}

define('Validate Dasboard is accessible by users', async () => {
  new UITestBuilder<loginButton>('/')
    .test('Validate that users can access the dashboard')
    .given('baseUrl', { url: 'http://localhost:3000' })
    .when('Clicking on view dashboard button')
    .expect('Should be able redirect to /dashboard and see the dashboard');
});