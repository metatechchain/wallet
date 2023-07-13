<template>
    <div class="welcome-view">
        <div class="shape-bg">
            <div class="narrow-container">
                <div class="intro">
                    <h1>Welcome to <strong>Meta Tech Wallet</strong></h1>
                    <h2><strong>Send</strong>, <strong>receive</strong> and <strong>stake</strong> your MetaTech MTC</h2>
                </div>

                <div class="view-account-main">
                    <section :aria-labelledby="createId" class="main-buttons v2 collapse-md">
                        <h2 :id="createId" class="not-visible">Connect, create or restore wallet</h2>

                        <button class="btn ledger-accounts-btn" @click="onConnectWalletClick">
                            <icon data="@/assets/svg/connect.svg" width="32" height="32" aria-hidden="true" />
                            Connect Wallet
                        </button>
                        <!--                <router-link :to="{ name: 'create-account' }" class="btn create-account-btn large w100p">
                    <icon data="@/assets/svg/wallet.svg" width="32" height="32" :fill="false" aria-hidden="true" />
                    Create Wallet
                </router-link>
                <router-link :to="{ name: 'restore-account' }" class="btn restore-account-btn large w100p">
                    <icon data="@/assets/svg/key.svg" width="32" height="32" aria-hidden="true" />
                    Restore Wallet
                </router-link>-->
                        <!--                <router-link :to="{ name: 'ledger-accounts' }" class="btn ledger-accounts-btn large w100p">
                    Ledger
                </router-link>-->
                    </section>

                    <installation-info />
                </div>

            </div>
        </div>
        <div class="narrow-container wallet-cont">
            <section :aria-labelledby="walletsId">
                <h2 style="margin:0" :id="walletsId">Wallet list</h2>
                <account-list />
            </section>

            <connect-wallet-window ref="connectWalletWindow" />
        </div>
    </div>
</template>

<script>
import AccountList from '../../components/AccountList/AccountList.vue';
import InstallationInfo from '../../components/InstallationInfo/InstallationInfo.vue';
import ConnectWalletWindow from '@/components/windows/ConnectWalletWindow/ConnectWalletWindow.vue';
import { getUniqueId } from '@/utils';

// import {WEIToMTC} from "../utils/transactions.js";
export default {
    name: 'Welcome',

    components: {
        ConnectWalletWindow,
        InstallationInfo,
        AccountList,
    },

    data() {
        return {
            walletsId: getUniqueId(),
            createId: getUniqueId(),
        };
    },

    methods: {
        onConnectWalletClick() {
            this.$refs.connectWalletWindow.show();
        },
    },
};
</script>

<style lang="scss">
@import 'style';
</style>
