// types/sweetalert2.d.ts

import Swal from 'sweetalert2';

declare module '#app' {
  interface NuxtApp {
    $swal: typeof Swal;
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $swal: typeof Swal;
  }
}
