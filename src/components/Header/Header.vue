<template>
    <header class="f-header">
        <div class="narrow-container fluid" style="display: flex; align-items: center;">
            <router-link to="/" class="logo" :aria-label="$t('view_home.back_to_home')">
                <img src="logo.png" alt="" class="not-fluid" />
            </router-link>
            <div style="margin-left: auto;">
                <button class="btn create-account-btn" @click="onCreateWalletClick">
                    <icon data="@/assets/svg/wallet.svg" width="32" height="32" :fill="false" aria-hidden="true" />
                    Create Wallet
                </button>
                <button class="btn restore-account-btn" @click="onRestoreWalletClick">
                    <icon data="@/assets/svg/key.svg" width="32" height="32" aria-hidden="true" />
                    Restore Wallet
                </button>
            </div>
        </div>
    </header>
</template>

<script>
/**
 * Renderes header and takes care of navigation.
 */
export default {
    props: ['onRestoreWalletClick', 'onCreateWalletClick'],
    components: {},
};
</script>

<style lang="scss">
@import 'style';
</style>
