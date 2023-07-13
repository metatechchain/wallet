<template>
    <div class="view-home vertical-layout">
        <Header :onCreateWalletClick="onCreateWalletClick" :onRestoreWalletClick="onRestoreWalletClick" />

        <main class="main">
            <!-- <div class="narrow-container"> -->
            <router-view></router-view>
            <!-- </div> -->
        </main>

        <create-account-window ref="createAccountWindow" />
        <restore-account-window ref="restoreAccountWindow" />
        <Footer />
    </div>
</template>

<script>
import Header from '../../components/Header/Header.vue';
import Footer from '../../components/Footer/Footer.vue';
import CreateAccountWindow from '@/components/windows/CreateAccountWindow/CreateAccountWindow.vue';
import RestoreAccountWindow from '@/components/windows/RestoreAccountWindow/RestoreAccountWindow.vue';

export default {
    components: {
        Footer,
        Header,
        CreateAccountWindow,
        RestoreAccountWindow
    },
    methods: {
        onCreateWalletClick() {
            this.$refs.createAccountWindow.show();
        },
        onRestoreWalletClick() {
            this.$refs.restoreAccountWindow.show();
        },
    }
};
</script>

<style lang="scss">
@import 'style';
</style>
