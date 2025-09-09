import { supabase } from '../lib/supabase';

const loginButton = document.getElementById('login-button') as HTMLButtonElement;
const signupButton = document.getElementById('signup-button') as HTMLButtonElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const passwordInput = document.getElementById('password') as HTMLInputElement;
const messageDiv = document.getElementById('message') as HTMLDivElement;

const setLoading = (isLoading: boolean) => {
  loginButton.disabled = isLoading;
  signupButton.disabled = isLoading;
  messageDiv.textContent = isLoading ? 'Loading...' : '';
};

const showMessage = (message: string, isError: boolean = false) => {
  messageDiv.textContent = message;
  messageDiv.className = isError ? 'text-red-500' : 'text-green-500';
};

const handleAuth = async (authFunction: 'signInWithPassword' | 'signUp') => {
  setLoading(true);
  const { data, error } = await supabase.auth[authFunction]({
    email: emailInput.value,
    password: passwordInput.value,
  });

  setLoading(false);

  if (error) {
    showMessage(`Error: ${error.message}`, true);
  } else {
    if (authFunction === 'signUp') {
      showMessage('Sign up successful! Please check your email for a confirmation link.');
    } else {
      showMessage('Login successful!');
      window.location.href = '/account';
    }
  }
};

loginButton.addEventListener('click', () => handleAuth('signInWithPassword'));
signupButton.addEventListener('click', () => handleAuth('signUp'));
