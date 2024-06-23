import { defineStore } from 'pinia';

interface UserPayloadInterface {
  email: string;
  password: string;
}
interface AuthState {
  users: Vusers | null;
  token: string;
  authenticated: boolean;
  loading: boolean;
}
interface Vusers {
  created_at: string;
  email: string;
  name: string;
  roles: Vroles | null
}
interface Vroles {
  id: number;
  name: string;
}
export const useAuthStore = defineStore('auth', {
  state: () : AuthState => ({
    authenticated: false,
    loading: false,
    token: '',
    users: null
  }),
  actions: {
    async authenticateUser({ email, password }: UserPayloadInterface) {
      // useFetch from nuxt 3
      const { data, pending }: any = await useFetch('http://localhost:3001/api/auth/login', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: {
          email,
          password,
        },
      });
      this.loading = pending;
      if (data.value) {
        const token = useCookie('token');
        token.value = data?.value?.accessToken.token;
        const users = useCookie('users');
        users.value = data?.value?.user;
        this.token = data?.value?.accessToken.token;
        this.users = data?.value?.user;
        this.authenticated = true;
      }
    },
    logUserOut() {
      const token = useCookie('token');
      this.authenticated = false;
      token.value = null;
    },
  },
});