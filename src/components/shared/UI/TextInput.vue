<template>
  <div>
    <p :class="inputActive || input != '' ? 'active' : 'passive'">
      <label :for="label">{{label}}</label>
    </p>
    <br />
    <input
      type="text"
      :id="label"
      @focus="inputActive = true"
      @blur="inputActive = false"
      v-model="input"
      @change="inputChanged(input)"
    />
  </div>
</template>

<script>
export default {
  props: {
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
      input: ''
    };
  },
  computed: {
      inputIsEmpty(){
          return this.input != '' 
      }
  }
};
</script>

<style scoped>
div {
  position: relative;
}
.active {
  font-size: 12px;
  transform: translateY(70px);
  transition: transform 0.5s;
}

.passive {
  font-size: inherit;
  transform: translateY(50px);
}
p {
  margin: 0px;
  position: relative;
  z-index: 0;
}
label {
  font-weight: bold;
}
input {
  position: relative;
  border: none;
  border-bottom: 2px solid var(--primary-color-dark);
  background-color: transparent;
  width: 40%;
  cursor: pointer;
  z-index: 2;
  padding: 5px;
  font-size: large;
  text-align: center;
  margin-bottom: 20px;
}

input:focus {
  outline: none;
  border: none;
  border-bottom: 2px solid var(--primary-color-dark);
}
</style>