<template>
    <f-card class="account-info-box info-box f-card-double-padding">
        <div class="row no-vert-col-padding align-items-center align-center-lg no-collapse">
            <div class="col-6 col-12-lg align-center-lg"><account-actions-box /></div>
            <div class="col balances">
                <div class="balance">
                    <h2 class="align-center-lg h3">
                        <span class="not-visible">Available balance</span>
                        <span>
                            <m-t-c-token-value :value="accountBalance" convert no-currency />
                            <span class="mtc"> MTC</span>
                        </span>
                    </h2>
                    <div class="currency">
                        <m-t-c-token-value
                            :value="WEIToMTC(accountBalance) * tokenPrice"
                            with-price-currency
                            no-currency
                        />
                    </div>
                    <div class="label h3">Available</div>
                </div>
                <div class="balance total-balance">
                    <h2 class="align-center-lg h3">
                        <span class="not-visible">Total balance</span>
                        <span>
                            <m-t-c-token-value :value="accountTotalBalance" convert no-currency />
                            <span class="mtc"> MTC</span>
                        </span>
                    </h2>
                    <div class="currency">
                        <m-t-c-token-value
                            :value="WEIToMTC(accountTotalBalance) * tokenPrice"
                            with-price-currency
                            no-currency
                        />
                    </div>
                    <div class="label h3">Total</div>
                </div>
            </div>
        </div>
    </f-card>
</template>

<script>
import FCard from '../core/FCard/FCard.vue';
import AccountActionsBox from '../AccountActionsBox/AccountActionsBox.vue';
import { mapGetters } from 'vuex';
import { WEIToMTC } from '../../utils/transactions.js';
import { pollingMixin } from '../../mixins/polling.js';
import { UPDATE_ACCOUNT_BALANCE } from '../../store/actions.type.js';
import MTCTokenValue from '@/components/core/MTCTokenValue/MTCTokenValue.vue';

export default {
    components: { MTCTokenValue, FCard, AccountActionsBox },

    mixins: [pollingMixin],

    computed: {
        ...mapGetters(['currentAccount', 'currentAccountAddress']),

        accountBalance() {
            return this.currentAccount ? this.currentAccount.balance : 0;
        },

        accountTotalBalance() {
            return this.currentAccount ? this.currentAccount.totalBalance : 0;
        },

        tokenPrice() {
            return this.$store.state.tokenPrice;
        },
    },

    mounted() {
        this._polling.start(
            'update-account-balance',
            () => {
                this.$store.dispatch(UPDATE_ACCOUNT_BALANCE);
            },
            5000
        );
    },

    methods: {
        WEIToMTC,
    },
};
</script>

<style lang="scss">
@import 'style';
</style>
