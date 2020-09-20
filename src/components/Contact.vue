<template>
  <div>
    <ColoredHeading headingString="Kontakt oss" />
    <p>Gi oss gjerne tilbakemelding på hva som kan forbedres!</p>
    <form name="contact"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    @submit.prevent="submit">
    <input type="hidden" name="form-name" value="contact" />
    <TextInput label="Navn" :inputChanged="(newInput) => name = newInput" />
    <TextInput label="Epost" :inputChanged="(newInput) => email = newInput" />
    <TextArea label="Beskjed" :inputChanged="(newInput) => message = newInput" />
    <br />
    <Button buttonType="primary" >Send*</Button>
    </form>
    <p class="hint">*Ved å trykke <strong>Send</strong> samtykker du til at epost-adressen din lagres i våre systemer.</p>
    <!-- TODO: 
    1. Make into own confirmation component. 
    2. Confirm when email is successfully sent
    3. Spinner while waiting for response
    4. Be able to actually send email
    -->
    <Modal v-if="emailSent" :close="() => emailSent = false">
      <div class="modalContent">
        <h2>Beskjeden er sendt!</h2>
        <p>Henvendelsen vil bli besvart på mail så raskt som mulig.</p>
    </div>
    </Modal>
  </div>
</template>

<script>
import ColoredHeading from "./shared/ColoredHeading";
import TextInput from "./shared/UI/TextInput";
import TextArea from "./shared/UI/TextArea";
import Button from "./shared/UI/Button";
import Modal from "./shared/Modal";

export default {
  components: { ColoredHeading, TextInput, TextArea, Button, Modal },
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
      /*
      axios post
      if success show success route or message
      if error display error message and return to form or homepage
      */
      this.emailSent = true
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
.hint{
  color: var(--primary-color-dark);
  font-weight: normal;
  font-size: smaller;
}

.modalContent p{
  color: var(--primary-color-dark)
}
</style>