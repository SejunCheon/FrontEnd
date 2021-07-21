 <template>
  <div class="product">
    <section class="product-image">
      <img v-bind:src="image" />
    </section>
    <div class="product-info">
      <h1>{{ title }}</h1>
      <p v-if="inStock">In Stock</p>
      <p v-else>Out of Stock</p>
      <ul>
        <li v-for="(detail, i) in details" :key="i">
          <p>{{ detail }}</p>
        </li>
      </ul>
      <div
        class="color-box"
        v-for="(variant, index) in variants"
        :key="variant.variantId"
        :style="{ backgroundColor: variant.variantColor }"
        @mouseover="updateProduct(index)"
      ></div>
      <button
        @click="addToCart"
        :disabled="!inStock"
        :class="{ disabledButton: !inStock }"
      >
        Add to Cart
      </button>

      <div class="comment">
        닉네임 <input type="text" v-model="user" /> 댓글<input
          type="text"
          v-model="comment"
        />
        <button @click="save">저장</button>
        <ul>
          <li v-for="(msg, i) in message" :key="i">
            <p>{{ msg.user }}: {{ msg.comment }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
    
<script>
export default {
  data() {
    return {
      brand: "Vue",
      product: "Socks",
      selectedVariant: 0,
      // image:'./assets/images/socks_green.jpg',
      // inventory:0,
      details: ["80% cotton", "20%polyester", "Gender-neutral"],
      variants: [
        {
          variantld: 2234,
          variantColor: "green",
          variantImage: require("@/assets/images/socks_green.jpg"),
          variantQuantity: 10,
        },
        {
          variantld: 2235,
          variantColor: "blue",
          variantImage: require("@/assets/images/socks_blue.jpg"),
          variantQuantity: 5,
        },
      ],
      // cart:0

      user: null,
      comment: null,
      message: [],
    };
  },
  methods: {
    addToCart() {
      this.$emit("add-to-cart", this.variants[this.selectedVariant].variantld);
    },
    updateProduct(index) {
      this.selectedVariant = index;
    },

    save() {
      const message = {
        user: this.user,
        comment: this.comment,
      };

      this.message.unshift(message);
      this.user = null;
      this.comment = null;
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
  },
};
</script>