import { defineStore } from 'pinia';
import axios from 'axios';

export const useInventoryStore = defineStore('inventory', {
    state: () => ({
        loading: false,
        error: '',
        success: false
    }),
    actions: {
        async insertInventories(obj: any){
            try{
                const token = useCookie('token');
              const config = {
                  headers: {
                      Authorization: `Bearer ${token.value}`
                  },
              };
              await axios.post('http://localhost:3001/api/inventory/insert', obj, config)
              .then(() => {
                this.loading = false;
                this.success = true;
              })
              .catch((error) => {
                this.loading = false;
                this.error = 'Error fetching data'
             })
            }catch (error) {
                this.error = 'Error fetching data'
                console.error('Error fetching data:', error)
              } finally {
                this.loading = false
              }
        }
    }
});