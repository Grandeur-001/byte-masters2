import { h, defineComponent } from 'vue'

export const CodeIcon = defineComponent({
  name: 'CodeIcon',
  render() {
    return h('svg', {
      fill: 'currentColor',
      viewBox: '0 0 24 24',
      innerHTML: `<path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>`
    })
  }
})

export const CloudIcon = defineComponent({
  name: 'CloudIcon',
  render() {
    return h('svg', {
      fill: 'currentColor',
      viewBox: '0 0 24 24',
      innerHTML: `<path d="M19.35 10.04C18.67 6.59 15.64 4 12 4a7.998 7.998 0 0 0-6.65 3.35A6.5 6.5 0 0 0 0 14c0 3.59 2.91 6.5 6.5 6.5H19a5 5 0 0 0 0-10z"/>`
    })
  }
})
export const MobileIcon = defineComponent({
  name: 'MobileIcon',
  render() {
    return h('svg', {
      fill: 'currentColor',
      viewBox: '0 0 24 24',
      innerHTML: `<path d="M17 1H7a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm-5.5 20a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 11.5 21zM15.5 4H8v12h7V4z"/>`
    })
  }
}); 

export const DesignIcon = defineComponent({
  name: 'DesignIcon',
  render() {
    return h('svg', {
      fill: 'currentColor',
      viewBox: '0 0 24 24',
      innerHTML: `<path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>`
    })
  }
}); 

export const ServerIcon = defineComponent({
  name: 'ServerIcon',
  render() {
    return h('svg', {
      fill: 'currentColor',
      viewBox: '0 0 24 24',
      innerHTML: `<path d="M4,1H20A1,1 0 0,1 21,2V6A1,1 0 0,1 20,7H4A1,1 0 0,1 3,6V2A1,1 0 0,1 4,1M4,9H20A1,1 0 0,1 21,10V14A1,1 0 0,1 20,15H4A1,1 0 0,1 3,14V10A1,1 0 0,1 4,9M4,17H20A1,1 0 0,1 21,18V22A1,1 0 0,1 20,23H4A1,1 0 0,1 3,22V18A1,1 0 0,1 4,17M5,2V6H7V2H5M8,2V6H10V2H8M5,10V14H7V10H5M8,10V14H10V10H8M5,18V22H7V18H5M8,18V22H10V18H8Z"/>`
    })
  }
}); 

export const GraphicIcon = defineComponent({
  name: 'GraphicIcon',
  render() {
    return h('svg', {
      fill: 'currentColor',
      viewBox: '0 0 24 24',
      innerHTML: `<path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,0 2,12A10,10 0 0,0 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6L15.5,10.5L12,11L10.5,15.5L12,6Z"/>`
    })
  }
}); 



