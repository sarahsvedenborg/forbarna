<template>
  <div>
    <ColoredHeading headingString="Om oss" />
    <div class="panel">
      <div class="text">
        <h2>Hva er forBarna.no?</h2>
        <p>
          Vi er to foreldre og IT-konsulenter som ønsker å forsterke våre egne
          barns læringsopplevelser med digitale verktøy. Vi bruker noen kvelder
          i ny og ne på å lage små spill for barna om tema som opptar dem i
          øyeblikket.
        </p>

        <p>
          Vi er overbevist om at læring fungerer best når det er lystbetont og
          at læring som repeteres og forsterkes gjennom forskjellige kanaler
          sitter bedre, og lengre.
        </p>

        <p>
          Digitale verktøy er på ingen måte den eneste måten å lære på, men det
          er én slik kanal og vi ønsker å bidra med noe der.
        </p>
        <h2>Hvem er vi?</h2>
        <p>Vi er Sarah og Stian, gift i 2012 og har 4 barn sammen.</p>
        <p>
          Sarah er UX utvikler og jobber med både design og frontendutvikling.
          Hun har jobbet ett år som lærer og er ett år unna å være utdannet
          lærer. Fagene hun brenner for er engelsk, matematikk og IT.
        </p>
        <p>
          Stian er backend-utvikler og jobber som sikkerhetsarkitekt i
          banksektoren. Han har flere års erfaring med å undervise programmering
          på universitetet og er leken og godt likt av barn i alle aldre.
        </p>
        <h2>Hvem er forBarna.no for?</h2>
        <p>
          Spillene er i utgangspunktet utviklet med våre egne barn i fokus,
          basert på hva de er interessert i og på hvilket læringsstadie de
          befinner seg, men vil med stor sannsynlighet også kunne appellere til
          andre.
        </p>
        <p>
          Spillene skal være lavterskel og enkle slik at alle kan bruke dem, og
          vi synes det er kjempegøy om flere enn våre egne barn drar nytte av
          innholdet på denne siden.
        </p>
        <p>
          Send oss gjerne en mail om du har ideér til siden eller det er noe du
          vil kommentere. Vi setter stor pris på tilbakemeldinger!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import ColoredHeading from "./shared/ColoredHeading";
export default {
  components: { ColoredHeading },
};
</script>

<style scoped>
.panel {
  background-color: var(--primary-color-light);
  width: 80%;
  margin: 0 auto;
  box-shadow: 0px 1px 7px 0px #888;
  margin-bottom: 30px;
}
.text {
  text-align: left;
  width: 70%;
  margin: 0 auto;
  padding: 30px 0px;
  font-weight: bold;
}
h2:nth-of-type(1) {
  color: var(--color-pink);
}
h2:nth-of-type(2) {
  color: var(--color-green);
}
h2:nth-of-type(3) {
  color: var(--color-orange);
}
</style>
