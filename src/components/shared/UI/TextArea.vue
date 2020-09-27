<template>
  <div>
      <label :for="label" class="passiveLabel">{{label}}</label>
    <br />
     <textarea
      :id="label"
      :name="name"
      :class="inputActive ? 'active' : 'passive'"
      @focus="inputActive = true"
      @blur="inputActive = false"
      v-model="message"
      @change="inputChanged(message)"
    />
  </div>
</template>

<script>
export default {
  props: {
    name: {
        type: String,
        required: true
    },
    label: {
      type: String
    },
    inputChanged: {
        type: Function
    }
  },
  data() {
    return {
      inputActive: false,
      message: ''
    };
  }
};
</script>

<style scoped>
div {
  margin-top: 40px;
}


.passiveLabel {
  font-size: inherit;
  transform: translateY(50px);
}
textarea {
    border: 2px solid var(--primary-color-dark);
    border-radius: 5px;
    background-color: transparent;
    width: 40%;
    height: 20vh;
    padding: 10px;
}
textarea:focus {
    outline: none;
    background-color: rgba(256,256,256,0.3)
}
label {
  font-weight: bold;
}
</style>