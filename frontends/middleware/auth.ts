import { storeToRefs } from 'pinia';
import { useAuthStore } from '~/store/auth';

interface Vusers {
    created_at: string;
    email: string;
    name: string;
    roles: Vroles | null;
  }
  interface Vroles {
    id: number;
    name: string;
  }
  
export default defineNuxtRouteMiddleware((to) => {
  const { authenticated } = storeToRefs(useAuthStore());
  const { users } = storeToRefs(useAuthStore());
  const token = useCookie('token');
  const vusers = useCookie("users") || null;
  const user: Vusers = vusers.value !== undefined ? JSON.parse(JSON.stringify(vusers.value)) : '';
  if (token.value) {
    authenticated.value = true;
    users.value = user;
  }

  // if token exists and url is /login redirect to homepage
  if (token.value && to?.name === 'login') {
    return navigateTo('/');
  }

  // if token doesn't exist redirect to log in
  if (!token.value && to?.name !== 'login') {
    abortNavigation();
    return navigateTo('/login');
  }
});