Vue.component("product", {
    template:`
    <div class="product">
            <div class="product-image">
                <img :src="image">
            </div>
            <div class="product-info">
                <h1>{{ title }} </h1>
                <p v-if="inStock">In Stock</p>
                <p v-else>Out of Stock</p>
                <ul>
                    <li v-for="d in details">
                        <p>{{ d }}</p>
                    </li>
                </ul>
                <div v-for="(variant,index)  in variants" :key="variant.variantId" class="color-box"
                    :style="{backgroundColor: variant.variantColor}" @mouseover="updateProduct(index)">
                </div>
                <button @click="addToCart" :disabled="!inStock" :class="{disabledButton:!inStock}">Add to Cart</button>
            </div>
        </div>
    `,
    data() {
        return {
            brand:'Vue',
            selectedVariant:0,
            product:"Socks",
            // image:"./assets/images/socks_green.jpg",
            details:[ "80% cotton", "20% polyester", "Gender-neutral" ],
            variants:[
                {
                    variantId:2234,
                    variantColor:'green',
                    variantImage:'./assets/images/socks_green.jpg',
                    variantQuantity:10,
                },
                {
                    variantId:2235,
                    variantColor:'blue',
                    variantImage:'./assets/images/socks_blue.jpg',
                    variantQuantity:0,
                },
            ],
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)

        },
        updateProduct(index) {
            this.selectedVariant = index
        }
    },
    computed:{
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        title() {
            return this.brand + ' ' + this.product
        },
    }
})

let app = new Vue({
    el:'#app',
    data:{
        cart:[]
    },
    methods: {
        addToCart(value) {
            this.cart.push(value)
        }
    },
});