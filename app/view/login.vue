<template>
    <section>
        
    </section>
</template>
<script>

    export default {
         mounted() {
            setTimeout(() => {
                this.$router.push({
                    name: 'index'
                });
            }, 1000);
        }
    }
</script>
<style lang="sass" scoped>

      
</style>