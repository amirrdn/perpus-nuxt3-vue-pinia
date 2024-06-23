import { defineStore } from 'pinia';
import axios from 'axios';


interface Books{
    id: number;
    title: string;
    creator: string;
    publisher: string;
    publication_year: string;
    cover_image: string;
    description: string;
    created_at: string;
    updated_at: string;
    book_id: number;
    inventories: any;
}
export const useBookStore = defineStore('book', {
    state: () => ({
        items: [] as Books[],
        loading: false,
        error: '',
        per_page: 5,
        page: 1,
        form: 0,
        total: 0,
        success: false
    }),
    actions: {
        async getAllbooks(page: any, searching: string) {
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
                        per_page: this.per_page,
                        searching: searching
                    }
                };
              this.loading = true
              await axios.get('http://localhost:3001/api/book/get-book', config)
              .then(response => {
                  this.items = response.data.books
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
          async SaveBooks(books: any){
              const token = useCookie('token');
              const config = {
                  headers: {
                      Authorization: `Bearer ${token.value}`
                  },
              };
              await axios.put(`http://localhost:3001/api/book/update`, books, config)
              .then(() => {
                this.loading = false;
              })
              .catch((error) => {
                this.loading = false;
                this.error = 'Error fetching data'
                 console.log(error)
             })
          },
          async insertBooks(books: any){
            const token = useCookie('token');
            const config = {
                headers: {
                    Authorization: `Bearer ${token.value}`
                },
            };
            await axios.post(`http://localhost:3001/api/book/insert`, books, config)
            .then(() => {
              this.loading = false;
            })
            .catch((error) => {
              this.loading = false;
              this.error = 'Error fetching data'
               console.log(error)
           })
        },
        async DeleteBooks(ids: any){
            this.loading = false;
            const data = {
                book_id: ids,
            }
            const token = useCookie('token');
            const config = {
                headers: {
                    Authorization: `Bearer ${token.value}`
                },
            };
            await axios.request({
                url: `http://localhost:3001/api/book/destroy`,
                method: 'delete',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${token.value}`
                },
                data: {
                  // Body data if required by your API
                  book_ids: ids,
                },
              }).then(()=>{
                this.success = true;
                setTimeout(() => {
                    this.loading = false;
                }, 2000);
            })
        },
        async getDetailbook(id: number) {
            try {
                const token = useCookie('token');
                const data = {
                    book_id: id
                }
                const config = {
                    headers: {
                        Authorization: `Bearer ${token.value}`,
                        "content-type": "application/json",
                        'crossdomain': true
                    },
                };
              this.loading = true
              await axios.post('http://localhost:3001/api/book/detail', data, config)
              .then(response => {
                  this.items = response.data.data
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
    },
})