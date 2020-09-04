<template>
  <div>
    <ColoredHeading headingString="Kontakt oss" />
    <p>Gi oss gjerne tilbakemelding på hva som kan forbedres!</p>
    <TextInput label="Navn" :inputChanged="(newInput) => name = newInput" />
    <TextInput label="Epost" :inputChanged="(newInput) => email = newInput" />
    <TextArea label="Beskjed" :inputChanged="(newInput) => message = newInput" />
    <br />
    <Button buttonType="primary" :action="submit">Send</Button>
    <!-- TODO: 
    1. Make into own confirmation component. 
    2. Confirm when email is successfully sent
    3. Spinner while waiting for response
    4. Be able to actually send email
    -->
    <div :class="emailSent ? 'confirmation' : 'invisible'">
        <h2>Epost sent!</h2>
        <p>Takk for eposten. </p>
        <p> Den vil bli besvart så raskt som mulig.</p>
    </div>
  </div>
</template>

<script>
import ColoredHeading from "./shared/ColoredHeading";
import TextInput from "./shared/UI/TextInput";
import TextArea from "./shared/UI/TextArea";
import Button from "./shared/UI/Button";

export default {
  components: { ColoredHeading, TextInput, TextArea, Button },
  data() {
    return {
      name: "",
      email: "",
      message: "",
      emailSent: false
    };
  },
  methods: {
    submit() {
      console.log("message", this.message);
      this.emailSent = true
      this.closeConfirmation()
    },
    closeConfirmation(){
        const context = this
        setTimeout(() => {
            context.emailSent = false
        }, 5000)
    }
  }
};
</script>

<style scoped>
div {
  position: relative;
}
p {
  color: var(--primary-color-light);
  font-weight: bold;
  font-size: larger;
}

.confirmation {
    border: 2px solid green;
    background-color: lightgreen;
    color: black;
    position: absolute;
    top: 250px;
    left: 300px;
    opacity: 1;
    transition: opacity 2s;
}
.invisible{
    opacity: 0;
    transition: opacity 2s;
}
</style>