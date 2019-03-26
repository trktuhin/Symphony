<template>
    <v-container fluid grid-list-sm>
    <v-layout row wrap>
        <v-flex md12>
            <v-radio-group v-model="currentClient" row>
              <v-radio
                label="All"
                color="light-blue darken-4"
                value="all"
              ></v-radio>
              <v-radio
                label="Sage"
                color="light-green accent-3"
                value="sage"
              ></v-radio>
              <v-radio
                label="VAT"
                color="red accent-3"
                value="vat"
              ></v-radio>
              <v-radio
                label="HRM"
                color="purple darken-3"
                value="hrm"
              ></v-radio>
              <v-radio
                label="FDR"
                color="orange darken-3"
                value="fdr"
              ></v-radio>
              <v-radio
                label="PF & Gratuity"
                color="brown darken-3"
                value="pf"
              ></v-radio>
            </v-radio-group>
          </v-flex>
      <v-flex xs4 sm2 md1 v-for="item in getDesiredClients">
        <v-img :src="item.image" max-height="100px" max-width="100px" class="trkLogo">
        </v-img>
        <div class="caption white--text">{{item.name}}</div>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
    data(){
        return{
            sage:[
                {name:'Delta Brac Housing Finance Corp. Ltd.',image:'src/assets/Sage/Sage New-01.png'},
                {name:'Lanka Bangla Investment Ltd.<',image:'src/assets/Sage/Sage New-02.png'},
                {name:'Green Delta Capital Ltd.',image:'src/assets/Sage/Sage New-03.png'},
                {name:'Stock Brokerage Ltd.',image:'src/assets/Sage/Sage New-04.png'},
                {name:'American Internationl School',image:'src/assets/Sage/Sage New-05.png'},
                {name:'Campaign for popular education',image:'src/assets/Sage/Sage New-06.png'},
                {name:'American & Efird Inc.',image:'src/assets/Sage/Sage New-07.png'},
                {name:'ICCO Corporation, Bangladesh',image:'src/assets/Sage/Sage New-08.png'},
                {name:'Ruposhi Bangla Hotel',image:'src/assets/Sage/Sage New-09.png'},
                {name:'CheckPoint Bangladesth Ltd.',image:'src/assets/Sage/Sage New-10.png'},
                {name:'WCA Logistic Ltd.',image:'src/assets/Sage/Sage New-11.png'},
                {name:'MJL Bangladesh Ltd.',image:'src/assets/Sage/Sage New-12.png'},
                {name:'RDRS Bangladesh',image:'src/assets/Sage/Sage New-13.png'},
                {name:'Nuvista Pharma',image:'src/assets/Sage/Sage New-14.png'},
                {name:'BRAC EPL Investment Ltd.',image:'src/assets/Sage/Sage New-15.png'},
                {name:'Omera Fuels Limited.',image:'src/assets/Sage/Sage New-16.png'},
                {name:'TIB',image:'src/assets/Sage/Sage New-18.png'},
                {name:'SABINCO',image:'src/assets/Sage/Sage New-19.png'},
                {name:'Polar ice cream',image:'src/assets/Sage/Sage New-20.png'},
                {name:'Crystal Martin Apparel Ltd.',image:'src/assets/Sage/Sage New-21.png'},
                {name:'Manuser Jonno Foundation',image:'src/assets/Sage/Sage New-22.png'},
                {name:'Expo Freight Ltd.',image:'src/assets/Sage/Sage New-23.png'},
                {name:'PROOFS',image:'src/assets/Sage/Sage New-25.png'},
                {name:'Citycell Telecom',image:'src/assets/Sage/Sage New-26.png'},
                {name:'Green Delta Securites Ltd.',image:'src/assets/Sage/Sage New-27.png'},
                {name:'Samorita Hospital Ltd.',image:'src/assets/Sage/Sage New-28.png'},
                {name:'Samah Razor Blades Industries',image:'src/assets/Sage/Sage New-29.png'},
                {name:'Interstoff Apparels Ltd.',image:'src/assets/Sage/Sage New-30.png'},
                {name:'Phoenix Securities Ltd.',image:'src/assets/Sage/Sage New-31.png'},
                {name:'SSD Tech',image:'src/assets/Sage/Sage New-32.png'},
                {name:'QUBEE',image:'src/assets/Sage/Sage New-33.png'},
                {name:'Crystal Martin Knitwear Ltd.',image:'src/assets/Sage/Sage New-34.png'}
            ],
            vat:[
                {name:'CheckPoint Bangladesth Ltd.',image:'src/assets/Sage/Sage New-10.png'},
                {name:'Arbab Poly Pack Ltd.',image:'src/assets/VAT/Arbab Poly Pack Ltd-01.png'},
                {name:'Seven Circle Bangladesh Ltd.',image:'src/assets/VAT/VAT All Logo-01.png'},
                {name:'Bureau Veritas Ltd.',image:'src/assets/VAT/VAT All Logo-02.png'},
                {name:'Padma Paper Mills Ltd.',image:'src/assets/VAT/VAT All Logo-03.png'},
                {name:'CP Bangladesh Ltd.',image:'src/assets/VAT/VAT All Logo-04.png'},
                {name:'Bombay Sweets & Ltd.',image:'src/assets/VAT/VAT All Logo-05.png'},
                {name:'Padma Can Closures.',image:'src/assets/VAT/VAT All Logo-06.png'},
                {name:'East Cost Group',image:'src/assets/VAT/VAT All Logo-07.png'},
                {name:'Padma Lamitube Ltd.',image:'src/assets/VAT/VAT All Logo-08.png'},
                {name:'Nitol Niloy',image:'src/assets/VAT/VAT All Logo-09.png'},
                {name:'Padma Cap Manufacturing Ltd.',image:'src/assets/VAT/VAT All Logo-10.png'},
                {name:'IR Ltd.',image:'src/assets/VAT/VAT All Logo-11.png'},
                {name:'Matador Ballpen Ind. Ltd.',image:'src/assets/VAT/VAT All Logo-12.png'},
                {name:'Padma Crown Ltd.',image:'src/assets/VAT/VAT All Logo-13.png'},
                {name:'Rupsha Tyres and Tubes Ltd.',image:'src/assets/VAT/VAT All Logo-14.png'},
                {name:'Matador Writing Instrument Ltd.',image:'src/assets/VAT/VAT All Logo-15.png'},
                {name:'Bureau Veritas',image:'src/assets/VAT/VAT All Logo-16.png'},
                {name:'Bombay Sweets Co & Ltd.',image:'src/assets/VAT/VAT All Logo-17.png'},
                {name:'Padma Blowing Ltd.',image:'src/assets/VAT/VAT All Logo-18.png'},
                {name:'Matador Polyfit Industries',image:'src/assets/VAT/VAT All Logo-19.png'},
                {name:'Bombay Sweets Trice Pack Ltd.',image:'src/assets/VAT/VAT All Logo-20.png'},
                {name:'Padma PET Ltd.',image:'src/assets/VAT/VAT All Logo-21.png'},
                {name:'Padma Plastic Ltd.',image:'src/assets/VAT/VAT All Logo-22.png'},
                {name:'Matador Polyfab Industries',image:'src/assets/VAT/VAT All Logo-23.png'}
            ],
            hrm:[
                {name:'Stock Brokerage Ltd.',image:'src/assets/Sage/Sage New-04.png'},
                {name:'Campaign for popular education',image:'src/assets/Sage/Sage New-06.png'},
                {name:'Kazal Brothers Ltd.',image:'src/assets/HRM/Sage New-17.png'},
                {name:'Anupam Printers Ltd.',image:'src/assets/HRM/Anupam Printers Log-01.png'}
            ],
            fdr:[
                {name:'SABINCO',image:'src/assets/Sage/Sage New-19.png'}
            ],
            pf:[
                {name:'BRAC EPL Investment Ltd.',image:'src/assets/Sage/Sage New-15.png'}
            ],
            currentClient:'all'
        }
    },
    computed:{
        getDesiredClients(){
            if(this.currentClient==='all'){
                var result=[];
                result.push(...this.sage);
                result.push(...this.vat);
                result.push(...this.hrm);
                result.push(...this.pf);
                result.push(...this.fdr);
                console.log(result);
                return result;
            }
            else if(this.currentClient==='sage'){
                var result=[];
                result.push(...this.sage);
                return result;
            }
            else if(this.currentClient==='vat'){
                var result=[];
                result.push(...this.vat);
                return result;
            }
            else if(this.currentClient==='hrm'){
                var result=[];
                result.push(...this.hrm);
                return result;
            }
            else if(this.currentClient==='fdr'){
                var result=[];
                result.push(...this.fdr);
                return result;
            }
            else if(this.currentClient==='pf'){
                var result=[];
                result.push(...this.pf);
                return result;
            }
        }
    }
}
</script>
<style scoped>
  .trkLogo{
      border: 2px solid green;
      border-radius: 5px;
  }
</style>