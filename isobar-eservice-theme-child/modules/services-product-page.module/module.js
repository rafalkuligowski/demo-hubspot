(function ($) {
    $('.selectable-box-item .main-item input:checkbox').change(
        function () {
            if ($(this).is(':checked')) {
                $(this).closest(".selectable-box-item").addClass("active");
                $(this).closest(".active.with-subpayments").find(".selectable-box-item-subpayments input").attr("disabled", false);
            } else {
                $(this).closest(".selectable-box-item").removeClass("active");
                $(this).closest(".with-subpayments").find(".selectable-box-item-subpayments input").attr("disabled", true);
            }
        });

}(jQuery));
