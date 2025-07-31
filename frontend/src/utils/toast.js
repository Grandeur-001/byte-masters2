// utils/alert.js
import Swal from 'sweetalert2'

const themeMode = 'dark' 

// Common color configs
const themes = {
  light: {
    background: '#fff',
    color: '#333',
  },
  dark: {
    background: '#1e1e1e',
    color: '#eee',
  },
}

// ✅ Base Toast Configuration
const baseToast = Swal.mixin({
  toast: true,
  position: 'bottom-right',
  showConfirmButton: false,
  allowEscapeKey: false,
  timer: 3000,
  timerProgressBar: true,
  ...themes[themeMode],
  customClass: { 
    popup: 'shadow-lg rounded-lg px-4 py-3',
    title: 'text-sm font-semibold',
  },
})

const baseModal = Swal.mixin({
  showConfirmButton: true,
  allowOutsideClick: false,
  allowEscapeKey: false,
  confirmButtonColor: '#3b82f6', // Tailwind blue-500
  ...themes[themeMode],
  customClass: {
    popup: 'rounded-xl p-4',
    title: 'text-lg font-bold',
    content: 'text-base',
  },
//   timer: 3000,
})

// 🔥 Toast methods
export const toast = {
  success: (message) => baseToast.fire({ icon: 'success', title: message }),
  error: (message) => baseToast.fire({ icon: 'error', title: message }),
  info: (message) => baseToast.fire({ icon: 'info', title: message }),
  warning: (message) => baseToast.fire({ icon: 'warning', title: message }),
  custom: (options) => baseToast.fire(options),
}

// 🔥 Modal methods
export const modal = {
  success: (title, text = '') =>
    baseModal.fire({ icon: 'success', title, text }),
  error: (title, text = '') =>
    baseModal.fire({ icon: 'error', title, text }),
  info: (title, text = '') =>
    baseModal.fire({ icon: 'info', title, text }),
  warning: (title, text = '') =>
    baseModal.fire({ icon: 'warning', title, text }),
  confirm: (title, text = '') =>
    baseModal.fire({
      icon: 'question',
      title,
      text,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }),
  custom: (options) => baseModal.fire(options),
}
