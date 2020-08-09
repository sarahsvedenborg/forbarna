<template>
    <div class="cardValuesTable">
            <table>
              <tr v-for="i in numPairs" :key="i">
                <td class="rowHeading">Par {{ i }}</td>
                <td v-for="j in Number(cardsInPair)" :key="j+'a'">
                  <input :placeholder="'Verdi på kort ' + j" v-model="cards[i-1][j-1]" type="text" />
                </td>
              </tr>
            </table>
          </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.cardValuesTable {
  margin-top: 2em;
}

.cardValuesTable table {
  margin: 0 auto;
}

.rowHeading {
  font-weight: bold;
}
</style>