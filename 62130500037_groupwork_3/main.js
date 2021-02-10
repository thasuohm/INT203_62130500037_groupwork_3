const app = {
    data() {
        return {
            gallery: [
                {images: 'images/doraemon.png',name : 'Doraemon',fav: false},
                {images: 'images/nobita.png', name : 'Nobita',fav: false},
                {images: 'images/suneo.png',name : 'Suneo', fav: false}
                ]
           ,favicon: 'images/favorite.svg'
        }
    },
    methods: {
        favorite(index){
            this.gallery[index].fav = !this.gallery[index].fav
        }
    },
    computed: {
        countLike(){
            return this.gallery.length-this.gallery.filter( im => !im.fav ).length
        }
    }

}
Vue.createApp(app).mount('#app')

