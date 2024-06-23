import { defineStore } from 'pinia';
import axios from 'axios';

export const useRoleStore = defineStore('role', {
    state: () => ({
        roles: [],
        loading: false,
        error: ''
    }),
    actions: {
        async fetchRoles(){
            try{
                const token = useCookie('token');
                const config = {
                    headers: {
                        Authorization: `Bearer ${token.value}`,
                        "content-type": "application/json",
                        'crossdomain': true
                    }
                };
              this.loading = true
              await axios.get('http://localhost:3001/api/roles', config)
              .then(response => {
                  this.roles = response.data.role
                  setTimeout(() => {
                      this.loading = false;
                  }, 3000);
              })
            } catch (error) {
                this.error = 'Error fetching data'
                console.error('Error fetching data:', error)
              } finally {
                this.loading = false
              }
        }
    }
});