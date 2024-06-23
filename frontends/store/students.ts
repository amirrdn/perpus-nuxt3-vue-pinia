import { defineStore } from 'pinia';
import axios from 'axios';

interface StudentPayload {
    id: number;
    name: string;
    email: string;
    nim: string;
    major: string;
    student_year: number;
    password: string;
    role_id: number;
    created_at: string;
    updated_at: string;
    user_id: number;
    roles: any
}
export const useStudentStore = defineStore('students', {
    state: () => ({
        items: [] as StudentPayload[],
        loading: false,
        error: '',
        per_page: 5,
        page: 1,
        form: 0,
        total: 0,
        onerror: false,
        success: false
    }),
    actions:{
        async fetchData(page: any, searching: any){
            try{
                const token = useCookie('token');
                const config = {
                    headers: {
                        Authorization: `Bearer ${token.value}`,
                        "content-type": "application/json",
                        'crossdomain': true
                    },
                    params: {
                        page: page,
                        per_page: this.per_page,
                        searching: searching
                    }
                };
              this.loading = true
              await axios.get('http://localhost:3001/api/users/get-all', config)
              .then(response => {
                  this.items = response.data.users
                  this.form = response.data.from
                  this.total = response.data.total
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
        },
        async insertData(vform: any){
            this.loading = true;
            const token = useCookie('token');
              const config = {
                  headers: {
                      Authorization: `Bearer ${token.value}`
                  },
              };
              await axios.post(`http://localhost:3001/api/register`, vform, config)
              .then(() => {
                this.loading = false;
                setTimeout(() => {
                    this.success = true;
                }, 2000);
              })
              .catch((error) => {
                this.loading = false;
                this.error = 'Error fetching data'
                this.onerror = true;
             })
        },
        async updateData(vform: any){
            this.loading = true;
            const token = useCookie('token');
              const config = {
                  headers: {
                      Authorization: `Bearer ${token.value}`
                  },
              };
              await axios.put(`http://localhost:3001/api/users/update`, vform, config)
              .then(() => {
                this.loading = false;
                setTimeout(() => {
                    this.success = true;
                }, 2000);
              })
              .catch((error) => {
                this.loading = false;
                this.error = 'Error fetching data'
                this.onerror = true;
             })
        }
    }
});