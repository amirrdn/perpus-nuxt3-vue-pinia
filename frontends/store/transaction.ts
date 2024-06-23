import { defineStore } from 'pinia';
import axios from 'axios';

interface transactionPayload {
    id: number;
    student_id: number;
    loan_date: string;
    return_date: string;
    details: any;
    user: any;
}
export const useTransactionStroe = defineStore('transaction', {
    state: () => ({
        vdataitems: [] as transactionPayload[],
        loading: false,
        error: false,
        success: false,
        per_page: 5,
        page: 1,
        form: 0,
        total: 0,
    }),
    actions: {
        async insertData(data: any){
            const token = useCookie('token');
            const config = {
                headers: {
                    Authorization: `Bearer ${token.value}`
                },
            };
            await axios.post(`http://localhost:3001/api/transaction/insert`, data, config)
            .then(() => {
              this.loading = false;
              this.success = true;
              this.error = false;
            })
            .catch((error) => {
              this.loading = false;
              this.success = false;
              this.error = true;
           })
        },
        async getListData(page: any) {
            try {
                const token = useCookie('token');
                const config = {
                    headers: {
                        Authorization: `Bearer ${token.value}`,
                        "content-type": "application/json",
                        'crossdomain': true
                    },
                    params: {
                        page: page,
                        per_page: this.per_page
                    }
                };
              await axios.get('http://localhost:3001/api/transaction/list', config)
              .then(response => {
                const arr: transactionPayload[] = response.data.datatrans;
                console.log(arr)
                  this.vdataitems = arr;
                  this.form = response.data.from
                  this.total = response.data.total
                  this.loading = false;
              })
            } catch (error) {
              this.error = true;
              console.error('Error fetching data:', error)
            } finally {
              this.loading = false
            }
          },
    }
})