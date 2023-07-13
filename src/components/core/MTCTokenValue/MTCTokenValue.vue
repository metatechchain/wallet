<template>
    <span class="mtctokenvalue">
        <f-token-value
            :value="cValue"
            :decimals="filtersOptions.fractionDigits"
            :number-currency="withPriceCurrency ? filtersOptions.currency : undefined"
            :use-placeholder="false"
            no-currency
            v-bind="$attrs"
        />
        <span v-if="!noCurrency"> MTC</span>
    </span>
</template>

<script>
import FTokenValue from '@/components/core/FTokenValue/FTokenValue.vue';
import { WEIToMTC } from '@/utils/transactions.js';
import { filtersOptions } from '@/filters.js';

export default {
    name: 'MTCTokenValue',

    components: { FTokenValue },

    props: {
        value: {
            type: [String, Number],
            default: 0,
        },
        /** Convert value to MTC */
        convert: {
            type: Boolean,
            default: false,
        },
        noCurrency: {
            type: Boolean,
            default: false,
        },
        withPriceCurrency: {
            type: Boolean,
            default: false,
        },
    },

    data() {
        return {
            filtersOptions,
        };
    },

    computed: {
        cValue() {
            return this.convert ? WEIToMTC(this.value) : this.value;
        },
    },
};
</script>
