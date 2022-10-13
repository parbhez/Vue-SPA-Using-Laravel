export default {
    methods: {
        successMessage(data) {
            this.$iziToast.success({
                title: data.success,
                position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
                message: data.msg,
            });
        },

        validationError(data) {
            this.$iziToast.error({
                title: 'Opps..',
                position: 'topRight',
                message: data.msg,
            });
        },

        serverError(data) {
            this.$iziToast.error({
                title: 'Opps..',
                position: 'topRight',
                message: data.msg,
            });
        }
    }
}